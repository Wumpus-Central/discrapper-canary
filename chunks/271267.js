n.d(t, {
    Q: () => g,
    Z: () => b
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(957011),
    l = n(587431),
    o = n(756066),
    c = n(388032),
    d = n(601781),
    u = n(270395);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let g = 'role_subscriptions_eligibility_modal';
function p(e) {
    let { guild: t, eligibility: i, eligibilityLoading: a, eligibilityError: l, refreshEligibility: o } = e;
    return (0, r.jsxs)(s.zxk, {
        color: s.Ttl.CUSTOM,
        className: d.ineligibleButton,
        innerClassName: d.ineligibleButtonContent,
        grow: !0,
        onClick: function () {
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e('21863').then(n.bind(n, 466501));
                    return (n) => {
                        var s, c;
                        return (0, r.jsx)(
                            e,
                            ((s = m({}, n)),
                            (c = c =
                                {
                                    eligibility: i,
                                    eligibilityLoading: a,
                                    eligibilityError: l,
                                    refreshEligibility: o,
                                    guildId: t.id
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            s)
                        );
                    };
                },
                { modalKey: g }
            );
        },
        size: s.zxk.Sizes.LARGE,
        children: [
            (0, r.jsx)(s.P4T, {
                size: 'xs',
                color: 'currentColor'
            }),
            c.NW.string(c.t.NL5ZNT)
        ]
    });
}
function h(e) {
    let { guild: t, checkboxText: n } = e,
        { canSubmitAcceptance: o, error: u, loading: m, submitAcceptTermsRequest: g } = (0, a.Z)(t.id),
        [p, h] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.XZJ, {
                onChange: function () {
                    h((e) => !e);
                },
                size: 20,
                type: s.XZJ.Types.INVERTED,
                value: p,
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: n
                })
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(s.zxk, {
                className: d.ctaButton,
                disabled: !p || !o,
                grow: !0,
                onClick: g,
                size: s.zxk.Sizes.LARGE,
                submitting: m,
                children: c.NW.string(c.t.NL5ZNT)
            }),
            null != u &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.LZC, { size: 24 }), (0, r.jsx)(l.Z, { children: u.getAnyErrorMessage() })]
                })
        ]
    });
}
function f(e) {
    let { guild: t, monetizationEligibility: n } = e,
        { eligibilityLoading: i, eligibilityError: s, refreshEligibility: a, eligibility: l, eligibleForMonetization: c, acceptTermsCheckboxText: d, wasRejectedInV1: u } = n;
    return c
        ? u
            ? (0, r.jsx)(o.Z, m({}, n))
            : (0, r.jsx)(h, {
                  guild: t,
                  checkboxText: d
              })
        : (0, r.jsx)(p, {
              guild: t,
              eligibility: l,
              eligibilityLoading: i,
              eligibilityError: s,
              refreshEligibility: a
          });
}
function b(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, r.jsxs)('div', {
        className: d.ctaContainer,
        children: [
            (0, r.jsx)('img', {
                className: d.heroBanner,
                src: u,
                alt: c.NW.string(c.t.Af4klJ)
            }),
            (0, r.jsxs)('div', {
                className: d.ctaContent,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: c.NW.string(c.t.PqYfh4)
                    }),
                    (0, r.jsx)(s.LZC, { size: 12 }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: c.NW.string(c.t['41wkMT'])
                    }),
                    (0, r.jsx)(s.LZC, { size: 24 }),
                    (0, r.jsx)(f, {
                        guild: t,
                        monetizationEligibility: n
                    })
                ]
            })
        ]
    });
}
