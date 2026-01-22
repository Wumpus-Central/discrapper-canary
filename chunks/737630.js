l.r(t), l.d(t, { default: () => H }), l(896048);
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
    p = l(611924),
    m = l(594832),
    h = l(287809),
    E = l(440938),
    v = l(590180),
    A = l(161918),
    x = l(790297),
    S = l(841702),
    C = l(716633),
    O = l(621653),
    _ = l(983545),
    y = l(365491),
    j = l(530971),
    L = l(177366),
    T = l(155486),
    I = l(278576),
    N = l(870308),
    k = l(938191),
    R = l(758836),
    P = l(652215),
    D = l(650583),
    w = l(157884),
    B = l(816917);
let M = (e) => {
        let { children: t, shouldAddEventListener: l, onClose: n } = e,
            s = (0, c.useHasAnyModalOpen)();
        return (
            r.useEffect(() => {
                if (!l || s) return;
                let e = (e) => {
                    e.key === D.N$.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [l, s, n]),
            t
        );
    },
    H = function (e) {
        let { tab: t = R.G2.HOME } = e;
        (0, p.P)(g.a), (0, O.g)();
        let l = (0, f.A)((0, i.A)()),
            s = (0, o.bG)([h.default], () => h.default.getCurrentUser());
        (0, m.pE)();
        let c = (0, k.y)("CollectiblesShop"),
            { onClose: D } = (0, I.tR)(),
            { currentTab: H, hasFilters: G } = (0, y.v)(),
            F = r.useMemo(() => (t === R.G2.HOME && H && G() ? H : t), [t, H, G]),
            { categories: U, refreshCategories: z } = (0, S.Ay)(
                { logPerf: !0 },
                {
                    sessionId: l,
                    tab: F,
                },
            ),
            V = (0, C.x)(U),
            [K, W] = r.useState(),
            Y = (0, o.bG)([v.A], () => {
                var e;
                return null == (e = v.A.getCategory(K)) ? void 0 : e.name;
            }),
            [q, Z] = r.useState();
        (0, L.XU)();
        let X = r.useCallback((e, t) => {
                Z(e), W(t);
            }, []),
            { selectedTab: J, transitionState: Q, transitionToTab: $ } = (0, _.o)(F);
        (0, x.uS)(l, J, Y, Q, q), (0, x.N0)(J, s);
        let { dismissShopButtonDC: ee } = (0, N.A)();
        r.useEffect(() => {
            ee();
        }, [ee]),
            r.useEffect(() => {
                (0, d.I)(P.BVt.COLLECTIBLES_SHOP);
            }, []);
        let et = r.useRef(null),
            el = r.useRef(null);
        (0, u.tjt)(et),
            r.useEffect(() => {
                var e;
                null == (e = el.current) || e.focus();
            }, []);
        let { analyticsLocations: en } = (0, x.lC)(J);
        return (0, n.jsx)(b.f5, {
            value: en,
            children: (0, n.jsx)(E.R9, {
                newValue: {
                    sessionId: l,
                    pageCategory: Y,
                    pageSize: R.l5,
                },
                children: (0, n.jsx)(A.iM, {
                    tab: J,
                    children: (0, n.jsx)(M, {
                        onClose: D,
                        shouldAddEventListener: !1,
                        children: (0, n.jsxs)("div", {
                            className: a()(w.bx, { [B.T3]: c }),
                            ref: el,
                            tabIndex: -1,
                            children: [
                                (0, n.jsx)(T.G, {
                                    handleTransition: $,
                                    selectedTab: J,
                                }),
                                (0, n.jsx)("div", {
                                    className: a()(w.td, {
                                        [w.RK]: Q === R.Pf.VISIBLE,
                                        [w.in]: Q === R.Pf.IN,
                                        [w.FD]: Q === R.Pf.OUT,
                                    }),
                                    children: (0, n.jsx)(j.A, {
                                        tab: J,
                                        refreshCategories: z,
                                        transitionToTab: $,
                                        transitionState: Q,
                                        sortedCategories: V,
                                        updateAnalyticsState: X,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        });
    };
