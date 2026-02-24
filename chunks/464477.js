"use strict";
n.d(t, { K7: () => o, Os: () => h, V3: () => p, cC: () => f, d4: () => l, tn: () => _ }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var r = n(704101),
    i = n(728458);
let s = window?.crypto ?? window?.msCrypto,
    a = "Uint8Array" in window,
    o = null != s && "getRandomValues" in s && a,
    l = "PublicKeyCredential" in window && a,
    u = 20;
function c(e) {
    return s.getRandomValues(new Uint8Array(e));
}
function d(e) {
    return r
        .encode(e)
        .toString("utf8")
        .replace(/=/g, "")
        .toLowerCase()
        .replace(/(\w{4})/g, "$1 ")
        .trim();
}
function _() {
    return d(c(u));
}
function f(e) {
    return e.replace(/[\s._-]+/g, "").toUpperCase();
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
    return `otpauth://totp/${encodeURI(n)}:${encodeURI(e)}\
?secret=${f(t)}\
&issuer=${encodeURIComponent(n)}`;
}
function h(e, t) {
    i.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "webauthn" } });
}
