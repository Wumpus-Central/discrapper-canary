t.d(l, { A: () => w });
var n = t(477900),
    a = t(582128),
    i = t(503698),
    s = t.n(i),
    r = t(17928),
    c = t(939249),
    o = t(366010),
    d = t(376357),
    u = t(857250),
    A = t(97483),
    C = t(834730),
    m = t(926268),
    E = t(346411),
    g = t(271866),
    T = t(736653),
    p = t(793574),
    N = t(688810),
    _ = t(10779),
    x = t(793943),
    S = t(742589),
    h = t(402860),
    O = t(287809),
    L = t(147964),
    b = t(174459),
    j = t(975571),
    k = t(371794),
    I = t(439303),
    R = t(353281);
let f = (0, t(945810).mj)({
    name: "2026-09-application-test-mode-quick-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = t(676924),
    M = t(995393),
    y = t(652215),
    P = t(616633),
    U = t(518477),
    F = t(375708),
    D = t(859425);
function Y(e) {
    let { content: l, onClick: t, ariaLabel: a, className: i } = e;
    return (0, n.jsx)(c.D, { className: s()(D.gb, i), onClick: t, "aria-label": a, children: l });
}
function w(e) {
    let { storefront: l, selectedPageIndex: t } = e,
        i = (0, o.M)((0, T.Ay)()),
        w = (0, r.bG)([O.default], () => O.default.getCurrentUser()),
        H = (0, I.jM)(),
        { analyticsLocations: B } = (0, N.Ay)(),
        { navigateToStorefrontPage: G } = (0, R.H)(),
        V = l?.applicationId,
        { enabled: Z } = f.useConfig({ location: "SocialLayerStorefrontHeader" }),
        J = (0, _.A)(Z ? V : null),
        q = (0, r.bG)([L.A], () => null != V && L.A.inTestModeForApplication(V)),
        z = a.useCallback(() => {
            w?.id != null &&
                (0, h.openUserProfileModal)({
                    userId: w.id,
                    tabSection: U.RP.WISHLIST,
                    sourceAnalyticsLocations: [p.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [w]),
        Q = a.useCallback(() => {
            (b.default.track(y.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: H?.sessionId,
                cta_type: M.ST.LEARN_MORE,
                location_stack: B,
            }),
                window.open(j.A.getArticleURL(y.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [H, B]),
        K = a.useCallback(() => {
            null != V &&
                (0, g.q1)(V).then((e) => {
                    null == e
                        ? (0, d.P)((0, u.o)(L.A.error ?? F.intl.string(F.t.SDP0vo), A.Ck.FAILURE))
                        : (0, x.nf)(x.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: P.t.STOREFRONT,
                          });
                });
        }, [V]),
        W = a.useCallback(() => {
            G?.(0);
        }, [G]);
    if (null == l) return null;
    let $ = null != l.logoAssetId ? (0, k.YE)(l.applicationId, l.logoAssetId, 128) : null,
        X = null != l.lightThemeLogoAssetId ? (0, k.YE)(l.applicationId, l.lightThemeLogoAssetId, 128) : null,
        ee = null;
    return (
        (ee = i ? ($ ?? X) : (X ?? $)),
        (0, n.jsxs)(S.A, {
            disableDoubleClick: !0,
            className: D.N1,
            children: [
                (0, n.jsxs)(c.D, {
                    onClick: W,
                    className: D.gn,
                    children: [
                        null != ee && (0, n.jsx)("img", { className: D.wm, src: ee, alt: l.title }),
                        (0, n.jsx)(S.A.Title, { children: l.title }),
                    ],
                }),
                l.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: D.YC,
                        children: l.pages.map((e, l) =>
                            (0, n.jsx)(
                                S.A.Title,
                                {
                                    onClick: () => G?.(l),
                                    wrapperClassName: D.oB,
                                    className: s()(D.xT, { [D.ys]: t === l }),
                                    children: (0, n.jsx)(C.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${l}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: D.sZ,
                    children: [
                        (0, n.jsx)(Y, {
                            content: (0, n.jsx)(m.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: z,
                            ariaLabel: F.intl.string(F.t["7lZ31J"]),
                            className: D.ij,
                        }),
                        (0, n.jsx)(v.A, { location: p.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, n.jsx)(Y, {
                            onClick: Q,
                            ariaLabel: F.intl.string(F.t.hvVgAZ),
                            content: (0, n.jsx)(C.E, {
                                variant: "text-sm/medium",
                                children: F.intl.string(F.t.hvVgAZ),
                            }),
                            className: D.AJ,
                        }),
                        J &&
                            !q &&
                            (0, n.jsx)(Y, {
                                onClick: K,
                                ariaLabel: F.intl.string(F.t.QexSCe),
                                content: (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(E.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-sm/medium",
                                            children: F.intl.string(F.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: D.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
