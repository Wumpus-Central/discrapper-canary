"use strict";
n.d(t, { $h: () => i, cG: () => a, l9: () => o, tg: () => s });
var r = n(985018);
function i(e) {
    if (e < 1e6) return r.intl.formatToPlainString(r.t.OiHat3, { value: e });
    let t = (e / 1e6).toFixed(1);
    return r.intl.formatToPlainString(r.t.Iku48I, { value: t });
}
function s(e, t) {
    if (e < 1e3) return r.intl.formatToPlainString(r.t.OiHat3, { value: Math.floor(e) });
    if (e < 1e6) return r.intl.formatToPlainString(r.t["84R4Tc"], { value: Math.floor(e / 1e3) });
    let n = Math.floor((10 * e) / 1e6) / 10,
        i = new Intl.NumberFormat(t, { maximumFractionDigits: 1 }).format(n);
    return r.intl.formatToPlainString(r.t.Iku48I, { value: i });
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0, ...n }).format(t);
}
