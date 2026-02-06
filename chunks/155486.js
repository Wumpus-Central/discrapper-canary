s.d(t, { G: () => G });
var r = s(627968),
    l = s(64700),
    a = s(503698),
    n = s.n(a),
    o = s(696292),
    i = s(311907),
    c = s(554146),
    u = s(397927),
    d = s(770178),
    b = s(736653),
    S = s(379848),
    E = s(742589),
    p = s(545986),
    f = s(657331),
    h = s(318346),
    m = s(151252),
    A = s(142270),
    C = s(287809),
    g = s(379177),
    T = s(365491),
    y = s(628979),
    O = s(494573),
    R = s(758836),
    L = s(652215);
s(801416);
var x = s(49999),
    N = s(518477),
    v = s(985018),
    _ = s(78716);
function G(e) {
    let { selectedTab: t, handleTransition: s } = e,
        a = (0, b.Ay)(),
        G = (0, i.bG)([C.default], () => C.default.getCurrentUser()),
        { enabled: I } = (0, m.Z)({ location: "collectibles_shop_header_bar" }),
        { searchQuery: j } = (0, T.v)(),
        w = l.useRef(null),
        [D, P] = l.useState(!1);
    (0, d.g)(
        w,
        l.useCallback((e) => {
            P(e.contentRect.width < 800);
        }, []),
    );
    let F = (0, g.rR)("CollectiblesShopHeaderBar"),
        k = F ? [c.M.ORB_RENTAL_NEW_BADGE] : [],
        [B, M] = (0, S.kn)(k),
        $ = F && B === c.M.ORB_RENTAL_NEW_BADGE;
    l.useEffect(
        () => () => {
            $ && M(x.i.USER_DISMISS);
        },
        [$, M],
    );
    let U = l.useMemo(
            () => [
                { tab: R.G2.HOME, label: v.intl.string(v.t.ijDDwz) },
                { tab: R.G2.CATALOG, label: v.intl.string(v.t.Ah5sJo), hasSubmenu: !0 },
                ...(I ? [{ tab: R.G2.ORBS, label: v.intl.string(v.t.EBYkzk) }] : []),
            ],
            [I],
        ),
        H = t === R.G2.ORBS ? L.liQ.SHOP_ORBS_TAB : L.liQ.COLLECTIBLES_SHOP,
        q = l.useCallback(() => {
            (0, h.Y)({ pageType: H, sectionType: L.JJy.ORBS_BALANCE_MENU, ctaObject: L.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.navigateToQuestHome)({ fromContent: o.u.ORBS_BALANCE_MENU });
        }, [H]),
        z = l.useCallback(() => {
            G?.id != null &&
                (0, f.openUserProfileModal)({ userId: G.id, tabSection: N.RP.WISHLIST, showGuildProfile: !1 });
        }, [G?.id]),
        V = l.useCallback(
            (e) => {
                s(e), e === R.G2.ORBS && $ && M(x.i.USER_DISMISS);
            },
            [s, $, M],
        );
    return (0, r.jsx)(u.NPJ, {
        theme: a,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: w,
                children: (0, r.jsxs)(E.A, {
                    disableDoubleClick: !0,
                    className: n()(e, _.jr),
                    innerClassname: I ? _.vi : void 0,
                    children: [
                        (0, r.jsx)(u.DUT, {
                            className: _.sU,
                            onClick: () => s(R.G2.HOME),
                            "aria-label": v.intl.string(v.t.pWG4ze) + " home",
                            children: (0, r.jsx)(u.U1X, { size: "md", color: u.LU0.colors.TEXT_DEFAULT }),
                        }),
                        (0, r.jsx)(O.A, { tabs: U, selectedTab: t, onTabSelect: V, showOrbRentalNewBadge: $ }),
                        (0, r.jsxs)("div", {
                            className: _.sZ,
                            children: [
                                (0, r.jsx)(y.A, {
                                    handleTransition: s,
                                    selectedTab: t,
                                    isNarrow: D,
                                    hasText: "" !== j,
                                }),
                                (0, r.jsx)(u.DUT, {
                                    className: _.ij,
                                    onClick: z,
                                    "aria-label": v.intl.string(v.t["7lZ31J"]),
                                    children: (0, r.jsx)(u.C3E, { size: "xs", color: "currentColor" }),
                                }),
                                I &&
                                    (0, r.jsx)(A.SS, {
                                        analyticsPage: H,
                                        cardAlignment: A.SS.CardAlignment.END,
                                        ctaText: v.intl.string(v.t.VC4Mq0),
                                        ctaOnClick: q,
                                        className: _.oz,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
