s.d(t, { G: () => I });
var r = s(627968),
    l = s(64700),
    a = s(696292),
    n = s(311907),
    o = s(397927),
    i = s(770178),
    c = s(742589),
    u = s(545986),
    d = s(92615),
    b = s(44724),
    p = s(657331),
    S = s(318346),
    E = s(270051),
    A = s(142270),
    f = s(287809),
    h = s(954571),
    m = s(440938),
    C = s(365491),
    g = s(628979),
    T = s(494573),
    y = s(758836),
    O = s(652215);
s(801416);
var L = s(188275),
    _ = s(518477),
    x = s(985018),
    R = s(15839);
function I(e) {
    let { selectedTab: t, handleTransition: s } = e,
        I = (0, n.bG)([f.default], () => f.default.getCurrentUser()),
        { enabled: N } = (0, E.Z)({ location: "collectibles_shop_header_bar" }),
        v = (0, d.B)({ location: "collectibles_shop_header_bar" }),
        G = (0, m.uM)(),
        { searchQuery: j } = (0, C.v)(),
        F = l.useRef(null),
        [P, k] = l.useState(!1);
    (0, i.g)(
        F,
        l.useCallback((e) => {
            k(e.contentRect.width < 800);
        }, []),
    );
    let $ = l.useMemo(
            () => [
                { tab: y.G2.HOME, label: x.intl.string(x.t["xNiB/O"]) },
                { tab: y.G2.CATALOG, label: x.intl.string(x.t.Ah5sJo), hasSubmenu: !0 },
                ...(N ? [{ tab: y.G2.ORBS, label: x.intl.string(x.t.EBYkzk) }] : []),
                ...(v ? [{ tab: y.G2.RIVALS, label: x.intl.string(x.t["kq/75v"]), icon: o.I9m }] : []),
            ],
            [N, v],
        ),
        M = t === y.G2.ORBS ? O.liQ.SHOP_ORBS_TAB : O.liQ.COLLECTIBLES_SHOP,
        D = l.useCallback(() => {
            (0, S.Y)({ pageType: M, sectionType: O.JJy.ORBS_BALANCE_MENU, ctaObject: O.ZSU.CTA_TO_QUEST_HOME }),
                (0, u.navigateToQuestHome)({ fromContent: a.u.ORBS_BALANCE_MENU });
        }, [M]),
        w = l.useCallback(() => {
            I?.id != null && (0, p.openUserProfileModal)({ userId: I.id, tabSection: _.RP.WISHLIST });
        }, [I?.id]),
        B = l.useCallback(
            (e) => {
                if (e === y.G2.RIVALS) {
                    h.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: G?.sessionId,
                        page_type: e,
                        page_category: G?.pageCategory,
                        page_section: G?.pageSection,
                        tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                        cta_name: "go_to_game_shop",
                    }),
                        (0, b.default)({ guildId: L.Kf }).catch(() => {});
                    return;
                }
                s(e);
            },
            [s, G],
        );
    return (0, r.jsx)("div", {
        ref: F,
        children: (0, r.jsxs)(c.A, {
            disableDoubleClick: !0,
            className: R.jr,
            toolbar: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(g.A, { handleTransition: s, selectedTab: t, isNarrow: P, hasText: "" !== j }),
                    (0, r.jsx)(o.DUT, {
                        className: R.ij,
                        onClick: w,
                        "aria-label": x.intl.string(x.t["7lZ31J"]),
                        children: (0, r.jsx)(o.C3E, { size: "xs", color: "currentColor" }),
                    }),
                    N &&
                        (0, r.jsx)(A.SS, {
                            analyticsPage: M,
                            cardAlignment: A.SS.CardAlignment.END,
                            ctaText: x.intl.string(x.t.VC4Mq0),
                            ctaOnClick: D,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, r.jsx)(o.DUT, {
                    className: R.sU,
                    onClick: () => s(y.G2.HOME),
                    "aria-label": x.intl.string(x.t["5upuqx"]),
                    children: (0, r.jsx)(o.U1X, { size: "md", color: o.LU0.colors.TEXT_DEFAULT }),
                }),
                (0, r.jsx)(T.A, { tabs: $, selectedTab: t, onTabSelect: B }),
            ],
        }),
    });
}
