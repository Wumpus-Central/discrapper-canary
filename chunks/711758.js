n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = d();
function d() {
    return { ignoreTimestamps: {} };
}
function f(e) {
    let { userId: t, timestamp: n } = e;
    u.ignoreTimestamps[t] = n;
}
class p extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = null != (t = null == e ? void 0 : e.ignoreTimestamps) ? t : {};
        u = c(s({}, d()), { ignoreTimestamps: n });
    }
    getState() {
        return u;
    }
    getIgnoreTimestamps() {
        return u.ignoreTimestamps;
    }
}
o(p, "displayName", "IgnoreNoticeStore"), o(p, "persistKey", "IgnoreNoticeStore");
let _ = new p(a.Z, { RELATIONSHIP_IGNORE_USER_SUCCESS: f });
