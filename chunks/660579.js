r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(810097);
function l(e) {
    let { children: n, className: r, onShowToolbar: i, ...l } = e,
        u = o.useRef(null),
        [c, d] = o.useState(!1),
        f = () => {
            null == i || i(), d(!0);
        },
        p = () => {
            d(!1);
        };
    return (0, a.jsxs)('div', {
        className: r,
        onMouseEnter: f,
        onMouseLeave: p,
        onFocus: f,
        onBlur: (e) => {
            var n;
            !(null === (n = u.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && p();
        },
        ref: u,
        children: [
            n,
            (0, a.jsx)(s.ZP, {
                isVisible: c,
                isExpandable: !1,
                ...l
            })
        ]
    });
}
