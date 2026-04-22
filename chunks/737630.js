"use strict";
s.r(t), s.d(t, { default: () => F });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(835245),
    o = s(417597),
    c = s(192308),
    d = s(315710),
    u = s(944791),
    g = s(444927),
    h = s(688810),
    _ = s(726249),
    m = s(475073),
    p = s(611924),
    f = s(594832),
    E = s(287809),
    x = s(440938),
    A = s(590180),
    C = s(161918),
    S = s(790297),
    b = s(338769),
    v = s(841702),
    L = s(621653),
    I = s(983545),
    j = s(365491),
    N = s(530971),
    T = s(177366),
    O = s(155486),
    y = s(278576),
    k = s(120286),
    R = s(870308),
    B = s(938191),
    P = s(758836),
    M = s(652215),
    D = s(650583),
    w = s(985018),
    H = s(647685);
let G = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: n } = e,
            r = (0, c.useHasAnyModalOpen)();
        return (
            l.useEffect(() => {
                if (!s || r) return;
                let e = (e) => {
                    e.key === D.N$.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [s, r, n]),
            t
        );
    },
    F = function (e) {
        let { tab: t = P.G2.HOME } = e;
        (0, p.P)(m.a), (0, L.g)();
        let s = (0, g.A)((0, i.A)()),
            r = (0, o.bG)([E.default], () => E.default.getCurrentUser());
        (0, f.pE)();
        let c = (0, B.yB)("CollectiblesShop"),
            { onClose: D } = (0, y.tR)(),
            { currentTab: F, hasFilters: U } = (0, j.v)(),
            K = l.useMemo(() => (t === P.G2.HOME && null != F && U() ? F : t), [t, F, U]),
            { categories: V, refreshCategories: W } = (0, v.Ay)({ logPerf: !0 }, { sessionId: s, tab: K }),
            z = l.useMemo(() => [...V.values()], [V]),
            [$, Y] = l.useState(),
            Z = (0, o.bG)([A.A], () => A.A.getCategory($)?.name),
            [J, X] = l.useState();
        (0, T.XU)(s);
        let q = l.useCallback((e, t) => {
                X(e), Y(t);
            }, []),
            { selectedTab: Q, transitionState: ee, transitionToTab: et } = (0, I.o)(K);
        (0, _.HU)({ location: w.intl.string(w.t.pWG4ze) }), (0, S.uS)(s, Q, Z, ee, J), (0, S.N0)(Q, r);
        let { dismissShopButtonDC: es } = (0, R.A)();
        l.useEffect(() => {
            es();
        }, [es]),
            l.useEffect(() => {
                (0, u.I)(M.BVt.COLLECTIBLES_SHOP);
            }, []);
        let en = l.useRef(null),
            el = l.useRef(null);
        (0, d.t)(en),
            l.useEffect(() => {
                el.current?.focus();
            }, []),
            (0, B.gB)();
        let { analyticsLocations: er } = (0, S.lC)(Q),
            ea = (0, b.V)(Q, "collectibles_shop");
        return (0, n.jsx)(h.f5, {
            value: er,
            children: (0, n.jsx)(x.R9, {
                newValue: { sessionId: s, pageCategory: Z, pageSize: P.l5 },
                children: (0, n.jsx)(C.iM, {
                    tab: Q,
                    children: (0, n.jsx)(G, {
                        onClose: D,
                        shouldAddEventListener: !1,
                        children: (0, n.jsxs)("div", {
                            className: a()(H.bx, { [B.jP]: c }),
                            ref: el,
                            tabIndex: -1,
                            children: [
                                (0, n.jsx)(O.G, { handleTransition: et, selectedTab: Q }),
                                null != ea &&
                                    ea.type === b.Z.COUNTDOWN &&
                                    (0, n.jsx)(k.k, {
                                        message: ea.message,
                                        onClick: () => et(P.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: ea.countdownEndDate,
                                    }),
                                (0, n.jsx)("div", {
                                    className: a()(H.td, {
                                        [H.RK]: ee === P.Pf.VISIBLE,
                                        [H.in]: ee === P.Pf.IN,
                                        [H.FD]: ee === P.Pf.OUT,
                                    }),
                                    children: (0, n.jsx)(N.A, {
                                        tab: Q,
                                        refreshCategories: W,
                                        transitionToTab: et,
                                        transitionState: ee,
                                        categories: z,
                                        updateAnalyticsState: q,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
