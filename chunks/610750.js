n.d(t, { R: () => s });
var r = n(54381),
    i = n(481060),
    a = n(52647),
    o = n(605532);
let s = {
    title: "Orb Onboarding",
    stories: [
        {
            name: "Orb Onboarding Reset",
            id: "orb-onboarding-reset",
            component: function () {
                let { resetOnboardingExperience: e } = (0, a.Z)();
                return (0, r.jsxs)("div", {
                    className: o.verticalContainer,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "text-feedback-info",
                            style: { marginBottom: "8px" },
                            children: "Use this to reset your user's DCF Orb Onboarding state.",
                        }),
                        (0, r.jsx)(i.Button, {
                            onClick: () => e(),
                            text: "Reset Announcement Modal State",
                        }),
                    ],
                });
            },
            controls: {},
        },
    ],
};
