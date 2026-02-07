"use strict";
n.d(t, { A: () => o });
var r = n(118356),
    i = n(53943);
let a = Date.now(),
    s = a;
(0, r.$o)(function (e, t, n) {
    for (var o = arguments.length, l = Array(o > 3 ? o - 3 : 0), u = 3; u < o; u++) l[u - 3] = arguments[u];
    let c = Date.now(),
        d = ((c - a) / 1e3).toFixed(3),
        _ = ((c - s) / 1e3).toFixed(3),
        f = `Σ:${d}s, Δ:${_}s`;
    (s = c), i.z8({ name: e, timing: f }, n, ...l), (0, r.gZ)(e, t, n, ...l);
});
let o = r.Vy;
