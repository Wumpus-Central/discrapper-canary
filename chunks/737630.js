"use strict";
s.r(t), s.d(t, { default: () => U });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(835245),
    o = s(417597),
    c = s(192308),
    d = s(397927),
    u = s(944791),
    g = s(444927),
    m = s(688810),
    _ = s(697454),
    h = s(611924),
    p = s(545746),
    f = s(594832),
    E = s(287809),
    C = s(440938),
    b = s(590180),
    A = s(161918),
    x = s(790297),
    S = s(338769),
    v = s(841702),
    L = s(716633),
    T = s(621653),
    I = s(983545),
    O = s(365491),
    y = s(530971),
    j = s(177366),
    N = s(155486),
    k = s(278576),
    R = s(120286),
    B = s(870308),
    P = s(938191),
    M = s(758836),
    D = s(652215),
    w = s(650583),
    H = s(157884);
let G = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: n } = e,
            l = (0, c.useHasAnyModalOpen)();
        return (
            r.useEffect(() => {
                if (!s || l) return;
                let e = (e) => {
                    e.key === w.N$.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [s, l, n]),
            t
        );
    },
    U = function (e) {
        let { tab: t = M.G2.HOME } = e;
        (0, h.P)(_.a), (0, T.g)();
        let s = (0, g.A)((0, i.A)()),
            l = (0, o.bG)([E.default], () => E.default.getCurrentUser());
        (0, f.pE)();
        let c = (0, P.yB)("CollectiblesShop"),
            { onClose: w } = (0, k.tR)(),
            { currentTab: U, hasFilters: F } = (0, O.v)(),
            V = r.useMemo(() => (t === M.G2.HOME && U && F() ? U : t), [t, U, F]),
            { categories: z, refreshCategories: $ } = (0, v.Ay)({ logPerf: !0 }, { sessionId: s, tab: V }),
            K = (0, L.x)(z),
            [W, Y] = r.useState(),
            q = (0, o.bG)([b.A], () => b.A.getCategory(W)?.name),
            [Z, X] = r.useState();
        (0, j.XU)();
        let J = r.useCallback((e, t) => {
                X(e), Y(t);
            }, []),
            { selectedTab: Q, transitionState: ee, transitionToTab: et } = (0, I.o)(V);
        (0, x.uS)(s, Q, q, ee, Z), (0, x.N0)(Q, l);
        let { dismissShopButtonDC: es } = (0, B.A)();
        r.useEffect(() => {
            es();
        }, [es]),
            r.useEffect(() => {
                (0, u.I)(D.BVt.COLLECTIBLES_SHOP);
            }, []),
            (0, p.A)({ ignoreCacheTTL: !0 });
        let en = r.useRef(null),
            er = r.useRef(null);
        (0, d.tjt)(en),
            r.useEffect(() => {
                er.current?.focus();
            }, []),
            (0, P.gB)();
        let { analyticsLocations: el } = (0, x.lC)(Q),
            ea = (0, S.V)(Q, "collectibles_shop");
        return (0, n.jsx)(m.f5, {
            value: el,
            children: (0, n.jsx)(C.R9, {
                newValue: { sessionId: s, pageCategory: q, pageSize: M.l5 },
                children: (0, n.jsx)(A.iM, {
                    tab: Q,
                    children: (0, n.jsx)(G, {
                        onClose: w,
                        shouldAddEventListener: !1,
                        children: (0, n.jsxs)("div", {
                            className: a()(H.bx, { [P.jP]: c }),
                            ref: er,
                            tabIndex: -1,
                            children: [
                                (0, n.jsx)(N.G, { handleTransition: et, selectedTab: Q }),
                                null != ea &&
                                    ea.type === S.Z.COUNTDOWN &&
                                    (0, n.jsx)(R.k, {
                                        message: ea.message,
                                        onClick: () => et(M.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: ea.countdownEndDate,
                                    }),
                                (0, n.jsx)("div", {
                                    className: a()(H.td, {
                                        [H.RK]: ee === M.Pf.VISIBLE,
                                        [H.in]: ee === M.Pf.IN,
                                        [H.FD]: ee === M.Pf.OUT,
                                    }),
                                    children: (0, n.jsx)(y.A, {
                                        tab: Q,
                                        refreshCategories: $,
                                        transitionToTab: et,
                                        transitionState: ee,
                                        sortedCategories: K,
                                        updateAnalyticsState: J,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
