n.d(t, {
    s: () => i,
});
var r = n(855522);
let i = (e, t) => {
    let n = Math.round(10 * e) / 10;
    if (e < 1e6)
        return new Intl.NumberFormat(t, {
            maximumFractionDigits: +(n % 1 != 0),
        }).format(e);
    let i = Math.round((e / 1e6) * 10) / 10,
        l = new Intl.NumberFormat(t, {
            maximumFractionDigits: +(i % 1 != 0),
        }).format(e / 1e6);
    return r.A.Messages.NUMBER_ABBREVIATIONS_MILLION.format({
        num: l,
    });
};
