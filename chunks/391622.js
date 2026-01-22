n.d(t, {
    e: () => o,
});
var r = n(627968),
    i = n(397927),
    a = n(324861),
    s = n(749226);
let o = {
    title: "Orb Onboarding",
    stories: [
        {
            name: "Orb Onboarding Reset",
            id: "orb-onboarding-reset",
            component: function () {
                let { resetOnboardingExperience: e } = (0, a.A)();
                return (0, r.jsxs)("div", {
                    className: s.YG,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "text-feedback-info",
                            style: {
                                marginBottom: "8px",
                            },
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
