n.d(t, { A: () => x });
var a = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(990078),
    r = n(397927),
    o = n(775602),
    d = n(832248),
    c = n(323970),
    u = n(985018),
    m = n(876402);
let h = s.lazy(() => n.e("24832").then(n.bind(n, 748579)));
function x() {
    let e = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        t = (0, d.A)((e) => e.shouldRenderTenureLevelUp),
        n = (0, c.A)();
    return e || !t || null == n ? null : (0, a.jsx)(p, { levelUpData: n });
}
function p(e) {
    let { levelUpData: t } = e,
        n = s.useRef(null),
        i = s.useCallback(() => {
            d.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        s.useEffect(() => i, [i]),
        (0, a.jsx)(r.Oky, {
            containerRef: n,
            children: (0, a.jsxs)("div", {
                className: m.i,
                children: [
                    (0, a.jsx)("div", {
                        className: m.b,
                        children: (0, a.jsx)(l.m, {
                            text: u.intl.string(u.t.cpT0Cq),
                            children: (0, a.jsx)(r.K0, {
                                icon: r.PGe,
                                variant: "secondary",
                                size: "sm",
                                onClick: i,
                                "aria-label": u.intl.string(u.t.cpT0Cq),
                            }),
                        }),
                    }),
                    (0, a.jsx)(s.Suspense, { fallback: null, children: (0, a.jsx)(h, { levelUpData: t }) }),
                ],
            }),
        })
    );
}
