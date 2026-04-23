"use strict";
n.d(t, { A: () => o });
var i = n(118356),
    r = n(53943);
let s = Date.now(),
    a = s;
(0, i.$o)(function (e, t, n) {
    for (var o = arguments.length, l = Array(o > 3 ? o - 3 : 0), d = 3; d < o; d++) l[d - 3] = arguments[d];
    let _ = Date.now(),
        u = ((_ - s) / 1e3).toFixed(3),
        c = ((_ - a) / 1e3).toFixed(3),
        E = `Σ:${u}s, Δ:${c}s`;
    (a = _), r.z8({ name: e, timing: E }, n, ...l), (0, i.gZ)(e, t, n, ...l);
});
let o = i.Vy;
