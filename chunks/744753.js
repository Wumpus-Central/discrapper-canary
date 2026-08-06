"use strict";
n.d(t, { A: () => q });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(554146),
    d = n(862482),
    c = n(939249),
    u = n(789645),
    _ = n(403581),
    E = n(34188),
    A = n(297264),
    h = n(688810),
    I = n(839534),
    f = n(915089),
    p = n(558845),
    T = n(826673),
    m = n(367727),
    g = n(725807),
    S = n(976860),
    N = n(967198),
    C = n(183555),
    O = n(975732),
    R = n(873298),
    L = n(834730),
    D = n(349288),
    y = n(131607),
    v = n(840387),
    b = n(885386),
    M = n(780964),
    P = n(766075),
    U = n(106531),
    w = n(49999),
    G = n(375708),
    x = n(156971);
function k() {
    let e = (0, U.lX)("UserProfilePrivacyNotice"),
        t = (0, v.Z)(),
        n = b.KP.useSetting();
    return r.useMemo(
        () => (e && t && n !== R.KP.FRIENDS_AND_ALL_GUILDS ? [o.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [e, t, n],
    );
}
function F(e) {
    let { className: t } = e,
        n = k(),
        [r, a] = (0, y.kn)(n),
        l = b.KP.useSetting();
    if (r !== o.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let d = (function (e) {
        switch (e) {
            case R.KP.FRIENDS_ONLY:
                return G.t["0UBDvq"];
            case R.KP.FRIENDS_AND_SMALL_GUILDS:
                return G.t["9AvQO/"];
            case R.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return G.t.dqQ7AN;
        }
    })(l);
    return (0, i.jsxs)("div", {
        className: s()(x.kL, t),
        children: [
            (0, i.jsx)(L.E, {
                variant: "text-sm/normal",
                className: x.Qq,
                children: G.intl.format(d, {
                    privacySettingsLink: (e, t) =>
                        (0, i.jsx)(
                            D.Anchor,
                            { onClick: () => (0, P.openUserSettings)(M.X.PROFILE_PRIVACY_CATEGORY), children: e },
                            t,
                        ),
                }),
            }),
            (0, i.jsx)(c.D, {
                "aria-label": G.intl.string(G.t.WAI6xu),
                onClick: () => a(w.i.USER_DISMISS),
                className: x.b,
                children: (0, i.jsx)(u.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var V = n(939496),
    B = n(993401),
    H = n(518477),
    j = n(652215),
    W = n(202541),
    Y = n(996988),
    K = n(267217);
function $(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(c.D, {
        "aria-label": G.intl.string(G.t.WAI6xu),
        onClick: t,
        className: K.Sc,
        children: (0, i.jsx)(u.P, { size: "xs", className: K.Nk, color: "currentColor" }),
    });
}
function z(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: r } = e,
        { analyticsLocations: a, newestAnalyticsLocation: s } = (0, h.Ay)(),
        { trackUserProfileAction: l } = (0, C.NJ)();
    return (0, i.jsxs)("div", {
        className: K.JO,
        children: [
            (0, i.jsx)("div", {
                className: K.xB,
                children: n
                    ? (0, i.jsx)(B.FD, {
                          action: H.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: _.t,
                          text: G.intl.string(G.t["0Q61kF"]),
                          onClick: () => {
                              (0, S.pX)(j.BVt.APPLICATION_STORE), (0, O.closeUserProfileModal)(), r?.();
                          },
                      })
                    : (0, i.jsx)(g.A, {
                          onClick: () => {
                              l({ action: H.pt.GET_PREMIUM }), r?.();
                          },
                          textOptions: { textOverride: G.intl.string(G.t.x6rkDp) },
                          subscriptionTier: W.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: j.JJy.USER_PROFILE },
                          className: K.Js,
                          size: t ? d.$n.Sizes.TINY : d.$n.Sizes.SMALL,
                          look: d.$n.Looks.FILLED,
                          color: d.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, i.jsx)("div", {
                className: K.xB,
                children: (0, i.jsx)(B.FD, {
                    action: H.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: E.U,
                    text: G.intl.string(G.t.b2d0N0),
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
function q(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        d = (function () {
            let e = k(),
                [t] = (0, y.kn)(e);
            return t === o.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        c = (0, f.GV)(),
        { themeType: u } = (0, V.E)(),
        _ = u === Y.d.MODAL,
        E = (0, T.HX)(o.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
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
        return (0, i.jsx)(F, { className: a });
    if (E) return null;
    let I = (0, i.jsx)(A.D, { variant: "text-sm/normal", id: c, children: G.intl.string(G.t.EIYbj6) }),
        g = (0, i.jsx)($, {
            onClose: () => {
                (0, T.Dr)(o.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: w.i.USER_DISMISS,
                    guildId: h,
                    forceTrack: !0,
                });
            },
        }),
        S = (0, i.jsx)(z, { isPremiumUser: t, onInteraction: n, tiny: _ });
    return _
        ? (0, i.jsx)("aside", {
              className: s()(K.Zj, a),
              "aria-labelledby": c,
              children: (0, i.jsxs)("div", {
                  className: s()(K.xw, K.xq),
                  children: [
                      I,
                      (0, i.jsxs)("div", {
                          className: K.A_,
                          children: [(0, i.jsx)("div", { children: S }), (0, i.jsx)("div", { children: g })],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)("aside", {
              className: s()(K.Zj, a),
              "aria-labelledby": c,
              children: (0, i.jsxs)("div", {
                  className: s()(K.xw, K.K1),
                  children: [
                      (0, i.jsxs)("div", { className: K.$P, children: [I, (0, i.jsx)("div", { children: g })] }),
                      S,
                  ],
              }),
          });
}
