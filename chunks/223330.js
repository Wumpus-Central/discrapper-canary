n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(554146),
    c = n(421380),
    u = n(397927),
    d = n(688810),
    f = n(979286),
    p = n(915089),
    _ = n(771781),
    h = n(826673),
    m = n(367727),
    g = n(465794),
    E = n(976860),
    b = n(967198),
    y = n(183555),
    O = n(939496),
    A = n(993401),
    v = n(518477),
    S = n(652215),
    I = n(49999),
    T = n(788868),
    C = n(996988),
    N = n(985018),
    R = n(981656);

function w(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(u.DUT, {
        "aria-label": N.intl.string(N.t.WAI6xu),
        onClick: t,
        className: R.Sc,
        children: (0, r.jsx)(u.PGe, {
            size: "xs",
            className: R.Nk,
            color: "currentColor",
        }),
    });
}

function P(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: s } = (0, d.Ay)(),
        { trackUserProfileAction: o } = (0, y.NJ)();
    return (0, r.jsxs)("div", {
        className: R.JO,
        children: [
            (0, r.jsx)("div", {
                className: R.xB,
                children: n
                    ? (0, r.jsx)(A.FD, {
                          action: v.pt.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: u.tvc,
                          text: N.intl.string(N.t["0Q61kF"]),
                          onClick: () => {
                              (0, E.pX)(S.BVt.APPLICATION_STORE), null == i || i();
                          },
                      })
                    : (0, r.jsx)(g.A, {
                          onClick: () => {
                              o({
                                  action: v.pt.GET_PREMIUM,
                              }),
                                  null == i || i();
                          },
                          textOptions: {
                              textOverride: N.intl.string(N.t.x6rkDp),
                          },
                          subscriptionTier: T.pe.TIER_2,
                          premiumModalAnalyticsLocation: {
                              section: S.JJy.USER_PROFILE,
                          },
                          className: R.Js,
                          size: t ? c.$n.Sizes.TINY : c.$n.Sizes.SMALL,
                          look: c.$n.Looks.FILLED,
                          color: c.$n.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: R.xB,
                children: (0, r.jsx)(A.FD, {
                    action: v.pt.VISIT_SHOP,
                    fullWidth: !0,
                    icon: u.U1X,
                    text: N.intl.string(N.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, f.Cz)({
                            analyticsLocations: a,
                            analyticsSource: s,
                        }),
                            null == i || i();
                    },
                }),
            }),
        ],
    });
}

function D(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        c = (0, p.GV)(),
        { themeType: d } = (0, O.E)(),
        f = d === C.d.MODAL,
        g = (0, h.JZ)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        E = (0, o.bG)([b.A], () => b.A.getGuildId());
    if (
        (i.useEffect(() => {
            if (!g)
                return (
                    (0, m.Vh)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, _.pd)(
                            {
                                content: l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS,
                            },
                            !1,
                        );
                    }
                );
        }, [g]),
        g)
    )
        return null;
    let y = (0, r.jsx)(u.Heading, {
            variant: "text-sm/normal",
            id: c,
            children: N.intl.string(N.t.EIYbj6),
        }),
        A = (0, r.jsx)(w, {
            onClose: () => {
                (0, h.Dr)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: I.i.USER_DISMISS,
                    guildId: E,
                    forceTrack: !0,
                });
            },
        }),
        v = (0, r.jsx)(P, {
            isPremiumUser: t,
            onInteraction: n,
            tiny: f,
        });
    return f
        ? (0, r.jsx)("aside", {
              className: s()(R.Zj, a),
              "aria-labelledby": c,
              children: (0, r.jsxs)("div", {
                  className: s()(R.xw, R.xq),
                  children: [
                      y,
                      (0, r.jsxs)("div", {
                          className: R.A_,
                          children: [
                              (0, r.jsx)("div", {
                                  children: v,
                              }),
                              (0, r.jsx)("div", {
                                  children: A,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("aside", {
              className: s()(R.Zj, a),
              "aria-labelledby": c,
              children: (0, r.jsxs)("div", {
                  className: s()(R.xw, R.K1),
                  children: [
                      (0, r.jsxs)("div", {
                          className: R.$P,
                          children: [
                              y,
                              (0, r.jsx)("div", {
                                  children: A,
                              }),
                          ],
                      }),
                      v,
                  ],
              }),
          });
}
