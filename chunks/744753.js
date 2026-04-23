t.d(e, { A: () => X });
var n = t(627968),
    i = t(64700),
    a = t(503698),
    E = t.n(a),
    _ = t(17928),
    s = t(554146),
    I = t(862482),
    r = t(939249),
    N = t(789645),
    A = t(403581),
    O = t(34188),
    S = t(534514),
    T = t(688810),
    R = t(803375),
    c = t(915089),
    u = t(771781),
    D = t(826673),
    o = t(367727),
    L = t(725807),
    C = t(976860),
    d = t(967198),
    M = t(183555),
    P = t(873298),
    v = t(834730),
    b = t(349288),
    U = t(932001),
    g = t(840387),
    H = t(253932),
    G = t(780964),
    x = t(858897),
    m = t(21973),
    f = t(49999),
    h = t(985018),
    F = t(737923);
function j() {
    let l = (0, m.lX)("UserProfilePrivacyNotice"),
        e = (0, g.Z)(),
        t = H.KP.useSetting();
    return i.useMemo(
        () => (l && e && t !== P.KP.FRIENDS_AND_ALL_GUILDS ? [s.M.PRIVATE_PROFILE_INLINE_NOTICE] : []),
        [l, e, t],
    );
}
function Y(l) {
    let { className: e } = l,
        t = j(),
        [i, a] = (0, U.kn)(t),
        _ = H.KP.useSetting();
    if (i !== s.M.PRIVATE_PROFILE_INLINE_NOTICE) return null;
    let I = (function (l) {
        switch (l) {
            case P.KP.FRIENDS_ONLY:
                return h.t["0UBDvq"];
            case P.KP.FRIENDS_AND_SMALL_GUILDS:
                return h.t["9AvQO/"];
            case P.KP.FRIENDS_AND_ALL_GUILDS:
            default:
                return h.t.dqQ7AN;
        }
    })(_);
    return (0, n.jsxs)("div", {
        className: E()(F.kL, e),
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                className: F.Qq,
                children: h.intl.format(I, {
                    privacySettingsLink: (l, e) =>
                        (0, n.jsx)(
                            b.Anchor,
                            { onClick: () => (0, x.openUserSettings)(G.X.PROFILE_PRIVACY_CATEGORY), children: l },
                            e,
                        ),
                }),
            }),
            (0, n.jsx)(r.D, {
                "aria-label": h.intl.string(h.t.WAI6xu),
                onClick: () => a(f.i.USER_DISMISS),
                className: F.b,
                children: (0, n.jsx)(N.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
var V = t(939496),
    p = t(993401),
    W = t(518477),
    k = t(652215),
    B = t(788868),
    K = t(996988),
    J = t(738585);
function y(l) {
    let { onClose: e } = l;
    return (0, n.jsx)(r.D, {
        "aria-label": h.intl.string(h.t.WAI6xu),
        onClick: e,
        className: J.Sc,
        children: (0, n.jsx)(N.P, { size: "xs", className: J.Nk, color: "currentColor" }),
    });
}
function z(l) {
    let { tiny: e, isPremiumUser: t, onInteraction: i } = l,
        { analyticsLocations: a, newestAnalyticsLocation: E } = (0, T.Ay)(),
        { trackUserProfileAction: _ } = (0, M.NJ)();
    return (0, n.jsxs)("div", {
        className: J.JO,
        children: [
            (0, n.jsx)("div", {
                className: J.xB,
                children: t
                    ? (0, n.jsx)(p.FD, {
                          action: W.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: A.t,
                          text: h.intl.string(h.t["0Q61kF"]),
                          onClick: () => {
                              (0, C.pX)(k.BVt.APPLICATION_STORE), i?.();
                          },
                      })
                    : (0, n.jsx)(L.A, {
                          onClick: () => {
                              _({ action: W.pt.GET_PREMIUM }), i?.();
                          },
                          textOptions: { textOverride: h.intl.string(h.t.x6rkDp) },
                          subscriptionTier: B.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: k.JJy.USER_PROFILE },
                          className: J.Js,
                          size: e ? I.$n.Sizes.TINY : I.$n.Sizes.SMALL,
                          look: I.$n.Looks.FILLED,
                          color: I.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, n.jsx)("div", {
                className: J.xB,
                children: (0, n.jsx)(p.FD, {
                    action: W.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: O.U,
                    text: h.intl.string(h.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, R.Cz)({ analyticsLocations: a, analyticsSource: E }), i?.();
                    },
                }),
            }),
        ],
    });
}
function X(l) {
    let { isPremiumUser: e, onInteraction: t, className: a } = l,
        I = (function () {
            let l = j(),
                [e] = (0, U.kn)(l);
            return e === s.M.PRIVATE_PROFILE_INLINE_NOTICE;
        })(),
        r = (0, c.GV)(),
        { themeType: N } = (0, V.E)(),
        A = N === K.d.MODAL,
        O = (0, D.JZ)(s.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        T = (0, _.bG)([d.A], () => d.A.getGuildId());
    if (
        (i.useEffect(() => {
            if (!O && !I)
                return (
                    (0, o.Vh)(s.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, u.pd)({ content: s.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [O, I]),
        I)
    )
        return (0, n.jsx)(Y, { className: a });
    if (O) return null;
    let R = (0, n.jsx)(S.D, { variant: "text-sm/normal", id: r, children: h.intl.string(h.t.EIYbj6) }),
        L = (0, n.jsx)(y, {
            onClose: () => {
                (0, D.Dr)(s.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: f.i.USER_DISMISS,
                    guildId: T,
                    forceTrack: !0,
                });
            },
        }),
        C = (0, n.jsx)(z, { isPremiumUser: e, onInteraction: t, tiny: A });
    return A
        ? (0, n.jsx)("aside", {
              className: E()(J.Zj, a),
              "aria-labelledby": r,
              children: (0, n.jsxs)("div", {
                  className: E()(J.xw, J.xq),
                  children: [
                      R,
                      (0, n.jsxs)("div", {
                          className: J.A_,
                          children: [(0, n.jsx)("div", { children: C }), (0, n.jsx)("div", { children: L })],
                      }),
                  ],
              }),
          })
        : (0, n.jsx)("aside", {
              className: E()(J.Zj, a),
              "aria-labelledby": r,
              children: (0, n.jsxs)("div", {
                  className: E()(J.xw, J.K1),
                  children: [
                      (0, n.jsxs)("div", { className: J.$P, children: [R, (0, n.jsx)("div", { children: L })] }),
                      C,
                  ],
              }),
          });
}
