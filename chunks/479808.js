l.r(s), l.d(s, { default: () => P });
var r = l(627968),
    t = l(64700),
    n = l(503698),
    a = l.n(n),
    u = l(289873),
    c = l(364522),
    d = l(409013),
    i = l(785330),
    o = l(856535),
    h = l(475073),
    j = l(611924),
    p = l(594832),
    x = l(621653),
    b = l(983545),
    f = l(599062),
    y = l(630330),
    g = l(146919),
    A = l(758836),
    k = l(652215),
    v = l(647685);
let P = (e) => {
    let { layoutId: s } = e;
    (0, j.P)(h.a), (0, x.g)(), (0, p.pE)();
    let l = t.useRef(null);
    t.useEffect(() => {
        l.current?.focus();
    }, []);
    let n = (0, g.yB)("CollectiblesShopLayout");
    (0, g.gB)();
    let { selectedTab: P, transitionToTab: m } = (0, b.o)(A.G2.LAYOUT),
        { layout: C, loading: E, error: G } = (0, o.A)(k.FYj, s);
    return (0, r.jsxs)("div", {
        className: a()(v.bx, { [g.jP]: n }),
        ref: l,
        tabIndex: -1,
        children: [
            (0, r.jsx)(y.G, { handleTransition: m, selectedTab: P }),
            (0, r.jsx)(c.Ip, {
                children: (0, r.jsx)("div", {
                    className: v.Qs,
                    children:
                        E || null == s
                            ? (0, r.jsx)(u.y, {})
                            : null != G
                              ? (0, r.jsx)(f.h, {
                                    errorMessage: G.message,
                                    errorOrigin: f.A.SHOP_PAGE,
                                    onRetry: () => {
                                        (0, d.v)({ tenantId: k.FYj, layoutId: s });
                                    },
                                })
                              : null != C
                                ? (0, r.jsx)(i.Ay, { layout: C })
                                : null,
                }),
            }),
        ],
    });
};
