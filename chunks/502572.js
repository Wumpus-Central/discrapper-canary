t.d(i, { A: () => l });
var s = t(477900),
    n = t(582128),
    a = t(900002);
function l(e) {
    let { mouseLeaveDelay: i = 100, ...t } = e,
        { children: l, className: r, ...c } = t,
        d = n.useRef(0),
        [u, o] = n.useState(!1);
    return (0, s.jsx)("div", {
        className: r,
        onMouseEnter:
            0 !== i
                ? function () {
                      clearTimeout(d.current), o(!0);
                  }
                : () => {},
        onMouseLeave:
            0 !== i
                ? function () {
                      clearTimeout(d.current), (d.current = setTimeout(() => o(!1), i));
                  }
                : () => {},
        children: (0, s.jsx)(a.ST, {
            "data-migration-pending": !0,
            forceOpen: u,
            disableTooltipPointerEvents: !1,
            ...c,
            children: l,
        }),
    });
}
