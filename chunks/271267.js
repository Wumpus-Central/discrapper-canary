n.d(t, {
    Q: function () {
        return m;
    },
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(957011),
    s = n(587431),
    o = n(756066),
    c = n(388032),
    d = n(364232),
    u = n(270395);
let m = 'role_subscriptions_eligibility_modal';
function h(e) {
    let { guild: t, eligibility: r, eligibilityLoading: a, eligibilityError: s, refreshEligibility: o } = e;
    return (0, i.jsxs)(l.Button, {
        color: l.ButtonColors.CUSTOM,
        className: d.ineligibleButton,
        innerClassName: d.ineligibleButtonContent,
        grow: !0,
        onClick: function () {
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await n.e('21863').then(n.bind(n, 466501));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            eligibility: r,
                            eligibilityLoading: a,
                            eligibilityError: s,
                            refreshEligibility: o,
                            guildId: t.id
                        });
                },
                { modalKey: m }
            );
        },
        size: l.Button.Sizes.LARGE,
        children: [
            (0, i.jsx)(l.CircleWarningIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            c.intl.string(c.t.NL5ZNT)
        ]
    });
}
function g(e) {
    let { guild: t, checkboxText: n } = e,
        { canSubmitAcceptance: o, error: u, loading: m, submitAcceptTermsRequest: h } = (0, a.Z)(t.id),
        [g, x] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Checkbox, {
                onChange: function () {
                    x((e) => !e);
                },
                size: 20,
                type: l.Checkbox.Types.INVERTED,
                value: g,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: n
                })
            }),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsx)(l.Button, {
                className: d.ctaButton,
                disabled: !g || !o,
                grow: !0,
                onClick: h,
                size: l.Button.Sizes.LARGE,
                submitting: m,
                children: c.intl.string(c.t.NL5ZNT)
            }),
            null != u &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l.Spacer, { size: 24 }), (0, i.jsx)(s.Z, { children: u.getAnyErrorMessage() })]
                })
        ]
    });
}
function x(e) {
    let { guild: t, monetizationEligibility: n } = e,
        { eligibilityLoading: r, eligibilityError: l, refreshEligibility: a, eligibility: s, eligibleForMonetization: c, acceptTermsCheckboxText: d, wasRejectedInV1: u } = n;
    return c
        ? u
            ? (0, i.jsx)(o.Z, { ...n })
            : (0, i.jsx)(g, {
                  guild: t,
                  checkboxText: d
              })
        : (0, i.jsx)(h, {
              guild: t,
              eligibility: s,
              eligibilityLoading: r,
              eligibilityError: l,
              refreshEligibility: a
          });
}
function p(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, i.jsxs)('div', {
        className: d.ctaContainer,
        children: [
            (0, i.jsx)('img', {
                className: d.heroBanner,
                src: u,
                alt: c.intl.string(c.t.Af4klJ)
            }),
            (0, i.jsxs)('div', {
                className: d.ctaContent,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: c.intl.string(c.t.PqYfh4)
                    }),
                    (0, i.jsx)(l.Spacer, { size: 12 }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: c.intl.string(c.t['41wkMT'])
                    }),
                    (0, i.jsx)(l.Spacer, { size: 24 }),
                    (0, i.jsx)(x, {
                        guild: t,
                        monetizationEligibility: n
                    })
                ]
            })
        ]
    });
}
