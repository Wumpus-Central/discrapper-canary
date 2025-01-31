n.d(t, {
    PV: () => o,
    _e: () => d,
    gD: () => l,
    kg: () => c,
    pO: () => f
}),
    n(789020),
    n(411104);
var i = n(544891),
    r = n(570140),
    a = n(216789),
    s = n(981631);
async function o(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: o, attachments: l } = e;
    r.Z.dispatch({
        type: 'SCHEDULED_MESSAGES_CREATE_START',
        channelId: t
    });
    try {
        let e = await i.tn.post({
            url: s.ANM.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: o.content,
                scheduled_timestamp: n,
                flags: o.flags,
                message_reference: o.message_reference,
                allowed_mentions: o.allowed_mentions,
                attachments: null != l ? l : []
            },
            rejectWithError: !0
        });
        if (!e.ok) throw Error('Failed to create scheduled message');
        return (
            r.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_CREATE_SUCCESS',
                channelId: t,
                scheduledMessageSend: (0, a.IR)(e.body)
            }),
            e
        );
    } catch (n) {
        var u, c;
        a.GO.error('Failed to create scheduled message', n);
        let e = null !== (c = null === (u = n.body) || void 0 === u ? void 0 : u.message) && void 0 !== c ? c : n.message;
        throw (
            (r.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_CREATE_FAILURE',
                channelId: t,
                errorMsg: e
            }),
            Error(e))
        );
    }
}
async function l(e) {
    r.Z.dispatch({
        type: 'SCHEDULED_MESSAGES_DELETE_START',
        scheduledMessageId: e
    });
    try {
        if (
            !(
                await i.tn.del({
                    url: s.ANM.SCHEDULED_MESSAGE(e),
                    rejectWithError: !0
                })
            ).ok
        )
            throw Error('Failed to delete scheduled message');
        r.Z.dispatch({
            type: 'SCHEDULED_MESSAGES_DELETE_SUCCESS',
            scheduledMessageId: e
        });
    } catch (s) {
        var t, n;
        a.GO.error('Failed to cancel scheduled message', s);
        let i = null !== (n = null === (t = s.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : s.message;
        throw (
            (r.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_DELETE_FAILURE',
                scheduledMessageId: e,
                errorMsg: i
            }),
            Error(i))
        );
    }
}
async function u() {
    let e = await i.tn.get({
        url: s.ANM.SCHEDULED_MESSAGES,
        rejectWithError: !0
    });
    if (!e.ok) throw Error('Failed to fetch scheduled messages');
    return e.body.map(a.IR);
}
async function c() {
    r.Z.dispatch({ type: 'FETCH_SCHEDULED_MESSAGES' });
    try {
        let e = await u();
        a.GO.info('Fetched scheduled messages', e),
            r.Z.dispatch({
                type: 'FETCH_SCHEDULED_MESSAGES_SUCCESS',
                messages: e
            });
    } catch (e) {
        a.GO.error('Failed to fetch scheduled messages', e),
            r.Z.dispatch({
                type: 'FETCH_SCHEDULED_MESSAGES_FAILURE',
                error: e
            });
    }
}
function d(e) {
    let { channelId: t, scheduledTimestamp: n } = e;
    r.Z.dispatch({
        type: 'CREATE_PENDING_SCHEDULED_MESSAGE',
        channelId: t,
        scheduledTimestamp: n
    });
}
function f(e) {
    r.Z.dispatch({
        type: 'DELETE_PENDING_SCHEDULED_MESSAGE',
        channelId: e
    });
}
