"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(900797),
    a = n(847374),
    s = n(921853),
    l = n(320448),
    o = n(570188);
let d = { UP: o.hv, RIGHT: o.kL, DOWN: o.Gb, LEFT: o.PI };
function c(e) {
    let {
            direction: t = d.DOWN,
            width: n = 24,
            height: o = 24,
            color: c = "currentColor",
            className: u,
            foreground: _,
            expanded: E,
            ...A
        } = e,
        h = t;
    !0 === E ? (h = d.DOWN) : !1 === E && (h = d.RIGHT);
    let I = { [d.UP]: r.t, [d.DOWN]: a.a, [d.LEFT]: s.n, [d.RIGHT]: l._ }[h];
    return (0, i.jsx)(I, {
        ...A,
        className: u,
        size: "custom",
        width: n,
        height: o,
        color: c ?? "currentColor",
        colorClass: _,
    });
}
c.Directions = d;
let u = c;
