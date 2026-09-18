n.d(t, { $h: () => r, cG: () => s, l9: () => l, s_: () => a });
var i = n(855522);
function r(e) {
    if (e < 1e6) return new Intl.NumberFormat(i.A.getLocale()).format(e);
    let t = (e / 1e6).toFixed(1);
    return i.A.Messages.NUMBER_ABBREVIATIONS_MILLION.format({ num: t });
}
let a = (e, t) => {
    let n = Math.round(10 * e) / 10;
    if (e < 1e6) return new Intl.NumberFormat(t, { maximumFractionDigits: +(n % 1 != 0) }).format(e);
    let r = Math.round((e / 1e6) * 10) / 10,
        a = new Intl.NumberFormat(t, { maximumFractionDigits: +(r % 1 != 0) }).format(e / 1e6);
    return i.A.Messages.NUMBER_ABBREVIATIONS_MILLION.format({ num: a });
};
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0, ...n }).format(t);
}
