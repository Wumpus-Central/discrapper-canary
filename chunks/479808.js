t.r(_), t.d(_, { default: () => L });
var n = t(627968),
    a = t(64700),
    d = t(503698),
    r = t.n(d),
    s = t(311907),
    i = t(397927),
    o = t(409013),
    c = t(972441),
    l = t(785330),
    b = t(49463),
    u = t(697454),
    h = t(611924),
    p = t(976860),
    g = t(594832),
    x = t(621653),
    j = t(983545),
    A = t(599062),
    E = t(155486),
    f = t(938191),
    C = t(758836),
    v = t(652215),
    y = t(157884);
let L = (e) => {
    let { layoutId: _ } = e;
    (0, h.P)(u.a), (0, x.g)(), (0, g.pE)();
    let t = a.useRef(null);
    a.useEffect(() => {
        t.current?.focus();
    }, []);
    let d = (0, f.yB)("CollectiblesShopLayout");
    (0, f.gB)();
    let { selectedTab: L, transitionToTab: m } = (0, j.o)(C.G2.LAYOUT),
        B = (0, s.bG)([b.A], () => b.A.hasLoadedExperiments),
        [I, O, k] = (0, s.yK)([c.A], () => [c.A.getLayout(_), c.A.isFetchingLayout(_), c.A.getFetchError(_)]);
    return (
        a.useEffect(() => {
            null == I && null != _ && B && (0, o.v)({ tenantId: v.FYj, layoutId: _ });
        }, [I, _, B]),
        a.useEffect(() => {
            null == _ && (0, p.pX)(v.BVt.COLLECTIBLES_SHOP);
        }, [_]),
        (0, n.jsxs)("div", {
            className: r()(y.bx, { [f.jP]: d }),
            ref: t,
            tabIndex: -1,
            children: [
                (0, n.jsx)(E.G, { handleTransition: m, selectedTab: L }),
                (0, n.jsx)(i.HOs, {
                    children: (0, n.jsx)("div", {
                        className: y.Qs,
                        children:
                            O || null == _
                                ? (0, n.jsx)(i.y$y, {})
                                : null != k
                                  ? (0, n.jsx)(A.h, {
                                        errorMessage: k.message,
                                        errorOrigin: A.A.SHOP_PAGE,
                                        onRetry: () => {
                                            (0, o.v)({ tenantId: v.FYj, layoutId: _ });
                                        },
                                    })
                                  : null != I
                                    ? (0, n.jsx)(l.Ay, { layout: I })
                                    : null,
                    }),
                }),
            ],
        })
    );
};
