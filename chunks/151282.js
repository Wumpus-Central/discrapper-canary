n.d(t, { Eg: () => d, Ps: () => T, mk: () => c, pr: () => E, sy: () => I, yF: () => A }), n(938796);
var i = n(636537),
    r = n(228366),
    a = n(723444),
    s = n(292348),
    _ = n(910425),
    l = n(652215);
async function o(e) {
    if (0 === e.length) return;
    let t = (0, a.I)(),
        n = await t.uploadFiles(e);
    if (t._aborted) throw Error("Upload aborted");
    return n.map((e, t) => (0, s.OW)(e, t));
}
async function E(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: a, attachments: s, attachmentsToUpload: E } = e;
    r.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_START", channelId: t });
    try {
        let [e, d] = (0, _.UF)({ content: a.content, flags: a.flags });
        null != E && (s = await o(E));
        let c = await i.Bo.post({
            url: l.Rsh.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: e,
                scheduled_timestamp: n,
                flags: d,
                message_reference: a.message_reference,
                allowed_mentions: a.allowed_mentions,
                attachments: s ?? [],
            },
            rejectWithError: !0,
        });
        if (!c.ok) throw Error("Failed to create scheduled message");
        return (
            r.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
                channelId: t,
                scheduledMessageSend: (0, _.Lg)(c.body),
            }),
            c
        );
    } catch (n) {
        _.dx.error("Failed to create scheduled message", n);
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
        r.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: (0, _.Lg)(n.body) });
    } catch (n) {
        _.dx.error("Failed to update scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (r.h.dispatch({ type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function c(e) {
    r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: e });
    try {
        if (!(await i.Bo.del({ url: l.Rsh.SCHEDULED_MESSAGE(e), rejectWithError: !0 })).ok)
            throw Error("Failed to delete scheduled message");
        r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: e });
    } catch (n) {
        _.dx.error("Failed to cancel scheduled message", n);
        let t = n.body?.message ?? n.message;
        throw (
            (r.h.dispatch({ type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId: e, errorMsg: t }), Error(t))
        );
    }
}
async function u() {
    let e = await i.Bo.get({ url: l.Rsh.SCHEDULED_MESSAGES, rejectWithError: !0 });
    if (!e.ok) throw Error("Failed to fetch scheduled messages");
    return e.body.map(_.Lg);
}
async function I() {
    r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    try {
        let e = await u();
        _.dx.info("Fetched scheduled messages", e),
            r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: e });
    } catch (e) {
        _.dx.error("Failed to fetch scheduled messages", e),
            r.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: e });
    }
}
function A(e) {
    let { channelId: t, scheduledTimestamp: n } = e;
    r.h.dispatch({ type: "CREATE_PENDING_SCHEDULED_MESSAGE", channelId: t, scheduledTimestamp: n });
}
function T(e) {
    r.h.dispatch({ type: "DELETE_PENDING_SCHEDULED_MESSAGE", channelId: e });
}
