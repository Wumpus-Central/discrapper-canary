n.d(t, {
    PV: () => s,
    _e: () => d,
    gD: () => l,
    kg: () => u,
    pO: () => f
}),
    n(47120),
    n(789020),
    n(411104);
var r = n(544891),
    i = n(570140),
    o = n(216789),
    a = n(981631);
async function s(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: s, attachments: l } = e;
    i.Z.dispatch({
        type: 'SCHEDULED_MESSAGES_CREATE_START',
        channelId: t
    });
    try {
        let [e, c] = (0, o.Uo)({
                content: s.content,
                flags: s.flags
            }),
            u = await r.tn.post({
                url: a.ANM.SCHEDULED_MESSAGES,
                body: {
                    channel_id: t,
                    content: e,
                    scheduled_timestamp: n,
                    flags: c,
                    message_reference: s.message_reference,
                    allowed_mentions: s.allowed_mentions,
                    attachments: null != l ? l : []
                },
                rejectWithError: !0
            });
        if (!u.ok) throw Error('Failed to create scheduled message');
        return (
            i.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_CREATE_SUCCESS',
                channelId: t,
                scheduledMessageSend: (0, o.IR)(u.body)
            }),
            u
        );
    } catch (n) {
        var c, u;
        o.GO.error('Failed to create scheduled message', n);
        let e = null != (u = null == (c = n.body) ? void 0 : c.message) ? u : n.message;
        throw (
            (i.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_CREATE_FAILURE',
                channelId: t,
                errorMsg: e
            }),
            Error(e))
        );
    }
}
async function l(e) {
    i.Z.dispatch({
        type: 'SCHEDULED_MESSAGES_DELETE_START',
        scheduledMessageId: e
    });
    try {
        if (
            !(
                await r.tn.del({
                    url: a.ANM.SCHEDULED_MESSAGE(e),
                    rejectWithError: !0
                })
            ).ok
        )
            throw Error('Failed to delete scheduled message');
        i.Z.dispatch({
            type: 'SCHEDULED_MESSAGES_DELETE_SUCCESS',
            scheduledMessageId: e
        });
    } catch (a) {
        var t, n;
        o.GO.error('Failed to cancel scheduled message', a);
        let r = null != (n = null == (t = a.body) ? void 0 : t.message) ? n : a.message;
        throw (
            (i.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_DELETE_FAILURE',
                scheduledMessageId: e,
                errorMsg: r
            }),
            Error(r))
        );
    }
}
async function c() {
    let e = await r.tn.get({
        url: a.ANM.SCHEDULED_MESSAGES,
        rejectWithError: !0
    });
    if (!e.ok) throw Error('Failed to fetch scheduled messages');
    return e.body.map(o.IR);
}
async function u() {
    i.Z.dispatch({ type: 'FETCH_SCHEDULED_MESSAGES' });
    try {
        let e = await c();
        o.GO.info('Fetched scheduled messages', e),
            i.Z.dispatch({
                type: 'FETCH_SCHEDULED_MESSAGES_SUCCESS',
                messages: e
            });
    } catch (e) {
        o.GO.error('Failed to fetch scheduled messages', e),
            i.Z.dispatch({
                type: 'FETCH_SCHEDULED_MESSAGES_FAILURE',
                error: e
            });
    }
}
function d(e) {
    let { channelId: t, scheduledTimestamp: n } = e;
    i.Z.dispatch({
        type: 'CREATE_PENDING_SCHEDULED_MESSAGE',
        channelId: t,
        scheduledTimestamp: n
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'DELETE_PENDING_SCHEDULED_MESSAGE',
        channelId: e
    });
}
