n.d(t, {
    Ae: () => d,
    Qe: () => h,
    U0: () => m,
    bV: () => u,
    uZ: () => c
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(757143);
var i,
    s,
    l,
    r = n(943418);
let a = null !== (l = null === (i = window) || void 0 === i ? void 0 : i.crypto) && void 0 !== l ? l : null === (s = window) || void 0 === s ? void 0 : s.msCrypto,
    o = 'Uint8Array' in window,
    c = null != a && 'getRandomValues' in a && o,
    d = 'PublicKeyCredential' in window && o;
function u() {
    var e;
    return (
        (e = a.getRandomValues(new Uint8Array(20))),
        r
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
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Discord';
    return 'otpauth://totp/'.concat(encodeURI(n), ':').concat(encodeURI(e), '?secret=').concat(h(t), '&issuer=').concat(encodeURIComponent(n));
}
