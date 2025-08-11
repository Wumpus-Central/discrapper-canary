n.d(t, { Z: () => p });
var r,
    i = n(442837),
    o = n(570140),
    a = n(959517);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {};
function f(e) {
    let { message: t, sendMessageOptions: n } = e;
    if (null != n) {
        var r;
        d[t.id] = u(l({}, n), { location: null != (r = n.location) ? r : a.dy.OTHER });
    }
    null != t.nonce && t.nonce in d && delete d[t.nonce];
}
class _ extends (r = i.ZP.Store) {
    getOptions(e) {
        return d[e];
    }
}
s(_, "displayName", "SendMessageOptionsStore");
let p = new _(o.Z, { MESSAGE_CREATE: f });
