n.d(t, { Z: () => g }), n(388685);
var i,
    r = n(442837),
    l = n(570140),
    a = n(786761),
    o = n(594174),
    s = n(355298),
    c = n(333984);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = {},
    p = new Set();
function f(e) {
    return s.Z.isMessageRequest(e) || c.Z.isSpam(e);
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!f(e) || (null != t && e !== (null == t ? void 0 : t.channel_id))) return;
    let i = null == t ? null : (0, a.e5)(t);
    d[e] = {
        loaded: !0,
        error: n,
        message: i,
    };
}
class m extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, c.Z, o.default);
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
                    message: null,
                }),
            d[e]
        );
    }
}
u(m, "displayName", "MessageRequestPreviewStore");
let g = new m(l.Z, {
    CONNECTION_OPEN: function () {
        (d = {}), p.clear();
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        f(t.id) && p.add(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        for (let e of t) f(e.id) || (p.delete(e.id), delete d[e.id]);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        p.delete(t.id), delete d[t.id];
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification) return !1;
        h(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        var t, n;
        let i = e.message.channel_id;
        if (null == i) return !1;
        let r = d[i];
        if (null == r || null == r.message) return !1;
        d[i] =
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            u(e, t, n[t]);
                        });
                }
                return e;
            })({}, r)),
            (n = n = { message: (0, a.wi)(r.message, e.message) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    },
    MESSAGE_DELETE: function (e) {
        if (!f(e.channelId)) return !1;
        d[e.channelId] = {
            loaded: !0,
            error: !1,
            message: null,
        };
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
