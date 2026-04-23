n.d(t, { m: () => I, A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    a = n(821609),
    r = n(695366),
    o = n(150934),
    d = n(696986),
    c = n(683071),
    u = n(534514),
    m = n(834730),
    g = n(17928),
    h = n(181658),
    x = n(260509),
    _ = n(71393),
    p = n(287809),
    E = n(493540),
    f = n(469993),
    j = n(512950),
    N = n(985018);
function A(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: l,
            createEnableRequest: s,
            requestRejectedNoticeText: r,
            reapplyNoticeText: o,
            isApplicationPending: d,
        } = e;
    if (null != l) return (0, i.jsx)(c.w, { type: "critical", children: l.getAnyErrorMessage() });
    let u = null;
    return (
        d
            ? (u = N.intl.string(N.t.OrkTBn))
            : null != r
              ? (u = r)
              : null != o && ((u = o), (t = N.intl.string(N.t["YKw/NQ"]))),
        null != u
            ? (0, i.jsx)(j.p, {
                  messageType: j.Y.WARNING,
                  action: (0, i.jsx)(a.$, { variant: "overlay-secondary", text: t, onClick: s, loading: n }),
                  children: u,
              })
            : null
    );
}
var C = n(99895);
let I = "role_subscriptions_eligibility_modal";
function b(e) {
    let { guild: t, eligibility: l, eligibilityLoading: o, eligibilityError: d, refreshEligibility: c } = e;
    return (0, i.jsx)(a.$, {
        variant: "expressive",
        onClick: function () {
            (0, s.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("18266").then(n.bind(n, 258118));
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
                { modalKey: I },
            );
        },
        size: "md",
        text: N.intl.string(N.t.NL5ZNS),
        icon: r.E,
    });
}
function S(e) {
    let { guild: t, checkboxText: n } = e,
        {
            canSubmitAcceptance: s,
            error: r,
            loading: u,
            submitAcceptTermsRequest: m,
        } = (function (e) {
            let t = (0, g.bG)([_.A], () => _.A.getGuild(e)),
                [n, i] = l.useState(),
                [s, a] = l.useState(!1),
                r = (0, f.ME)(t);
            return {
                canSubmitAcceptance: (0, g.bG)([p.default], () => {
                    let e = p.default.getCurrentUser();
                    return null != t && (0, x.bM)(t, e);
                }, [t]),
                error: n,
                loading: s,
                submitAcceptTermsRequest: l.useCallback(async () => {
                    if (null != e && r) {
                        a(!0), i(void 0);
                        try {
                            await E.Bo(e);
                        } catch (e) {
                            i(new h.A(e));
                        } finally {
                            a(!1);
                        }
                    }
                }, [e, void 0, r]),
            };
        })(t.id),
        [j, A] = l.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.S, {
                onChange: function () {
                    A((e) => !e);
                },
                checked: j,
                label: n,
            }),
            (0, i.jsx)(d.h, { size: 24 }),
            (0, i.jsx)(a.$, {
                disabled: !j || !s,
                onClick: m,
                loading: u,
                variant: "expressive",
                text: N.intl.string(N.t.NL5ZNS),
            }),
            null != r &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.h, { size: 24 }),
                        (0, i.jsx)(c.w, { type: "critical", children: r.getAnyErrorMessage() }),
                    ],
                }),
        ],
    });
}
function v(e) {
    let { guild: t, monetizationEligibility: n } = e,
        {
            eligibilityLoading: l,
            eligibilityError: s,
            refreshEligibility: a,
            eligibility: r,
            eligibleForMonetization: o,
            acceptTermsCheckboxText: d,
            wasRejectedInV1: c,
        } = n;
    return o
        ? c
            ? (0, i.jsx)(A, { ...n })
            : (0, i.jsx)(S, { guild: t, checkboxText: d })
        : (0, i.jsx)(b, {
              guild: t,
              eligibility: r,
              eligibilityLoading: l,
              eligibilityError: s,
              refreshEligibility: a,
          });
}
function T(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, i.jsxs)("div", {
        className: C.OQ,
        children: [
            (0, i.jsx)("img", { className: C.hV, src: "/assets/45b68ce4917d46f1.svg", alt: N.intl.string(N.t.Af4klP) }),
            (0, i.jsxs)("div", {
                className: C.mv,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: N.intl.string(N.t["PqYfh/"]),
                    }),
                    (0, i.jsx)(d.h, { size: 12 }),
                    (0, i.jsx)(m.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: N.intl.string(N.t["41wkMc"]),
                    }),
                    (0, i.jsx)(d.h, { size: 24 }),
                    (0, i.jsx)(v, { guild: t, monetizationEligibility: n }),
                ],
            }),
        ],
    });
}
