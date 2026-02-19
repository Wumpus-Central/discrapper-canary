"use strict";
n.d(t, { r: () => o });
var r = n(181370),
    i = n.n(r);
let s = 0x7fffffff,
    a = 0.01;
function o(e) {
    let t = i().v3(String(e));
    return t < 0 && (t += 0x100000000), t % s < a * s;
}
