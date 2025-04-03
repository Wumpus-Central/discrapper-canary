n.d(t, { Z: () => g }), n(47120);
var r,
    i = n(442837),
    l = n(570140),
    o = n(786761),
    a = n(594174),
    s = n(355298),
    c = n(333984);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = {},
    p = new Set();
function h(e) {
    return s.Z.isMessageRequest(e) || c.Z.isSpam(e);
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!h(e) || (null != t && e !== (null == t ? void 0 : t.channel_id))) return;
    let r = null == t ? null : (0, o.e5)(t);
    d[e] = {
        loaded: !0,
        error: n,
        message: r
    };
}
class m extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, c.Z, a.default);
    }
    shouldLoadMessageRequestPreview(e) {
        return !p.has(e);
    }
    getMessageRequestPreview(e) {
        return (
            e in d ||
                (d[e] = {
                    loaded: !1,
                    error: !1,
                    message: null
                }),
            d[e]
        );
    }
}
u(m, 'displayName', 'MessageRequestPreviewStore');
let g = new m(l.Z, {
    CONNECTION_OPEN: function () {
        (d = {}), p.clear();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        h(t.id) && p.add(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) h(e.id) || (p.delete(e.id), delete d[e.id]);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        p.delete(t.id), delete d[t.id];
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return !1;
        f(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        var t, n;
        let r = e.message.channel_id;
        if (null == r) return !1;
        let i = d[r];
        if (null == i || null == i.message) return !1;
        d[r] =
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            u(e, t, n[t]);
                        });
                }
                return e;
            })({}, i)),
            (n = n = { message: (0, o.wi)(i.message, e.message) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    },
    MESSAGE_DELETE: function (e) {
        if (!h(e.channelId)) return !1;
        d[e.channelId] = {
            loaded: !0,
            error: !1,
            message: null
        };
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function (e) {
        let { requestedChannelIds: t, supplementalData: n } = e,
            r = new Set([...t]);
        for (let e of (n.forEach((e) => {
            f(e.channel_id, e.message_preview), r.delete(e.channel_id);
        }),
        Array.from(r)))
            f(e, null);
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function (e) {
        let { requestedChannelIds: t } = e;
        t.forEach((e) => {
            f(e, null, !0);
        });
    }
});
