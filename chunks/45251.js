(n.d(t, {
    PV: () => u,
    _e: () => p,
    gD: () => d,
    kg: () => _,
    pO: () => h
}),
    n(415506),
    n(388685),
    n(997841));
var r = n(544891),
    i = n(570140),
    o = n(9874),
    a = n(861990),
    s = n(216789),
    l = n(981631);
async function c(e) {
    if (0 === e.length) return;
    let t = (0, o.F)(),
        n = await t.uploadFiles(e);
    if (t._aborted) throw Error('Upload aborted');
    return n.map((e, t) => (0, a.B)(e, t));
}
async function u(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: o, attachments: a, attachmentsToUpload: u } = e;
    i.Z.dispatch({
        type: 'SCHEDULED_MESSAGES_CREATE_START',
        channelId: t
    });
    try {
        let [e, d] = (0, s.Uo)({
            content: o.content,
            flags: o.flags
        });
        null != u && (a = await c(u));
        let f = await r.tn.post({
            url: l.ANM.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: e,
                scheduled_timestamp: n,
                flags: d,
                message_reference: o.message_reference,
                allowed_mentions: o.allowed_mentions,
                attachments: null != a ? a : []
            },
            rejectWithError: !0
        });
        if (!f.ok) throw Error('Failed to create scheduled message');
        return (
            i.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_CREATE_SUCCESS',
                channelId: t,
                scheduledMessageSend: (0, s.IR)(f.body)
            }),
            f
        );
    } catch (n) {
        var d, f;
        s.GO.error('Failed to create scheduled message', n);
        let e = null != (f = null == (d = n.body) ? void 0 : d.message) ? f : n.message;
        throw (
            i.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_CREATE_FAILURE',
                channelId: t,
                errorMsg: e
            }),
            Error(e)
        );
    }
}
async function d(e) {
    i.Z.dispatch({
        type: 'SCHEDULED_MESSAGES_DELETE_START',
        scheduledMessageId: e
    });
    try {
        if (
            !(
                await r.tn.del({
                    url: l.ANM.SCHEDULED_MESSAGE(e),
                    rejectWithError: !0
                })
            ).ok
        )
            throw Error('Failed to delete scheduled message');
        i.Z.dispatch({
            type: 'SCHEDULED_MESSAGES_DELETE_SUCCESS',
            scheduledMessageId: e
        });
    } catch (o) {
        var t, n;
        s.GO.error('Failed to cancel scheduled message', o);
        let r = null != (n = null == (t = o.body) ? void 0 : t.message) ? n : o.message;
        throw (
            i.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_DELETE_FAILURE',
                scheduledMessageId: e,
                errorMsg: r
            }),
            Error(r)
        );
    }
}
async function f() {
    let e = await r.tn.get({
        url: l.ANM.SCHEDULED_MESSAGES,
        rejectWithError: !0
    });
    if (!e.ok) throw Error('Failed to fetch scheduled messages');
    return e.body.map(s.IR);
}
async function _() {
    i.Z.dispatch({ type: 'FETCH_SCHEDULED_MESSAGES' });
    try {
        let e = await f();
        (s.GO.info('Fetched scheduled messages', e),
            i.Z.dispatch({
                type: 'FETCH_SCHEDULED_MESSAGES_SUCCESS',
                messages: e
            }));
    } catch (e) {
        (s.GO.error('Failed to fetch scheduled messages', e),
            i.Z.dispatch({
                type: 'FETCH_SCHEDULED_MESSAGES_FAILURE',
                error: e
            }));
    }
}
function p(e) {
    let { channelId: t, scheduledTimestamp: n } = e;
    i.Z.dispatch({
        type: 'CREATE_PENDING_SCHEDULED_MESSAGE',
        channelId: t,
        scheduledTimestamp: n
    });
}
function h(e) {
    i.Z.dispatch({
        type: 'DELETE_PENDING_SCHEDULED_MESSAGE',
        channelId: e
    });
}
