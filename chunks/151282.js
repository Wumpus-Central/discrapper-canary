n.d(t, { Eg: () => _, fK: () => A, mk: () => E, pr: () => u, sy: () => I }), n(938796);
var i = n(665260),
    r = n(636537),
    a = n(554146),
    s = n(228366),
    l = n(826673),
    o = n(566908),
    d = n(652215),
    c = n(49999);
async function u(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: i } = e;
    s.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_START", channelId: t });
    try {
        let e = await r.Bo.post({
            url: d.Rsh.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: i.content,
                scheduled_timestamp: n,
                flags: i.flags,
                message_reference: i.message_reference,
                allowed_mentions: i.allowed_mentions,
                sticker_ids: i.sticker_ids,
                poll: i.poll,
                attachments: i.attachments ?? [],
            },
            rejectWithError: !0,
        });
        return (
            s.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
                channelId: t,
                scheduledMessageSend: (0, o.Lg)(e.body),
            }),
            (0, l.Dr)(a.M.SCHEDULED_MESSAGES_DRAFT_COACHMARK, { dismissAction: c.i.INDIRECT_ACTION }),
            e
        );
    } catch (n) {
        o.dx.error("Failed to create scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (s.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: t, errorMsg: e }), n);
    }
}
async function _(e) {
    let { scheduledMessageId: t, scheduledTimestamp: n, content: a, flags: l } = e;
    s.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId: t });
    try {
        let [e, c] =
                null == a ? [a, l] : (0, o.UF)({ content: a, flags: (0, i.VL)(l ?? 0, d.pr7.SUPPRESS_NOTIFICATIONS) }),
            u = await r.Bo.patch({
                url: d.Rsh.SCHEDULED_MESSAGE(t),
                body: { scheduled_timestamp: n, content: e, flags: c },
                rejectWithError: !0,
            });
        s.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: (0, o.Lg)(u.body) });
    } catch (n) {
        o.dx.error("Failed to update scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (
            (s.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId: t, errorMsg: e }), Error(e))
        );
    }
}
async function E(e) {
    s.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: e });
    try {
        await r.Bo.del({ url: d.Rsh.SCHEDULED_MESSAGE(e), rejectWithError: !0 }),
            s.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        o.dx.error("Failed to cancel scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (s.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function A(e) {
    s.h.dispatch({ type: "SCHEDULED_MESSAGES_SEND_NOW_START", scheduledMessageId: e });
    try {
        await r.Bo.post({ url: d.Rsh.SCHEDULED_MESSAGE_SEND(e), rejectWithError: !0 }),
            s.h.dispatch({ type: "SCHEDULED_MESSAGES_SEND_NOW_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        o.dx.error("Failed to send scheduled message now", n);
        let t = n.body?.message ?? n.message;
        throw (
            (s.h.dispatch({ type: "SCHEDULED_MESSAGES_SEND_NOW_FAILURE", scheduledMessageId: e, errorMsg: t }),
            Error(t))
        );
    }
}
async function h() {
    return (await r.Bo.get({ url: d.Rsh.SCHEDULED_MESSAGES, rejectWithError: !0 })).body.map(o.Lg);
}
async function I() {
    s.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    try {
        let e = await h();
        o.dx.info("Fetched scheduled messages", e),
            s.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: e });
    } catch (e) {
        o.dx.error("Failed to fetch scheduled messages", e),
            s.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: e });
    }
}
