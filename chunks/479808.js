r.r(_), r.d(_, { default: () => x });
var s = r(627968),
    d = r(64700),
    t = r(503698),
    o = r.n(t),
    n = r(397927),
    i = r(409013),
    l = r(785330),
    a = r(856535),
    b = r(697454),
    c = r(611924),
    m = r(594832),
    u = r(621653),
    g = r(983545),
    h = r(599062),
    p = r(155486),
    I = r(938191),
    w = r(758836),
    C = r(652215),
    f = r(157884);
let x = (e) => {
    let { layoutId: _ } = e;
    (0, c.P)(b.a), (0, u.g)(), (0, m.pE)();
    let r = d.useRef(null);
    d.useEffect(() => {
        r.current?.focus();
    }, []);
    let t = (0, I.yB)("CollectiblesShopLayout");
    (0, I.gB)();
    let { selectedTab: x, transitionToTab: R } = (0, g.o)(w.G2.LAYOUT),
        { layout: j, loading: v, error: k } = (0, a.A)(C.FYj, _);
    return (0, s.jsxs)("div", {
        className: o()(f.bx, { [I.jP]: t }),
        ref: r,
        tabIndex: -1,
        children: [
            (0, s.jsx)(p.G, { handleTransition: R, selectedTab: x }),
            (0, s.jsx)(n.HOs, {
                children: (0, s.jsx)("div", {
                    className: f.Qs,
                    children:
                        v || null == _
                            ? (0, s.jsx)(n.y$y, {})
                            : null != k
                              ? (0, s.jsx)(h.h, {
                                    errorMessage: k.message,
                                    errorOrigin: h.A.SHOP_PAGE,
                                    onRetry: () => {
                                        (0, i.v)({ tenantId: C.FYj, layoutId: _ });
                                    },
                                })
                              : null != j
                                ? (0, s.jsx)(l.Ay, { layout: j })
                                : null,
                }),
            }),
        ],
    });
};
