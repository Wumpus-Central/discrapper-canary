var i = r(625898),
    a = r(771701);
function o(e, n) {
    var r = -1,
        o = a(e) ? Array(e.length) : [];
    return (
        i(e, function (e, i, a) {
            o[++r] = n(e, i, a);
        }),
        o
    );
}
e.exports = o;
