n.d(t, { A: () => Q });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    c = n(17928),
    a = n(554146),
    o = n(862482),
    u = n(939249),
    d = n(789645),
    _ = n(403581),
    I = n(34188),
    E = n(297264),
    N = n(688810),
    S = n(839534),
    A = n(915089),
    P = n(558845),
    R = n(826673),
    f = n(367727),
    x = n(725807),
    h = n(976860),
    v = n(967198),
    T = n(183555),
    m = n(975732),
    L = n(873298),
    M = n(834730),
    O = n(349288),
    D = n(131607),
    j = n(840387),
    k = n(885386),
    p = n(780964),
    U = n(766075),
    F = n(106531),
    C = n(49999),
    g = n(375708),
    y = n(547522);
function b() {
    let e = (0, F.lX)("UserProfilePrivacyNotice"),
        t = (0, j.Z)(),
        n = k.KP.useSetting();
    return l.useMemo(
        () => (e && t && n !== L.KP.FRIENDS_AND_ALL_GUILDS ? [a.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [e, t, n],
    );
}
function w(e) {
    let { className: t } = e,
        n = b(),
        [l, r] = (0, D.kn)(n),
        c = k.KP.useSetting();
    if (l !== a.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let o = (function (e) {
        switch (e) {
            case L.KP.FRIENDS_ONLY:
                return g.t["0UBDvq"];
            case L.KP.FRIENDS_AND_SMALL_GUILDS:
                return g.t["9AvQO/"];
            case L.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return g.t.dqQ7AN;
        }
    })(c);
    return (0, i.jsxs)("div", {
        className: s()(y.kL, t),
        children: [
            (0, i.jsx)(M.E, {
                variant: "text-sm/normal",
                className: y.Qq,
                children: g.intl.format(o, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            O.Anchor,
                            { onClick: () => (0, U.openUserSettings)(p.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(u.D, {
                "aria-label": g.intl.string(g.t.WAI6xu),
                onClick: () => r(C.i.USER_DISMISS),
                className: y.b,
                children: (0, i.jsx)(d.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var V = n(939496),
    Y = n(993401),
    z = n(518477),
    G = n(652215),
    H = n(202541),
    W = n(996988),
    K = n(932454);
function q(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(u.D, {
        "aria-label": g.intl.string(g.t.WAI6xu),
        onClick: t,
        className: K.Sc,
        children: (0, i.jsx)(d.P, { size: "xs", className: K.Nk, color: "currentColor" }),
    });
}
function J(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: l } = e,
        { analyticsLocations: r, newestAnalyticsLocation: s } = (0, N.Ay)(),
        { trackUserProfileAction: c } = (0, T.NJ)();
    return (0, i.jsxs)("div", {
        className: K.JO,
        children: [
            (0, i.jsx)("div", {
                className: K.xB,
                children: n
                    ? (0, i.jsx)(Y.FD, {
                          action: z.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: _.t,
                          text: g.intl.string(g.t["0Q61kF"]),
                          onClick: () => {
                              (0, h.pX)(G.BVt.APPLICATION_STORE), (0, m.closeUserProfileModal)(), l?.();
                          },
                      })
                    : (0, i.jsx)(x.A, {
                          onClick: () => {
                              c({ action: z.pt.GET_PREMIUM }), l?.();
                          },
                          textOptions: { textOverride: g.intl.string(g.t.x6rkDp) },
                          subscriptionTier: H.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: G.JJy.USER_PROFILE },
                          className: K.Js,
                          size: t ? o.$n.Sizes.TINY : o.$n.Sizes.SMALL,
                          look: o.$n.Looks.FILLED,
                          color: o.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, i.jsx)("div", {
                className: K.xB,
                children: (0, i.jsx)(Y.FD, {
                    action: z.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: I.U,
                    text: g.intl.string(g.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, S.Cz)({ analyticsLocations: r, analyticsSource: s }), l?.();
                    },
                }),
            }),
        ],
    });
}
function Q(e) {
    let { isPremiumUser: t, onInteraction: n, className: r } = e,
        o = (function () {
            let e = b(),
                [t] = (0, D.kn)(e);
            return t === a.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        u = (0, A.GV)(),
        { themeType: d } = (0, V.E)(),
        _ = d === W.d.MODAL,
        I = (0, R.HX)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        N = (0, c.bG)([v.A], () => v.A.getGuildId());
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
        return (0, i.jsx)(w, { className: r });
    if (I) return null;
    let S = (0, i.jsx)(E.D, { variant: "text-sm/normal", id: u, children: g.intl.string(g.t.EIYbj6) }),
        x = (0, i.jsx)(q, {
            onClose: () => {
                (0, R.Dr)(a.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: C.i.USER_DISMISS,
                    guildId: N,
                    forceTrack: !0,
                });
            },
        }),
        h = (0, i.jsx)(J, { isPremiumUser: t, onInteraction: n, tiny: _ });
    return _
        ? (0, i.jsx)("aside", {
              className: s()(K.Zj, r),
              "aria-labelledby": u,
              children: (0, i.jsxs)("div", {
                  className: s()(K.xw, K.xq),
                  children: [
                      S,
                      (0, i.jsxs)("div", {
                          className: K.A_,
                          children: [(0, i.jsx)("div", { children: h }), (0, i.jsx)("div", { children: x })],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)("aside", {
              className: s()(K.Zj, r),
              "aria-labelledby": u,
              children: (0, i.jsxs)("div", {
                  className: s()(K.xw, K.K1),
                  children: [
                      (0, i.jsxs)("div", { className: K.$P, children: [S, (0, i.jsx)("div", { children: x })] }),
                      h,
                  ],
              }),
          });
}
