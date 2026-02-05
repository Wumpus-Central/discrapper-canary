"use strict";
n.d(t, { K7: () => a, Os: () => h, V3: () => u, cC: () => d, d4: () => o, tn: () => c }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(704101),
    s = n(728458);
let r = window?.crypto ?? window?.msCrypto,
    l = "Uint8Array" in window,
    a = null != r && "getRandomValues" in r && l,
    o = "PublicKeyCredential" in window && l;
function c() {
    var e;
    return (
        (e = r.getRandomValues(new Uint8Array(20))),
        i
            .encode(e)
            .toString("utf8")
            .replace(/=/g, "")
            .toLowerCase()
            .replace(/(\w{4})/g, "$1 ")
            .trim()
    );
}
function d(e) {
    return e.replace(/[\s._-]+/g, "").toUpperCase();
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
    return `otpauth://totp/${encodeURI(n)}:${encodeURI(e)}\
?secret=${d(t)}\
&issuer=${encodeURIComponent(n)}`;
}
function h(e, t) {
    s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "webauthn" } });
}
