(s.r(l), s.d(l, { default: () => D }));
var n = s(477900),
    t = s(582128),
    r = s(503698),
    c = s.n(r),
    i = s(115560),
    o = s(192308),
    d = s(944791),
    u = s(444927),
    a = s(840251),
    E = s(688151);
let h = new a.E([], E.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var C = s(611924),
    I = s(744082),
    x = s(634110),
    j = s(371794),
    L = s(857512),
    f = s(662829),
    O = s(724874),
    _ = s(821816),
    p = s(806163),
    T = s(95362),
    b = s(516521),
    S = s(688810),
    B = s(354328),
    v = s(790297),
    A = s(706113),
    N = s(841702),
    P = s(983545),
    R = s(685491),
    g = s(235939),
    G = s(316108),
    H = s(415926),
    k = s(758836),
    m = s(652215);
function w(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: t } = (0, H.r)(l, k.G2.COLLECTION_INDEX);
    return (0, n.jsx)(b.Ch, { ref: l, onScroll: t, children: s });
}
let V = function (e) {
    let { collectionId: l, sessionId: s } = e,
        r = t.useRef(null),
        { selectedTab: c, transitionToTab: i, transitionState: o } = (0, P.oI)(k.G2.COLLECTION_INDEX);
    (0, N.Wg)(!0);
    let d = (0, B.A)("shop_include_unpublished"),
        { category: u, state: a } = (0, A.A)(l, { includeUnpublished: d, includePricing: !0 }),
        E = u ?? void 0,
        { analyticsLocations: h } = (0, v.lC)(k.G2.COLLECTION_INDEX);
    return ((0, v.uS)(s, c, E?.name, o, { enabled: null != E }),
    t.useEffect(() => {
        r.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== a && null == E)
        ? (0, n.jsx)(p.rd, { to: m.BVt.COLLECTIBLES_SHOP })
        : E?.isOrbsExclusive === !0
          ? (0, n.jsx)(p.rd, { to: m.BVt.COLLECTIBLES_SHOP_WITH_TAB(k.G2.ORBS) })
          : (0, n.jsxs)(S.f5, {
                value: h,
                children: [
                    (0, n.jsx)(R.G, { handleTransition: i, selectedTab: c, selectedCollectionId: l }),
                    null == E
                        ? (0, n.jsx)(T.Ip, { children: (0, n.jsx)(G.rK, {}) })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(g.A, { tab: c, handleTransition: i }),
                                  (0, n.jsx)(w, { scrollerRef: r, children: (0, n.jsx)(G.Ay, { collectionId: l }) }),
                              ],
                          }),
                ],
            });
};
var X = s(532603),
    y = s(170522);
let D = (e) => {
    let { tab: l, collectionId: s } = e;
    (0, C.P)(h);
    let r = (0, u.A)(() => (0, i.A)()),
        a = (0, X.yB)("CollectiblesShop");
    ((0, X.gB)(a),
        (0, x.pE)(),
        (0, f.X_)(),
        (0, I.A)(m.FYj),
        t.useEffect(() => {
            (0, j.rW)();
        }, []),
        t.useEffect(() => {
            (0, d.I)(m.BVt.COLLECTIBLES_SHOP);
        }, []));
    let E = t.useMemo(() => ({ sessionId: r }), [r]),
        p = t.useRef(null),
        T = (0, o.Rv)();
    return (0, n.jsx)(L.R9, {
        newValue: E,
        children: (0, n.jsx)("div", {
            className: c()(y.bx, { [X.jP]: a }),
            ref: p,
            inert: T,
            tabIndex: -1,
            children: (0, n.jsx)(O.Y, {
                children:
                    null != s && "" !== s
                        ? (0, n.jsx)(V, { collectionId: s, sessionId: r })
                        : (0, n.jsx)(_.default, { tab: l, sessionId: r, containerRef: p }),
            }),
        }),
    });
};
