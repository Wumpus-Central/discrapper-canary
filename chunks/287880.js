n.d(t, {
    Ae: () => m,
    Qe: () => y,
    SN: () => v,
    U0: () => O,
    bV: () => b,
    uZ: () => _,
}),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(704826),
    n(35282),
    n(781311);
var r,
    i,
    a,
    o = n(943418),
    s = n(960048);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = null != (a = null == (r = window) ? void 0 : r.crypto) ? a : null == (i = window) ? void 0 : i.msCrypto,
    p = "Uint8Array" in window,
    _ = null != f && "getRandomValues" in f && p,
    m = "PublicKeyCredential" in window && p,
    h = 20;
function g(e) {
    return f.getRandomValues(new Uint8Array(e));
}
function E(e) {
    return o
        .encode(e)
        .toString("utf8")
        .replace(/=/g, "")
        .toLowerCase()
        .replace(/(\w{4})/g, "$1 ")
        .trim();
}
function b() {
    return E(g(h));
}
function y(e) {
    return e.replace(/[\s._-]+/g, "").toUpperCase();
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
    return "otpauth://totp/"
        .concat(encodeURI(n), ":")
        .concat(encodeURI(e), "?secret=")
        .concat(y(t), "&issuer=")
        .concat(encodeURIComponent(n));
}
function v(e, t) {
    s.Z.captureException(e, d(c({}, t), { tags: d(c({}, null == t ? void 0 : t.tags), { app_context: "webauthn" }) }));
}
