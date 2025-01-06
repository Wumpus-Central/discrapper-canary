n.d(t, {
    Zo: function () {
        return a;
    },
    m5: function () {
        return l;
    }
});
var i = n(913527),
    r = n.n(i);
function l(e, t) {
    let n = '',
        i = e >= 0;
    return (
        i && (n += '+'),
        t ? (n += ''.concat(Math.floor(100 * e), '%')) : (n += e),
        {
            formattedValue: n,
            isPositive: i
        }
    );
}
function a(e, t) {
    return null != e ? r()(e).format(t) : '-';
}
