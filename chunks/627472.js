r.d(n, {
    z: function () {
        return d;
    }
});
var i = r(411104);
var a = r(200651),
    o = r(192379),
    s = r(803997),
    l = r.n(s),
    u = r(489948),
    c = r(780900);
function d(e, n) {
    let r = (0, c.G6)(e);
    return o.forwardRef(function (i, s) {
        let { children: d, className: f, dir: p = 'ltr', orientation: h = 'vertical', paddingFix: _ = !0, fade: m = !1, onScroll: g, style: E, ...v } = i,
            y = o.useRef(null),
            b = (0, c.tT)({
                paddingFix: _,
                orientation: h,
                dir: p,
                className: f,
                scrollerRef: y,
                specs: r
            });
        return (0, a.jsx)('div', {
            ref: (e) => {
                'function' == typeof s ? s(e) : null != s && (s.current = e), (y.current = e);
            },
            className: l()(f, {
                [e]: !0,
                [n]: m
            }),
            style: (0, c.uT)(E, h),
            dir: p,
            ...v,
            children: (0, a.jsxs)(u.Jc, {
                containerRef: y,
                children: [d, b]
            })
        });
    });
}
