n.d(t, {
    De: () => a,
    Fv: () => d,
    Mg: () => r.M,
    Zg: () => l,
    _I: () => c,
    aF: () => s
}),
    n(301563),
    n(47120),
    n(757143);
var r = n(513431);
let i = /[\u0300-\u036f]/g,
    o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function a(e) {
    return null == e ? '' : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
}
let s = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '\u2026';
    if (null == e || null == t) return '';
    if (e.length > t) {
        let r = o.test(e) ? [...e].slice(0, t - n.length).join('') : e.substring(0, t - n.length);
        return ''.concat(r.replace(/[\s.]+$/, '')).concat(n);
    }
    return e;
};
function l(e) {
    return null != e
        ? e
              .replace(/'s /g, ' ')
              .replace(/\w+/g, (e) => e[0])
              .replace(/\s/g, '')
        : '';
}
let c = null == String.prototype.normalize ? (e) => e : (e) => e.normalize('NFD').replace(i, '').normalize('NFC');
function u(e) {
    let t = n(510085),
        r = '';
    return (
        [...e.normalize('NFD')].forEach((e) => {
            var n;
            r += null != (n = t[e]) ? n : e;
        }),
        r.normalize('NFD').toLocaleLowerCase()
    );
}
let d = null == String.prototype.normalize ? (e) => e : u;
