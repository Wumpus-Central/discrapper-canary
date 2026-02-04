n.r(t),
    n.d(t, {
        default: () => U,
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
    p = n(688810),
    m = n(697454),
    f = n(611924),
    b = n(545746),
    h = n(594832),
    _ = n(287809),
    E = n(440938),
    v = n(590180),
    C = n(161918),
    A = n(790297),
    x = n(338769),
    S = n(841702),
    O = n(716633),
    y = n(621653),
    j = n(983545),
    L = n(365491),
    T = n(530971),
    I = n(177366),
    k = n(155486),
    N = n(278576),
    R = n(120286),
    P = n(870308),
    B = n(938191),
    w = n(758836),
    D = n(652215),
    M = n(650583),
    H = n(157884);
let G = (e) => {
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
    U = function (e) {
        let { tab: t = w.G2.HOME } = e;
        (0, f.P)(m.a), (0, y.g)();
        let n = (0, g.A)((0, i.A)()),
            s = (0, o.bG)([_.default], () => _.default.getCurrentUser());
        (0, h.pE)();
        let c = (0, B.yB)("CollectiblesShop"),
            { onClose: M } = (0, N.tR)(),
            { currentTab: U, hasFilters: F } = (0, L.v)(),
            V = l.useMemo(() => (t === w.G2.HOME && U && F() ? U : t), [t, U, F]),
            { categories: z, refreshCategories: K } = (0, S.Ay)(
                {
                    logPerf: !0,
                },
                {
                    sessionId: n,
                    tab: V,
                },
            ),
            W = (0, O.x)(z),
            [Y, q] = l.useState(),
            Z = (0, o.bG)([v.A], () => {
                var e;
                return null == (e = v.A.getCategory(Y)) ? void 0 : e.name;
            }),
            [X, J] = l.useState();
        (0, I.XU)();
        let Q = l.useCallback((e, t) => {
                J(e), q(t);
            }, []),
            { selectedTab: $, transitionState: ee, transitionToTab: et } = (0, j.o)(V);
        (0, A.uS)(n, $, Z, ee, X), (0, A.N0)($, s);
        let { dismissShopButtonDC: en } = (0, P.A)();
        l.useEffect(() => {
            en();
        }, [en]),
            l.useEffect(() => {
                (0, d.I)(D.BVt.COLLECTIBLES_SHOP);
            }, []),
            (0, b.A)({
                ignoreCacheTTL: !0,
            });
        let er = l.useRef(null),
            el = l.useRef(null);
        (0, u.tjt)(er),
            l.useEffect(() => {
                var e;
                null == (e = el.current) || e.focus();
            }, []),
            (0, B.gB)();
        let { analyticsLocations: es } = (0, A.lC)($),
            ea = (0, x.V)($, "collectibles_shop");
        return (0, r.jsx)(p.f5, {
            value: es,
            children: (0, r.jsx)(E.R9, {
                newValue: {
                    sessionId: n,
                    pageCategory: Z,
                    pageSize: w.l5,
                },
                children: (0, r.jsx)(C.iM, {
                    tab: $,
                    children: (0, r.jsx)(G, {
                        onClose: M,
                        shouldAddEventListener: !1,
                        children: (0, r.jsxs)("div", {
                            className: a()(H.bx, {
                                [B.jP]: c,
                            }),
                            ref: el,
                            tabIndex: -1,
                            children: [
                                (0, r.jsx)(k.G, {
                                    handleTransition: et,
                                    selectedTab: $,
                                }),
                                null != ea &&
                                    ea.type === x.Z.COUNTDOWN &&
                                    (0, r.jsx)(R.k, {
                                        message: ea.message,
                                        onClick: () => et(w.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: ea.countdownEndDate,
                                    }),
                                (0, r.jsx)("div", {
                                    className: a()(H.td, {
                                        [H.RK]: ee === w.Pf.VISIBLE,
                                        [H.in]: ee === w.Pf.IN,
                                        [H.FD]: ee === w.Pf.OUT,
                                    }),
                                    children: (0, r.jsx)(T.A, {
                                        tab: $,
                                        refreshCategories: K,
                                        transitionToTab: et,
                                        transitionState: ee,
                                        sortedCategories: W,
                                        updateAnalyticsState: Q,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
