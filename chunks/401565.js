n.d(t, { A: () => f });
var i = n(17928),
    l = n(228366),
    s = n(320095),
    r = n(287809),
    a = n(380335),
    u = n(157550);
let o = {},
    d = new Set();
function c(e) {
    return a.A.isMessageRequest(e) || u.A.isSpam(e);
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!c(e) || (null != t && e !== t?.channel_id)) return;
    let i = null == t ? null : (0, s.rh)(t);
    o[e] = { loaded: !0, error: n, message: i };
}
class A extends i.Ay.Store {
    static displayName = "MessageRequestPreviewStore";
    initialize() {
        this.waitFor(a.A, u.A, r.default);
    }
    shouldLoadMessageRequestPreview(e) {
        return !d.has(e);
    }
    getMessageRequestPreview(e) {
        return e in o || (o[e] = { loaded: !1, error: !1, message: null }), o[e];
    }
}
let f = new A(l.h, {
    CONNECTION_OPEN: function () {
        (o = {}), d.clear();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        c(t.id) && d.add(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) c(e.id) || (d.delete(e.id), delete o[e.id]);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        d.delete(t.id), delete o[t.id];
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return !1;
        h(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.channel_id;
        if (null == t) return !1;
        let n = o[t];
        if (null == n || null == n.message) return !1;
        o[t] = { ...n, message: (0, s.IU)(n.message, e.message) };
    },
    MESSAGE_DELETE: function (e) {
        if (!c(e.channelId)) return !1;
        o[e.channelId] = { loaded: !0, error: !1, message: null };
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function (e) {
        let { requestedChannelIds: t, supplementalData: n } = e,
            i = new Set([...t]);
        for (let e of (n.forEach((e) => {
            h(e.channel_id, e.message_preview), i.delete(e.channel_id);
        }),
        Array.from(i)))
            h(e, null);
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function (e) {
        let { requestedChannelIds: t } = e;
        t.forEach((e) => {
            h(e, null, !0);
        });
    },
});
