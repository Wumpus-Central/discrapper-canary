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
    p = n(688810),
    E = n(662388),
    m = n(915089),
    g = n(558845),
    A = n(826673),
    I = n(367727),
    T = n(725807),
    S = n(976860),
    y = n(967198),
    C = n(183555),
    N = n(873298),
    v = n(834730),
    R = n(349288),
    O = n(131607),
    b = n(840387),
    D = n(885386),
    L = n(780964),
    w = n(766075),
    M = n(106531),
    P = n(49999),
    x = n(375708),
    k = n(737923);
function U() {
    let e = (0, M.lX)("UserProfilePrivacyNotice"),
        t = (0, b.Z)(),
        n = D.KP.useSetting();
    return r.useMemo(
        () => (e && t && n !== N.KP.FRIENDS_AND_ALL_GUILDS ? [l.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [e, t, n],
    );
}
function G(e) {
    let { className: t } = e,
        n = U(),
        [r, s] = (0, O.kn)(n),
        o = D.KP.useSetting();
    if (r !== l.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let u = (function (e) {
        switch (e) {
            case N.KP.FRIENDS_ONLY:
                return x.t["0UBDvq"];
            case N.KP.FRIENDS_AND_SMALL_GUILDS:
                return x.t["9AvQO/"];
            case N.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return x.t.dqQ7AN;
        }
    })(o);
    return (0, i.jsxs)("div", {
        className: a()(k.kL, t),
        children: [
            (0, i.jsx)(v.E, {
                variant: "text-sm/normal",
                className: k.Qq,
                children: x.intl.format(u, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            R.Anchor,
                            { onClick: () => (0, w.openUserSettings)(L.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(c.D, {
                "aria-label": x.intl.string(x.t.WAI6xu),
                onClick: () => s(P.i.USER_DISMISS),
                className: k.b,
                children: (0, i.jsx)(d.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var F = n(939496),
    V = n(993401),
    B = n(518477),
    j = n(652215),
    H = n(202541),
    Y = n(996988),
    W = n(738585);
function K(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(c.D, {
        "aria-label": x.intl.string(x.t.WAI6xu),
        onClick: t,
        className: W.Sc,
        children: (0, i.jsx)(d.P, { size: "xs", className: W.Nk, color: "currentColor" }),
    });
}
function $(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: r } = e,
        { analyticsLocations: s, newestAnalyticsLocation: a } = (0, p.Ay)(),
        { trackUserProfileAction: o } = (0, C.NJ)();
    return (0, i.jsxs)("div", {
        className: W.JO,
        children: [
            (0, i.jsx)("div", {
                className: W.xB,
                children: n
                    ? (0, i.jsx)(V.FD, {
                          action: B.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: _.t,
                          text: x.intl.string(x.t["0Q61kF"]),
                          onClick: () => {
                              (0, S.pX)(j.BVt.APPLICATION_STORE), r?.();
                          },
                      })
                    : (0, i.jsx)(T.A, {
                          onClick: () => {
                              o({ action: B.pt.GET_PREMIUM }), r?.();
                          },
                          textOptions: { textOverride: x.intl.string(x.t.x6rkDp) },
                          subscriptionTier: H.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: j.JJy.USER_PROFILE },
                          className: W.Js,
                          size: t ? u.$n.Sizes.TINY : u.$n.Sizes.SMALL,
                          look: u.$n.Looks.FILLED,
                          color: u.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, i.jsx)("div", {
                className: W.xB,
                children: (0, i.jsx)(V.FD, {
                    action: B.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: h.U,
                    text: x.intl.string(x.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, E.Cz)({ analyticsLocations: s, analyticsSource: a }), r?.();
                    },
                }),
            }),
        ],
    });
}
function z(e) {
    let { isPremiumUser: t, onInteraction: n, className: s } = e,
        u = (function () {
            let e = U(),
                [t] = (0, O.kn)(e);
            return t === l.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        c = (0, m.GV)(),
        { themeType: d } = (0, F.E)(),
        _ = d === Y.d.MODAL,
        h = (0, A.JZ)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        p = (0, o.bG)([y.A], () => y.A.getGuildId());
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
    let E = (0, i.jsx)(f.D, { variant: "text-sm/normal", id: c, children: x.intl.string(x.t.EIYbj6) }),
        T = (0, i.jsx)(K, {
            onClose: () => {
                (0, A.Dr)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: P.i.USER_DISMISS,
                    guildId: p,
                    forceTrack: !0,
                });
            },
        }),
        S = (0, i.jsx)($, { isPremiumUser: t, onInteraction: n, tiny: _ });
    return _
        ? (0, i.jsx)("aside", {
              className: a()(W.Zj, s),
              "aria-labelledby": c,
              children: (0, i.jsxs)("div", {
                  className: a()(W.xw, W.xq),
                  children: [
                      E,
                      (0, i.jsxs)("div", {
                          className: W.A_,
                          children: [(0, i.jsx)("div", { children: S }), (0, i.jsx)("div", { children: T })],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)("aside", {
              className: a()(W.Zj, s),
              "aria-labelledby": c,
              children: (0, i.jsxs)("div", {
                  className: a()(W.xw, W.K1),
                  children: [
                      (0, i.jsxs)("div", { className: W.$P, children: [E, (0, i.jsx)("div", { children: T })] }),
                      S,
                  ],
              }),
          });
}
