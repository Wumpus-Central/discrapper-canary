"use strict";
n.d(t, { A: () => l });
var i = n(941426),
    r = n(53943);
let a = Date.now(),
    s = a;
(0, i.$o)(function (e, t, n) {
    for (var l = arguments.length, o = Array(l > 3 ? l - 3 : 0), d = 3; d < l; d++) o[d - 3] = arguments[d];
    let c = Date.now(),
        u = ((c - a) / 1e3).toFixed(3),
        _ = ((c - s) / 1e3).toFixed(3),
        E = `\u{3A3}:${u}s, \u{394}:${_}s`;
    (s = c), r.z8({ name: e, timing: E }, n, ...o), (0, i.gZ)(e, t, n, ...o);
});
let l = i.Vy;
