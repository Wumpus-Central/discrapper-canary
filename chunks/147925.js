var c = e(477900);
e(582128);
var l = e(900797),
    n = e(847374),
    t = e(921853),
    s = e(320448),
    h = e(103335);
let a = { UP: h.hv, RIGHT: h.kL, DOWN: h.Gb, LEFT: h.PI };
function i(o) {
    let {
            direction: r = a.DOWN,
            width: e = 24,
            height: h = 24,
            color: i = "currentColor",
            className: u,
            foreground: C,
            expanded: p,
            ...I
        } = o,
        v = r;
    !0 === p ? (v = a.DOWN) : !1 === p && (v = a.RIGHT);
    let d = {
        [a.UP]: l.ChevronSmallUpIcon,
        [a.DOWN]: n.ChevronSmallDownIcon,
        [a.LEFT]: t.ChevronSmallLeftIcon,
        [a.RIGHT]: s.ChevronSmallRightIcon,
    }[v];
    return (0, c.jsx)(d, {
        ...I,
        className: u,
        size: "custom",
        width: e,
        height: h,
        color: i ?? "currentColor",
        colorClass: C,
    });
}
((i.Directions = a), e.d(r, {}, { A: i }));
