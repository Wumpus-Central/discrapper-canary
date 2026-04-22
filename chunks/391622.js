l.d(t, { e: () => s });
var a = l(627968),
    n = l(834730),
    r = l(821609),
    i = l(324861),
    o = l(439519);
let s = {
    title: "Orb Onboarding",
    stories: [
        {
            name: "Orb Onboarding Reset",
            id: "orb-onboarding-reset",
            component: function () {
                let { resetOnboardingExperience: e } = (0, i.A)();
                return (0, a.jsxs)("div", {
                    className: o.YG,
                    children: [
                        (0, a.jsx)(n.E, {
                            variant: "text-md/normal",
                            color: "text-feedback-info",
                            style: { marginBottom: "8px" },
                            children: "Use this to reset your user's DCF Orb Onboarding state.",
                        }),
                        (0, a.jsx)(r.$, { onClick: () => e(), text: "Reset Announcement Modal State" }),
                    ],
                });
            },
            controls: {},
        },
    ],
};
