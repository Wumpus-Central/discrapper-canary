s.d(t, { G: () => R });
var r = s(627968),
    l = s(64700),
    n = s(696292),
    a = s(311907),
    o = s(397927),
    i = s(770178),
    c = s(742589),
    u = s(545986),
    d = s(92615),
    b = s(44724),
    p = s(657331),
    S = s(318346),
    E = s(151252),
    h = s(142270),
    A = s(287809),
    f = s(365491),
    m = s(628979),
    C = s(494573),
    T = s(758836),
    g = s(652215);
s(801416);
var y = s(188275),
    O = s(518477),
    L = s(985018),
    x = s(78716);
function R(e) {
    let { selectedTab: t, handleTransition: s } = e,
        R = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        { enabled: I } = (0, E.Z)({ location: "collectibles_shop_header_bar" }),
        N = (0, d.B)({ location: "collectibles_shop_header_bar" }),
        { searchQuery: v } = (0, f.v)(),
        G = l.useRef(null),
        [_, j] = l.useState(!1);
    (0, i.g)(
        G,
        l.useCallback((e) => {
            j(e.contentRect.width < 800);
        }, []),
    );
    let F = l.useMemo(
            () => [
                { tab: T.G2.HOME, label: L.intl.string(L.t["xNiB/O"]) },
                { tab: T.G2.CATALOG, label: L.intl.string(L.t.Ah5sJo), hasSubmenu: !0 },
                ...(I ? [{ tab: T.G2.ORBS, label: L.intl.string(L.t.EBYkzk) }] : []),
                ...(N ? [{ tab: T.G2.RIVALS, label: L.intl.string(L.t["kq/75v"]), icon: o.I9m }] : []),
            ],
            [I, N],
        ),
        P = t === T.G2.ORBS ? g.liQ.SHOP_ORBS_TAB : g.liQ.COLLECTIBLES_SHOP,
        k = l.useCallback(() => {
            (0, S.Y)({ pageType: P, sectionType: g.JJy.ORBS_BALANCE_MENU, ctaObject: g.ZSU.CTA_TO_QUEST_HOME }),
                (0, u.navigateToQuestHome)({ fromContent: n.u.ORBS_BALANCE_MENU });
        }, [P]),
        $ = l.useCallback(() => {
            R?.id != null && (0, p.openUserProfileModal)({ userId: R.id, tabSection: O.RP.WISHLIST });
        }, [R?.id]),
        M = l.useCallback(
            (e) => {
                e === T.G2.RIVALS ? (0, b.default)({ guildId: y.Kf }).catch(() => {}) : s(e);
            },
            [s],
        );
    return (0, r.jsx)("div", {
        ref: G,
        children: (0, r.jsxs)(c.A, {
            disableDoubleClick: !0,
            className: x.jr,
            toolbar: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(m.A, { handleTransition: s, selectedTab: t, isNarrow: _, hasText: "" !== v }),
                    (0, r.jsx)(o.DUT, {
                        className: x.ij,
                        onClick: $,
                        "aria-label": L.intl.string(L.t["7lZ31J"]),
                        children: (0, r.jsx)(o.C3E, { size: "xs", color: "currentColor" }),
                    }),
                    I &&
                        (0, r.jsx)(h.SS, {
                            analyticsPage: P,
                            cardAlignment: h.SS.CardAlignment.END,
                            ctaText: L.intl.string(L.t.VC4Mq0),
                            ctaOnClick: k,
                        }),
                ],
            }),
            hideForLater: !0,
            hideSearch: !0,
            children: [
                (0, r.jsx)(o.DUT, {
                    className: x.sU,
                    onClick: () => s(T.G2.HOME),
                    "aria-label": L.intl.string(L.t["5upuqx"]),
                    children: (0, r.jsx)(o.U1X, { size: "md", color: o.LU0.colors.TEXT_DEFAULT }),
                }),
                (0, r.jsx)(C.A, { tabs: F, selectedTab: t, onTabSelect: M }),
            ],
        }),
    });
}
