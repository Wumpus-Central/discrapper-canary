s.d(r, { A: () => u });
var e = s(477900);
s(582128);
var c = s(900797),
    o = s(847374),
    i = s(921853),
    a = s(320448),
    l = s(103335);
let h = { UP: l.hv, RIGHT: l.kL, DOWN: l.Gb, LEFT: l.PI };
function n(t) {
    let {
            direction: r = h.DOWN,
            width: s = 24,
            height: l = 24,
            color: n = "currentColor",
            className: u,
            foreground: p,
            expanded: d,
            ...k
        } = t,
        C = r;
    !0 === d ? (C = h.DOWN) : !1 === d && (C = h.RIGHT);
    let D = { [h.UP]: c.t, [h.DOWN]: o.a, [h.LEFT]: i.n, [h.RIGHT]: a._ }[C];
    return (0, e.jsx)(D, {
        ...k,
        className: u,
        size: "custom",
        width: s,
        height: l,
        color: n ?? "currentColor",
        colorClass: p,
    });
}
n.Directions = h;
let u = n;
