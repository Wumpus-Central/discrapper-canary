r.d(t, {
    Ae: () => d,
    Qe: () => h,
    U0: () => g,
    bV: () => u,
    uZ: () => l
}),
    r(518263),
    r(970173),
    r(520712),
    r(268111),
    r(941497),
    r(32026),
    r(480839),
    r(744285),
    r(492257),
    r(873817),
    r(610885),
    r(126298),
    r(757143),
    r(301563),
    r(566702);
var n,
    s,
    i,
    a = r(943418);
let o = null !== (i = null === (n = window) || void 0 === n ? void 0 : n.crypto) && void 0 !== i ? i : null === (s = window) || void 0 === s ? void 0 : s.msCrypto,
    c = 'Uint8Array' in window,
    l = null != o && 'getRandomValues' in o && c,
    d = 'PublicKeyCredential' in window && c;
function u() {
    var e;
    return (
        (e = o.getRandomValues(new Uint8Array(20))),
        a
            .encode(e)
            .toString('utf8')
            .replace(/=/g, '')
            .toLowerCase()
            .replace(/(\w{4})/g, '$1 ')
            .trim()
    );
}
function h(e) {
    return e.replace(/[\s._-]+/g, '').toUpperCase();
}
function g(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Discord';
    return 'otpauth://totp/'.concat(encodeURI(r), ':').concat(encodeURI(e), '?secret=').concat(h(t), '&issuer=').concat(encodeURIComponent(r));
}
