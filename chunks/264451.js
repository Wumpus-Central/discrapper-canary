n.d(t, {
    Zo: () => s,
    m5: () => l
});
var r = n(913527),
    i = n.n(r);
function l(e, t) {
    let n = '',
        r = e >= 0;
    return (
        r && (n += '+'),
        t ? (n += ''.concat(Math.floor(100 * e), '%')) : (n += e),
        {
            formattedValue: n,
            isPositive: r
        }
    );
}
function s(e, t) {
    return null != e ? i()(e).format(t) : '-';
}
