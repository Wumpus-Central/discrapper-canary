n.d(t, { Z: () => c });
var a = n(951288);
n(647438);
var r = n(481060),
    l = n(703656),
    i = n(52647),
    o = n(981631),
    s = n(906406);
let c = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, i.Z)();
    return (0, a.jsx)("div", {
        className: s.container,
        children: (0, a.jsxs)(r.C3N, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, a.jsx)("div", {
                    children: (0, a.jsx)(r.Button, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, l.uL)(o.Z5c.APP);
                        },
                    }),
                }),
                (0, a.jsx)(r.Wn, {
                    messageType: r.QYI.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
