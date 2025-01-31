n.d(t, { o: () => r });
var i = n(330711);
let r = (e, t) => {
    let n = Math.round(10 * e) / 10;
    if (e < 1000000) return new Intl.NumberFormat(t, { maximumFractionDigits: n % 1 == 0 ? 0 : 1 }).format(e);
    let r = Math.round((e / 1000000) * 10) / 10,
        l = new Intl.NumberFormat(t, { maximumFractionDigits: r % 1 == 0 ? 0 : 1 }).format(e / 1000000);
    return i.Z.Messages.NUMBER_ABBREVIATIONS_MILLION.format({ num: l });
};
