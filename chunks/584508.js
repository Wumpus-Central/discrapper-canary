n.d(t, {
    A: () => p,
    m: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(635582),
    a = n(139637),
    c = n(985018),
    o = n(829050),
    d = n(584643);
function u(e) {
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
let f = "role_subscriptions_eligibility_modal";
function g(e) {
    let { guild: t, eligibility: i, eligibilityLoading: s, eligibilityError: a, refreshEligibility: o } = e;
    return (0, r.jsx)(l.Button, {
        variant: "expressive",
        onClick: function () {
            (0, l.mMO)(
                async () => {
                    let { default: e } = await n.e("91699").then(n.bind(n, 561406));
                    return (n) => {
                        var l, c;
                        return (0, r.jsx)(
                            e,
                            ((l = u({}, n)),
                            (c = c =
                                {
                                    eligibility: i,
                                    eligibilityLoading: s,
                                    eligibilityError: a,
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
                { modalKey: f },
            );
        },
        size: "md",
        text: c.intl.string(c.t.NL5ZNS),
        icon: l.EpV,
    });
}
function b(e) {
    let { guild: t, checkboxText: n } = e,
        { canSubmitAcceptance: a, error: o, loading: d, submitAcceptTermsRequest: u } = (0, s.A)(t.id),
        [f, g] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Checkbox, {
                onChange: function () {
                    g((e) => !e);
                },
                checked: f,
                label: n,
            }),
            (0, r.jsx)(l.hKd, { size: 24 }),
            (0, r.jsx)(l.Button, {
                disabled: !f || !a,
                onClick: u,
                loading: d,
                variant: "expressive",
                text: c.intl.string(c.t.NL5ZNS),
            }),
            null != o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.hKd, { size: 24 }),
                        (0, r.jsx)(l.wx6, {
                            type: "critical",
                            children: o.getAnyErrorMessage(),
                        }),
                    ],
                }),
        ],
    });
}
function m(e) {
    let { guild: t, monetizationEligibility: n } = e,
        {
            eligibilityLoading: i,
            eligibilityError: l,
            refreshEligibility: s,
            eligibility: c,
            eligibleForMonetization: o,
            acceptTermsCheckboxText: d,
            wasRejectedInV1: f,
        } = n;
    return o
        ? f
            ? (0, r.jsx)(a.A, u({}, n))
            : (0, r.jsx)(b, {
                  guild: t,
                  checkboxText: d,
              })
        : (0, r.jsx)(g, {
              guild: t,
              eligibility: c,
              eligibilityLoading: i,
              eligibilityError: l,
              refreshEligibility: s,
          });
}
function p(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, r.jsxs)("div", {
        className: o.OQ,
        children: [
            (0, r.jsx)("img", {
                className: o.hV,
                src: d,
                alt: c.intl.string(c.t.Af4klP),
            }),
            (0, r.jsxs)("div", {
                className: o.mv,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: c.intl.string(c.t["PqYfh/"]),
                    }),
                    (0, r.jsx)(l.hKd, { size: 12 }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: c.intl.string(c.t["41wkMc"]),
                    }),
                    (0, r.jsx)(l.hKd, { size: 24 }),
                    (0, r.jsx)(m, {
                        guild: t,
                        monetizationEligibility: n,
                    }),
                ],
            }),
        ],
    });
}
