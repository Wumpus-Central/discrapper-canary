(l.r(t), l.d(t, { default: () => ee }));
var n = l(477900),
    r = l(582128),
    s = l(503698),
    i = l.n(s),
    o = l(115560),
    c = l(192308),
    a = l(944791),
    u = l(444927),
    d = l(840251),
    f = l(688151);
let h = new d.E([], f.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var E = l(611924),
    C = l(744082),
    j = l(634110),
    p = l(371794),
    x = l(857512),
    A = l(313217),
    I = l(855986),
    _ = l(598047),
    m = l(828596),
    O = l(918467),
    b = l(927813),
    L = l(945810);
let S = { enabled: !1, maxJitterMs: 0 },
    T = (0, L.mj)({
        name: "2026-11-shop-promotion-expiry-refetch",
        kind: "user",
        defaultConfig: S,
        variations: {
            0: S,
            1: { enabled: !0, maxJitterMs: 30 * b.A.Millis.SECOND },
            2: { enabled: !0, maxJitterMs: 45 * b.A.Millis.SECOND },
            3: { enabled: !0, maxJitterMs: b.A.Millis.MINUTE },
        },
    });
var g = l(669470),
    v = l(652215);
let F = 5 * b.A.Millis.SECOND;
var M = l(662829),
    N = l(724874),
    B = l(821816),
    P = l(806163),
    R = l(95362),
    D = l(516521),
    w = l(688810),
    G = l(354328),
    Y = l(790297),
    k = l(706113),
    H = l(841702),
    X = l(983545),
    y = l(685491),
    J = l(235939),
    V = l(316108),
    W = l(415926),
    U = l(758836);
function q(e) {
    let { scrollerRef: t, children: l } = e,
        { handleScroll: r } = (0, W.r)(t, U.G2.COLLECTION_INDEX);
    return (0, n.jsx)(D.Ch, { ref: t, onScroll: r, children: l });
}
let K = function (e) {
    let { collectionId: t, sessionId: l } = e,
        s = r.useRef(null),
        { selectedTab: i, transitionToTab: o, transitionState: c } = (0, X.oI)(U.G2.COLLECTION_INDEX);
    (0, H.Wg)(!0);
    let a = (0, G.A)("shop_include_unpublished"),
        { category: u, state: d } = (0, k.A)(t, { includeUnpublished: a, includePricing: !0 }),
        f = u ?? void 0,
        { analyticsLocations: h } = (0, Y.lC)(U.G2.COLLECTION_INDEX);
    return ((0, Y.uS)(l, i, f?.name, c, { enabled: null != f }),
    r.useEffect(() => {
        s.current?.scrollTo({ to: 0 });
    }, [t]),
    "loading" !== d && null == f)
        ? (0, n.jsx)(P.rd, { to: v.BVt.COLLECTIBLES_SHOP })
        : f?.isOrbsExclusive === !0
          ? (0, n.jsx)(P.rd, { to: v.BVt.COLLECTIBLES_SHOP_WITH_TAB(U.G2.ORBS) })
          : (0, n.jsxs)(w.f5, {
                value: h,
                children: [
                    (0, n.jsx)(y.G, { handleTransition: o, selectedTab: i, selectedCollectionId: t }),
                    null == f
                        ? (0, n.jsx)(R.Ip, { children: (0, n.jsx)(V.rK, {}) })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(J.A, { tab: i, handleTransition: o }),
                                  (0, n.jsx)(q, { scrollerRef: s, children: (0, n.jsx)(V.Ay, { collectionId: t }) }),
                              ],
                          }),
                ],
            });
};
var $ = l(164636),
    z = l(407408),
    Q = l(532603),
    Z = l(170522);
let ee = (e) => {
    var t;
    let l,
        { tab: s, collectionId: d } = e;
    (0, E.P)(h);
    let f = (0, u.A)(() => (0, o.A)()),
        b = (0, Q.yB)("CollectiblesShop");
    ((0, Q.gB)(b),
        (0, j.pE)(),
        (0, M.X_)(),
        (0, C.A)(v.FYj),
        (function () {
            let e = (0, _.A)(),
                { promotions: t, isFetchInFlight: l } = (0, I.cf)([O.A], () => ({
                    promotions: O.A.getPromotionsForApplication(v.FYj),
                    isFetchInFlight: "loading" === O.A.getFetchState(v.FYj),
                })),
                n = r.useRef(new Set()),
                s = r.useRef(void 0);
            r.useEffect(() => {
                if (!e || l) return;
                let r = (0, g.U2)(t, n.current),
                    i = r?.endsAt?.getTime();
                if (null == r || null == i) return;
                let { enabled: o, maxJitterMs: c } = T.getConfig({
                    location: "collectibles_shop_root_sequenced_offer_refetch",
                });
                if (!o) return;
                let a = () => {
                        (n.current.add(r.id), (0, m.rd)([v.FYj]));
                    },
                    u = () => {
                        if (Date.now() < i) {
                            s.current = setTimeout(u, Math.min(v.mnr, i - Date.now()));
                            return;
                        }
                        s.current = setTimeout(a, F + Math.floor(Math.random() * c));
                    };
                return (u(), () => clearTimeout(s.current));
            }, [e, l, t]);
        })(),
        (t = (0, A.s)("collectibles_shop_root")),
        (l = (0, $.bG)([O.A], () =>
            t && "success" === O.A.getFetchState(v.FYj) ? O.A.getPromotionsForApplication(v.FYj) : null,
        )),
        r.useEffect(() => {
            null != l && (0, z.X)();
        }, [l]),
        r.useEffect(() => {
            (0, p.rW)();
        }, []),
        r.useEffect(() => {
            (0, a.I)(v.BVt.COLLECTIBLES_SHOP);
        }, []));
    let L = r.useMemo(() => ({ sessionId: f }), [f]),
        S = r.useRef(null),
        P = (0, c.Rv)();
    return (0, n.jsx)(x.R9, {
        newValue: L,
        children: (0, n.jsx)("div", {
            className: i()(Z.bx, { [Q.jP]: b }),
            ref: S,
            inert: P,
            tabIndex: -1,
            children: (0, n.jsx)(N.Y, {
                children:
                    null != d && "" !== d
                        ? (0, n.jsx)(K, { collectionId: d, sessionId: f })
                        : (0, n.jsx)(B.default, { tab: s, sessionId: f, containerRef: S }),
            }),
        }),
    });
};
