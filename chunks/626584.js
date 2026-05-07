"use strict";
n.d(t, { A: () => o });
var i = n(941426),
    r = n(53943);
let s = Date.now(),
    a = s;
(0, i.$o)(function (e, t, n) {
    for (var o = arguments.length, l = Array(o > 3 ? o - 3 : 0), u = 3; u < o; u++) l[u - 3] = arguments[u];
    let c = Date.now(),
        d = ((c - s) / 1e3).toFixed(3),
        _ = ((c - a) / 1e3).toFixed(3),
        f = `\u{3A3}:${d}s, \u{394}:${_}s`;
    (a = c), r.z8({ name: e, timing: f }, n, ...l), (0, i.gZ)(e, t, n, ...l);
});
let o = i.Vy;
