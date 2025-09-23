n.d(t, { Z: () => m });
var a = n(951288);
n(647438);
var r = n(693789),
    i = n(789164),
    l = n(481060),
    s = n(703656),
    o = n(52647),
    c = n(237012),
    d = n(981631),
    u = n(906406);
let m = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, o.Z)();
    return (0, a.jsx)(i.h, {
        title: "Virtual Currency Configuration",
        className: u.container,
        children: (0, a.jsxs)(c.E_, {
            label: "Reset Onboarding State",
            direction: "vertical",
            children: [
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-feedback-info",
                    children: "Click the button below to reset your onboarding state for Virtual Currency.",
                }),
                (0, a.jsx)(r.zx, {
                    onClick: () => {
                        e(), t(), (0, s.uL)(d.Z5c.APP);
                    },
                    children: "Reset Onboarding State",
                }),
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-feedback-info",
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these changes.",
                }),
            ],
        }),
    });
};
