n.d(t, { Z: () => a });
var i = n(809948),
    r = n(670097);
let a = function (e, t) {
    var n = -1,
        a = (0, r.Z)(e) ? Array(e.length) : [];
    return (
        (0, i.Z)(e, function (e, i, r) {
            a[++n] = t(e, i, r);
        }),
        a
    );
};
