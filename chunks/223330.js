"use strict";
n.d(t, { A: () => M });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(465794),
    g = n(976860),
    A = n(967198),
    I = n(183555),
    T = n(196502),
    S = n(939496),
    y = n(993401),
    v = n(518477),
    N = n(652215),
    C = n(49999),
    R = n(788868),
    O = n(996988),
    b = n(985018),
    D = n(339465);
function L(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(c.DUT, {
        "aria-label": b.intl.string(b.t.WAI6xu),
        onClick: t,
        className: D.Sc,
        children: (0, r.jsx)(c.PGe, { size: "xs", className: D.Nk, color: "currentColor" }),
    });
}
function w(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: s, newestAnalyticsLocation: a } = (0, d.Ay)(),
        { trackUserProfileAction: o } = (0, I.NJ)();
    return (0, r.jsxs)("div", {
        className: D.JO,
        children: [
            (0, r.jsx)("div", {
                className: D.xB,
                children: n
                    ? (0, r.jsx)(y.FD, {
                          action: v.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: c.tvc,
                          text: b.intl.string(b.t["0Q61kF"]),
                          onClick: () => {
                              (0, g.pX)(N.BVt.APPLICATION_STORE), i?.();
                          },
                      })
                    : (0, r.jsx)(E.A, {
                          onClick: () => {
                              o({ action: v.pt.GET_PREMIUM }), i?.();
                          },
                          textOptions: { textOverride: b.intl.string(b.t.x6rkDp) },
                          subscriptionTier: R.pe.TIER_2,
                          premiumModalAnalyticsLocation: { section: N.JJy.USER_PROFILE },
                          className: D.Js,
                          size: t ? u.$n.Sizes.TINY : u.$n.Sizes.SMALL,
                          look: u.$n.Looks.FILLED,
                          color: u.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: D.xB,
                children: (0, r.jsx)(y.FD, {
                    action: v.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: c.U1X,
                    text: b.intl.string(b.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, _.Cz)({ analyticsLocations: s, analyticsSource: a }), i?.();
                    },
                }),
            }),
        ],
    });
}
function M(e) {
    let { isPremiumUser: t, onInteraction: n, className: s } = e,
        u = (0, T.h)(),
        d = (0, f.GV)(),
        { themeType: _ } = (0, S.E)(),
        E = _ === O.d.MODAL,
        g = (0, h.JZ)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        I = (0, o.bG)([A.A], () => A.A.getGuildId());
    if (
        (i.useEffect(() => {
            if (!g && !u)
                return (
                    (0, m.Vh)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, p.pd)({ content: l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
                    }
                );
        }, [g, u]),
        u)
    )
        return (0, r.jsx)(T.A, { className: s });
    if (g) return null;
    let y = (0, r.jsx)(c.Heading, { variant: "text-sm/normal", id: d, children: b.intl.string(b.t.EIYbj6) }),
        v = (0, r.jsx)(L, {
            onClose: () => {
                (0, h.Dr)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: C.i.USER_DISMISS,
                    guildId: I,
                    forceTrack: !0,
                });
            },
        }),
        N = (0, r.jsx)(w, { isPremiumUser: t, onInteraction: n, tiny: E });
    return E
        ? (0, r.jsx)("aside", {
              className: a()(D.Zj, s),
              "aria-labelledby": d,
              children: (0, r.jsxs)("div", {
                  className: a()(D.xw, D.xq),
                  children: [
                      y,
                      (0, r.jsxs)("div", {
                          className: D.A_,
                          children: [(0, r.jsx)("div", { children: N }), (0, r.jsx)("div", { children: v })],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("aside", {
              className: a()(D.Zj, s),
              "aria-labelledby": d,
              children: (0, r.jsxs)("div", {
                  className: a()(D.xw, D.K1),
                  children: [
                      (0, r.jsxs)("div", { className: D.$P, children: [y, (0, r.jsx)("div", { children: v })] }),
                      N,
                  ],
              }),
          });
}
