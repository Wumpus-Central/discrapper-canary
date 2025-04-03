n.d(t, {
    Ae: () => d,
    Qe: () => m,
    U0: () => g,
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
    n(610885),
    n(126298),
    n(757143),
    n(301563),
    n(566702);
var r,
    i,
    s,
    a = n(943418);
let l = null != (s = null == (r = window) ? void 0 : r.crypto) ? s : null == (i = window) ? void 0 : i.msCrypto,
    o = 'Uint8Array' in window,
    c = null != l && 'getRandomValues' in l && o,
    d = 'PublicKeyCredential' in window && o;
function u() {
    var e;
    return (
        (e = l.getRandomValues(new Uint8Array(20))),
        a
            .encode(e)
            .toString('utf8')
            .replace(/=/g, '')
            .toLowerCase()
            .replace(/(\w{4})/g, '$1 ')
            .trim()
    );
}
function m(e) {
    return e.replace(/[\s._-]+/g, '').toUpperCase();
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Discord';
    return 'otpauth://totp/'.concat(encodeURI(n), ':').concat(encodeURI(e), '?secret=').concat(m(t), '&issuer=').concat(encodeURIComponent(n));
}
