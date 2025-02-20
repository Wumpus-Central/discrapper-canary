n.d(t, { Z: () => o });
var r = n(809948),
    i = n(670097);
let o = function (e, t) {
    var n = -1,
        o = (0, i.Z)(e) ? Array(e.length) : [];
    return (
        (0, r.Z)(e, function (e, r, i) {
            o[++n] = t(e, r, i);
        }),
        o
    );
};
