n.d(t, { Z: () => h }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(434650),
    o = n(393903),
    u = n(448986),
    c = n(353093),
    d = n(979264),
    m = n(438633);
let h = i.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: r, ...h } = e,
        g = i.useRef(null),
        [f, p] = i.useState({ maskImage: 'none' }),
        v = (0, u.Z)(() => {
            var e, t;
            if (n) {
                p({ maskImage: 'none' });
                return;
            }
            let l = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                i = null === (t = g.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == l || null == i) {
                p({ maskImage: 'none' });
                return;
            }
            let r = i.right - l.right,
                a = i.width - r;
            if (a > i.width) {
                p({ maskImage: 'none' });
                return;
            }
            p({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(a, 'px)') });
        }),
        S = (0, o.y)(v),
        I = (0, c.p0)(h.userId, r),
        x = {
            handleResize: v,
            positionTrackerRef: S
        },
        T = i.useRef(x);
    i.useEffect(() => {
        T.current = x;
    }),
        i.useEffect(() => {
            let { handleResize: e, positionTrackerRef: t } = T.current;
            null != t.current && e();
        }, [I]);
    let Z = (0, s.O)(v);
    return (0, l.jsxs)('div', {
        className: a()(m.container, n && m.isOverlayContainer),
        ref: S,
        children: [
            (0, l.jsx)('div', {
                className: m.usernameContainer,
                children: t
            }),
            (0, l.jsx)('div', {
                className: m.chipletParent,
                ref: Z,
                children: (0, l.jsx)('span', {
                    className: a()(m.chipletContainer, !I && n && m.noPadding),
                    ref: g,
                    style: f,
                    children: (0, l.jsx)(d.ZP, {
                        ...h,
                        contextGuildId: r,
                        className: a()(h.className, n && m.isOverlayTag)
                    })
                })
            })
        ]
    });
});
