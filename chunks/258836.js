n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(990078),
    r = n(315710),
    o = n(408278),
    d = n(789645),
    c = n(775602),
    u = n(832248),
    p = n(323970),
    h = n(985018),
    m = n(682165);
let _ = s.lazy(() => n.e("24832").then(n.bind(n, 748579)));
function A() {
    let e = (0, l.bG)([c.A], () => c.A.useReducedMotion),
        t = (0, u.A)((e) => e.shouldRenderTenureLevelUp),
        n = (0, p.A)();
    return e || !t || null == n ? null : (0, i.jsx)(f, { levelUpData: n });
}
function f(e) {
    let { levelUpData: t } = e,
        n = s.useRef(null),
        l = s.useCallback(() => {
            u.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        s.useEffect(() => l, [l]),
        (0, i.jsx)(r.O, {
            containerRef: n,
            children: (0, i.jsxs)("div", {
                className: m.i,
                children: [
                    (0, i.jsx)("div", {
                        className: m.b,
                        children: (0, i.jsx)(a.m, {
                            text: h.intl.string(h.t.cpT0Cq),
                            children: (0, i.jsx)(o.K, {
                                icon: d.P,
                                variant: "secondary",
                                size: "sm",
                                onClick: l,
                                "aria-label": h.intl.string(h.t.cpT0Cq),
                            }),
                        }),
                    }),
                    (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(_, { levelUpData: t }) }),
                ],
            }),
        })
    );
}
