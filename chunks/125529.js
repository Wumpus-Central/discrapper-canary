n.d(t, { Z: () => s }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(981729);
function s(e) {
    let { mouseLeaveDelay: t = 100, ...n } = e,
        { children: s, className: o, ...l } = n,
        u = r.useRef(0),
        [c, d] = r.useState(!1);
    function f() {
        clearTimeout(u.current), d(!0);
    }
    function _() {
        clearTimeout(u.current), (u.current = setTimeout(() => d(!1), t));
    }
    return (0, i.jsx)('div', {
        className: o,
        onMouseEnter: 0 !== t ? f : () => {},
        onMouseLeave: 0 !== t ? _ : () => {},
        children: (0, i.jsx)(a.u, {
            forceOpen: c,
            disableTooltipPointerEvents: !1,
            ...l,
            children: s
        })
    });
}
