s.d(t, { G: () => G }), s(321073);
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
    m = s(270051),
    E = s(142270),
    h = s(287809),
    A = s(954571),
    f = s(440938),
    C = s(365491),
    g = s(563989),
    T = s(397309),
    y = s(628979),
    O = s(494573),
    L = s(758836),
    x = s(652215);
s(801416);
var _ = s(188275),
    I = s(518477),
    R = s(985018),
    v = s(15839);
function G(e) {
    let { selectedTab: t, handleTransition: s } = e,
        G = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        { enabled: N } = (0, m.Z)({ location: "collectibles_shop_header_bar" }),
        j = (0, d.B)({ location: "collectibles_shop_header_bar" }),
        F = (0, d.X)({ location: "collectibles_shop_header_bar" }),
        P = (0, f.uM)(),
        { searchQuery: k, itemTypeFilters: D } = (0, C.v)(),
        w = l.useRef(null),
        [M, $] = l.useState(!1);
    (0, i.g)(
        w,
        l.useCallback((e) => {
            $(e.contentRect.width < 800);
        }, []),
    );
    let B = l.useCallback(() => {
            A.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: P?.sessionId,
                page_type: L.G2.RIVALS,
                page_category: P?.pageCategory,
                page_section: P?.pageSection,
                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                cta_name: "go_to_game_shop",
            }),
                (0, b.default)({ guildId: _.Kf }).catch(() => {});
        }, [P]),
        H = l.useMemo(() => {
            if (!F) return [];
            let e = [];
            return e.push({ id: L.G2.RIVALS, label: R.intl.string(R.t["kq/75v"]), onSelect: B }), e;
        }, [F, B]),
        U = H.length > 0,
        q = l.useMemo(() => {
            let e = [
                { tab: L.G2.HOME, label: R.intl.string(R.t["xNiB/O"]) },
                {
                    tab: L.G2.CATALOG,
                    label: R.intl.string(R.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: t } = e;
                        return (0, r.jsx)(T.A, { handleTransition: s, onClose: t });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: r } = e;
                        return (0, T.Y)({ selectedTab: t, itemTypeFilters: D, onTabSelect: s, onClose: r });
                    },
                },
            ];
            return (
                N && e.push({ tab: L.G2.ORBS, label: R.intl.string(R.t.EBYkzk) }),
                j
                    ? e.push({ tab: L.G2.RIVALS, label: R.intl.string(R.t["kq/75v"]), icon: o.I9m })
                    : U &&
                      e.push({
                          tab: L.G2.GAME_SHOPS,
                          label: R.intl.string(R.t.FkjcWY),
                          submenuOnly: !0,
                          renderSubmenu: (e) => {
                              let { onClose: t } = e;
                              return (0, r.jsx)(g.A, { shops: H, onClose: t });
                          },
                          renderOverflowContent: (e) => {
                              let { onClose: t } = e;
                              return (0, g.d)({ shops: H, onClose: t });
                          },
                      }),
                e
            );
        }, [N, j, U, s, H, t, D]),
        V = t === L.G2.ORBS ? x.liQ.SHOP_ORBS_TAB : x.liQ.COLLECTIBLES_SHOP,
        z = l.useCallback(() => {
            (0, S.Y)({ pageType: V, sectionType: x.JJy.ORBS_BALANCE_MENU, ctaObject: x.ZSU.CTA_TO_QUEST_HOME }),
                (0, u.navigateToQuestHome)({ fromContent: n.u.ORBS_BALANCE_MENU });
        }, [V]),
        Y = l.useCallback(() => {
            G?.id != null && (0, p.openUserProfileModal)({ userId: G.id, tabSection: I.RP.WISHLIST });
        }, [G?.id]),
        K = l.useCallback(
            (e) => {
                e === L.G2.RIVALS ? B() : s(e);
            },
            [s, B],
        );
    return (0, r.jsx)("div", {
        ref: w,
        children: (0, r.jsxs)(c.A, {
            disableDoubleClick: !0,
            className: v.jr,
            toolbar: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(y.A, { handleTransition: s, selectedTab: t, isNarrow: M, hasText: "" !== k }),
                    (0, r.jsx)(o.DUT, {
                        className: v.ij,
                        onClick: Y,
                        "aria-label": R.intl.string(R.t["7lZ31J"]),
                        children: (0, r.jsx)(o.C3E, { size: "xs", color: "currentColor" }),
                    }),
                    N &&
                        (0, r.jsx)(E.SS, {
                            analyticsPage: V,
                            cardAlignment: E.SS.CardAlignment.END,
                            ctaText: R.intl.string(R.t.VC4Mq0),
                            ctaOnClick: z,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, r.jsx)(o.DUT, {
                    className: v.sU,
                    onClick: () => s(L.G2.HOME),
                    "aria-label": R.intl.string(R.t["5upuqx"]),
                    children: (0, r.jsx)(o.U1X, { size: "md", color: o.LU0.colors.TEXT_DEFAULT }),
                }),
                (0, r.jsx)(O.A, { tabs: q, selectedTab: t, onTabSelect: K }),
            ],
        }),
    });
}
