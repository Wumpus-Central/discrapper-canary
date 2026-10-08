t.d(l, { A: () => D });
var n = t(477900),
    a = t(582128),
    i = t(503698),
    s = t.n(i),
    r = t(17928),
    c = t(939249),
    o = t(366010),
    d = t(376357),
    u = t(834730),
    A = t(926268),
    C = t(346411),
    m = t(271866),
    E = t(736653),
    g = t(793574),
    T = t(688810),
    p = t(10779),
    N = t(793943),
    _ = t(742589),
    x = t(402860),
    S = t(287809),
    h = t(147964),
    O = t(174459),
    L = t(975571),
    b = t(371794),
    j = t(439303),
    k = t(353281);
let I = (0, t(945810).mj)({
    name: "2026-09-application-test-mode-quick-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var R = t(676924),
    f = t(995393),
    v = t(652215),
    M = t(616633),
    y = t(518477),
    P = t(660183),
    U = t(859425);
function F(e) {
    let { content: l, onClick: t, ariaLabel: a, className: i } = e;
    return (0, n.jsx)(c.D, { className: s()(U.gb, i), onClick: t, "aria-label": a, children: l });
}
function D(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        i = (0, o.M)((0, E.Ay)()),
        D = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        Y = (0, j.jM)(),
        { analyticsLocations: w } = (0, T.Ay)(),
        { navigateToStorefrontPage: H } = (0, k.H)(),
        B = l?.applicationId,
        { enabled: G } = I.useConfig({ location: "SocialLayerStorefrontHeader" }),
        V = (0, p.A)(G ? B : null),
        Z = (0, r.bG)([h.A], () => null != B && h.A.inTestModeForApplication(B)),
        J = a.useCallback(() => {
            D?.id != null &&
                (0, x.openUserProfileModal)({
                    userId: D.id,
                    tabSection: y.RP.WISHLIST,
                    sourceAnalyticsLocations: [g.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [D]),
        q = a.useCallback(() => {
            (O.default.track(v.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: Y?.sessionId,
                cta_type: f.ST.LEARN_MORE,
                location_stack: w,
            }),
                window.open(L.A.getArticleURL(v.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [Y, w]),
        z = a.useCallback(() => {
            null != B &&
                (0, m.q1)(B).then((e) => {
                    null == e
                        ? (0, d.P0)((0, d.ox)(h.A.error ?? P.intl.string(P.t.SDP0vo), d.Ck.FAILURE))
                        : (0, N.nf)(N.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: M.t.STOREFRONT,
                          });
                });
        }, [B]),
        Q = a.useCallback(() => {
            H?.(0);
        }, [H]);
    if (null == l) return null;
    let K = null != l.logoAssetId ? (0, b.YE)(l.applicationId, l.logoAssetId, 128) : null,
        W = null != l.lightThemeLogoAssetId ? (0, b.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        $ = null;
    return (
        ($ = i ? (K ?? W) : (W ?? K)),
        (0, n.jsxs)(_.A, {
            disableDoubleClick: !0,
            className: U.N1,
            children: [
                (0, n.jsxs)(c.D, {
                    onClick: Q,
                    className: U.gn,
                    children: [
                        null != $ && (0, n.jsx)("img", { className: U.wm, src: $, alt: l.title }),
                        (0, n.jsx)(_.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: U.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                _.A.Title,
                                {
                                    onClick: () => H?.(l),
                                    wrapperClassName: U.oB,
                                    className: s()(U.xT, { [U.ys]: t === l }),
                                    children: (0, n.jsx)(u.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: U.sZ,
                    children: [
                        (0, n.jsx)(F, {
                            content: (0, n.jsx)(A.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: J,
                            ariaLabel: P.intl.string(P.t["7lZ31J"]),
                            className: U.ij,
                        }),
                        (0, n.jsx)(R.A, { location: g.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, n.jsx)(F, {
                            onClick: q,
                            ariaLabel: P.intl.string(P.t.hvVgAZ),
                            content: (0, n.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: P.intl.string(P.t.hvVgAZ),
                            }),
                            className: U.AJ,
                        }),
                        V &&
                            !Z &&
                            (0, n.jsx)(F, {
                                onClick: z,
                                ariaLabel: P.intl.string(P.t.QexSCe),
                                content: (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(C.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, n.jsx)(u.E, {
                                            variant: "text-sm/medium",
                                            children: P.intl.string(P.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: U.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
