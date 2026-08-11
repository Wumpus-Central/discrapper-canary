"use strict";
n.d(t, { Eg: () => u, mk: () => _, pr: () => c, sy: () => A }), n(938796);
var i = n(562465),
    r = n(228366),
    a = n(723444),
    s = n(292348),
    l = n(910425),
    o = n(652215);
async function d(e) {
    if (0 === e.length) return;
    let t = (0, a.I)(),
        n = await t.uploadFiles(e);
    if (t._aborted) throw Error("Upload aborted");
    return n.map((e, t) => (0, s.OW)(e, t));
}
async function c(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: a, attachments: s, attachmentsToUpload: c } = e;
    r.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_START", channelId: t });
    try {
        let [e, u] = (0, l.UF)({ content: a.content, flags: a.flags });
        null != c && (s = await d(c));
        let _ = await i.Bo.post({
            url: o.Rsh.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: e,
                scheduled_timestamp: n,
                flags: u,
                message_reference: a.message_reference,
                allowed_mentions: a.allowed_mentions,
                attachments: s ?? [],
            },
            rejectWithError: !0,
        });
        if (!_.ok) throw Error("Failed to create scheduled message");
        return (
            r.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
                channelId: t,
                scheduledMessageSend: (0, l.Lg)(_.body),
            }),
            _
        );
    } catch (n) {
        l.dx.error("Failed to create scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (r.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: t, errorMsg: e }), Error(e));
    }
}
async function u(e, t) {
    r.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId: e });
    try {
        let n = await i.Bo.patch({
            url: o.Rsh.SCHEDULED_MESSAGE(e),
            body: { scheduled_timestamp: t },
            rejectWithError: !0,
        });
        if (!n.ok) throw Error("Failed to update scheduled message");
        r.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: (0, l.Lg)(n.body) });
    } catch (n) {
        l.dx.error("Failed to update scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (r.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function _(e) {
    r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: e });
    try {
        if (!(await i.Bo.del({ url: o.Rsh.SCHEDULED_MESSAGE(e), rejectWithError: !0 })).ok)
            throw Error("Failed to delete scheduled message");
        r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        l.dx.error("Failed to cancel scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function E() {
    let e = await i.Bo.get({ url: o.Rsh.SCHEDULED_MESSAGES, rejectWithError: !0 });
    if (!e.ok) throw Error("Failed to fetch scheduled messages");
    return e.body.map(l.Lg);
}
async function A() {
    r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    try {
        let e = await E();
        l.dx.info("Fetched scheduled messages", e),
            r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: e });
    } catch (e) {
        l.dx.error("Failed to fetch scheduled messages", e),
            r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: e });
    }
}
