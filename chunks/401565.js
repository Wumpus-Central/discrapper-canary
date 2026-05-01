"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(320095),
    a = n(287809),
    o = n(380335),
    l = n(157550);
let u = {},
    c = new Set();
function d(e) {
    return o.A.isMessageRequest(e) || l.A.isSpam(e);
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!d(e) || (null != t && e !== t?.channel_id)) return;
    let i = null == t ? null : (0, s.rh)(t);
    u[e] = { loaded: !0, error: n, message: i };
}
class f extends i.Ay.Store {
    static displayName = "MessageRequestPreviewStore";
    initialize() {
        this.waitFor(o.A, l.A, a.default);
    }
    shouldLoadMessageRequestPreview(e) {
        return !c.has(e);
    }
    getMessageRequestPreview(e) {
        return e in u || (u[e] = { loaded: !1, error: !1, message: null }), u[e];
    }
}
let h = new f(r.h, {
    CONNECTION_OPEN: function () {
        (u = {}), c.clear();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        d(t.id) && c.add(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) d(e.id) || (c.delete(e.id), delete u[e.id]);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        c.delete(t.id), delete u[t.id];
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return !1;
        _(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.channel_id;
        if (null == t) return !1;
        let n = u[t];
        if (null == n || null == n.message) return !1;
        u[t] = { ...n, message: (0, s.IU)(n.message, e.message) };
    },
    MESSAGE_DELETE: function (e) {
        if (!d(e.channelId)) return !1;
        u[e.channelId] = { loaded: !0, error: !1, message: null };
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
