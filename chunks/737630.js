"use strict";
s.r(t), s.d(t, { default: () => H });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(835245),
    o = s(417597),
    c = s(192308),
    d = s(397927),
    u = s(944791),
    _ = s(444927),
    g = s(688810),
    m = s(475073),
    h = s(611924),
    p = s(594832),
    f = s(287809),
    x = s(440938),
    E = s(590180),
    b = s(161918),
    C = s(790297),
    A = s(338769),
    S = s(841702),
    v = s(621653),
    I = s(983545),
    L = s(365491),
    j = s(530971),
    k = s(177366),
    T = s(155486),
    O = s(278576),
    N = s(120286),
    y = s(870308),
    R = s(938191),
    B = s(758836),
    M = s(652215),
    P = s(650583),
    D = s(157884);
let w = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: n } = e,
            l = (0, c.useHasAnyModalOpen)();
        return (
            r.useEffect(() => {
                if (!s || l) return;
                let e = (e) => {
                    e.key === P.N$.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [s, l, n]),
            t
        );
    },
    H = function (e) {
        let { tab: t = B.G2.HOME } = e;
        (0, h.P)(m.a), (0, v.g)();
        let s = (0, _.A)((0, i.A)()),
            l = (0, o.bG)([f.default], () => f.default.getCurrentUser());
        (0, p.pE)();
        let c = (0, R.yB)("CollectiblesShop"),
            { onClose: P } = (0, O.tR)(),
            { currentTab: H, hasFilters: F } = (0, L.v)(),
            G = r.useMemo(() => (t === B.G2.HOME && H && F() ? H : t), [t, H, F]),
            { categories: U, refreshCategories: V } = (0, S.Ay)({ logPerf: !0 }, { sessionId: s, tab: G }),
            K = r.useMemo(() => [...U.values()], [U]),
            [W, z] = r.useState(),
            Y = (0, o.bG)([E.A], () => E.A.getCategory(W)?.name),
            [$, Z] = r.useState();
        (0, k.XU)(s);
        let q = r.useCallback((e, t) => {
                Z(e), z(t);
            }, []),
            { selectedTab: X, transitionState: J, transitionToTab: Q } = (0, I.o)(G);
        (0, C.uS)(s, X, Y, J, $), (0, C.N0)(X, l);
        let { dismissShopButtonDC: ee } = (0, y.A)();
        r.useEffect(() => {
            ee();
        }, [ee]),
            r.useEffect(() => {
                (0, u.I)(M.BVt.COLLECTIBLES_SHOP);
            }, []);
        let et = r.useRef(null),
            es = r.useRef(null);
        (0, d.tjt)(et),
            r.useEffect(() => {
                es.current?.focus();
            }, []),
            (0, R.gB)();
        let { analyticsLocations: en } = (0, C.lC)(X),
            er = (0, A.V)(X, "collectibles_shop");
        return (0, n.jsx)(g.f5, {
            value: en,
            children: (0, n.jsx)(x.R9, {
                newValue: { sessionId: s, pageCategory: Y, pageSize: B.l5 },
                children: (0, n.jsx)(b.iM, {
                    tab: X,
                    children: (0, n.jsx)(w, {
                        onClose: P,
                        shouldAddEventListener: !1,
                        children: (0, n.jsxs)("div", {
                            className: a()(D.bx, { [R.jP]: c }),
                            ref: es,
                            tabIndex: -1,
                            children: [
                                (0, n.jsx)(T.G, { handleTransition: Q, selectedTab: X }),
                                null != er &&
                                    er.type === A.Z.COUNTDOWN &&
                                    (0, n.jsx)(N.k, {
                                        message: er.message,
                                        onClick: () => Q(B.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: er.countdownEndDate,
                                    }),
                                (0, n.jsx)("div", {
                                    className: a()(D.td, {
                                        [D.RK]: J === B.Pf.VISIBLE,
                                        [D.in]: J === B.Pf.IN,
                                        [D.FD]: J === B.Pf.OUT,
                                    }),
                                    children: (0, n.jsx)(j.A, {
                                        tab: X,
                                        refreshCategories: V,
                                        transitionToTab: Q,
                                        transitionState: J,
                                        categories: K,
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
