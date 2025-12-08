n.d(t, { Z: () => h });
var a = n(54381),
    l = n(473749),
    r = n(442837),
    i = n(28664),
    s = n(481060),
    o = n(607070),
    c = n(7093),
    d = n(817466),
    u = n(388032),
    m = n(119290);
let p = l.lazy(() => n.e("77898").then(n.bind(n, 739859)));
function h() {
    let e = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        t = (0, c.Z)((e) => e.shouldRenderTenureLevelUp),
        n = (0, d.Z)();
    return e || !t || null == n ? null : (0, a.jsx)(x, { levelUpData: n });
}
function x(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        r = l.useCallback(() => {
            c.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        l.useEffect(() => r, [r]),
        (0, a.jsx)(s.EqS, {
            containerRef: n,
            children: (0, a.jsxs)("div", {
                className: m.wrapper,
                children: [
                    (0, a.jsx)("div", {
                        className: m.closeButton,
                        children: (0, a.jsx)(i.u, {
                            text: u.intl.string(u.t.cpT0Cq),
                            children: (0, a.jsx)(s.hU, {
                                icon: s.Dio,
                                variant: "secondary",
                                size: "sm",
                                onClick: r,
                                "aria-label": u.intl.string(u.t.cpT0Cq),
                            }),
                        }),
                    }),
                    (0, a.jsx)(l.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(p, { levelUpData: t }),
                    }),
                ],
            }),
        })
    );
}
