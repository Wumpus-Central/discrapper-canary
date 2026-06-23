l.r(s), l.d(s, { default: () => P });
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
    x = l(621653),
    f = l(983545),
    b = l(599062),
    y = l(956123),
    g = l(146919),
    A = l(758836),
    k = l(652215),
    v = l(647685);
let P = function (e) {
    let { layoutId: s } = e;
    (0, d.P)(i.a), (0, x.g)(), (0, p.pE)();
    let l = t.useRef(null);
    t.useEffect(() => {
        l.current?.focus();
    }, []);
    let r = (0, g.yB)("CollectiblesShopLayout");
    (0, g.gB)();
    let { selectedTab: P, transitionToTab: m } = (0, f.o)(A.G2.LAYOUT),
        { layout: C, loading: E, error: G } = (0, j.A)(k.FYj, s);
    return (0, n.jsxs)("div", {
        className: a()(v.bx, { [g.jP]: r }),
        ref: l,
        tabIndex: -1,
        children: [
            (0, n.jsx)(y.G, { handleTransition: m, selectedTab: P }),
            (0, n.jsx)(c.Ip, {
                children: (0, n.jsx)("div", {
                    className: v.Qs,
                    children:
                        E || null == s
                            ? (0, n.jsx)(u.y, {})
                            : null != G
                              ? (0, n.jsx)(b.h, {
                                    errorMessage: G.message,
                                    errorOrigin: b.A.SHOP_PAGE,
                                    onRetry: () => {
                                        (0, o.v)({ tenantId: k.FYj, layoutId: s });
                                    },
                                })
                              : null != C
                                ? (0, n.jsx)(h.Ay, { layout: C })
                                : null,
                }),
            }),
        ],
    });
};
