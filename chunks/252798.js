r.d(t, { Z: () => n });
let n = function (e) {
    var t = -1,
        r = Array(e.size);
    return (
        e.forEach(function (e, n) {
            r[++t] = [n, e];
        }),
        r
    );
};
