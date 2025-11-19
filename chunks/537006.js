n.d(t, { Z: () => w });
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
    _ = n(313201),
    p = n(211644),
    h = n(266454),
    m = n(605236),
    g = n(767714),
    E = n(703656),
    b = n(914010),
    y = n(785717),
    O = n(652853),
    v = n(732380),
    I = n(228168),
    T = n(981631),
    S = n(921944),
    A = n(474936),
    C = n(671955),
    N = n(388032),
    R = n(640637);
function P(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(u.P3F, {
        "aria-label": N.intl.string(N.t.WAI6xu),
        onClick: t,
        className: R.upsellCloseIconWrapper,
        children: (0, r.jsx)(u.Dio, {
            size: "xs",
            className: R.upsellCloseIcon,
            color: "currentColor",
        }),
    });
}
function D(e) {
    let { tiny: t, isPremiumUser: n, onInteraction: i } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, d.ZP)(),
        { trackUserProfileAction: s } = (0, y.KZ)();
    return (0, r.jsxs)("div", {
        className: R.upsellButtons,
        children: [
            (0, r.jsx)("div", {
                className: R.upsellButtonWrapper,
                children: n
                    ? (0, r.jsx)(v.O1, {
                          action: I.yM.VIEW_PREMIUM_PERKS,
                          fullWidth: !0,
                          size: "sm",
                          variant: "secondary",
                          icon: u.SrA,
                          text: N.intl.string(N.t["0Q61kF"]),
                          onClick: () => {
                              (0, E.uL)(T.Z5c.APPLICATION_STORE), null == i || i();
                          },
                      })
                    : (0, r.jsx)(g.Z, {
                          onClick: () => {
                              s({ action: I.yM.GET_PREMIUM }), null == i || i();
                          },
                          textOptions: { textOverride: N.intl.string(N.t.x6rkDp) },
                          subscriptionTier: A.Si.TIER_2,
                          premiumModalAnalyticsLocation: { section: T.jXE.USER_PROFILE },
                          className: R.matchManaColors,
                          size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
                          look: c.zx.Looks.FILLED,
                          color: c.zx.Colors.PRIMARY,
                          onlyShineOnHover: !0,
                          fullWidth: !0,
                      }),
            }),
            (0, r.jsx)("div", {
                className: R.upsellButtonWrapper,
                children: (0, r.jsx)(v.O1, {
                    action: I.yM.VISIT_SHOP,
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
function w(e) {
    let { isPremiumUser: t, onInteraction: n, className: a } = e,
        c = (0, _.Dt)(),
        { themeType: d } = (0, O.z)(),
        f = d === C.l.MODAL,
        g = (0, h.Nj)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
        E = (0, s.e7)([b.Z], () => b.Z.getGuildId());
    if (
        (i.useEffect(() => {
            if (!g)
                return (
                    (0, m.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS),
                    () => {
                        (0, p.gE)({ content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS }, !1);
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
        v = (0, r.jsx)(P, {
            onClose: () => {
                (0, h.Q3)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
                    dismissAction: S.L.USER_DISMISS,
                    guildId: E,
                    forceTrack: !0,
                });
            },
        }),
        I = (0, r.jsx)(D, {
            isPremiumUser: t,
            onInteraction: n,
            tiny: f,
        });
    return f
        ? (0, r.jsx)("aside", {
              className: o()(R.upsellContainer, a),
              "aria-labelledby": c,
              children: (0, r.jsxs)("div", {
                  className: o()(R.upsellContent, R.upsellRowContent),
                  children: [
                      y,
                      (0, r.jsxs)("div", {
                          className: R.upsellRowRight,
                          children: [(0, r.jsx)("div", { children: I }), (0, r.jsx)("div", { children: v })],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)("aside", {
              className: o()(R.upsellContainer, a),
              "aria-labelledby": c,
              children: (0, r.jsxs)("div", {
                  className: o()(R.upsellContent, R.upsellDefaultContent),
                  children: [
                      (0, r.jsxs)("div", {
                          className: R.upsellHeader,
                          children: [y, (0, r.jsx)("div", { children: v })],
                      }),
                      I,
                  ],
              }),
          });
}
