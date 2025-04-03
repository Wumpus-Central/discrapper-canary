n.d(t, {
    u: () => s,
    v: () => o
});
var r = n(477839);
function s(e, t) {
    return Intl.NumberFormat(t, { style: 'decimal' }).format(e);
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.eg,
        n = Math.abs(e)
            .toString()
            .padStart(e < 0 ? t - 1 : t, '0');
    return e < 0 ? '-'.concat(n) : n;
}
