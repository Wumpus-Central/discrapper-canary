"use strict";
n.d(t, { A: () => z });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(554146),
    d = n(862482),
    c = n(939249),
    u = n(789645),
    _ = n(403581),
    E = n(34188),
    A = n(534514),
    h = n(688810),
    I = n(662388),
    f = n(915089),
    p = n(558845),
    T = n(826673),
    m = n(367727),
    g = n(725807),
    S = n(976860),
    N = n(967198),
    C = n(183555),
    O = n(873298),
    R = n(834730),
    L = n(349288),
    D = n(131607),
    y = n(840387),
    v = n(885386),
    b = n(780964),
    M = n(766075),
    P = n(106531),
    U = n(49999),
    w = n(375708),
    G = n(737923);
function x() {
    let e = (0, P.lX)("UserProfilePrivacyNotice"),
        t = (0, y.Z)(),
        n = v.KP.useSetting();
    return r.useMemo(
        () => (e && t && n !== O.KP.FRIENDS_AND_ALL_GUILDS ? [o.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [e, t, n],
    );
}
function k(e) {
    let { className: t } = e,
        n = x(),
        [r, a] = (0, D.kn)(n),
        l = v.KP.useSetting();
    if (r !== o.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let d = (function (e) {
        switch (e) {
            case O.KP.FRIENDS_ONLY:
                return w.t["0UBDvq"];
            case O.KP.FRIENDS_AND_SMALL_GUILDS:
                return w.t["9AvQO/"];
            case O.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return w.t.dqQ7AN;
        }
    })(l);
    return (0, i.jsxs)("div", {
        className: s()(G.kL, t),
        children: [
            (0, i.jsx)(R.E, {
                variant: "text-sm/normal",
                className: G.Qq,
                children: w.intl.format(d, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            L.Anchor,
                            { onClick: () => (0, M.openUserSettings)(b.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(c.D, {
                "aria-label": w.intl.string(w.t.WAI6xu),
                onClick: () => a(U.i.USER_DISMISS),
                className: G.b,
                children: (0, i.jsx)(u.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var F = n(939496),
    V = n(993401),
    B = n(518477),
    H = n(652215),
    j = n(202541),
    W = n(996988),
    Y = n(738585);
function K(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(c.D, {
        "aria-label": w.intl.string(w.t.WAI6xu),
        onClick: t,
        className: Y.Sc,
        children: (0, i.jsx)(u.P, { size: "xs", className: Y.Nk, color: "currentColor" }),
    });
}
function $(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: r } = e,
        { analyticsLocations: a, newestAnalyticsLocation: s } = (0, h.Ay)(),
        { trackUserProfileAction: l } = (0, C.NJ)();
    return (0, i.jsxs)("div", {
        className: Y.JO,
        children: [
            (0, i.jsx)("div", {
                className: Y.xB,
                children: n
                    ? (0, i.jsx)(V.FD, {
                          action: B.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: _.t,
                          text: w.intl.string(w.t["0Q61kF"]),
                          onClick: () => {
                              (0, S.pX)(H.BVt.APPLICATION_STORE), r?.();
                          },
                      })
                    : (0, i.jsx)(g.A, {
                          onClick: () => {
                              l({ action: B.pt.GET_PREMIUM }), r?.();
                          },
                          textOptions: { textOverride: w.intl.string(w.t.x6rkDp) },
                          subscriptionTier: j.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: H.JJy.USER_PROFILE },
                          className: Y.Js,
                          size: t ? d.$n.Sizes.TINY : d.$n.Sizes.SMALL,
                          look: d.$n.Looks.FILLED,
                          color: d.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, i.jsx)("div", {
                className: Y.xB,
                children: (0, i.jsx)(V.FD, {
                    action: B.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: E.U,
                    text: w.intl.string(w.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, I.Cz)({ analyticsLocations: a, analyticsSource: s }), r?.();
                    },
                }),
            }),
        ],
    });
}
function z(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        d = (function () {
            let e = x(),
                [t] = (0, D.kn)(e);
            return t === o.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        c = (0, f.GV)(),
        { themeType: u } = (0, F.E)(),
        _ = u === W.d.MODAL,
        E = (0, T.JZ)(o.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        h = (0, l.bG)([N.A], () => N.A.getGuildId());
    if (
        (r.useEffect(() => {
            if (!E && !d)
                return (
                    (0, m.Vh)(o.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, p.pd)({ content: o.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [E, d]),
        d)
    )
        return (0, i.jsx)(k, { className: a });
    if (E) return null;
    let I = (0, i.jsx)(A.D, { variant: "text-sm/normal", id: c, children: w.intl.string(w.t.EIYbj6) }),
        g = (0, i.jsx)(K, {
            onClose: () => {
                (0, T.Dr)(o.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: U.i.USER_DISMISS,
                    guildId: h,
                    forceTrack: !0,
                });
            },
        }),
        S = (0, i.jsx)($, { isPremiumUser: t, onInteraction: n, tiny: _ });
    return _
        ? (0, i.jsx)("aside", {
              className: s()(Y.Zj, a),
              "aria-labelledby": c,
              children: (0, i.jsxs)("div", {
                  className: s()(Y.xw, Y.xq),
                  children: [
                      I,
                      (0, i.jsxs)("div", {
                          className: Y.A_,
                          children: [(0, i.jsx)("div", { children: S }), (0, i.jsx)("div", { children: g })],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)("aside", {
              className: s()(Y.Zj, a),
              "aria-labelledby": c,
              children: (0, i.jsxs)("div", {
                  className: s()(Y.xw, Y.K1),
                  children: [
                      (0, i.jsxs)("div", { className: Y.$P, children: [I, (0, i.jsx)("div", { children: g })] }),
                      S,
                  ],
              }),
          });
}
