n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(118356),
    i = n(53943);
let a = Date.now(),
    s = a;
(0, r.$o)(function (e, t, n) {
    for (var o = arguments.length, l = Array(o > 3 ? o - 3 : 0), c = 3; c < o; c++) l[c - 3] = arguments[c];
    let u = Date.now(),
        d = ((u - a) / 1e3).toFixed(3),
        f = ((u - s) / 1e3).toFixed(3),
        p = "Σ:".concat(d, "s, Δ:").concat(f, "s");
    (s = u),
        i.z8(
            {
                name: e,
                timing: p,
            },
            n,
            ...l,
        ),
        (0, r.gZ)(e, t, n, ...l);
});
let o = r.Vy;
