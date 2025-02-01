var i = n(543744),
    r = n(436091);
function a(e, t) {
    var n = -1,
        a = r(e) ? Array(e.length) : [];
    return (
        i(e, function (e, i, r) {
            a[++n] = t(e, i, r);
        }),
        a
    );
}
e.exports = a;
