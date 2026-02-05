"use strict";
n.d(t, { $h: () => s, cG: () => l, l9: () => u, tg: () => o });
var r = n(985018);
let i = 1e6,
    a = 1e3;
function s(e) {
    if (e < i) return r.intl.formatToPlainString(r.t.OiHat3, { value: e });
    let t = (e / i).toFixed(1);
    return r.intl.formatToPlainString(r.t.Iku48I, { value: t });
}
function o(e, t) {
    if (e < a) return r.intl.formatToPlainString(r.t.OiHat3, { value: Math.floor(e) });
    if (e < i) return r.intl.formatToPlainString(r.t["84R4Tc"], { value: Math.floor(e / a) });
    let n = Math.floor((10 * e) / i) / 10,
        s = new Intl.NumberFormat(t, { maximumFractionDigits: 1 }).format(n);
    return r.intl.formatToPlainString(r.t.Iku48I, { value: s });
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0, ...n }).format(t);
}
