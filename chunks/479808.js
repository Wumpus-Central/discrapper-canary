l.r(s), l.d(s, { default: () => v });
var n = l(627968),
    t = l(64700),
    r = l(503698),
    a = l.n(r),
    u = l(289873),
    c = l(364522),
    i = l(475073),
    d = l(611924),
    o = l(851245),
    h = l(356118),
    j = l(790219),
    p = l(561794),
    x = l(983545),
    f = l(599062),
    b = l(956123),
    y = l(146919),
    A = l(758836),
    g = l(652215),
    k = l(195261);
let v = function (e) {
    let { layoutId: s } = e;
    (0, d.P)(i.a), (0, p.pE)();
    let l = t.useRef(null);
    t.useEffect(() => {
        l.current?.focus();
    }, []);
    let r = (0, y.yB)("CollectiblesShopLayout");
    (0, y.gB)();
    let { selectedTab: v, transitionToTab: P } = (0, x.o)(A.G2.LAYOUT),
        { layout: m, loading: C, error: E } = (0, j.A)(g.FYj, s);
    return (0, n.jsxs)("div", {
        className: a()(k.bx, { [y.jP]: r }),
        ref: l,
        tabIndex: -1,
        children: [
            (0, n.jsx)(b.G, { handleTransition: P, selectedTab: v }),
            (0, n.jsx)(c.Ip, {
                children: (0, n.jsx)("div", {
                    className: k.Qs,
                    children:
                        C || null == s
                            ? (0, n.jsx)(u.y, {})
                            : null != E
                              ? (0, n.jsx)(f.h, {
                                    errorMessage: E.message,
                                    errorOrigin: f.A.SHOP_PAGE,
                                    onRetry: () => {
                                        (0, o.v)({ tenantId: g.FYj, layoutId: s });
                                    },
                                })
                              : null != m
                                ? (0, n.jsx)(h.Ay, { layout: m })
                                : null,
                }),
            }),
        ],
    });
};
