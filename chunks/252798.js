n.d(t, { Z: () => r });
let r = function (e) {
    var t = -1,
        n = Array(e.size);
    return (
        e.forEach(function (e, r) {
            n[++t] = [r, e];
        }),
        n
    );
};
