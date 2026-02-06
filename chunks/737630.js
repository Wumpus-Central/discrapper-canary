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
    _ = s(688810),
    m = s(697454),
    h = s(611924),
    p = s(594832),
    f = s(287809),
    x = s(440938),
    E = s(590180),
    C = s(161918),
    A = s(790297),
    b = s(338769),
    S = s(841702),
    v = s(716633),
    L = s(621653),
    I = s(983545),
    j = s(365491),
    k = s(530971),
    O = s(177366),
    T = s(155486),
    N = s(278576),
    y = s(120286),
    R = s(870308),
    B = s(938191),
    M = s(758836),
    P = s(652215),
    D = s(650583),
    H = s(157884);
let w = (e) => {
        let { children: t, shouldAddEventListener: s, onClose: n } = e,
            l = (0, c.useHasAnyModalOpen)();
        return (
            r.useEffect(() => {
                if (!s || l) return;
                let e = (e) => {
                    e.key === D.N$.Escape && n();
                };
                return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
            }, [s, l, n]),
            t
        );
    },
    U = function (e) {
        let { tab: t = M.G2.HOME } = e;
        (0, h.P)(m.a), (0, L.g)();
        let s = (0, g.A)((0, i.A)()),
            l = (0, o.bG)([f.default], () => f.default.getCurrentUser());
        (0, p.pE)();
        let c = (0, B.yB)("CollectiblesShop"),
            { onClose: D } = (0, N.tR)(),
            { currentTab: U, hasFilters: G } = (0, j.v)(),
            F = r.useMemo(() => (t === M.G2.HOME && U && G() ? U : t), [t, U, G]),
            { categories: V, refreshCategories: K } = (0, S.Ay)({ logPerf: !0 }, { sessionId: s, tab: F }),
            z = (0, v.x)(V),
            [W, Y] = r.useState(),
            $ = (0, o.bG)([E.A], () => E.A.getCategory(W)?.name),
            [Z, q] = r.useState();
        (0, O.XU)();
        let X = r.useCallback((e, t) => {
                q(e), Y(t);
            }, []),
            { selectedTab: J, transitionState: Q, transitionToTab: ee } = (0, I.o)(F);
        (0, A.uS)(s, J, $, Q, Z), (0, A.N0)(J, l);
        let { dismissShopButtonDC: et } = (0, R.A)();
        r.useEffect(() => {
            et();
        }, [et]),
            r.useEffect(() => {
                (0, u.I)(P.BVt.COLLECTIBLES_SHOP);
            }, []);
        let es = r.useRef(null),
            en = r.useRef(null);
        (0, d.tjt)(es),
            r.useEffect(() => {
                en.current?.focus();
            }, []),
            (0, B.gB)();
        let { analyticsLocations: er } = (0, A.lC)(J),
            el = (0, b.V)(J, "collectibles_shop");
        return (0, n.jsx)(_.f5, {
            value: er,
            children: (0, n.jsx)(x.R9, {
                newValue: { sessionId: s, pageCategory: $, pageSize: M.l5 },
                children: (0, n.jsx)(C.iM, {
                    tab: J,
                    children: (0, n.jsx)(w, {
                        onClose: D,
                        shouldAddEventListener: !1,
                        children: (0, n.jsxs)("div", {
                            className: a()(H.bx, { [B.jP]: c }),
                            ref: en,
                            tabIndex: -1,
                            children: [
                                (0, n.jsx)(T.G, { handleTransition: ee, selectedTab: J }),
                                null != el &&
                                    el.type === b.Z.COUNTDOWN &&
                                    (0, n.jsx)(y.k, {
                                        message: el.message,
                                        onClick: () => ee(M.G2.HOME),
                                        variant: "pink",
                                        countdownEndDate: el.countdownEndDate,
                                    }),
                                (0, n.jsx)("div", {
                                    className: a()(H.td, {
                                        [H.RK]: Q === M.Pf.VISIBLE,
                                        [H.in]: Q === M.Pf.IN,
                                        [H.FD]: Q === M.Pf.OUT,
                                    }),
                                    children: (0, n.jsx)(k.A, {
                                        tab: J,
                                        refreshCategories: K,
                                        transitionToTab: ee,
                                        transitionState: Q,
                                        sortedCategories: z,
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
