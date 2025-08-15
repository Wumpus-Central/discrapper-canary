n.d(t, { w: () => b });
var r = n(951288),
    s = n(647438),
    l = n(657707),
    a = n(793030),
    i = n(755721),
    o = n(481060),
    c = n(100527),
    u = n(436774),
    d = n(767714),
    h = n(74538),
    p = n(175006),
    f = n(981631),
    _ = n(474936),
    g = n(388032),
    S = n(807284),
    m = n(492764),
    y = n(235810);
function b() {
    return (0, p.Z)()
        ? (0, r.jsx)("div", {
              className: S.emptyContainer,
              children: (0, r.jsxs)("div", {
                  className: S.emptyInner,
                  children: [
                      (0, r.jsx)("img", {
                          src: m,
                          className: S.image,
                          alt: "",
                      }),
                      (0, r.jsx)(o.X6q, {
                          className: S.header,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: g.intl.string(g.t.erEf2t),
                      }),
                      (0, r.jsx)(a.xv, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: g.intl.string(g.t.NaRCXV),
                      }),
                  ],
              }),
          })
        : (0, r.jsxs)("div", {
              className: S.emptyContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: S.emptyInner,
                      children: [
                          (0, r.jsx)("img", {
                              src: y,
                              className: S.image,
                              alt: "",
                          }),
                          (0, r.jsx)(o.X6q, {
                              className: S.header,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: g.intl.string(g.t.w4DRbW),
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: g.intl.string(g.t.F6u3Ex),
                          }),
                      ],
                  }),
                  (0, r.jsx)(E, {}),
              ],
          });
}
function E() {
    let e = (0, h.Px)(_.p9.TIER_2),
        t = s.useCallback(
            () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("50740").then(n.bind(n, 639565));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({ source: c.Z.FOR_LATER_POPOUT }, t),
                        );
                }),
            [],
        ),
        p = g.intl.format(g.t.qXh3fn, {
            nitroTierName: e,
            onClick: t,
        });
    return (0, r.jsxs)("div", {
        className: S.upsellContainer,
        children: [
            (0, r.jsx)(l.SrA, {
                size: "md",
                color: u.JX.PREMIUM_TIER_2,
            }),
            (0, r.jsx)(a.xv, {
                variant: "text-xs/medium",
                color: "header-primary",
                className: S.upsellText,
                children: p,
            }),
            (0, r.jsx)(d.Z, {
                className: S.upsellButton,
                size: i.Ph.TINY,
                shinyButtonClassName: S.upsellButton,
                subscriptionTier: _.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: f.jXE.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
