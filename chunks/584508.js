"use strict";
n.d(t, { A: () => h, m: () => u });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(635582),
    a = n(139637),
    o = n(985018),
    d = n(99895),
    c = n(584643);
let u = "role_subscriptions_eligibility_modal";
function m(e) {
    let { guild: t, eligibility: s, eligibilityLoading: r, eligibilityError: a, refreshEligibility: d } = e;
    return (0, i.jsx)(l.Button, {
        variant: "expressive",
        onClick: function () {
            (0, l.mMO)(
                async () => {
                    let { default: e } = await n.e("91699").then(n.bind(n, 561406));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            eligibility: s,
                            eligibilityLoading: r,
                            eligibilityError: a,
                            refreshEligibility: d,
                            guildId: t.id,
                        });
                },
                { modalKey: u },
            );
        },
        size: "md",
        text: o.intl.string(o.t.NL5ZNS),
        icon: l.EpV,
    });
}
function g(e) {
    let { guild: t, checkboxText: n } = e,
        { canSubmitAcceptance: a, error: d, loading: c, submitAcceptTermsRequest: u } = (0, r.A)(t.id),
        [m, g] = s.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Checkbox, {
                onChange: function () {
                    g((e) => !e);
                },
                checked: m,
                label: n,
            }),
            (0, i.jsx)(l.hKd, { size: 24 }),
            (0, i.jsx)(l.Button, {
                disabled: !m || !a,
                onClick: u,
                loading: c,
                variant: "expressive",
                text: o.intl.string(o.t.NL5ZNS),
            }),
            null != d &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(l.hKd, { size: 24 }),
                        (0, i.jsx)(l.wx6, { type: "critical", children: d.getAnyErrorMessage() }),
                    ],
                }),
        ],
    });
}
function x(e) {
    let { guild: t, monetizationEligibility: n } = e,
        {
            eligibilityLoading: s,
            eligibilityError: l,
            refreshEligibility: r,
            eligibility: o,
            eligibleForMonetization: d,
            acceptTermsCheckboxText: c,
            wasRejectedInV1: u,
        } = n;
    return d
        ? u
            ? (0, i.jsx)(a.A, { ...n })
            : (0, i.jsx)(g, { guild: t, checkboxText: c })
        : (0, i.jsx)(m, {
              guild: t,
              eligibility: o,
              eligibilityLoading: s,
              eligibilityError: l,
              refreshEligibility: r,
          });
}
function h(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, i.jsxs)("div", {
        className: d.OQ,
        children: [
            (0, i.jsx)("img", { className: d.hV, src: c, alt: o.intl.string(o.t.Af4klP) }),
            (0, i.jsxs)("div", {
                className: d.mv,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: o.intl.string(o.t["PqYfh/"]),
                    }),
                    (0, i.jsx)(l.hKd, { size: 12 }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: o.intl.string(o.t["41wkMc"]),
                    }),
                    (0, i.jsx)(l.hKd, { size: 24 }),
                    (0, i.jsx)(x, { guild: t, monetizationEligibility: n }),
                ],
            }),
        ],
    });
}
