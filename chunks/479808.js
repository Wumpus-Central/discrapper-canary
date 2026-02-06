n.r(t), n.d(t, { default: () => T });
var _ = n(627968),
    a = n(64700),
    r = n(503698),
    d = n.n(r),
    s = n(311907),
    l = n(397927),
    i = n(409013),
    o = n(972441),
    c = n(785330),
    u = n(49463),
    h = n(697454),
    p = n(611924),
    b = n(976860),
    C = n(594832),
    A = n(621653),
    g = n(983545),
    E = n(599062),
    L = n(155486),
    y = n(938191),
    S = n(758836),
    F = n(652215),
    O = n(157884);
let T = (e) => {
    let { layoutId: t } = e;
    (0, p.P)(h.a), (0, A.g)(), (0, C.pE)();
    let n = a.useRef(null);
    a.useEffect(() => {
        n.current?.focus();
    }, []);
    let r = (0, y.yB)("CollectiblesShopLayout");
    (0, y.gB)();
    let { selectedTab: T, transitionToTab: j } = (0, g.o)(S.G2.LAYOUT),
        x = (0, s.bG)([u.A], () => u.A.hasLoadedExperiments),
        [f, m, v] = (0, s.yK)([o.A], () => [o.A.getLayout(t), o.A.isFetchingLayout(t), o.A.getFetchError(t)]);
    return (
        a.useEffect(() => {
            null == f && null != t && x && (0, i.v)({ tenantId: F.FYj, layoutId: t });
        }, [f, t, x]),
        a.useEffect(() => {
            null == t && (0, b.pX)(F.BVt.COLLECTIBLES_SHOP);
        }, [t]),
        (0, _.jsxs)("div", {
            className: d()(O.bx, { [y.jP]: r }),
            ref: n,
            tabIndex: -1,
            children: [
                (0, _.jsx)(L.G, { handleTransition: j, selectedTab: T }),
                (0, _.jsx)(l.HOs, {
                    children: (0, _.jsx)("div", {
                        className: O.Qs,
                        children:
                            m || null == t
                                ? (0, _.jsx)(l.y$y, {})
                                : null != v
                                  ? (0, _.jsx)(E.h, {
                                        errorMessage: v.message,
                                        errorOrigin: E.A.SHOP_PAGE,
                                        onRetry: () => {
                                            (0, i.v)({ tenantId: F.FYj, layoutId: t });
                                        },
                                    })
                                  : null != f
                                    ? (0, _.jsx)(c.A, { layout: f })
                                    : null,
                    }),
                }),
            ],
        })
    );
};
