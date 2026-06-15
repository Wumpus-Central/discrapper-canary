n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    c = n(17928),
    a = n(554146),
    o = n(862482),
    d = n(939249),
    _ = n(789645),
    u = n(403581),
    I = n(34188),
    E = n(534514),
    N = n(688810),
    S = n(859040),
    A = n(915089),
    P = n(558845),
    R = n(826673),
    f = n(367727),
    x = n(725807),
    h = n(976860),
    T = n(967198),
    m = n(183555),
    v = n(873298),
    L = n(834730),
    M = n(349288),
    O = n(131607),
    D = n(840387),
    j = n(885386),
    k = n(780964),
    p = n(766075),
    U = n(106531),
    F = n(49999),
    C = n(375708),
    g = n(737923);
function y() {
    let e = (0, U.lX)("UserProfilePrivacyNotice"),
        t = (0, D.Z)(),
        n = j.KP.useSetting();
    return l.useMemo(
        () => (e && t && n !== v.KP.FRIENDS_AND_ALL_GUILDS ? [a.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [e, t, n],
    );
}
function b(e) {
    let { className: t } = e,
        n = y(),
        [l, s] = (0, O.kn)(n),
        c = j.KP.useSetting();
    if (l !== a.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let o = (function (e) {
        switch (e) {
            case v.KP.FRIENDS_ONLY:
                return C.t["0UBDvq"];
            case v.KP.FRIENDS_AND_SMALL_GUILDS:
                return C.t["9AvQO/"];
            case v.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return C.t.dqQ7AN;
        }
    })(c);
    return (0, i.jsxs)("div", {
        className: r()(g.kL, t),
        children: [
            (0, i.jsx)(L.E, {
                variant: "text-sm/normal",
                className: g.Qq,
                children: C.intl.format(o, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            M.Anchor,
                            { onClick: () => (0, p.openUserSettings)(k.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(d.D, {
                "aria-label": C.intl.string(C.t.WAI6xu),
                onClick: () => s(F.i.USER_DISMISS),
                className: g.b,
                children: (0, i.jsx)(_.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var w = n(939496),
    V = n(993401),
    Y = n(518477),
    z = n(652215),
    G = n(788868),
    W = n(996988),
    H = n(738585);
function K(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(d.D, {
        "aria-label": C.intl.string(C.t.WAI6xu),
        onClick: t,
        className: H.Sc,
        children: (0, i.jsx)(_.P, { size: "xs", className: H.Nk, color: "currentColor" }),
    });
}
function J(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: r } = (0, N.Ay)(),
        { trackUserProfileAction: c } = (0, m.NJ)();
    return (0, i.jsxs)("div", {
        className: H.JO,
        children: [
            (0, i.jsx)("div", {
                className: H.xB,
                children: n
                    ? (0, i.jsx)(V.FD, {
                          action: Y.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: u.t,
                          text: C.intl.string(C.t["0Q61kF"]),
                          onClick: () => {
                              (0, h.pX)(z.BVt.APPLICATION_STORE), l?.();
                          },
                      })
                    : (0, i.jsx)(x.A, {
                          onClick: () => {
                              c({ action: Y.pt.GET_PREMIUM }), l?.();
                          },
                          textOptions: { textOverride: C.intl.string(C.t.x6rkDp) },
                          subscriptionTier: G.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: z.JJy.USER_PROFILE },
                          className: H.Js,
                          size: t ? o.$n.Sizes.TINY : o.$n.Sizes.SMALL,
                          look: o.$n.Looks.FILLED,
                          color: o.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, i.jsx)("div", {
                className: H.xB,
                children: (0, i.jsx)(V.FD, {
                    action: Y.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: I.U,
                    text: C.intl.string(C.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, S.Cz)({ analyticsLocations: s, analyticsSource: r }), l?.();
                    },
                }),
            }),
        ],
    });
}
function q(e) {
    let { isPremiumUser: t, onInteraction: n, className: s } = e,
        o = (function () {
            let e = y(),
                [t] = (0, O.kn)(e);
            return t === a.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        d = (0, A.GV)(),
        { themeType: _ } = (0, w.E)(),
        u = _ === W.d.MODAL,
        I = (0, R.JZ)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        N = (0, c.bG)([T.A], () => T.A.getGuildId());
    if (
        (l.useEffect(() => {
            if (!I && !o)
                return (
                    (0, f.Vh)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, P.pd)({ content: a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [I, o]),
        o)
    )
        return (0, i.jsx)(b, { className: s });
    if (I) return null;
    let S = (0, i.jsx)(E.D, { variant: "text-sm/normal", id: d, children: C.intl.string(C.t.EIYbj6) }),
        x = (0, i.jsx)(K, {
            onClose: () => {
                (0, R.Dr)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: F.i.USER_DISMISS,
                    guildId: N,
                    forceTrack: !0,
                });
            },
        }),
        h = (0, i.jsx)(J, { isPremiumUser: t, onInteraction: n, tiny: u });
    return u
        ? (0, i.jsx)("aside", {
              className: r()(H.Zj, s),
              "aria-labelledby": d,
              children: (0, i.jsxs)("div", {
                  className: r()(H.xw, H.xq),
                  children: [
                      S,
                      (0, i.jsxs)("div", {
                          className: H.A_,
                          children: [(0, i.jsx)("div", { children: h }), (0, i.jsx)("div", { children: x })],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)("aside", {
              className: r()(H.Zj, s),
              "aria-labelledby": d,
              children: (0, i.jsxs)("div", {
                  className: r()(H.xw, H.K1),
                  children: [
                      (0, i.jsxs)("div", { className: H.$P, children: [S, (0, i.jsx)("div", { children: x })] }),
                      h,
                  ],
              }),
          });
}
