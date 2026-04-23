n.d(t, { A: () => A });
var i = n(311907),
    l = n(73153),
    a = n(141468),
    s = n(287809),
    r = n(380335),
    o = n(157550);
let c = {},
    d = new Set();
function u(e) {
    return r.A.isMessageRequest(e) || o.A.isSpam(e);
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!u(e) || (null != t && e !== t?.channel_id)) return;
    let i = null == t ? null : (0, a.rh)(t);
    c[e] = { loaded: !0, error: n, message: i };
}
class m extends i.Ay.Store {
    static displayName = "MessageRequestPreviewStore";
    initialize() {
        this.waitFor(r.A, o.A, s.default);
    }
    shouldLoadMessageRequestPreview(e) {
        return !d.has(e);
    }
    getMessageRequestPreview(e) {
        return e in c || (c[e] = { loaded: !1, error: !1, message: null }), c[e];
    }
}
let A = new m(l.h, {
    CONNECTION_OPEN: function () {
        (c = {}), d.clear();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        u(t.id) && d.add(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) u(e.id) || (d.delete(e.id), delete c[e.id]);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        d.delete(t.id), delete c[t.id];
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return !1;
        h(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.channel_id;
        if (null == t) return !1;
        let n = c[t];
        if (null == n || null == n.message) return !1;
        c[t] = { ...n, message: (0, a.IU)(n.message, e.message) };
    },
    MESSAGE_DELETE: function (e) {
        if (!u(e.channelId)) return !1;
        c[e.channelId] = { loaded: !0, error: !1, message: null };
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
