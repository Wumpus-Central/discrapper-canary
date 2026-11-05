n.d(t, { A: () => B });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    c = n(855986),
    a = n(554146),
    o = n(862482),
    d = n(939249),
    u = n(789645),
    _ = n(403581),
    I = n(34188),
    E = n(534514),
    N = n(993077),
    S = n(315629),
    A = n(366010),
    R = n(688810),
    f = n(110676),
    m = n(915089),
    P = n(517057),
    h = n(826673),
    x = n(543862),
    T = n(725807),
    v = n(465794),
    p = n(976860),
    M = n(967198),
    O = n(183555),
    L = n(38145);
let D = (0, n(945810).mj)({
    name: "2026-10-profile-nitro-upsell-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var j = n(873298),
    k = n(834730),
    U = n(28863),
    F = n(263775),
    C = n(840387),
    g = n(253932),
    y = n(780964),
    b = n(766075),
    V = n(49999),
    W = n(792996),
    Y = n(547522);
function w() {
    let e = (0, C.Z)(),
        t = g.KP.useSetting();
    return l.useMemo(() => (e && t !== j.KP.FRIENDS_AND_ALL_GUILDS ? [a.M.PRIVATE_PROFILE_INLINE_NOTICE] : []), [e, t]);
}
function z(e) {
    let { className: t } = e,
        n = w(),
        [l, s] = (0, F.kn)(n),
        c = g.KP.useSetting();
    if (l !== a.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let o = (function (e) {
        switch (e) {
            case j.KP.FRIENDS_ONLY:
                return W.t["0UBDvq"];
            case j.KP.FRIENDS_AND_SMALL_GUILDS:
                return W.t["9AvQO/"];
            case j.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return W.t.dqQ7AN;
        }
    })(c);
    return (0, i.jsxs)("div", {
        className: r()(Y.kL, t),
        children: [
            (0, i.jsx)(k.E, {
                variant: "body-sm/normal",
                className: Y.Qq,
                children: W.intl.format(o, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            U.Anchor,
                            { onClick: () => (0, b.openUserSettings)(y.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(d.D, {
                "aria-label": W.intl.string(W.t.WAI6xu),
                onClick: () => s(V.i.USER_DISMISS),
                className: Y.b,
                children: (0, i.jsx)(u.XSmallIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var G = n(939496),
    H = n(993401),
    J = n(518477),
    K = n(652215),
    q = n(682901),
    X = n(996988),
    Z = n(932454);
function Q(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(d.D, {
        "aria-label": W.intl.string(W.t.WAI6xu),
        onClick: t,
        className: Z.Sc,
        children: (0, i.jsx)(u.XSmallIcon, { size: "xs", className: Z.Nk, color: "currentColor" }),
    });
}
function $(e) {
    let { tiny: t, isPremiumUser: n, isRefreshEnabled: l, onInteraction: s } = e,
        { analyticsLocations: r, newestAnalyticsLocation: c } = (0, R.Ay)(),
        { trackUserProfileAction: a } = (0, O.NJ)();
    return (0, i.jsxs)("div", {
        className: Z.JO,
        children: [
            (0, i.jsx)("div", {
                className: Z.xB,
                children: n
                    ? (0, i.jsx)(H.FD, {
                          action: J.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: _.NitroWheelIcon,
                          text: W.intl.string(W.t["0Q61kF"]),
                          onClick: () => {
                              ((0, p.pX)(K.BVt.APPLICATION_STORE), (0, L.M)(), s?.());
                          },
                      })
                    : l
                      ? (0, i.jsx)(v.A, {
                            onClick: () => {
                                (a({ action: J.pt.GET_PREMIUM }), s?.());
                            },
                            buttonTextOverride: W.intl.string(W.t.x6rkDp),
                            subscriptionTier: q.pe.TIER_2,
                            premiumModalAnalyticsLocation: { section: K.JJy.USER_PROFILE },
                            size: "sm",
                            variantOverride: "secondary",
                            fullWidth: !0,
                        })
                      : (0, i.jsx)(T.A, {
                            onClick: () => {
                                (a({ action: J.pt.GET_PREMIUM }), s?.());
                            },
                            textOptions: { textOverride: W.intl.string(W.t.x6rkDp) },
                            subscriptionTier: q.pe.TIER_2,
                            premiumModalAnalyticsLocation: { section: K.JJy.USER_PROFILE },
                            className: Z.Js,
                            size: t ? o.$n.Sizes.TINY : o.$n.Sizes.SMALL,
                            look: o.$n.Looks.FILLED,
                            color: o.$n.Colors.PRIMARY,
                            onlyShineOnHover: !0,
                            fullWidth: !0,
                        }),
            }),
            (0, i.jsx)("div", {
                className: Z.xB,
                children: (0, i.jsx)(H.FD, {
                    action: J.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: I.ShopIcon,
                    text: W.intl.string(W.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        ((0, f.Cz)({ analyticsLocations: r, analyticsSource: c }), s?.());
                    },
                }),
            }),
        ],
    });
}
function B(e) {
    let { isPremiumUser: t, onInteraction: n, className: s } = e,
        r = (function () {
            let e = w(),
                [t] = (0, F.kn)(e);
            return t === a.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        o = (0, h.HX)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        d = (0, c.bG)([M.A], () => M.A.getGuildId());
    return (l.useEffect(() => {
        if (!o && !r)
            return (
                (0, x.Vh)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                () => {
                    (0, P.pd)({ content: a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                }
            );
    }, [o, r]),
    r)
        ? (0, i.jsx)(z, { className: s })
        : o
          ? null
          : (0, i.jsx)(ee, {
                isPremiumUser: t,
                onInteraction: n,
                className: s,
                onClose: () => {
                    (0, h.Dr)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                        dismissAction: V.i.USER_DISMISS,
                        guildId: d,
                        forceTrack: !0,
                    });
                },
            });
}
function ee(e) {
    let { isPremiumUser: t, onInteraction: n, className: l, onClose: s } = e,
        c = D.useConfig({ location: "UserProfileDismissibleUpsells" }).enabled,
        a = (0, m.GV)(),
        { themeType: o, theme: d } = (0, G.E)(),
        u = o === X.d.MODAL,
        _ = u ? Z.xq : Z.K1,
        I = r()(Z.Zd, u && Z.Xv),
        R = (0, i.jsx)(E.D, { variant: "body-sm/normal", id: a, children: W.intl.string(W.t.EIYbj6) }),
        f = (0, i.jsx)(Q, { onClose: s }),
        P = (0, i.jsx)($, { isPremiumUser: t, isRefreshEnabled: c, onInteraction: n, tiny: u }),
        h = u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      R,
                      (0, i.jsxs)("div", {
                          className: Z.A_,
                          children: [(0, i.jsx)("div", { children: P }), (0, i.jsx)("div", { children: f })],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", { className: Z.$P, children: [R, (0, i.jsx)("div", { children: f })] }),
                      P,
                  ],
              });
    return (0, i.jsx)("aside", {
        className: r()(Z.Zj, l),
        "aria-labelledby": a,
        children: c
            ? (0, i.jsx)(N.Z, {
                  type: N.Z.Types.CUSTOM,
                  className: Z.HZ,
                  children: t
                      ? (0, i.jsx)("div", { className: I, children: h })
                      : (0, i.jsx)(S.h, { color: "nitro-pink", className: r()(I, (0, A.q)(d) && Z.s1), children: h }),
              })
            : (0, i.jsx)("div", { className: r()(Z.xw, _), children: h }),
    });
}
