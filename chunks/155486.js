s.d(t, { G: () => N });
var r = s(627968),
    l = s(64700),
    n = s(503698),
    a = s.n(n),
    o = s(696292),
    i = s(311907),
    c = s(397927),
    u = s(770178),
    d = s(736653),
    b = s(742589),
    p = s(545986),
    E = s(657331),
    S = s(318346),
    f = s(151252),
    m = s(142270),
    h = s(287809),
    A = s(365491),
    C = s(628979),
    T = s(494573),
    g = s(758836),
    y = s(652215);
s(801416);
var O = s(518477),
    x = s(985018),
    L = s(78716);
function N(e) {
    let { selectedTab: t, handleTransition: s } = e,
        n = (0, d.Ay)(),
        N = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
        { enabled: v } = (0, f.Z)({ location: "collectibles_shop_header_bar" }),
        { searchQuery: R } = (0, A.v)(),
        j = l.useRef(null),
        [G, I] = l.useState(!1);
    (0, u.g)(
        j,
        l.useCallback((e) => {
            I(e.contentRect.width < 800);
        }, []),
    );
    let _ = l.useMemo(
            () => [
                { tab: g.G2.HOME, label: x.intl.string(x.t.ijDDwz) },
                { tab: g.G2.CATALOG, label: x.intl.string(x.t.Ah5sJo), hasSubmenu: !0 },
                ...(v ? [{ tab: g.G2.ORBS, label: x.intl.string(x.t.EBYkzk) }] : []),
            ],
            [v],
        ),
        P = t === g.G2.ORBS ? y.liQ.SHOP_ORBS_TAB : y.liQ.COLLECTIBLES_SHOP,
        F = l.useCallback(() => {
            (0, S.Y)({ pageType: P, sectionType: y.JJy.ORBS_BALANCE_MENU, ctaObject: y.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.navigateToQuestHome)({ fromContent: o.u.ORBS_BALANCE_MENU });
        }, [P]),
        k = l.useCallback(() => {
            N?.id != null &&
                (0, E.openUserProfileModal)({ userId: N.id, tabSection: O.RP.WISHLIST, showGuildProfile: !1 });
        }, [N?.id]),
        $ = l.useCallback(
            (e) => {
                s(e);
            },
            [s],
        );
    return (0, r.jsx)(c.NPJ, {
        theme: n,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: j,
                children: (0, r.jsxs)(b.A, {
                    disableDoubleClick: !0,
                    className: a()(e, L.jr),
                    innerClassname: v ? L.vi : void 0,
                    children: [
                        (0, r.jsx)(c.DUT, {
                            className: L.sU,
                            onClick: () => s(g.G2.HOME),
                            "aria-label": x.intl.string(x.t.pWG4ze) + " home",
                            children: (0, r.jsx)(c.U1X, { size: "md", color: c.LU0.colors.TEXT_DEFAULT }),
                        }),
                        (0, r.jsx)(T.A, { tabs: _, selectedTab: t, onTabSelect: $ }),
                        (0, r.jsxs)("div", {
                            className: L.sZ,
                            children: [
                                (0, r.jsx)(C.A, {
                                    handleTransition: s,
                                    selectedTab: t,
                                    isNarrow: G,
                                    hasText: "" !== R,
                                }),
                                (0, r.jsx)(c.DUT, {
                                    className: L.ij,
                                    onClick: k,
                                    "aria-label": x.intl.string(x.t["7lZ31J"]),
                                    children: (0, r.jsx)(c.C3E, { size: "xs", color: "currentColor" }),
                                }),
                                v &&
                                    (0, r.jsx)(m.SS, {
                                        analyticsPage: P,
                                        cardAlignment: m.SS.CardAlignment.END,
                                        ctaText: x.intl.string(x.t.VC4Mq0),
                                        ctaOnClick: F,
                                        className: L.oz,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
