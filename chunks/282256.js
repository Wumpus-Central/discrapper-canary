n.d(t, { Z: () => p }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(434650),
    o = n(393903),
    c = n(448986),
    u = n(353093),
    d = n(979264),
    m = n(506800);
let p = i.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: r, ...p } = e,
        h = i.useRef(null),
        [g, f] = i.useState({ maskImage: 'none' }),
        v = (0, c.Z)(() => {
            var e, t;
            if (n) {
                f({ maskImage: 'none' });
                return;
            }
            let l = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                i = null === (t = h.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == l || null == i) {
                f({ maskImage: 'none' });
                return;
            }
            let r = i.right - l.right,
                a = i.width - r;
            if (a > i.width) {
                f({ maskImage: 'none' });
                return;
            }
            f({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(a, 'px)') });
        }),
        S = (0, o.y)(v),
        x = (0, u.p0)(p.userId, r),
        I = {
            handleResize: v,
            positionTrackerRef: S
        },
        y = i.useRef(I);
    i.useEffect(() => {
        y.current = I;
    }),
        i.useEffect(() => {
            let { handleResize: e, positionTrackerRef: t } = y.current;
            null != t.current && e();
        }, [x]);
    let T = (0, s.O)(v);
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
                ref: T,
                children: (0, l.jsx)('span', {
                    className: a()(m.chipletContainer, !x && n && m.noPadding),
                    ref: h,
                    style: g,
                    children: (0, l.jsx)(d.ZP, {
                        ...p,
                        contextGuildId: r,
                        className: a()(p.className, n && m.isOverlayTag)
                    })
                })
            })
        ]
    });
});
