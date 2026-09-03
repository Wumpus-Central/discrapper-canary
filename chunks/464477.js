n.d(t, { K7: () => l, Os: () => _, V3: () => u, cC: () => c, d4: () => o, tn: () => d }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(704101),
    r = n(38405);
let a = window?.crypto ?? window?.msCrypto,
    s = "Uint8Array" in window,
    l = null != a && "getRandomValues" in a && s,
    o = "PublicKeyCredential" in window && s;
function d() {
    var e;
    return (
        (e = a.getRandomValues(new Uint8Array(20))),
        i
            .encode(e)
            .toString("utf8")
            .replace(/=/g, "")
            .toLowerCase()
            .replace(/(\w{4})/g, "$1 ")
            .trim()
    );
}
function c(e) {
    return e.replace(/[\s._-]+/g, "").toUpperCase();
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
    return `otpauth://totp/${encodeURI(n)}:${encodeURI(e)}\
?secret=${c(t)}\
&issuer=${encodeURIComponent(n)}`;
}
function _(e, t) {
    r.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "webauthn" } });
}
