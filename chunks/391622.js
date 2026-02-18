l.d(t, { e: () => s });
var a = l(627968),
    n = l(397927),
    r = l(324861),
    i = l(749226);
let s = {
    title: "Orb Onboarding",
    stories: [
        {
            name: "Orb Onboarding Reset",
            id: "orb-onboarding-reset",
            component: function () {
                let { resetOnboardingExperience: e } = (0, r.A)();
                return (0, a.jsxs)("div", {
                    className: i.YG,
                    children: [
                        (0, a.jsx)(n.Text, {
                            variant: "text-md/normal",
                            color: "text-feedback-info",
                            style: { marginBottom: "8px" },
                            children: "Use this to reset your user's DCF Orb Onboarding state.",
                        }),
                        (0, a.jsx)(n.Button, { onClick: () => e(), text: "Reset Announcement Modal State" }),
                    ],
                });
            },
            controls: {},
        },
    ],
};
