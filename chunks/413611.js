n.d(t, { m: () => v, A: () => b });
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
    g = n(17928),
    x = n(181658),
    h = n(260509),
    E = n(71393),
    j = n(287809),
    N = n(493540),
    p = n(469993),
    A = n(512950),
    f = n(375708);
function I(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: l,
            createEnableRequest: s,
            requestRejectedNoticeText: a,
            reapplyNoticeText: o,
            isApplicationPending: d,
        } = e;
    if (null != l) return (0, i.jsx)(c.w, { type: "critical", children: l.getAnyErrorMessage() });
    let u = null;
    return (
        d
            ? (u = f.intl.string(f.t.OrkTBn))
            : null != a
              ? (u = a)
              : null != o && ((u = o), (t = f.intl.string(f.t["YKw/NQ"]))),
        null != u
            ? (0, i.jsx)(A.p, {
                  messageType: A.Y.WARNING,
                  action: (0, i.jsx)(r.$, { variant: "overlay-secondary", text: t, onClick: s, loading: n }),
                  children: u,
              })
            : null
    );
}
var C = n(99895);
let v = "role_subscriptions_eligibility_modal";
function S(e) {
    let { guild: t, eligibility: l, eligibilityLoading: o, eligibilityError: d, refreshEligibility: c } = e;
    return (0, i.jsx)(r.$, {
        variant: "expressive",
        onClick: function () {
            (0, s.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("79480"), n.e("19631"), n.e("18266")]).then(
                        n.bind(n, 258118),
                    );
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
                { modalKey: v },
            );
        },
        size: "md",
        text: f.intl.string(f.t.NL5ZNS),
        icon: a.E,
    });
}
function _(e) {
    let { guild: t, checkboxText: n } = e,
        {
            canSubmitAcceptance: s,
            error: a,
            loading: u,
            submitAcceptTermsRequest: m,
        } = (function (e) {
            let t = (0, g.bG)([E.A], () => E.A.getGuild(e)),
                [n, i] = l.useState(),
                [s, r] = l.useState(!1),
                a = (0, p.ME)(t);
            return {
                canSubmitAcceptance: (0, g.bG)([j.default], () => {
                    let e = j.default.getCurrentUser();
                    return null != t && (0, h.bM)(t, e);
                }, [t]),
                error: n,
                loading: s,
                submitAcceptTermsRequest: l.useCallback(async () => {
                    if (null != e && a) {
                        r(!0), i(void 0);
                        try {
                            await N.Bo(e);
                        } catch (e) {
                            i(new x.A(e));
                        } finally {
                            r(!1);
                        }
                    }
                }, [e, void 0, a]),
            };
        })(t.id),
        [A, I] = l.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.S, {
                onChange: function () {
                    I((e) => !e);
                },
                checked: A,
                label: n,
            }),
            (0, i.jsx)(d.h, { size: 24 }),
            (0, i.jsx)(r.$, {
                disabled: !A || !s,
                onClick: m,
                loading: u,
                variant: "expressive",
                text: f.intl.string(f.t.NL5ZNS),
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
function T(e) {
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
            ? (0, i.jsx)(I, { ...n })
            : (0, i.jsx)(_, { guild: t, checkboxText: d })
        : (0, i.jsx)(S, {
              guild: t,
              eligibility: a,
              eligibilityLoading: l,
              eligibilityError: s,
              refreshEligibility: r,
          });
}
function b(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, i.jsxs)("div", {
        className: C.OQ,
        children: [
            (0, i.jsx)("img", { className: C.hV, src: "/assets/45b68ce4917d46f1.svg", alt: f.intl.string(f.t.Af4klP) }),
            (0, i.jsxs)("div", {
                className: C.mv,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: f.intl.string(f.t["PqYfh/"]),
                    }),
                    (0, i.jsx)(d.h, { size: 12 }),
                    (0, i.jsx)(m.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: f.intl.string(f.t["41wkMc"]),
                    }),
                    (0, i.jsx)(d.h, { size: 24 }),
                    (0, i.jsx)(T, { guild: t, monetizationEligibility: n }),
                ],
            }),
        ],
    });
}
