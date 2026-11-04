var c = s(477900);
s(582128);
var e = s(900797),
    o = s(847374),
    i = s(921853),
    a = s(320448),
    h = s(103335);
let l = { UP: h.hv, RIGHT: h.kL, DOWN: h.Gb, LEFT: h.PI };
function n(r) {
    let {
            direction: t = l.DOWN,
            width: s = 24,
            height: h = 24,
            color: n = "currentColor",
            className: u,
            foreground: p,
            expanded: d,
            ...k
        } = r,
        C = t;
    !0 === d ? (C = l.DOWN) : !1 === d && (C = l.RIGHT);
    let D = { [l.UP]: e.t, [l.DOWN]: o.a, [l.LEFT]: i.n, [l.RIGHT]: a._ }[C];
    return (0, c.jsx)(D, {
        ...k,
        className: u,
        size: "custom",
        width: s,
        height: h,
        color: n ?? "currentColor",
        colorClass: p,
    });
}
((n.Directions = l), s.d(t, {}, { A: n }));
