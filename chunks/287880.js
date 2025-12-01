n.d(t, {
    Ae: () => u,
    Qe: () => m,
    U0: () => h,
    bV: () => _,
    uZ: () => c,
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
    o = n(943418);
let s = null != (a = null == (r = window) ? void 0 : r.crypto) ? a : null == (i = window) ? void 0 : i.msCrypto,
    l = "Uint8Array" in window,
    c = null != s && "getRandomValues" in s && l,
    u = "PublicKeyCredential" in window && l,
    d = 20;
function f(e) {
    return s.getRandomValues(new Uint8Array(e));
}
function p(e) {
    return o
        .encode(e)
        .toString("utf8")
        .replace(/=/g, "")
        .toLowerCase()
        .replace(/(\w{4})/g, "$1 ")
        .trim();
}
function _() {
    return p(f(d));
}
function m(e) {
    return e.replace(/[\s._-]+/g, "").toUpperCase();
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
    return "otpauth://totp/"
        .concat(encodeURI(n), ":")
        .concat(encodeURI(e), "?secret=")
        .concat(m(t), "&issuer=")
        .concat(encodeURIComponent(n));
}
