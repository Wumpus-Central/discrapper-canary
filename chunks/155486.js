r.d(t, { G: () => N }), r(321073);
var n = r(627968),
    s = r(64700),
    l = r(696292),
    a = r(311907),
    o = r(509434),
    i = r(939249),
    c = r(926268),
    d = r(34188),
    u = r(827734),
    _ = r(770178),
    b = r(742589),
    p = r(545986),
    m = r(92615),
    f = r(44724),
    C = r(657331),
    g = r(318346),
    h = r(270051),
    S = r(142270),
    A = r(287809),
    E = r(954571),
    x = r(440938),
    y = r(365491),
    I = r(563989),
    T = r(397309),
    v = r(628979),
    O = r(494573),
    L = r(758836),
    R = r(652215);
r(801416);
var w = r(188275),
    k = r(518477),
    j = r(985018),
    G = r(773743);
function N(e) {
    let { selectedTab: t, handleTransition: r } = e,
        N = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        { enabled: P } = (0, h.Z)({ location: "collectibles_shop_header_bar" }),
        F = (0, m.B)({ location: "collectibles_shop_header_bar" }),
        M = (0, m.X)({ location: "collectibles_shop_header_bar" }),
        B = (0, x.uM)(),
        { searchQuery: $, itemTypeFilters: D } = (0, y.v)(),
        H = s.useRef(null),
        [V, q] = s.useState(!1);
    (0, _.g)(
        H,
        s.useCallback((e) => {
            q(e.contentRect.width < 800);
        }, []),
    );
    let U = s.useCallback(() => {
            E.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: B?.sessionId,
                page_type: L.G2.RIVALS,
                page_category: B?.pageCategory,
                page_section: B?.pageSection,
                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                cta_name: "go_to_game_shop",
            }),
                (0, f.default)({ guildId: w.Kf }).catch(() => {});
        }, [B]),
        z = s.useMemo(() => {
            if (!M) return [];
            let e = [];
            return e.push({ id: L.G2.RIVALS, label: j.intl.string(j.t["kq/75v"]), onSelect: U }), e;
        }, [M, U]),
        K = z.length > 0,
        Y = s.useMemo(() => {
            let e = [
                { tab: L.G2.HOME, label: j.intl.string(j.t["xNiB/O"]) },
                {
                    tab: L.G2.CATALOG,
                    label: j.intl.string(j.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: t } = e;
                        return (0, n.jsx)(T.A, { handleTransition: r, onClose: t });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: n } = e;
                        return (0, T.Y)({ selectedTab: t, itemTypeFilters: D, onTabSelect: r, onClose: n });
                    },
                },
            ];
            return (
                P && e.push({ tab: L.G2.ORBS, label: j.intl.string(j.t.EBYkzk) }),
                F
                    ? e.push({ tab: L.G2.RIVALS, label: j.intl.string(j.t["kq/75v"]), icon: o.I })
                    : K &&
                      e.push({
                          tab: L.G2.GAME_SHOPS,
                          label: j.intl.string(j.t.FkjcWY),
                          submenuOnly: !0,
                          renderSubmenu: (e) => {
                              let { onClose: t } = e;
                              return (0, n.jsx)(I.A, { shops: z, onClose: t });
                          },
                          renderOverflowContent: (e) => {
                              let { onClose: t } = e;
                              return (0, I.d)({ shops: z, onClose: t });
                          },
                      }),
                e
            );
        }, [P, F, K, r, z, t, D]),
        W = t === L.G2.ORBS ? R.liQ.SHOP_ORBS_TAB : R.liQ.COLLECTIBLES_SHOP,
        Q = s.useCallback(() => {
            (0, g.Y)({ pageType: W, sectionType: R.JJy.ORBS_BALANCE_MENU, ctaObject: R.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.navigateToQuestHome)({ fromContent: l.u.ORBS_BALANCE_MENU });
        }, [W]),
        Z = s.useCallback(() => {
            N?.id != null && (0, C.openUserProfileModal)({ userId: N.id, tabSection: k.RP.WISHLIST });
        }, [N?.id]),
        J = s.useCallback(
            (e) => {
                e === L.G2.RIVALS ? U() : r(e);
            },
            [r, U],
        );
    return (0, n.jsx)("div", {
        ref: H,
        children: (0, n.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: G.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(v.A, { handleTransition: r, selectedTab: t, isNarrow: V, hasText: "" !== $ }),
                    (0, n.jsx)(i.D, {
                        className: G.ij,
                        onClick: Z,
                        "aria-label": j.intl.string(j.t["7lZ31J"]),
                        children: (0, n.jsx)(c.C, { size: "xs", color: "currentColor" }),
                    }),
                    P &&
                        (0, n.jsx)(S.SS, {
                            analyticsPage: W,
                            cardAlignment: S.SS.CardAlignment.END,
                            ctaText: j.intl.string(j.t.VC4Mq0),
                            ctaOnClick: Q,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(i.D, {
                    className: G.sU,
                    onClick: () => r(L.G2.HOME),
                    "aria-label": j.intl.string(j.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(O.A, { tabs: Y, selectedTab: t, onTabSelect: J }),
            ],
        }),
    });
}
