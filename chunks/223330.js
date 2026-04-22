t.d(e, { A: () => j });
var n = t(627968),
    i = t(64700),
    a = t(503698),
    E = t.n(a),
    _ = t(311907),
    s = t(554146),
    I = t(862482),
    r = t(939249),
    N = t(789645),
    A = t(403581),
    O = t(34188),
    S = t(534514),
    T = t(688810),
    R = t(979286),
    u = t(915089),
    c = t(771781),
    D = t(826673),
    L = t(367727),
    d = t(725807),
    o = t(976860),
    C = t(967198),
    M = t(183555),
    P = t(196502),
    v = t(939496),
    b = t(993401),
    U = t(518477),
    g = t(652215),
    H = t(49999),
    G = t(788868),
    x = t(996988),
    h = t(985018),
    m = t(738585);
function f(l) {
    let { onClose: e } = l;
    return (0, n.jsx)(r.D, {
        "aria-label": h.intl.string(h.t.WAI6xu),
        onClick: e,
        className: m.Sc,
        children: (0, n.jsx)(N.P, { size: "xs", className: m.Nk, color: "currentColor" }),
    });
}
function F(l) {
    let { tiny: e, isPremiumUser: t, onInteraction: i } = l,
        { analyticsLocations: a, newestAnalyticsLocation: E } = (0, T.Ay)(),
        { trackUserProfileAction: _ } = (0, M.NJ)();
    return (0, n.jsxs)("div", {
        className: m.JO,
        children: [
            (0, n.jsx)("div", {
                className: m.xB,
                children: t
                    ? (0, n.jsx)(b.FD, {
                          action: U.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: A.t,
                          text: h.intl.string(h.t["0Q61kF"]),
                          onClick: () => {
                              (0, o.pX)(g.BVt.APPLICATION_STORE), i?.();
                          },
                      })
                    : (0, n.jsx)(d.A, {
                          onClick: () => {
                              _({ action: U.pt.GET_PREMIUM }), i?.();
                          },
                          textOptions: { textOverride: h.intl.string(h.t.x6rkDp) },
                          subscriptionTier: G.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: g.JJy.USER_PROFILE },
                          className: m.Js,
                          size: e ? I.$n.Sizes.TINY : I.$n.Sizes.SMALL,
                          look: I.$n.Looks.FILLED,
                          color: I.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, n.jsx)("div", {
                className: m.xB,
                children: (0, n.jsx)(b.FD, {
                    action: U.pt.VISIT_SHOP,
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
function j(l) {
    let { isPremiumUser: e, onInteraction: t, className: a } = l,
        I = (0, P.h)(),
        r = (0, u.GV)(),
        { themeType: N } = (0, v.E)(),
        A = N === x.d.MODAL,
        O = (0, D.JZ)(s.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        T = (0, _.bG)([C.A], () => C.A.getGuildId());
    if (
        (i.useEffect(() => {
            if (!O && !I)
                return (
                    (0, L.Vh)(s.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, c.pd)({ content: s.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [O, I]),
        I)
    )
        return (0, n.jsx)(P.A, { className: a });
    if (O) return null;
    let R = (0, n.jsx)(S.D, { variant: "text-sm/normal", id: r, children: h.intl.string(h.t.EIYbj6) }),
        d = (0, n.jsx)(f, {
            onClose: () => {
                (0, D.Dr)(s.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: H.i.USER_DISMISS,
                    guildId: T,
                    forceTrack: !0,
                });
            },
        }),
        o = (0, n.jsx)(F, { isPremiumUser: e, onInteraction: t, tiny: A });
    return A
        ? (0, n.jsx)("aside", {
              className: E()(m.Zj, a),
              "aria-labelledby": r,
              children: (0, n.jsxs)("div", {
                  className: E()(m.xw, m.xq),
                  children: [
                      R,
                      (0, n.jsxs)("div", {
                          className: m.A_,
                          children: [(0, n.jsx)("div", { children: o }), (0, n.jsx)("div", { children: d })],
                      }),
                  ],
              }),
          })
        : (0, n.jsx)("aside", {
              className: E()(m.Zj, a),
              "aria-labelledby": r,
              children: (0, n.jsxs)("div", {
                  className: E()(m.xw, m.K1),
                  children: [
                      (0, n.jsxs)("div", { className: m.$P, children: [R, (0, n.jsx)("div", { children: d })] }),
                      o,
                  ],
              }),
          });
}
