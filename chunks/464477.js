"use strict";
n.d(t, { K7: () => o, Os: () => c, V3: () => u, cC: () => _, d4: () => l, tn: () => d }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(704101),
    r = n(38405);
let s = window?.crypto ?? window?.msCrypto,
    a = "Uint8Array" in window,
    o = null != s && "getRandomValues" in s && a,
    l = "PublicKeyCredential" in window && a;
function d() {
    var e;
    return (
        (e = s.getRandomValues(new Uint8Array(20))),
        i
            .encode(e)
            .toString("utf8")
            .replace(/=/g, "")
            .toLowerCase()
            .replace(/(\w{4})/g, "$1 ")
            .trim()
    );
}
function _(e) {
    return e.replace(/[\s._-]+/g, "").toUpperCase();
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
    return `otpauth://totp/${encodeURI(n)}:${encodeURI(e)}\
?secret=${_(t)}\
&issuer=${encodeURIComponent(n)}`;
}
function c(e, t) {
    r.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "webauthn" } });
}
