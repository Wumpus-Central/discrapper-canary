r.d(e, { A: () => s });
var n = r(118356),
    a = r(53943);
let i = Date.now(),
    o = i;
(0, n.$o)(function (t, e, r) {
    for (var s = arguments.length, h = Array(s > 3 ? s - 3 : 0), l = 3; l < s; l++) h[l - 3] = arguments[l];
    let f = Date.now(),
        c = ((f - i) / 1e3).toFixed(3),
        p = ((f - o) / 1e3).toFixed(3),
        u = `Σ:${c}s, Δ:${p}s`;
    (o = f), a.z8({ name: t, timing: u }, r, ...h), (0, n.gZ)(t, e, r, ...h);
});
let s = n.Vy;
