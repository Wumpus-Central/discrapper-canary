s.d(t, { G: () => O });
var r = s(627968),
    l = s(64700),
    a = s(696292),
    n = s(311907),
    o = s(397927),
    i = s(770178),
    c = s(742589),
    u = s(545986),
    d = s(657331),
    b = s(318346),
    p = s(151252),
    E = s(142270),
    S = s(287809),
    h = s(365491),
    A = s(628979),
    m = s(494573),
    f = s(758836),
    C = s(652215);
s(801416);
var T = s(518477),
    g = s(985018),
    y = s(78716);
function O(e) {
    let { selectedTab: t, handleTransition: s } = e,
        O = (0, n.bG)([S.default], () => S.default.getCurrentUser()),
        { enabled: L } = (0, p.Z)({ location: "collectibles_shop_header_bar" }),
        { searchQuery: x } = (0, h.v)(),
        R = l.useRef(null),
        [N, v] = l.useState(!1);
    (0, i.g)(
        R,
        l.useCallback((e) => {
            v(e.contentRect.width < 800);
        }, []),
    );
    let G = l.useMemo(
            () => [
                { tab: f.G2.HOME, label: g.intl.string(g.t["xNiB/O"]) },
                { tab: f.G2.CATALOG, label: g.intl.string(g.t.Ah5sJo), hasSubmenu: !0 },
                ...(L ? [{ tab: f.G2.ORBS, label: g.intl.string(g.t.EBYkzk) }] : []),
            ],
            [L],
        ),
        I = t === f.G2.ORBS ? C.liQ.SHOP_ORBS_TAB : C.liQ.COLLECTIBLES_SHOP,
        _ = l.useCallback(() => {
            (0, b.Y)({ pageType: I, sectionType: C.JJy.ORBS_BALANCE_MENU, ctaObject: C.ZSU.CTA_TO_QUEST_HOME }),
                (0, u.navigateToQuestHome)({ fromContent: a.u.ORBS_BALANCE_MENU });
        }, [I]),
        j = l.useCallback(() => {
            O?.id != null &&
                (0, d.openUserProfileModal)({ userId: O.id, tabSection: T.RP.WISHLIST, showGuildProfile: !1 });
        }, [O?.id]),
        F = l.useCallback(
            (e) => {
                s(e);
            },
            [s],
        );
    return (0, r.jsx)("div", {
        ref: R,
        children: (0, r.jsxs)(c.A, {
            disableDoubleClick: !0,
            className: y.jr,
            toolbar: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A.A, { handleTransition: s, selectedTab: t, isNarrow: N, hasText: "" !== x }),
                    (0, r.jsx)(o.DUT, {
                        className: y.ij,
                        onClick: j,
                        "aria-label": g.intl.string(g.t["7lZ31J"]),
                        children: (0, r.jsx)(o.C3E, { size: "xs", color: "currentColor" }),
                    }),
                    L &&
                        (0, r.jsx)(E.SS, {
                            analyticsPage: I,
                            cardAlignment: E.SS.CardAlignment.END,
                            ctaText: g.intl.string(g.t.VC4Mq0),
                            ctaOnClick: _,
                        }),
                ],
            }),
            hideForLater: !0,
            hideSearch: !0,
            children: [
                (0, r.jsx)(o.DUT, {
                    className: y.sU,
                    onClick: () => s(f.G2.HOME),
                    "aria-label": g.intl.string(g.t["5upuqx"]),
                    children: (0, r.jsx)(o.U1X, { size: "md", color: o.LU0.colors.TEXT_DEFAULT }),
                }),
                (0, r.jsx)(m.A, { tabs: G, selectedTab: t, onTabSelect: F }),
            ],
        }),
    });
}
