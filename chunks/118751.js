"use strict";
n.d(t, { s: () => s });
var i = n(855522);
let s = (e, t) => {
    let n = Math.round(10 * e) / 10;
    if (e < 1e6) return new Intl.NumberFormat(t, { maximumFractionDigits: +(n % 1 != 0) }).format(e);
    let s = Math.round((e / 1e6) * 10) / 10,
        l = new Intl.NumberFormat(t, { maximumFractionDigits: +(s % 1 != 0) }).format(e / 1e6);
    return i.A.Messages.NUMBER_ABBREVIATIONS_MILLION.format({ num: l });
};
