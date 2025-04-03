n.d(t, {
    Zo: () => a,
    m5: () => s
});
var r = n(913527),
    i = n.n(r);
function s(e, t) {
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
function a(e, t) {
    return null != e ? i()(e).format(t) : '-';
}
