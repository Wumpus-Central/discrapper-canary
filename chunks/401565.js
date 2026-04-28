n.d(t, { A: () => f });
var i = n(17928),
    a = n(228366),
    r = n(320095),
    l = n(287809),
    s = n(380335),
    o = n(157550);
let d = {},
    c = new Set();
function u(e) {
    return s.A.isMessageRequest(e) || o.A.isSpam(e);
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!u(e) || (null != t && e !== t?.channel_id)) return;
    let i = null == t ? null : (0, r.rh)(t);
    d[e] = { loaded: !0, error: n, message: i };
}
class E extends i.Ay.Store {
    static displayName = "MessageRequestPreviewStore";
    initialize() {
        this.waitFor(s.A, o.A, l.default);
    }
    shouldLoadMessageRequestPreview(e) {
        return !c.has(e);
    }
    getMessageRequestPreview(e) {
        return e in d || (d[e] = { loaded: !1, error: !1, message: null }), d[e];
    }
}
let f = new E(a.h, {
    CONNECTION_OPEN: function () {
        (d = {}), c.clear();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        u(t.id) && c.add(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) u(e.id) || (c.delete(e.id), delete d[e.id]);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        c.delete(t.id), delete d[t.id];
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return !1;
        _(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.channel_id;
        if (null == t) return !1;
        let n = d[t];
        if (null == n || null == n.message) return !1;
        d[t] = { ...n, message: (0, r.IU)(n.message, e.message) };
    },
    MESSAGE_DELETE: function (e) {
        if (!u(e.channelId)) return !1;
        d[e.channelId] = { loaded: !0, error: !1, message: null };
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function (e) {
        let { requestedChannelIds: t, supplementalData: n } = e,
            i = new Set([...t]);
        for (let e of (n.forEach((e) => {
            _(e.channel_id, e.message_preview), i.delete(e.channel_id);
        }),
        Array.from(i)))
            _(e, null);
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function (e) {
        let { requestedChannelIds: t } = e;
        t.forEach((e) => {
            _(e, null, !0);
        });
    },
});
