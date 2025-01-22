r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(981729);
function l(e) {
    let { mouseLeaveDelay: n = 100, ...r } = e,
        { children: i, className: l, ...u } = r,
        c = o.useRef(0),
        [d, f] = o.useState(!1);
    function p() {
        clearTimeout(c.current), f(!0);
    }
    function h() {
        clearTimeout(c.current), (c.current = setTimeout(() => f(!1), n));
    }
    return (0, a.jsx)('div', {
        className: l,
        onMouseEnter: 0 !== n ? p : () => {},
        onMouseLeave: 0 !== n ? h : () => {},
        children: (0, a.jsx)(s.u, {
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...u,
            children: i
        })
    });
}
