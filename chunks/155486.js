"use strict";
s.d(t, { G: () => N });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(696292),
    o = s(311907),
    c = s(554146),
    d = s(397927),
    u = s(770178),
    g = s(736653),
    m = s(379848),
    _ = s(742589),
    h = s(545986),
    p = s(657331),
    f = s(318346),
    E = s(151252),
    C = s(142270),
    b = s(287809),
    A = s(379177),
    x = s(365491),
    S = s(628979),
    v = s(494573),
    L = s(758836),
    T = s(652215);
s(801416);
var I = s(49999),
    O = s(518477),
    y = s(985018),
    j = s(78716);
function N(e) {
    let { selectedTab: t, handleTransition: s } = e,
        l = (0, g.Ay)(),
        N = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        { enabled: k } = (0, E.Z)({ location: "collectibles_shop_header_bar" }),
        { searchQuery: R } = (0, x.v)(),
        B = r.useRef(null),
        [P, M] = r.useState(!1);
    (0, u.g)(
        B,
        r.useCallback((e) => {
            M(e.contentRect.width < 800);
        }, []),
    );
    let D = (0, A.rR)("CollectiblesShopHeaderBar"),
        w = D ? [c.M.ORB_RENTAL_NEW_BADGE] : [],
        [H, G] = (0, m.kn)(w),
        U = D && H === c.M.ORB_RENTAL_NEW_BADGE;
    r.useEffect(
        () => () => {
            U && G(I.i.USER_DISMISS);
        },
        [U, G],
    );
    let F = r.useMemo(
            () => [
                { tab: L.G2.HOME, label: y.intl.string(y.t.ijDDwz) },
                { tab: L.G2.CATALOG, label: y.intl.string(y.t.Ah5sJo), hasSubmenu: !0 },
                ...(k ? [{ tab: L.G2.ORBS, label: y.intl.string(y.t.EBYkzk) }] : []),
            ],
            [k],
        ),
        V = t === L.G2.ORBS ? T.liQ.SHOP_ORBS_TAB : T.liQ.COLLECTIBLES_SHOP,
        z = r.useCallback(() => {
            (0, f.Y)({ pageType: V, sectionType: T.JJy.ORBS_BALANCE_MENU, ctaObject: T.ZSU.CTA_TO_QUEST_HOME }),
                (0, h.navigateToQuestHome)({ fromContent: i.u.ORBS_BALANCE_MENU });
        }, [V]),
        $ = r.useCallback(() => {
            N?.id != null &&
                (0, p.openUserProfileModal)({ userId: N.id, tabSection: O.RP.WISHLIST, showGuildProfile: !1 });
        }, [N?.id]),
        K = r.useCallback(
            (e) => {
                s(e), e === L.G2.ORBS && U && G(I.i.USER_DISMISS);
            },
            [s, U, G],
        );
    return (0, n.jsx)(d.NPJ, {
        theme: l,
        children: (e) =>
            (0, n.jsx)("div", {
                ref: B,
                children: (0, n.jsxs)(_.A, {
                    disableDoubleClick: !0,
                    className: a()(e, j.jr),
                    innerClassname: k ? j.vi : void 0,
                    children: [
                        (0, n.jsx)(d.DUT, {
                            className: j.sU,
                            onClick: () => s(L.G2.HOME),
                            "aria-label": y.intl.string(y.t.pWG4ze) + " home",
                            children: (0, n.jsx)(d.U1X, { size: "md", color: d.LU0.colors.TEXT_DEFAULT }),
                        }),
                        (0, n.jsx)(v.A, { tabs: F, selectedTab: t, onTabSelect: K, showOrbRentalNewBadge: U }),
                        (0, n.jsxs)("div", {
                            className: j.sZ,
                            children: [
                                (0, n.jsx)(S.A, {
                                    handleTransition: s,
                                    selectedTab: t,
                                    isNarrow: P,
                                    hasText: "" !== R,
                                }),
                                (0, n.jsx)(d.DUT, {
                                    className: j.ij,
                                    onClick: $,
                                    "aria-label": y.intl.string(y.t["7lZ31J"]),
                                    children: (0, n.jsx)(d.C3E, { size: "xs", color: "currentColor" }),
                                }),
                                k &&
                                    (0, n.jsx)(C.SS, {
                                        analyticsPage: V,
                                        cardAlignment: C.SS.CardAlignment.END,
                                        ctaText: y.intl.string(y.t.VC4Mq0),
                                        ctaOnClick: z,
                                        className: j.oz,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
