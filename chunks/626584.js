r.d(e, { A: () => s });
var n = r(118356),
    a = r(53943);
let i = Date.now(),
    o = i;
(0, n.$o)(function (t, e, r) {
    for (var s = arguments.length, l = Array(s > 3 ? s - 3 : 0), h = 3; h < s; h++) l[h - 3] = arguments[h];
    let c = Date.now(),
        f = ((c - i) / 1e3).toFixed(3),
        p = ((c - o) / 1e3).toFixed(3),
        u = `Σ:${f}s, Δ:${p}s`;
    (o = c), a.z8({ name: t, timing: u }, r, ...l), (0, n.gZ)(t, e, r, ...l);
});
let s = n.Vy;
