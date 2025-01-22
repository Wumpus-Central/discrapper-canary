var i = r(543744),
    a = r(436091);
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
