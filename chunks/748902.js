(n.d(t, { Z: () => C }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(786761),
    s = n(594174),
    l = n(355298),
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {},
    h = new Set();
function m() {
    ((p = {}), h.clear());
}
function g(e) {
    return l.Z.isMessageRequest(e) || c.Z.isSpam(e);
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!g(e) || (null != t && e !== (null == t ? void 0 : t.channel_id))) return;
    let r = null == t ? null : (0, o.e5)(t);
    p[e] = {
        loaded: !0,
        error: n,
        message: r
    };
}
function b(e) {
    if (e.isPushNotification) return !1;
    E(e.message.channel_id, e.message);
}
function y(e) {
    let { channel: t } = e;
    g(t.id) && h.add(t.id);
}
function O(e) {
    let { channels: t } = e;
    for (let e of t) g(e.id) || (h.delete(e.id), delete p[e.id]);
}
function v(e) {
    let { channel: t } = e;
    (h.delete(t.id), delete p[t.id]);
}
function I(e) {
    let t = e.message.channel_id;
    if (null == t) return !1;
    let n = p[t];
    if (null == n || null == n.message) return !1;
    p[t] = _(d({}, n), { message: (0, o.wi)(n.message, e.message) });
}
function T(e) {
    if (!g(e.channelId)) return !1;
    p[e.channelId] = {
        loaded: !0,
        error: !1,
        message: null
    };
}
function S(e) {
    let { requestedChannelIds: t, supplementalData: n } = e,
        r = new Set([...t]);
    for (let e of (n.forEach((e) => {
        (E(e.channel_id, e.message_preview), r.delete(e.channel_id));
    }),
    Array.from(r)))
        E(e, null);
}
function A(e) {
    let { requestedChannelIds: t } = e;
    t.forEach((e) => {
        E(e, null, !0);
    });
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, c.Z, s.default);
    }
    shouldLoadMessageRequestPreview(e) {
        return !h.has(e);
    }
    getMessageRequestPreview(e) {
        return (
            e in p ||
                (p[e] = {
                    loaded: !1,
                    error: !1,
                    message: null
                }),
            p[e]
        );
    }
}
u(N, 'displayName', 'MessageRequestPreviewStore');
let C = new N(a.Z, {
    CONNECTION_OPEN: m,
    CHANNEL_CREATE: y,
    CHANNEL_UPDATES: O,
    CHANNEL_DELETE: v,
    MESSAGE_CREATE: b,
    MESSAGE_UPDATE: I,
    MESSAGE_DELETE: T,
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: S,
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: A
});
