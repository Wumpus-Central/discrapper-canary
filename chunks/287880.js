i.d(t, {
    Ae: () => d,
    Qe: () => h,
    U0: () => g,
    bV: () => u,
    uZ: () => o
}),
    i(518263),
    i(970173),
    i(520712),
    i(268111),
    i(941497),
    i(32026),
    i(480839),
    i(744285),
    i(492257),
    i(873817),
    i(757143);
var s,
    n,
    r,
    a = i(943418);
let c = null !== (r = null === (s = window) || void 0 === s ? void 0 : s.crypto) && void 0 !== r ? r : null === (n = window) || void 0 === n ? void 0 : n.msCrypto,
    l = 'Uint8Array' in window,
    o = null != c && 'getRandomValues' in c && l,
    d = 'PublicKeyCredential' in window && l;
function u() {
    var e;
    return (
        (e = c.getRandomValues(new Uint8Array(20))),
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
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Discord';
    return 'otpauth://totp/'.concat(encodeURI(i), ':').concat(encodeURI(e), '?secret=').concat(h(t), '&issuer=').concat(encodeURIComponent(i));
}
