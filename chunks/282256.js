n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(434650),
    o = n(393903),
    c = n(448986),
    u = n(353093),
    d = n(979264),
    m = n(598373);
t.Z = l.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: a, ...f } = e,
        p = l.useRef(null),
        [h, g] = l.useState({ maskImage: 'none' }),
        v = (0, c.Z)(() => {
            var e, t;
            if (n) {
                g({ maskImage: 'none' });
                return;
            }
            let i = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                l = null === (t = p.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == i || null == l) {
                g({ maskImage: 'none' });
                return;
            }
            let a = l.right - i.right,
                r = l.width - a;
            if (r > l.width) {
                g({ maskImage: 'none' });
                return;
            }
            g({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(r, 'px)') });
        }),
        S = (0, o.y)(v),
        I = (0, u.p0)(f.userId, a),
        _ = {
            handleResize: v,
            positionTrackerRef: S
        },
        x = l.useRef(_);
    l.useEffect(() => {
        x.current = _;
    }),
        l.useEffect(() => {
            let { handleResize: e, positionTrackerRef: t } = x.current;
            if (null != t.current) e();
        }, [I]);
    let E = (0, s.O)(v);
    return (0, i.jsxs)('div', {
        className: r()(m.container, n && m.isOverlayContainer),
        ref: S,
        children: [
            (0, i.jsx)('div', {
                className: m.usernameContainer,
                children: t
            }),
            (0, i.jsx)('div', {
                className: m.chipletParent,
                ref: E,
                children: (0, i.jsx)('span', {
                    className: r()(m.chipletContainer, !I && n && m.noPadding),
                    ref: p,
                    style: h,
                    children: (0, i.jsx)(d.ZP, {
                        ...f,
                        contextGuildId: a,
                        className: r()(f.className, n && m.isOverlayTag)
                    })
                })
            })
        ]
    });
});
