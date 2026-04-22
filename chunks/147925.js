"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(900797),
    s = n(847374),
    a = n(921853),
    o = n(320448),
    l = n(570188);
let u = { UP: l.hv, RIGHT: l.kL, DOWN: l.Gb, LEFT: l.PI },
    d = (e) => {
        let {
                direction: t = u.DOWN,
                width: n = 24,
                height: l = 24,
                color: d = "currentColor",
                className: c,
                foreground: _,
                expanded: f,
                ...E
            } = e,
            h = t;
        !0 === f ? (h = u.DOWN) : !1 === f && (h = u.RIGHT);
        let p = { [u.UP]: i.t, [u.DOWN]: s.a, [u.LEFT]: a.n, [u.RIGHT]: o._ }[h];
        return (0, r.jsx)(p, {
            ...E,
            className: c,
            size: "custom",
            width: n,
            height: l,
            color: d ?? "currentColor",
            colorClass: _,
        });
    };
d.Directions = u;
let c = d;
