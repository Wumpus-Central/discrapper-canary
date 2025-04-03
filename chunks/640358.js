n.d(t, { o: () => i });
var r = n(330711);
let i = (e, t) => {
    let n = Math.round(10 * e) / 10;
    if (e < 1000000) return new Intl.NumberFormat(t, { maximumFractionDigits: +(n % 1 != 0) }).format(e);
    let i = Math.round((e / 1000000) * 10) / 10,
        s = new Intl.NumberFormat(t, { maximumFractionDigits: +(i % 1 != 0) }).format(e / 1000000);
    return r.Z.Messages.NUMBER_ABBREVIATIONS_MILLION.format({ num: s });
};
