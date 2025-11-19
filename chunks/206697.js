n.d(t, { w: () => v });
var r = n(54381),
    i = n(473749),
    a = n(657707),
    o = n(793030),
    s = n(755721),
    l = n(481060),
    c = n(100527),
    u = n(436774),
    d = n(767714),
    f = n(74538),
    _ = n(175006),
    p = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(614246),
    E = n(492764),
    b = n(235810);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v() {
    return (0, _.Z)()
        ? (0, r.jsx)("div", {
              className: g.emptyContainer,
              children: (0, r.jsxs)("div", {
                  className: g.emptyInner,
                  children: [
                      (0, r.jsx)("img", {
                          src: E,
                          className: g.image,
                          alt: "",
                      }),
                      (0, r.jsx)(l.Heading, {
                          className: g.header,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: m.intl.string(m.t.erEf2g),
                      }),
                      (0, r.jsx)(o.xvT, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: m.intl.string(m.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, r.jsxs)("div", {
              className: g.emptyContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: g.emptyInner,
                      children: [
                          (0, r.jsx)("img", {
                              src: b,
                              className: g.image,
                              alt: "",
                          }),
                          (0, r.jsx)(l.Heading, {
                              className: g.header,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: m.intl.string(m.t.w4DRbZ),
                          }),
                          (0, r.jsx)(o.xvT, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: m.intl.string(m.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, r.jsx)(I, {}),
              ],
          });
}
function I() {
    let e = (0, f.Px)(h.PremiumTypes.TIER_2),
        t = i.useCallback(
            () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("34906").then(n.bind(n, 639565));
                    return (t) => (0, r.jsx)(e, O({ source: c.Z.FOR_LATER_POPOUT }, t));
                }),
            [],
        ),
        _ = m.intl.format(m.t.qXh3fo, {
            nitroTierName: e,
            onClick: t,
        });
    return (0, r.jsxs)("div", {
        className: g.upsellContainer,
        children: [
            (0, r.jsx)(a.SrA, {
                size: "md",
                color: u.JX.PREMIUM_TIER_2,
            }),
            (0, r.jsx)(o.xvT, {
                variant: "text-xs/medium",
                color: "header-primary",
                className: g.upsellText,
                children: _,
            }),
            (0, r.jsx)(d.Z, {
                className: g.upsellButton,
                size: s.Ph.TINY,
                shinyButtonClassName: g.upsellButton,
                subscriptionTier: h.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: p.jXE.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
