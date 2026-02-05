n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    l = n(311907),
    r = n(397927),
    o = n(926919),
    d = n(935649),
    c = n(847599),
    u = n(480237),
    m = n(111162),
    h = n(667380),
    x = n(661251);
function p() {
    let {
        personaForceFaeFail: e,
        personaForceIdVerificationFail: t,
        personaDisableModularPilotTestTemplate: n,
    } = (0, l.cf)([m.default], () => ({
        personaForceFaeFail: m.default.personaForceFaeFail,
        personaForceIdVerificationFail: m.default.personaForceIdVerificationFail,
        personaDisableModularPilotTestTemplate: m.default.personaDisableModularPilotTestTemplate,
    }));
    return (0, a.jsxs)("div", {
        className: i()(x.nd, h.k),
        children: [
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                    (0, a.jsx)(r.cGx, { gap: 16 }),
                    (0, a.jsxs)("div", {
                        className: h.h,
                        children: [
                            (0, a.jsx)(r.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Age Verification Test Tool",
                                onClick: () => (0, u.A)(),
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(r.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Age Verification Modal",
                                onClick: () =>
                                    d.A.showAgeVerificationGetStartedModal({
                                        entryPoint: c.q1.DEV_TOOLS_QUICK_ACTIONS,
                                    }),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Persona Configurations" }),
                    (0, a.jsx)("div", { children: "Note: this only works for generated test users" }),
                    (0, a.jsx)(r.cGx, { gap: 16 }),
                    (0, a.jsxs)("div", {
                        className: h.h,
                        children: [
                            (0, a.jsx)(r.dOG, {
                                label: "Disable Modular Pilot Test Template",
                                description:
                                    "Use actual pilot template (skips age override screen) for Persona age verification testing",
                                checked: n,
                                onChange: (e) => (0, o.x)({ personaDisableModularPilotTestTemplate: e }),
                            }),
                            (0, a.jsx)(r.dOG, {
                                label: "Force FAE to Fail",
                                description: "Force Facial Age Estimation to fail for testing with Persona",
                                checked: e,
                                onChange: (e) => (0, o.x)({ personaForceFaeFail: e }),
                            }),
                            (0, a.jsx)(r.dOG, {
                                label: "Force ID Verification to Fail",
                                description: "Force ID verification to fail for testing with Persona",
                                checked: t,
                                onChange: (e) => (0, o.x)({ personaForceIdVerificationFail: e }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
