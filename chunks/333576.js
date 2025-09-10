n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(693789),
    a = n(481060),
    o = n(703656),
    s = n(52647),
    l = n(342386),
    c = n(450272),
    u = n(981631);
let d = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, s.Z)();
    return (0, r.jsxs)(c.$0, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-xl/semibold",
                children: "Virtual Currency Configuration",
            }),
            (0, r.jsxs)(c.E_, {
                label: "Reset Onboarding State",
                direction: "vertical",
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "Click the button below to reset your onboarding state for Virtual Currency.",
                    }),
                    (0, r.jsx)(i.zx, {
                        onClick: () => {
                            e(), t(), (0, l.Z)(), (0, o.uL)(u.Z5c.APP);
                        },
                        children: "Reset Onboarding State",
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        children:
                            "Your may have to refresh your client after being redirected to the main application in order to see these changes.",
                    }),
                ],
            }),
        ],
    });
};
