n.d(t, { Z: () => i });
let i = function (e) {
    var t = -1,
        n = Array(e.size);
    return (
        e.forEach(function (e, i) {
            n[++t] = [i, e];
        }),
        n
    );
};
