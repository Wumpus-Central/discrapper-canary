l.r(t),
    l.d(t, {
        default: () => U,
    }),
    l(896048);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(835245),
    o = l(417597),
    c = l(192308),
    u = l(397927),
    d = l(944791),
    f = l(444927),
    b = l(688810),
    g = l(697454),
    m = l(611924),
    p = l(594832),
    h = l(287809),
    E = l(440938),
    v = l(590180),
    A = l(161918),
    x = l(790297),
    S = l(338769),
    C = l(841702),
    O = l(716633),
    _ = l(621653),
    y = l(983545),
    j = l(365491),
    L = l(530971),
    T = l(177366),
    I = l(155486),
    N = l(278576),
    k = l(120286),
    R = l(870308),
    P = l(938191),
    D = l(758836),
    w = l(652215),
    B = l(650583),
    M = l(157884),
    H = l(816917);
let G = (e) => {
        let { children: t, shouldAddEventListener: l, onClose: n } = e,
            s = (0, c.useHasAnyModalOpen)();
        return (
            r.useEffect(() => {
                if (!l || s) return;
                let e = (e) => {
                    e.key === B.N$.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [l, s, n]),
            t
        );
    },
    U = function (e) {
        let { tab: t = D.G2.HOME } = e;
        (0, m.P)(g.a), (0, _.g)();
        let l = (0, f.A)((0, i.A)()),
            s = (0, o.bG)([h.default], () => h.default.getCurrentUser());
        (0, p.pE)();
        let c = (0, P.y)("CollectiblesShop"),
            { onClose: B } = (0, N.tR)(),
            { currentTab: U, hasFilters: F } = (0, j.v)(),
            z = r.useMemo(() => (t === D.G2.HOME && U && F() ? U : t), [t, U, F]),
            { categories: V, refreshCategories: K } = (0, C.Ay)(
                {
                    logPerf: !0,
                },
                {
                    sessionId: l,
                    tab: z,
                },
            ),
            W = (0, O.x)(V),
            [Y, q] = r.useState(),
            Z = (0, o.bG)([v.A], () => {
                var e;
                return null == (e = v.A.getCategory(Y)) ? void 0 : e.name;
            }),
            [X, J] = r.useState();
        (0, T.XU)();
        let Q = r.useCallback((e, t) => {
                J(e), q(t);
            }, []),
            { selectedTab: $, transitionState: ee, transitionToTab: et } = (0, y.o)(z);
        (0, x.uS)(l, $, Z, ee, X), (0, x.N0)($, s);
        let { dismissShopButtonDC: el } = (0, R.A)();
        r.useEffect(() => {
            el();
        }, [el]),
            r.useEffect(() => {
                (0, d.I)(w.BVt.COLLECTIBLES_SHOP);
            }, []);
        let en = r.useRef(null),
            er = r.useRef(null);
        (0, u.tjt)(en),
            r.useEffect(() => {
                var e;
                null == (e = er.current) || e.focus();
            }, []);
        let { analyticsLocations: es } = (0, x.lC)($),
            ea = (0, S.V)($, "collectibles_shop");
        return (0, n.jsx)(b.f5, {
            value: es,
            children: (0, n.jsx)(E.R9, {
                newValue: {
                    sessionId: l,
                    pageCategory: Z,
                    pageSize: D.l5,
                },
                children: (0, n.jsx)(A.iM, {
                    tab: $,
                    children: (0, n.jsx)(G, {
                        onClose: B,
                        shouldAddEventListener: !1,
                        children: (0, n.jsxs)("div", {
                            className: a()(M.bx, {
                                [H.T3]: c,
                            }),
                            ref: er,
                            tabIndex: -1,
                            children: [
                                (0, n.jsx)(I.G, {
                                    handleTransition: et,
                                    selectedTab: $,
                                }),
                                null != ea &&
                                    ea.type === S.Z.COUNTDOWN &&
                                    (0, n.jsx)(k.k, {
                                        message: ea.message,
                                        onClick: () => et(D.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: ea.countdownEndDate,
                                    }),
                                (0, n.jsx)("div", {
                                    className: a()(M.td, {
                                        [M.RK]: ee === D.Pf.VISIBLE,
                                        [M.in]: ee === D.Pf.IN,
                                        [M.FD]: ee === D.Pf.OUT,
                                    }),
                                    children: (0, n.jsx)(L.A, {
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
