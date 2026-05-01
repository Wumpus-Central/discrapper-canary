n.d(t, { Eg: () => c, Ps: () => E, mk: () => h, pr: () => d, sy: () => m, yF: () => f }), n(938796);
var i = n(636537),
    l = n(228366),
    r = n(723444),
    s = n(292348),
    a = n(910425),
    o = n(652215);
async function u(e) {
    if (0 === e.length) return;
    let t = (0, r.I)(),
        n = await t.uploadFiles(e);
    if (t._aborted) throw Error("Upload aborted");
    return n.map((e, t) => (0, s.OW)(e, t));
}
async function d(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: r, attachments: s, attachmentsToUpload: d } = e;
    l.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_START", channelId: t });
    try {
        let [e, c] = (0, a.UF)({ content: r.content, flags: r.flags });
        null != d && (s = await u(d));
        let h = await i.Bo.post({
            url: o.Rsh.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: e,
                scheduled_timestamp: n,
                flags: c,
                message_reference: r.message_reference,
                allowed_mentions: r.allowed_mentions,
                attachments: s ?? [],
            },
            rejectWithError: !0,
        });
        if (!h.ok) throw Error("Failed to create scheduled message");
        return (
            l.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
                channelId: t,
                scheduledMessageSend: (0, a.Lg)(h.body),
            }),
            h
        );
    } catch (n) {
        a.dx.error("Failed to create scheduled message", n);
        let e = n.body?.message ?? n.message;
        throw (l.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: t, errorMsg: e }), Error(e));
    }
}
async function c(e, t) {
    l.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId: e });
    try {
        let n = await i.Bo.patch({
            url: o.Rsh.SCHEDULED_MESSAGE(e),
            body: { scheduled_timestamp: t },
            rejectWithError: !0,
        });
        if (!n.ok) throw Error("Failed to update scheduled message");
        l.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: (0, a.Lg)(n.body) });
    } catch (n) {
        a.dx.error("Failed to update scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (l.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function h(e) {
    l.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: e });
    try {
        if (!(await i.Bo.del({ url: o.Rsh.SCHEDULED_MESSAGE(e), rejectWithError: !0 })).ok)
            throw Error("Failed to delete scheduled message");
        l.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        a.dx.error("Failed to cancel scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (l.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function p() {
    let e = await i.Bo.get({ url: o.Rsh.SCHEDULED_MESSAGES, rejectWithError: !0 });
    if (!e.ok) throw Error("Failed to fetch scheduled messages");
    return e.body.map(a.Lg);
}
async function m() {
    l.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    try {
        let e = await p();
        a.dx.info("Fetched scheduled messages", e),
            l.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: e });
    } catch (e) {
        a.dx.error("Failed to fetch scheduled messages", e),
            l.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: e });
    }
}
function f(e) {
    let { channelId: t, scheduledTimestamp: n } = e;
    l.h.dispatch({ type: "CREATE_PENDING_SCHEDULED_MESSAGE", channelId: t, scheduledTimestamp: n });
}
function E(e) {
    l.h.dispatch({ type: "DELETE_PENDING_SCHEDULED_MESSAGE", channelId: e });
}
