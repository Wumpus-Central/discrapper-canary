r.d(t, { Z: () => a });
var n = r(809948),
    o = r(670097);
let a = function (e, t) {
    var r = -1,
        a = (0, o.Z)(e) ? Array(e.length) : [];
    return (
        (0, n.Z)(e, function (e, n, o) {
            a[++r] = t(e, n, o);
        }),
        a
    );
};
