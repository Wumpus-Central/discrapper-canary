n.d(t, {
    Ae: () => d,
    Qe: () => m,
    U0: () => g,
    bV: () => u,
    uZ: () => c
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
var i,
    r,
    s,
    l = n(943418);
let a = null != (s = null == (i = window) ? void 0 : i.crypto) ? s : null == (r = window) ? void 0 : r.msCrypto,
    o = 'Uint8Array' in window,
    c = null != a && 'getRandomValues' in a && o,
    d = 'PublicKeyCredential' in window && o;
function u() {
    var e;
    return (
        (e = a.getRandomValues(new Uint8Array(20))),
        l
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
