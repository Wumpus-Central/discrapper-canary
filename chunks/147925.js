"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(849881);
let s = { UP: a.hv, RIGHT: a.kL, DOWN: a.Gb, LEFT: a.PI },
    o = (e) => {
        let {
                direction: t = s.DOWN,
                width: n = 24,
                height: a = 24,
                color: o = "currentColor",
                className: l,
                foreground: u,
                expanded: c,
                ...d
            } = e,
            _ = t;
        !0 === c ? (_ = s.DOWN) : !1 === c && (_ = s.RIGHT);
        let f = { [s.UP]: i.tN5, [s.DOWN]: i.abt, [s.LEFT]: i.n2b, [s.RIGHT]: i._BQ }[_];
        return (0, r.jsx)(f, {
            ...d,
            className: l,
            size: "custom",
            width: n,
            height: a,
            color: o ?? "currentColor",
            colorClass: u,
        });
    };
o.Directions = s;
let l = o;
