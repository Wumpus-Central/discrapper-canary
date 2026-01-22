n.d(t, {
    Eg: () => d,
    Ps: () => m,
    mk: () => f,
    pr: () => u,
    sy: () => _,
    yF: () => h,
}),
    n(65821),
    n(896048),
    n(938796);
var r = n(562465),
    i = n(73153),
    a = n(723444),
    s = n(292348),
    o = n(566908),
    l = n(652215);
async function c(e) {
    if (0 === e.length) return;
    let t = (0, a.I)(),
        n = await t.uploadFiles(e);
    if (t._aborted) throw Error("Upload aborted");
    return n.map((e, t) => (0, s.OW)(e, t));
}
async function u(e) {
    let { channelId: t, scheduledTimestamp: n, messageSendData: a, attachments: s, attachmentsToUpload: u } = e;
    i.h.dispatch({
        type: "SCHEDULED_MESSAGES_CREATE_START",
        channelId: t,
    });
    try {
        let [e, d] = (0, o.UF)({
            content: a.content,
            flags: a.flags,
        });
        null != u && (s = await c(u));
        let f = await r.Bo.post({
            url: l.Rsh.SCHEDULED_MESSAGES,
            body: {
                channel_id: t,
                content: e,
                scheduled_timestamp: n,
                flags: d,
                message_reference: a.message_reference,
                allowed_mentions: a.allowed_mentions,
                attachments: null != s ? s : [],
            },
            rejectWithError: !0,
        });
        if (!f.ok) throw Error("Failed to create scheduled message");
        return (
            i.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
                channelId: t,
                scheduledMessageSend: (0, o.Lg)(f.body),
            }),
            f
        );
    } catch (n) {
        var d, f;
        o.dx.error("Failed to create scheduled message", n);
        let e = null != (d = null == (f = n.body) ? void 0 : f.message) ? d : n.message;
        throw (
            (i.h.dispatch({
                type: "SCHEDULED_MESSAGES_CREATE_FAILURE",
                channelId: t,
                errorMsg: e,
            }),
            Error(e))
        );
    }
}
async function d(e, t) {
    i.h.dispatch({
        type: "SCHEDULED_MESSAGES_UPDATE_START",
        scheduledMessageId: e,
    });
    try {
        let n = await r.Bo.patch({
            url: l.Rsh.SCHEDULED_MESSAGE(e),
            body: { scheduled_timestamp: t },
            rejectWithError: !0,
        });
        if (!n.ok) throw Error("Failed to update scheduled message");
        i.h.dispatch({
            type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS",
            scheduledMessageSend: (0, o.Lg)(n.body),
        });
    } catch (r) {
        var n, a;
        o.dx.error("Failed to update scheduled message", r);
        let t = null != (n = null == (a = r.body) ? void 0 : a.message) ? n : r.message;
        throw (
            (i.h.dispatch({
                type: "SCHEDULED_MESSAGES_UPDATE_FAILURE",
                scheduledMessageId: e,
                errorMsg: t,
            }),
            Error(t))
        );
    }
}
async function f(e) {
    i.h.dispatch({
        type: "SCHEDULED_MESSAGES_DELETE_START",
        scheduledMessageId: e,
    });
    try {
        if (
            !(
                await r.Bo.del({
                    url: l.Rsh.SCHEDULED_MESSAGE(e),
                    rejectWithError: !0,
                })
            ).ok
        )
            throw Error("Failed to delete scheduled message");
        i.h.dispatch({
            type: "SCHEDULED_MESSAGES_DELETE_SUCCESS",
            scheduledMessageId: e,
        });
    } catch (a) {
        var t, n;
        o.dx.error("Failed to cancel scheduled message", a);
        let r = null != (t = null == (n = a.body) ? void 0 : n.message) ? t : a.message;
        throw (
            (i.h.dispatch({
                type: "SCHEDULED_MESSAGES_DELETE_FAILURE",
                scheduledMessageId: e,
                errorMsg: r,
            }),
            Error(r))
        );
    }
}
async function p() {
    let e = await r.Bo.get({
        url: l.Rsh.SCHEDULED_MESSAGES,
        rejectWithError: !0,
    });
    if (!e.ok) throw Error("Failed to fetch scheduled messages");
    return e.body.map(o.Lg);
}
async function _() {
    i.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    try {
        let e = await p();
        o.dx.info("Fetched scheduled messages", e),
            i.h.dispatch({
                type: "FETCH_SCHEDULED_MESSAGES_SUCCESS",
                messages: e,
            });
    } catch (e) {
        o.dx.error("Failed to fetch scheduled messages", e),
            i.h.dispatch({
                type: "FETCH_SCHEDULED_MESSAGES_FAILURE",
                error: e,
            });
    }
}
function h(e) {
    let { channelId: t, scheduledTimestamp: n } = e;
    i.h.dispatch({
        type: "CREATE_PENDING_SCHEDULED_MESSAGE",
        channelId: t,
        scheduledTimestamp: n,
    });
}
function m(e) {
    i.h.dispatch({
        type: "DELETE_PENDING_SCHEDULED_MESSAGE",
        channelId: e,
    });
}
