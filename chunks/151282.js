"use strict";
n.d(t, { Eg: () => d, fK: () => u, mk: () => c, pr: () => o, sy: () => E }), n(938796);
var i = n(665260),
    r = n(636537),
    a = n(228366),
    s = n(674470),
    l = n(652215);
async function o(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: i } = e;
    a.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_START", channelId: t });
    try {
        let e = await r.Bo.post({
            url: l.Rsh.SCHEDULED_MESSAGES,
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
            a.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
                channelId: t,
                scheduledMessageSend: (0, s.Lg)(e.body),
            }),
            e
        );
    } catch (n) {
        s.dx.error("Failed to create scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (a.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: t, errorMsg: e }), n);
    }
}
async function d(e) {
    let { scheduledMessageId: t, scheduledTimestamp: n, content: o, flags: d } = e;
    a.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId: t });
    try {
        let [e, c] =
                null == o ? [o, d] : (0, s.UF)({ content: o, flags: (0, i.VL)(d ?? 0, l.pr7.SUPPRESS_NOTIFICATIONS) }),
            u = await r.Bo.patch({
                url: l.Rsh.SCHEDULED_MESSAGE(t),
                body: { scheduled_timestamp: n, content: e, flags: c },
                rejectWithError: !0,
            });
        a.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: (0, s.Lg)(u.body) });
    } catch (n) {
        s.dx.error("Failed to update scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (
            (a.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId: t, errorMsg: e }), Error(e))
        );
    }
}
async function c(e) {
    a.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: e });
    try {
        await r.Bo.del({ url: l.Rsh.SCHEDULED_MESSAGE(e), rejectWithError: !0 }),
            a.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        s.dx.error("Failed to cancel scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (a.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function u(e) {
    a.h.dispatch({ type: "SCHEDULED_MESSAGES_SEND_NOW_START", scheduledMessageId: e });
    try {
        await r.Bo.post({ url: l.Rsh.SCHEDULED_MESSAGE_SEND(e), rejectWithError: !0 }),
            a.h.dispatch({ type: "SCHEDULED_MESSAGES_SEND_NOW_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        s.dx.error("Failed to send scheduled message now", n);
        let t = n.body?.message ?? n.message;
        throw (
            (a.h.dispatch({ type: "SCHEDULED_MESSAGES_SEND_NOW_FAILURE", scheduledMessageId: e, errorMsg: t }),
            Error(t))
        );
    }
}
async function _() {
    return (await r.Bo.get({ url: l.Rsh.SCHEDULED_MESSAGES, rejectWithError: !0 })).body.map(s.Lg);
}
async function E() {
    a.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    try {
        let e = await _();
        s.dx.info("Fetched scheduled messages", e),
            a.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: e });
    } catch (e) {
        s.dx.error("Failed to fetch scheduled messages", e),
            a.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: e });
    }
}
