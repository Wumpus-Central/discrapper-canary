n.r(t),
    n.d(t, {
        default: () => F,
    }),
    n(896048);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(835245),
    o = n(417597),
    c = n(192308),
    u = n(397927),
    d = n(944791),
    g = n(444927),
    f = n(688810),
    m = n(697454),
    p = n(611924),
    _ = n(545746),
    b = n(594832),
    h = n(287809),
    E = n(440938),
    v = n(590180),
    C = n(161918),
    A = n(790297),
    S = n(338769),
    x = n(841702),
    O = n(716633),
    y = n(621653),
    j = n(983545),
    T = n(365491),
    L = n(530971),
    I = n(177366),
    k = n(155486),
    N = n(278576),
    R = n(120286),
    P = n(870308),
    B = n(938191),
    w = n(758836),
    D = n(652215),
    M = n(650583),
    H = n(157884),
    G = n(816917);
let U = (e) => {
        let { children: t, shouldAddEventListener: n, onClose: r } = e,
            s = (0, c.useHasAnyModalOpen)();
        return (
            l.useEffect(() => {
                if (!n || s) return;
                let e = (e) => {
                    e.key === M.N$.Escape && r();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [n, s, r]),
            t
        );
    },
    F = function (e) {
        let { tab: t = w.G2.HOME } = e;
        (0, p.P)(m.a), (0, y.g)();
        let n = (0, g.A)((0, i.A)()),
            s = (0, o.bG)([h.default], () => h.default.getCurrentUser());
        (0, b.pE)();
        let c = (0, B.y)("CollectiblesShop"),
            { onClose: M } = (0, N.tR)(),
            { currentTab: F, hasFilters: z } = (0, T.v)(),
            V = l.useMemo(() => (t === w.G2.HOME && F && z() ? F : t), [t, F, z]),
            { categories: K, refreshCategories: W } = (0, x.Ay)(
                {
                    logPerf: !0,
                },
                {
                    sessionId: n,
                    tab: V,
                },
            ),
            Y = (0, O.x)(K),
            [q, Z] = l.useState(),
            X = (0, o.bG)([v.A], () => {
                var e;
                return null == (e = v.A.getCategory(q)) ? void 0 : e.name;
            }),
            [J, Q] = l.useState();
        (0, I.XU)();
        let $ = l.useCallback((e, t) => {
                Q(e), Z(t);
            }, []),
            { selectedTab: ee, transitionState: et, transitionToTab: en } = (0, j.o)(V);
        (0, A.uS)(n, ee, X, et, J), (0, A.N0)(ee, s);
        let { dismissShopButtonDC: er } = (0, P.A)();
        l.useEffect(() => {
            er();
        }, [er]),
            l.useEffect(() => {
                (0, d.I)(D.BVt.COLLECTIBLES_SHOP);
            }, []),
            (0, _.A)({
                ignoreCacheTTL: !0,
            });
        let el = l.useRef(null),
            es = l.useRef(null);
        (0, u.tjt)(el),
            l.useEffect(() => {
                var e;
                null == (e = es.current) || e.focus();
            }, []);
        let { analyticsLocations: ea } = (0, A.lC)(ee),
            ei = (0, S.V)(ee, "collectibles_shop");
        return (0, r.jsx)(f.f5, {
            value: ea,
            children: (0, r.jsx)(E.R9, {
                newValue: {
                    sessionId: n,
                    pageCategory: X,
                    pageSize: w.l5,
                },
                children: (0, r.jsx)(C.iM, {
                    tab: ee,
                    children: (0, r.jsx)(U, {
                        onClose: M,
                        shouldAddEventListener: !1,
                        children: (0, r.jsxs)("div", {
                            className: a()(H.bx, {
                                [G.T3]: c,
                            }),
                            ref: es,
                            tabIndex: -1,
                            children: [
                                (0, r.jsx)(k.G, {
                                    handleTransition: en,
                                    selectedTab: ee,
                                }),
                                null != ei &&
                                    ei.type === S.Z.COUNTDOWN &&
                                    (0, r.jsx)(R.k, {
                                        message: ei.message,
                                        onClick: () => en(w.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: ei.countdownEndDate,
                                    }),
                                (0, r.jsx)("div", {
                                    className: a()(H.td, {
                                        [H.RK]: et === w.Pf.VISIBLE,
                                        [H.in]: et === w.Pf.IN,
                                        [H.FD]: et === w.Pf.OUT,
                                    }),
                                    children: (0, r.jsx)(L.A, {
                                        tab: ee,
                                        refreshCategories: W,
                                        transitionToTab: en,
                                        transitionState: et,
                                        sortedCategories: Y,
                                        updateAnalyticsState: $,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
