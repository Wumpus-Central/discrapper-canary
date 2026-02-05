"use strict";
n.d(t, { A: () => w });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(554146),
    u = n(421380),
    c = n(397927),
    d = n(688810),
    _ = n(979286),
    f = n(915089),
    p = n(771781),
    h = n(826673),
    m = n(367727),
    g = n(465794),
    E = n(976860),
    A = n(967198),
    I = n(183555),
    T = n(939496),
    y = n(993401),
    S = n(518477),
    v = n(652215),
    C = n(49999),
    b = n(788868),
    N = n(996988),
    R = n(985018),
    O = n(981656);
function D(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(c.DUT, {
        "aria-label": R.intl.string(R.t.WAI6xu),
        onClick: t,
        className: O.Sc,
        children: (0, r.jsx)(c.PGe, { size: "xs", className: O.Nk, color: "currentColor" }),
    });
}
function L(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: s } = (0, d.Ay)(),
        { trackUserProfileAction: o } = (0, I.NJ)();
    return (0, r.jsxs)("div", {
        className: O.JO,
        children: [
            (0, r.jsx)("div", {
                className: O.xB,
                children: n
                    ? (0, r.jsx)(y.FD, {
                          action: S.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: c.tvc,
                          text: R.intl.string(R.t["0Q61kF"]),
                          onClick: () => {
                              (0, E.pX)(v.BVt.APPLICATION_STORE), i?.();
                          },
                      })
                    : (0, r.jsx)(g.A, {
                          onClick: () => {
                              o({ action: S.pt.GET_PREMIUM }), i?.();
                          },
                          textOptions: { textOverride: R.intl.string(R.t.x6rkDp) },
                          subscriptionTier: b.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: v.JJy.USER_PROFILE },
                          className: O.Js,
                          size: t ? u.$n.Sizes.TINY : u.$n.Sizes.SMALL,
                          look: u.$n.Looks.FILLED,
                          color: u.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: O.xB,
                children: (0, r.jsx)(y.FD, {
                    action: S.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: c.U1X,
                    text: R.intl.string(R.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, _.Cz)({ analyticsLocations: a, analyticsSource: s }), i?.();
                    },
                }),
            }),
        ],
    });
}
function w(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        u = (0, f.GV)(),
        { themeType: d } = (0, T.E)(),
        _ = d === N.d.MODAL,
        g = (0, h.JZ)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        E = (0, o.bG)([A.A], () => A.A.getGuildId());
    if (
        (i.useEffect(() => {
            if (!g)
                return (
                    (0, m.Vh)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, p.pd)({ content: l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [g]),
        g)
    )
        return null;
    let I = (0, r.jsx)(c.Heading, { variant: "text-sm/normal", id: u, children: R.intl.string(R.t.EIYbj6) }),
        y = (0, r.jsx)(D, {
            onClose: () => {
                (0, h.Dr)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: C.i.USER_DISMISS,
                    guildId: E,
                    forceTrack: !0,
                });
            },
        }),
        S = (0, r.jsx)(L, { isPremiumUser: t, onInteraction: n, tiny: _ });
    return _
        ? (0, r.jsx)("aside", {
              className: s()(O.Zj, a),
              "aria-labelledby": u,
              children: (0, r.jsxs)("div", {
                  className: s()(O.xw, O.xq),
                  children: [
                      I,
                      (0, r.jsxs)("div", {
                          className: O.A_,
                          children: [(0, r.jsx)("div", { children: S }), (0, r.jsx)("div", { children: y })],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("aside", {
              className: s()(O.Zj, a),
              "aria-labelledby": u,
              children: (0, r.jsxs)("div", {
                  className: s()(O.xw, O.K1),
                  children: [
                      (0, r.jsxs)("div", { className: O.$P, children: [I, (0, r.jsx)("div", { children: y })] }),
                      S,
                  ],
              }),
          });
}
