n.d(t, { Z: () => _ }), n(47120);
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(786761),
    c = n(594174),
    d = n(355298),
    u = n(333984);
let h = {},
    p = new Set();
function m(e) {
    return d.Z.isMessageRequest(e) || u.Z.isSpam(e);
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!m(e) || (null != t && e !== (null == t ? void 0 : t.channel_id))) return;
    let i = null == t ? null : (0, o.e5)(t);
    h[e] = {
        loaded: !0,
        error: n,
        message: i
    };
}
class g extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.Z, c.default);
    }
    shouldLoadMessageRequestPreview(e) {
        return !p.has(e);
    }
    getMessageRequestPreview(e) {
        return (
            e in h ||
                (h[e] = {
                    loaded: !1,
                    error: !1,
                    message: null
                }),
            h[e]
        );
    }
}
(a = 'MessageRequestPreviewStore'),
    (l = 'displayName') in g
        ? Object.defineProperty(g, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[l] = a);
let _ = new g(s.Z, {
    CONNECTION_OPEN: function () {
        (h = {}), p.clear();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        m(t.id) && p.add(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) m(e.id) || (p.delete(e.id), delete h[e.id]);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        p.delete(t.id), delete h[t.id];
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return !1;
        f(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.channel_id;
        if (null == t) return !1;
        let n = h[t];
        if (null == n || null == n.message) return !1;
        h[t] = {
            ...n,
            message: (0, o.wi)(n.message, e.message)
        };
    },
    MESSAGE_DELETE: function (e) {
        if (!m(e.channelId)) return !1;
        h[e.channelId] = {
            loaded: !0,
            error: !1,
            message: null
        };
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function (e) {
        let { requestedChannelIds: t, supplementalData: n } = e,
            i = new Set([...t]);
        for (let e of (n.forEach((e) => {
            f(e.channel_id, e.message_preview), i.delete(e.channel_id);
        }),
        Array.from(i)))
            f(e, null);
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function (e) {
        let { requestedChannelIds: t } = e;
        t.forEach((e) => {
            f(e, null, !0);
        });
    }
});
