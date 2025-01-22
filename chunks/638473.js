var i = r(809948),
    a = r(670097);
function o(e, n) {
    var r = -1,
        o = (0, a.Z)(e) ? Array(e.length) : [];
    return (
        (0, i.Z)(e, function (e, i, a) {
            o[++r] = n(e, i, a);
        }),
        o
    );
}
n.Z = o;
