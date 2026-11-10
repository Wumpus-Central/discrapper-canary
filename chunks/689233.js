n.d(t, { A: () => ee });
var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r),
    c = n(855986),
    a = n(554146),
    o = n(862482),
    d = n(939249),
    u = n(789645),
    _ = n(403581),
    I = n(192308),
    E = n(34188),
    N = n(534514),
    S = n(993077),
    A = n(315629),
    R = n(366010),
    m = n(688810),
    P = n(969935),
    f = n(915089),
    h = n(517057),
    x = n(826673),
    T = n(543862),
    v = n(725807),
    M = n(465794),
    O = n(976860),
    p = n(967198),
    L = n(183555),
    D = n(38145),
    j = n(291005),
    k = n(873298),
    U = n(834730),
    F = n(28863),
    y = n(263775),
    C = n(840387),
    g = n(253932),
    b = n(780964),
    V = n(766075),
    W = n(49999),
    Y = n(792996),
    w = n(547522);
function z() {
    let e = (0, C.Z)(),
        t = g.KP.useSetting();
    return s.useMemo(() => (e && t !== k.KP.FRIENDS_AND_ALL_GUILDS ? [a.M.PRIVATE_PROFILE_INLINE_NOTICE] : []), [e, t]);
}
function G(e) {
    let { className: t } = e,
        n = z(),
        [s, r] = (0, y.kn)(n),
        c = g.KP.useSetting();
    if (s !== a.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let o = (function (e) {
        switch (e) {
            case k.KP.FRIENDS_ONLY:
                return Y.t["0UBDvq"];
            case k.KP.FRIENDS_AND_SMALL_GUILDS:
                return Y.t["9AvQO/"];
            case k.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return Y.t.dqQ7AN;
        }
    })(c);
    return (0, i.jsxs)("div", {
        className: l()(w.kL, t),
        children: [
            (0, i.jsx)(U.E, {
                variant: "body-sm/normal",
                className: w.Qq,
                children: Y.intl.format(o, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            F.Anchor,
                            { onClick: () => (0, V.openUserSettings)(b.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(d.D, {
                "aria-label": Y.intl.string(Y.t.WAI6xu),
                onClick: () => r(W.i.USER_DISMISS),
                className: w.b,
                children: (0, i.jsx)(u.XSmallIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var H = n(939496),
    J = n(993401),
    K = n(518477),
    q = n(652215),
    X = n(682901),
    Z = n(996988),
    Q = n(932454);
function $(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(d.D, {
        "aria-label": Y.intl.string(Y.t.WAI6xu),
        onClick: t,
        className: Q.Sc,
        children: (0, i.jsx)(u.XSmallIcon, { size: "xs", className: Q.Nk, color: "currentColor" }),
    });
}
function B(e) {
    let { tiny: t, isPremiumUser: n, isRefreshEnabled: s, onInteraction: r } = e,
        { analyticsLocations: l, newestAnalyticsLocation: c } = (0, m.Ay)(),
        { trackUserProfileAction: a } = (0, L.NJ)();
    return (0, i.jsxs)("div", {
        className: Q.JO,
        children: [
            (0, i.jsx)("div", {
                className: Q.xB,
                children: n
                    ? (0, i.jsx)(J.FD, {
                          action: K.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: _.NitroWheelIcon,
                          text: Y.intl.string(Y.t["0Q61kF"]),
                          onClick: () => {
                              (s && (0, I.s7)(), (0, O.pX)(q.BVt.APPLICATION_STORE), (0, D.M)(), r?.());
                          },
                      })
                    : s
                      ? (0, i.jsx)(M.A, {
                            onClick: () => {
                                (a({ action: K.pt.GET_PREMIUM }), r?.());
                            },
                            buttonTextOverride: Y.intl.string(Y.t.x6rkDp),
                            subscriptionTier: X.pe.TIER_2,
                            premiumModalAnalyticsLocation: { section: q.JJy.USER_PROFILE },
                            size: "sm",
                            variantOverride: "secondary",
                            fullWidth: !0,
                        })
                      : (0, i.jsx)(v.A, {
                            onClick: () => {
                                (a({ action: K.pt.GET_PREMIUM }), r?.());
                            },
                            textOptions: { textOverride: Y.intl.string(Y.t.x6rkDp) },
                            subscriptionTier: X.pe.TIER_2,
                            premiumModalAnalyticsLocation: { section: q.JJy.USER_PROFILE },
                            className: Q.Js,
                            size: t ? o.$n.Sizes.TINY : o.$n.Sizes.SMALL,
                            look: o.$n.Looks.FILLED,
                            color: o.$n.Colors.PRIMARY,
                            onlyShineOnHover: !0,
                            fullWidth: !0,
                        }),
            }),
            (0, i.jsx)("div", {
                className: Q.xB,
                children: (0, i.jsx)(J.FD, {
                    action: K.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: E.ShopIcon,
                    text: Y.intl.string(Y.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        ((0, P.Cz)({ analyticsLocations: l, analyticsSource: c }), r?.());
                    },
                }),
            }),
        ],
    });
}
function ee(e) {
    let { isPremiumUser: t, onInteraction: n, className: r } = e,
        l = (function () {
            let e = z(),
                [t] = (0, y.kn)(e);
            return t === a.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        o = (0, x.HX)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        d = (0, c.bG)([p.A], () => p.A.getGuildId());
    return (s.useEffect(() => {
        if (!o && !l)
            return (
                (0, T.Vh)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                () => {
                    (0, h.pd)({ content: a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                }
            );
    }, [o, l]),
    l)
        ? (0, i.jsx)(G, { className: r })
        : o
          ? null
          : (0, i.jsx)(et, {
                isPremiumUser: t,
                onInteraction: n,
                className: r,
                onClose: () => {
                    (0, x.Dr)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                        dismissAction: W.i.USER_DISMISS,
                        guildId: d,
                        forceTrack: !0,
                    });
                },
            });
}
function et(e) {
    let { isPremiumUser: t, onInteraction: n, className: s, onClose: r } = e,
        c = (0, j.O)("UserProfileDismissibleUpsells"),
        a = (0, f.GV)(),
        { themeType: o, theme: d } = (0, H.E)(),
        u = o === Z.d.MODAL,
        _ = u ? Q.xq : Q.K1,
        I = l()(Q.Zd, u && Q.Xv),
        E = (0, i.jsx)(N.D, { variant: "body-sm/normal", id: a, children: Y.intl.string(Y.t.EIYbj6) }),
        m = (0, i.jsx)($, { onClose: r }),
        P = (0, i.jsx)(B, { isPremiumUser: t, isRefreshEnabled: c, onInteraction: n, tiny: u }),
        h = u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      E,
                      (0, i.jsxs)("div", {
                          className: Q.A_,
                          children: [(0, i.jsx)("div", { children: P }), (0, i.jsx)("div", { children: m })],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", { className: Q.$P, children: [E, (0, i.jsx)("div", { children: m })] }),
                      P,
                  ],
              });
    return (0, i.jsx)("aside", {
        className: l()(Q.Zj, s),
        "aria-labelledby": a,
        children: c
            ? (0, i.jsx)(S.Z, {
                  type: S.Z.Types.CUSTOM,
                  className: Q.HZ,
                  children: t
                      ? (0, i.jsx)("div", { className: I, children: h })
                      : (0, i.jsx)(A.h, { color: "nitro-pink", className: l()(I, (0, R.q)(d) && Q.s1), children: h }),
              })
            : (0, i.jsx)("div", { className: l()(Q.xw, _), children: h }),
    });
}
