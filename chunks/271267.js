n.d(t, {
    Q: () => g,
    Z: () => x
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(957011),
    a = n(587431),
    o = n(756066),
    c = n(388032),
    u = n(601781),
    d = n(270395);
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
    let { guild: t, eligibility: i, eligibilityLoading: s, eligibilityError: a, refreshEligibility: o } = e;
    return (0, r.jsxs)(l.zxk, {
        color: l.Ttl.CUSTOM,
        className: u.ineligibleButton,
        innerClassName: u.ineligibleButtonContent,
        grow: !0,
        onClick: function () {
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await n.e('21863').then(n.bind(n, 466501));
                    return (n) => {
                        var l, c;
                        return (0, r.jsx)(
                            e,
                            ((l = m({}, n)),
                            (c = c =
                                {
                                    eligibility: i,
                                    eligibilityLoading: s,
                                    eligibilityError: a,
                                    refreshEligibility: o,
                                    guildId: t.id
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
                            l)
                        );
                    };
                },
                { modalKey: g }
            );
        },
        size: l.zxk.Sizes.LARGE,
        children: [
            (0, r.jsx)(l.P4T, {
                size: 'xs',
                color: 'currentColor'
            }),
            c.intl.string(c.t.NL5ZNT)
        ]
    });
}
function f(e) {
    let { guild: t, checkboxText: n } = e,
        { canSubmitAcceptance: o, error: d, loading: m, submitAcceptTermsRequest: g } = (0, s.Z)(t.id),
        [p, f] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.XZJ, {
                onChange: function () {
                    f((e) => !e);
                },
                size: 20,
                type: l.XZJ.Types.INVERTED,
                value: p,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: n
                })
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(l.zxk, {
                className: u.ctaButton,
                disabled: !p || !o,
                grow: !0,
                onClick: g,
                size: l.zxk.Sizes.LARGE,
                submitting: m,
                children: c.intl.string(c.t.NL5ZNT)
            }),
            null != d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.LZC, { size: 24 }), (0, r.jsx)(a.Z, { children: d.getAnyErrorMessage() })]
                })
        ]
    });
}
function h(e) {
    let { guild: t, monetizationEligibility: n } = e,
        { eligibilityLoading: i, eligibilityError: l, refreshEligibility: s, eligibility: a, eligibleForMonetization: c, acceptTermsCheckboxText: u, wasRejectedInV1: d } = n;
    return c
        ? d
            ? (0, r.jsx)(o.Z, m({}, n))
            : (0, r.jsx)(f, {
                  guild: t,
                  checkboxText: u
              })
        : (0, r.jsx)(p, {
              guild: t,
              eligibility: a,
              eligibilityLoading: i,
              eligibilityError: l,
              refreshEligibility: s
          });
}
function x(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, r.jsxs)('div', {
        className: u.ctaContainer,
        children: [
            (0, r.jsx)('img', {
                className: u.heroBanner,
                src: d,
                alt: c.intl.string(c.t.Af4klJ)
            }),
            (0, r.jsxs)('div', {
                className: u.ctaContent,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: c.intl.string(c.t.PqYfh4)
                    }),
                    (0, r.jsx)(l.LZC, { size: 12 }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: c.intl.string(c.t['41wkMT'])
                    }),
                    (0, r.jsx)(l.LZC, { size: 24 }),
                    (0, r.jsx)(h, {
                        guild: t,
                        monetizationEligibility: n
                    })
                ]
            })
        ]
    });
}
