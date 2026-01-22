n.d(t, {
    A: () => h,
});
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(990078),
    s = n(397927),
    o = n(775602),
    c = n(832248),
    d = n(323970),
    u = n(985018),
    m = n(876402);
let p = l.lazy(() => n.e("24832").then(n.bind(n, 748579)));

function h() {
    let e = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        t = (0, c.A)((e) => e.shouldRenderTenureLevelUp),
        n = (0, d.A)();
    return e || !t || null == n
        ? null
        : (0, a.jsx)(f, {
              levelUpData: n,
          });
}

function f(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        i = l.useCallback(() => {
            c.A.setState({
                shouldRenderTenureLevelUp: !1,
            });
        }, []);
    return (
        l.useEffect(() => i, [i]),
        (0, a.jsx)(s.Oky, {
            containerRef: n,
            children: (0, a.jsxs)("div", {
                className: m.i,
                children: [
                    (0, a.jsx)("div", {
                        className: m.b,
                        children: (0, a.jsx)(r.m, {
                            text: u.intl.string(u.t.cpT0Cq),
                            children: (0, a.jsx)(s.K0, {
                                icon: s.PGe,
                                variant: "secondary",
                                size: "sm",
                                onClick: i,
                                "aria-label": u.intl.string(u.t.cpT0Cq),
                            }),
                        }),
                    }),
                    (0, a.jsx)(l.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(p, {
                            levelUpData: t,
                        }),
                    }),
                ],
            }),
        })
    );
}
