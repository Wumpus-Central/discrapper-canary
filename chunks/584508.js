n.d(t, { A: () => N, m: () => A });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    r = n(821609),
    a = n(695366),
    o = n(150934),
    d = n(696986),
    c = n(683071),
    u = n(534514),
    m = n(834730),
    g = n(635582),
    h = n(139637),
    x = n(985018),
    _ = n(99895),
    p = n(584643);
let A = "role_subscriptions_eligibility_modal";
function E(e) {
    let { guild: t, eligibility: l, eligibilityLoading: o, eligibilityError: d, refreshEligibility: c } = e;
    return (0, i.jsx)(r.$, {
        variant: "expressive",
        onClick: function () {
            (0, s.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("91699").then(n.bind(n, 561406));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            eligibility: l,
                            eligibilityLoading: o,
                            eligibilityError: d,
                            refreshEligibility: c,
                            guildId: t.id,
                        });
                },
                { modalKey: A },
            );
        },
        size: "md",
        text: x.intl.string(x.t.NL5ZNS),
        icon: a.E,
    });
}
function f(e) {
    let { guild: t, checkboxText: n } = e,
        { canSubmitAcceptance: s, error: a, loading: u, submitAcceptTermsRequest: m } = (0, g.A)(t.id),
        [h, _] = l.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.S, {
                onChange: function () {
                    _((e) => !e);
                },
                checked: h,
                label: n,
            }),
            (0, i.jsx)(d.h, { size: 24 }),
            (0, i.jsx)(r.$, {
                disabled: !h || !s,
                onClick: m,
                loading: u,
                variant: "expressive",
                text: x.intl.string(x.t.NL5ZNS),
            }),
            null != a &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.h, { size: 24 }),
                        (0, i.jsx)(c.w, { type: "critical", children: a.getAnyErrorMessage() }),
                    ],
                }),
        ],
    });
}
function j(e) {
    let { guild: t, monetizationEligibility: n } = e,
        {
            eligibilityLoading: l,
            eligibilityError: s,
            refreshEligibility: r,
            eligibility: a,
            eligibleForMonetization: o,
            acceptTermsCheckboxText: d,
            wasRejectedInV1: c,
        } = n;
    return o
        ? c
            ? (0, i.jsx)(h.A, { ...n })
            : (0, i.jsx)(f, { guild: t, checkboxText: d })
        : (0, i.jsx)(E, {
              guild: t,
              eligibility: a,
              eligibilityLoading: l,
              eligibilityError: s,
              refreshEligibility: r,
          });
}
function N(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, i.jsxs)("div", {
        className: _.OQ,
        children: [
            (0, i.jsx)("img", { className: _.hV, src: p, alt: x.intl.string(x.t.Af4klP) }),
            (0, i.jsxs)("div", {
                className: _.mv,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: x.intl.string(x.t["PqYfh/"]),
                    }),
                    (0, i.jsx)(d.h, { size: 12 }),
                    (0, i.jsx)(m.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: x.intl.string(x.t["41wkMc"]),
                    }),
                    (0, i.jsx)(d.h, { size: 24 }),
                    (0, i.jsx)(j, { guild: t, monetizationEligibility: n }),
                ],
            }),
        ],
    });
}
