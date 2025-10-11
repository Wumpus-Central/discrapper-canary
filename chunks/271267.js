n.d(t, {
    Q: () => m,
    Z: () => b,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(957011),
    s = n(587431),
    o = n(756066),
    c = n(388032),
    d = n(52726),
    u = n(270395);
function g(e) {
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
}
let m = "role_subscriptions_eligibility_modal";
function p(e) {
    let { guild: t, eligibility: i, eligibilityLoading: a, eligibilityError: s, refreshEligibility: o } = e;
    return (0, r.jsx)(l.Button, {
        variant: "expressive",
        onClick: function () {
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await n.e("21863").then(n.bind(n, 466501));
                    return (n) => {
                        var l, c;
                        return (0, r.jsx)(
                            e,
                            ((l = g({}, n)),
                            (c = c =
                                {
                                    eligibility: i,
                                    eligibilityLoading: a,
                                    eligibilityError: s,
                                    refreshEligibility: o,
                                    guildId: t.id,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            l),
                        );
                    };
                },
                { modalKey: m },
            );
        },
        size: "md",
        text: c.intl.string(c.t.NL5ZNT),
        icon: l.Mgn,
    });
}
function f(e) {
    let { guild: t, checkboxText: n } = e,
        { canSubmitAcceptance: o, error: d, loading: u, submitAcceptTermsRequest: g } = (0, a.Z)(t.id),
        [m, p] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Checkbox, {
                onChange: function () {
                    p((e) => !e);
                },
                checked: m,
                label: n,
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(l.Button, {
                disabled: !m || !o,
                onClick: g,
                loading: u,
                variant: "expressive",
                text: c.intl.string(c.t.NL5ZNT),
            }),
            null != d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.LZC, { size: 24 }), (0, r.jsx)(s.Z, { children: d.getAnyErrorMessage() })],
                }),
        ],
    });
}
function h(e) {
    let { guild: t, monetizationEligibility: n } = e,
        {
            eligibilityLoading: i,
            eligibilityError: l,
            refreshEligibility: a,
            eligibility: s,
            eligibleForMonetization: c,
            acceptTermsCheckboxText: d,
            wasRejectedInV1: u,
        } = n;
    return c
        ? u
            ? (0, r.jsx)(o.Z, g({}, n))
            : (0, r.jsx)(f, {
                  guild: t,
                  checkboxText: d,
              })
        : (0, r.jsx)(p, {
              guild: t,
              eligibility: s,
              eligibilityLoading: i,
              eligibilityError: l,
              refreshEligibility: a,
          });
}
function b(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, r.jsxs)("div", {
        className: d.ctaContainer,
        children: [
            (0, r.jsx)("img", {
                className: d.heroBanner,
                src: u,
                alt: c.intl.string(c.t.Af4klJ),
            }),
            (0, r.jsxs)("div", {
                className: d.ctaContent,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: c.intl.string(c.t.PqYfh4),
                    }),
                    (0, r.jsx)(l.LZC, { size: 12 }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: c.intl.string(c.t["41wkMT"]),
                    }),
                    (0, r.jsx)(l.LZC, { size: 24 }),
                    (0, r.jsx)(h, {
                        guild: t,
                        monetizationEligibility: n,
                    }),
                ],
            }),
        ],
    });
}
