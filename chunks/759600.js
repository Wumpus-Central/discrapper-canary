var i = n(625898),
    r = n(771701);
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
