n.d(t, { Z: () => x });
var a = n(54381);
n(473749);
var l = n(120356),
    r = n.n(l),
    i = n(442837),
    s = n(481060),
    o = n(179658),
    c = n(168107),
    d = n(480916),
    u = n(963886),
    m = n(857192),
    p = n(334078),
    h = n(451429);
function x() {
    let { personaForceFaeFail: e, personaForceIdVerificationFail: t } = (0, i.cj)([m.default], () => ({
        personaForceFaeFail: m.default.personaForceFaeFail,
        personaForceIdVerificationFail: m.default.personaForceIdVerificationFail,
    }));
    return (0, a.jsxs)("div", {
        className: r()(h.panel, p.container),
        children: [
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: "Quick Actions",
                    }),
                    (0, a.jsx)(s.izJ, { gap: 16 }),
                    (0, a.jsxs)("div", {
                        className: p.contentContainer,
                        children: [
                            (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Age Verification Test Tool",
                                onClick: () => (0, u.E)(),
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Age Verification Modal",
                                onClick: () =>
                                    c.Z.showAgeVerificationGetStartedModal({
                                        entryPoint: d.cU.DEV_TOOLS_QUICK_ACTIONS,
                                    }),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: "Persona Configurations",
                    }),
                    (0, a.jsx)("div", { children: "Note: this only works for generated test users" }),
                    (0, a.jsx)(s.izJ, { gap: 16 }),
                    (0, a.jsxs)("div", {
                        className: p.contentContainer,
                        children: [
                            (0, a.jsx)(s.rsf, {
                                label: "Force FAE to Fail",
                                description: "Force Facial Age Estimation to fail for testing with Persona",
                                checked: e,
                                onChange: (e) => (0, o.y)({ personaForceFaeFail: e }),
                            }),
                            (0, a.jsx)(s.rsf, {
                                label: "Force ID Verification to Fail",
                                description: "Force ID verification to fail for testing with Persona",
                                checked: t,
                                onChange: (e) => (0, o.y)({ personaForceIdVerificationFail: e }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
