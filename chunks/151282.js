"use strict";
n.d(t, { Eg: () => _, mk: () => E, pr: () => u, sy: () => h }), n(938796);
var i = n(665260),
    r = n(562465),
    a = n(228366),
    s = n(723444),
    l = n(292348),
    o = n(910425),
    d = n(652215);
async function c(e) {
    if (0 === e.length) return;
    let t = (0, s.I)(),
        n = await t.uploadFiles(e);
    if (t._aborted) throw Error("Upload aborted");
    return n.map((e, t) => (0, l.OW)(e, t));
}
async function u(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: i, attachments: s, attachmentsToUpload: l } = e;
    a.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_START", channelId: t });
    try {
        let [e, u] = (0, o.UF)({ content: i.content, flags: i.flags });
        null != l && (s = await c(l));
        let _ = await r.Bo.post({
            url: d.Rsh.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: e,
                scheduled_timestamp: n,
                flags: u,
                message_reference: i.message_reference,
                allowed_mentions: i.allowed_mentions,
                attachments: s ?? [],
            },
            rejectWithError: !0,
        });
        if (!_.ok) throw Error("Failed to create scheduled message");
        return (
            a.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
                channelId: t,
                scheduledMessageSend: (0, o.Lg)(_.body),
            }),
            _
        );
    } catch (n) {
        o.dx.error("Failed to create scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (a.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: t, errorMsg: e }), Error(e));
    }
}
async function _(e) {
    let { scheduledMessageId: t, scheduledTimestamp: n, content: s, flags: l } = e;
    a.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId: t });
    try {
        let [e, c] =
                null == s ? [s, l] : (0, o.UF)({ content: s, flags: (0, i.VL)(l ?? 0, d.pr7.SUPPRESS_NOTIFICATIONS) }),
            u = await r.Bo.patch({
                url: d.Rsh.SCHEDULED_MESSAGE(t),
                body: { scheduled_timestamp: n, content: e, flags: c },
                rejectWithError: !0,
            });
        if (!u.ok) throw Error("Failed to update scheduled message");
        a.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: (0, o.Lg)(u.body) });
    } catch (n) {
        o.dx.error("Failed to update scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (
            (a.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId: t, errorMsg: e }), Error(e))
        );
    }
}
async function E(e) {
    a.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: e });
    try {
        if (!(await r.Bo.del({ url: d.Rsh.SCHEDULED_MESSAGE(e), rejectWithError: !0 })).ok)
            throw Error("Failed to delete scheduled message");
        a.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        o.dx.error("Failed to cancel scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (a.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function A() {
    let e = await r.Bo.get({ url: d.Rsh.SCHEDULED_MESSAGES, rejectWithError: !0 });
    if (!e.ok) throw Error("Failed to fetch scheduled messages");
    return e.body.map(o.Lg);
}
async function h() {
    a.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    try {
        let e = await A();
        o.dx.info("Fetched scheduled messages", e),
            a.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: e });
    } catch (e) {
        o.dx.error("Failed to fetch scheduled messages", e),
            a.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: e });
    }
}
