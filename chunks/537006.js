n.d(t, { Z: () => D });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(755721),
    u = n(481060),
    d = n(906732),
    f = n(335131),
    p = n(313201),
    _ = n(211644),
    m = n(266454),
    h = n(605236),
    g = n(767714),
    E = n(703656),
    b = n(914010),
    y = n(785717),
    O = n(652853),
    v = n(475413),
    S = n(228168),
    I = n(981631),
    T = n(921944),
    C = n(474936),
    A = n(671955),
    N = n(388032),
    P = n(577832);
function R(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(u.P3F, {
        "aria-label": N.intl.string(N.t.WAI6xu),
        onClick: t,
        className: P.upsellCloseIconWrapper,
        children: (0, r.jsx)(u.Dio, {
            size: "xs",
            className: P.upsellCloseIcon,
            color: "currentColor",
        }),
    });
}
function w(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, d.ZP)(),
        { trackUserProfileAction: s } = (0, y.KZ)();
    return (0, r.jsxs)("div", {
        className: P.upsellButtons,
        children: [
            (0, r.jsx)("div", {
                className: P.upsellButtonWrapper,
                children: n
                    ? (0, r.jsx)(v.i6, {
                          action: S.yM.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: u.SrA,
                          text: N.intl.string(N.t["0Q61kF"]),
                          onClick: () => {
                              (0, E.uL)(I.Z5c.APPLICATION_STORE), null == i || i();
                          },
                      })
                    : (0, r.jsx)(g.Z, {
                          onClick: () => {
                              s({ action: S.yM.GET_PREMIUM }), null == i || i();
                          },
                          textOptions: { textOverride: N.intl.string(N.t.x6rkDp) },
                          subscriptionTier: C.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: I.jXE.USER_PROFILE },
                          className: P.matchManaColors,
                          size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
                          look: c.zx.Looks.FILLED,
                          color: c.zx.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: P.upsellButtonWrapper,
                children: (0, r.jsx)(v.i6, {
                    action: S.yM.VISIT_SHOP,
                    fullWidth: !0,
                    icon: u.EOn,
                    text: N.intl.string(N.t.b2d0N0),
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        (0, f.mK)({
                            analyticsLocations: a,
                            analyticsSource: o,
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
        c = (0, p.Dt)(),
        { themeType: d } = (0, O.z)(),
        f = d === A.l.MODAL,
        g = (0, m.Nj)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        E = (0, s.e7)([b.Z], () => b.Z.getGuildId());
    if (
        (i.useEffect(() => {
            if (!g)
                return (
                    (0, h.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, _.gE)({ content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
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
        v = (0, r.jsx)(R, {
            onClose: () => {
                (0, m.Q3)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: T.L.USER_DISMISS,
                    guildId: E,
                    forceTrack: !0,
                });
            },
        }),
        S = (0, r.jsx)(w, {
            isPremiumUser: t,
            onInteraction: n,
            tiny: f,
        });
    return f
        ? (0, r.jsx)("aside", {
              className: o()(P.upsellContainer, a),
              "aria-labelledby": c,
              children: (0, r.jsxs)("div", {
                  className: o()(P.upsellContent, P.upsellRowContent),
                  children: [
                      y,
                      (0, r.jsxs)("div", {
                          className: P.upsellRowRight,
                          children: [(0, r.jsx)("div", { children: S }), (0, r.jsx)("div", { children: v })],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("aside", {
              className: o()(P.upsellContainer, a),
              "aria-labelledby": c,
              children: (0, r.jsxs)("div", {
                  className: o()(P.upsellContent, P.upsellDefaultContent),
                  children: [
                      (0, r.jsxs)("div", {
                          className: P.upsellHeader,
                          children: [y, (0, r.jsx)("div", { children: v })],
                      }),
                      S,
                  ],
              }),
          });
}
