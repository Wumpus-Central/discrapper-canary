n.d(t, { s: () => l });
var i = n(855522);
let l = (e, t) => {
    let n = Math.round(10 * e) / 10;
    if (e < 1e6) return new Intl.NumberFormat(t, { maximumFractionDigits: +(n % 1 != 0) }).format(e);
    let l = Math.round((e / 1e6) * 10) / 10,
        s = new Intl.NumberFormat(t, { maximumFractionDigits: +(l % 1 != 0) }).format(e / 1e6);
    return i.A.Messages.NUMBER_ABBREVIATIONS_MILLION.format({ num: s });
};
