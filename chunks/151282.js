"use strict";
n.d(t, { Eg: () => d, Ps: () => E, mk: () => _, pr: () => c, sy: () => h, yF: () => p }), n(938796);
var i = n(636537),
    r = n(228366),
    s = n(723444),
    a = n(292348),
    o = n(910425),
    l = n(652215);
async function u(e) {
    if (0 === e.length) return;
    let t = (0, s.I)(),
        n = await t.uploadFiles(e);
    if (t._aborted) throw Error("Upload aborted");
    return n.map((e, t) => (0, a.OW)(e, t));
}
async function c(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: s, attachments: a, attachmentsToUpload: c } = e;
    r.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_START", channelId: t });
    try {
        let [e, d] = (0, o.UF)({ content: s.content, flags: s.flags });
        null != c && (a = await u(c));
        let _ = await i.Bo.post({
            url: l.Rsh.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: e,
                scheduled_timestamp: n,
                flags: d,
                message_reference: s.message_reference,
                allowed_mentions: s.allowed_mentions,
                attachments: a ?? [],
            },
            rejectWithError: !0,
        });
        if (!_.ok) throw Error("Failed to create scheduled message");
        return (
            r.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
                channelId: t,
                scheduledMessageSend: (0, o.Lg)(_.body),
            }),
            _
        );
    } catch (n) {
        o.dx.error("Failed to create scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (r.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: t, errorMsg: e }), Error(e));
    }
}
async function d(e, t) {
    r.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId: e });
    try {
        let n = await i.Bo.patch({
            url: l.Rsh.SCHEDULED_MESSAGE(e),
            body: { scheduled_timestamp: t },
            rejectWithError: !0,
        });
        if (!n.ok) throw Error("Failed to update scheduled message");
        r.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: (0, o.Lg)(n.body) });
    } catch (n) {
        o.dx.error("Failed to update scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (r.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function _(e) {
    r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: e });
    try {
        if (!(await i.Bo.del({ url: l.Rsh.SCHEDULED_MESSAGE(e), rejectWithError: !0 })).ok)
            throw Error("Failed to delete scheduled message");
        r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        o.dx.error("Failed to cancel scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function f() {
    let e = await i.Bo.get({ url: l.Rsh.SCHEDULED_MESSAGES, rejectWithError: !0 });
    if (!e.ok) throw Error("Failed to fetch scheduled messages");
    return e.body.map(o.Lg);
}
async function h() {
    r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    try {
        let e = await f();
        o.dx.info("Fetched scheduled messages", e),
            r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: e });
    } catch (e) {
        o.dx.error("Failed to fetch scheduled messages", e),
            r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: e });
    }
}
function p(e) {
    let { channelId: t, scheduledTimestamp: n } = e;
    r.h.dispatch({ type: "CREATE_PENDING_SCHEDULED_MESSAGE", channelId: t, scheduledTimestamp: n });
}
function E(e) {
    r.h.dispatch({ type: "DELETE_PENDING_SCHEDULED_MESSAGE", channelId: e });
}
