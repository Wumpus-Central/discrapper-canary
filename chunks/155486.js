l.d(t, {
    G: () => N,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(696292),
    o = l(311907),
    c = l(554146),
    u = l(397927),
    d = l(770178),
    f = l(736653),
    b = l(379848),
    g = l(742589),
    p = l(545986),
    m = l(657331),
    h = l(318346),
    E = l(151252),
    v = l(142270),
    A = l(287809),
    x = l(379177),
    S = l(365491),
    C = l(628979),
    O = l(494573),
    _ = l(758836),
    y = l(652215);
l(801416);
var j = l(49999),
    L = l(518477),
    T = l(985018),
    I = l(78716);

function N(e) {
    let { selectedTab: t, handleTransition: l } = e,
        s = (0, f.Ay)(),
        N = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        { enabled: k } = (0, E.Z)({
            location: "collectibles_shop_header_bar",
        }),
        { searchQuery: R } = (0, S.v)(),
        P = r.useRef(null),
        [D, w] = r.useState(!1);
    (0, d.g)(
        P,
        r.useCallback((e) => {
            w(e.contentRect.width < 800);
        }, []),
    );
    let B = (0, x.rR)("CollectiblesShopHeaderBar"),
        M = B ? [c.M.ORB_RENTAL_NEW_BADGE] : [],
        [H, G] = (0, b.kn)(M),
        F = B && H === c.M.ORB_RENTAL_NEW_BADGE;
    r.useEffect(
        () => () => {
            F && G(j.i.USER_DISMISS);
        },
        [F, G],
    );
    let U = r.useMemo(
            () => [
                {
                    tab: _.G2.HOME,
                    label: T.intl.string(T.t.ijDDwz),
                },
                {
                    tab: _.G2.CATALOG,
                    label: T.intl.string(T.t.Ah5sJo),
                    hasSubmenu: !0,
                },
                ...(k
                    ? [
                          {
                              tab: _.G2.ORBS,
                              label: T.intl.string(T.t.EBYkzk),
                          },
                      ]
                    : []),
            ],
            [k],
        ),
        z = t === _.G2.ORBS ? y.liQ.SHOP_ORBS_TAB : y.liQ.COLLECTIBLES_SHOP,
        V = r.useCallback(() => {
            (0, h.Y)({
                pageType: z,
                sectionType: y.JJy.ORBS_BALANCE_MENU,
                ctaObject: y.ZSU.CTA_TO_QUEST_HOME,
            }),
                (0, p.navigateToQuestHome)({
                    fromContent: i.u.ORBS_BALANCE_MENU,
                });
        }, [z]),
        K = r.useCallback(() => {
            (null == N ? void 0 : N.id) != null &&
                (0, m.openUserProfileModal)({
                    userId: N.id,
                    tabSection: L.RP.WISHLIST,
                    showGuildProfile: !1,
                });
        }, [null == N ? void 0 : N.id]),
        W = r.useCallback(
            (e) => {
                l(e), e === _.G2.ORBS && F && G(j.i.USER_DISMISS);
            },
            [l, F, G],
        );
    return (0, n.jsx)(u.NPJ, {
        theme: s,
        children: (e) =>
            (0, n.jsx)("div", {
                ref: P,
                children: (0, n.jsxs)(g.A, {
                    disableDoubleClick: !0,
                    className: a()(e, I.jr),
                    innerClassname: k ? I.vi : void 0,
                    children: [
                        (0, n.jsx)(u.DUT, {
                            className: I.sU,
                            onClick: () => l(_.G2.HOME),
                            "aria-label": T.intl.string(T.t.pWG4ze) + " home",
                            children: (0, n.jsx)(u.U1X, {
                                size: "md",
                                color: u.LU0.colors.TEXT_DEFAULT,
                            }),
                        }),
                        (0, n.jsx)(O.A, {
                            tabs: U,
                            selectedTab: t,
                            onTabSelect: W,
                            showOrbRentalNewBadge: F,
                        }),
                        (0, n.jsxs)("div", {
                            className: I.sZ,
                            children: [
                                (0, n.jsx)(C.A, {
                                    handleTransition: l,
                                    selectedTab: t,
                                    isNarrow: D,
                                    hasText: "" !== R,
                                }),
                                (0, n.jsx)(u.DUT, {
                                    className: I.ij,
                                    onClick: K,
                                    "aria-label": T.intl.string(T.t["7lZ31J"]),
                                    children: (0, n.jsx)(u.C3E, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                }),
                                k &&
                                    (0, n.jsx)(v.SS, {
                                        analyticsPage: z,
                                        cardAlignment: v.SS.CardAlignment.END,
                                        ctaText: T.intl.string(T.t.VC4Mq0),
                                        ctaOnClick: V,
                                        className: I.oz,
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
