"use strict";
n.d(t, { A: () => z });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(554146),
    u = n(862482),
    c = n(939249),
    d = n(789645),
    _ = n(403581),
    h = n(34188),
    f = n(534514),
    E = n(688810),
    p = n(662388),
    m = n(915089),
    g = n(558845),
    A = n(826673),
    I = n(367727),
    T = n(725807),
    S = n(976860),
    N = n(967198),
    C = n(183555),
    y = n(873298),
    O = n(834730),
    R = n(349288),
    v = n(131607),
    b = n(840387),
    L = n(885386),
    D = n(780964),
    w = n(766075),
    P = n(106531),
    M = n(49999),
    x = n(375708),
    U = n(737923);
function k() {
    let e = (0, P.lX)("UserProfilePrivacyNotice"),
        t = (0, b.Z)(),
        n = L.KP.useSetting();
    return r.useMemo(
        () => (e && t && n !== y.KP.FRIENDS_AND_ALL_GUILDS ? [l.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [e, t, n],
    );
}
function G(e) {
    let { className: t } = e,
        n = k(),
        [r, s] = (0, v.kn)(n),
        o = L.KP.useSetting();
    if (r !== l.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let u = (function (e) {
        switch (e) {
            case y.KP.FRIENDS_ONLY:
                return x.t["0UBDvq"];
            case y.KP.FRIENDS_AND_SMALL_GUILDS:
                return x.t["9AvQO/"];
            case y.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return x.t.dqQ7AN;
        }
    })(o);
    return (0, i.jsxs)("div", {
        className: a()(U.kL, t),
        children: [
            (0, i.jsx)(O.E, {
                variant: "text-sm/normal",
                className: U.Qq,
                children: x.intl.format(u, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            R.Anchor,
                            { onClick: () => (0, w.openUserSettings)(D.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(c.D, {
                "aria-label": x.intl.string(x.t.WAI6xu),
                onClick: () => s(M.i.USER_DISMISS),
                className: U.b,
                children: (0, i.jsx)(d.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var V = n(939496),
    F = n(993401),
    B = n(518477),
    H = n(652215),
    j = n(202541),
    W = n(996988),
    Y = n(738585);
function K(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(c.D, {
        "aria-label": x.intl.string(x.t.WAI6xu),
        onClick: t,
        className: Y.Sc,
        children: (0, i.jsx)(d.P, { size: "xs", className: Y.Nk, color: "currentColor" }),
    });
}
function $(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: r } = e,
        { analyticsLocations: s, newestAnalyticsLocation: a } = (0, E.Ay)(),
        { trackUserProfileAction: o } = (0, C.NJ)();
    return (0, i.jsxs)("div", {
        className: Y.JO,
        children: [
            (0, i.jsx)("div", {
                className: Y.xB,
                children: n
                    ? (0, i.jsx)(F.FD, {
                          action: B.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: _.t,
                          text: x.intl.string(x.t["0Q61kF"]),
                          onClick: () => {
                              (0, S.pX)(H.BVt.APPLICATION_STORE), r?.();
                          },
                      })
                    : (0, i.jsx)(T.A, {
                          onClick: () => {
                              o({ action: B.pt.GET_PREMIUM }), r?.();
                          },
                          textOptions: { textOverride: x.intl.string(x.t.x6rkDp) },
                          subscriptionTier: j.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: H.JJy.USER_PROFILE },
                          className: Y.Js,
                          size: t ? u.$n.Sizes.TINY : u.$n.Sizes.SMALL,
                          look: u.$n.Looks.FILLED,
                          color: u.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, i.jsx)("div", {
                className: Y.xB,
                children: (0, i.jsx)(F.FD, {
                    action: B.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: h.U,
                    text: x.intl.string(x.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, p.Cz)({ analyticsLocations: s, analyticsSource: a }), r?.();
                    },
                }),
            }),
        ],
    });
}
function z(e) {
    let { isPremiumUser: t, onInteraction: n, className: s } = e,
        u = (function () {
            let e = k(),
                [t] = (0, v.kn)(e);
            return t === l.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        c = (0, m.GV)(),
        { themeType: d } = (0, V.E)(),
        _ = d === W.d.MODAL,
        h = (0, A.JZ)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        E = (0, o.bG)([N.A], () => N.A.getGuildId());
    if (
        (r.useEffect(() => {
            if (!h && !u)
                return (
                    (0, I.Vh)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, g.pd)({ content: l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [h, u]),
        u)
    )
        return (0, i.jsx)(G, { className: s });
    if (h) return null;
    let p = (0, i.jsx)(f.D, { variant: "text-sm/normal", id: c, children: x.intl.string(x.t.EIYbj6) }),
        T = (0, i.jsx)(K, {
            onClose: () => {
                (0, A.Dr)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: M.i.USER_DISMISS,
                    guildId: E,
                    forceTrack: !0,
                });
            },
        }),
        S = (0, i.jsx)($, { isPremiumUser: t, onInteraction: n, tiny: _ });
    return _
        ? (0, i.jsx)("aside", {
              className: a()(Y.Zj, s),
              "aria-labelledby": c,
              children: (0, i.jsxs)("div", {
                  className: a()(Y.xw, Y.xq),
                  children: [
                      p,
                      (0, i.jsxs)("div", {
                          className: Y.A_,
                          children: [(0, i.jsx)("div", { children: S }), (0, i.jsx)("div", { children: T })],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)("aside", {
              className: a()(Y.Zj, s),
              "aria-labelledby": c,
              children: (0, i.jsxs)("div", {
                  className: a()(Y.xw, Y.K1),
                  children: [
                      (0, i.jsxs)("div", { className: Y.$P, children: [p, (0, i.jsx)("div", { children: T })] }),
                      S,
                  ],
              }),
          });
}
