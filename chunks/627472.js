n.d(t, { z: () => u }), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(489948),
    l = n(780900);
function u(e, t) {
    let n = (0, l.G6)(e);
    return r.forwardRef(function (a, u) {
        let { children: c, className: d, dir: f = 'ltr', orientation: _ = 'vertical', paddingFix: p = !0, fade: h = !1, onScroll: m, style: g, ...E } = a,
            v = r.useRef(null),
            y = (0, l.tT)({
                paddingFix: p,
                orientation: _,
                dir: f,
                className: d,
                scrollerRef: v,
                specs: n
            });
        return (0, i.jsx)('div', {
            ref: (e) => {
                'function' == typeof u ? u(e) : null != u && (u.current = e), (v.current = e);
            },
            className: s()(d, {
                [e]: !0,
                [t]: h
            }),
            style: (0, l.uT)(g, _),
            dir: f,
            ...E,
            children: (0, i.jsxs)(o.Jc, {
                containerRef: v,
                children: [c, y]
            })
        });
    });
}
