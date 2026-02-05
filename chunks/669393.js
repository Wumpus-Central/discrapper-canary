"use strict";
n.d(t, { d: () => l, yq: () => f });
var r = n(310784),
    i = n.n(r);
function a(e, t, n) {
    let [r, i] = e,
        [a, s] = t,
        o = (r + i) / 2,
        l = o;
    return n === o ? l : n < o ? a + ((n - r) / (o - r)) * (l - a) : l + ((n - o) / (i - o)) * (s - l);
}
function s(e, t, n) {
    let [r, i] = e,
        [a, s] = t;
    return a + ((n - r) / (i - r)) * (s - a);
}
let o = [0, 2];
function l(e, t, n) {
    let r = i()(e);
    if ("background" !== t) return r.set("hsl.s", `*${n}`).hex();
    {
        let e = s([0, 1], [0.25, 1], n);
        return r.set("hsl.s", `*${e}`).hex();
    }
}
let u = [1.3, 0.7],
    c = [0.98, 1],
    d = [0.75, 1.5],
    _ = [1.45, 0.45];
function f(e, t, n, r) {
    switch (t) {
        case "background":
        case "border":
            return i()(e)
                .set("hsl.l", `*${a(o, "light" === n ? c : u, r)}`)
                .hex();
        case "text":
            return i()(e)
                .set("hsl.l", `*${a(o, "light" === n ? _ : d, r)}`)
                .hex();
        default:
            return e;
    }
}
