"use strict";
n.d(t, { $h: () => r, cG: () => s, l9: () => a });
var i = n(985018);
function r(e) {
    if (e < 1e6) return i.intl.formatToPlainString(i.t.OiHat3, { value: e });
    let t = (e / 1e6).toFixed(1);
    return i.intl.formatToPlainString(i.t.Iku48I, { value: t });
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0, ...n }).format(t);
}
