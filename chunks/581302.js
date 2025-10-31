n.d(t, { Z: () => c });
var a = n(951288);
n(647438);
var i = n(481060),
    l = n(703656),
    r = n(52647),
    s = n(981631),
    o = n(906406);
let c = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, r.Z)();
    return (0, a.jsx)("div", {
        className: o.container,
        children: (0, a.jsxs)(i.C3N, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, a.jsx)("div", {
                    children: (0, a.jsx)(i.Button, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, l.uL)(s.Z5c.APP);
                        },
                    }),
                }),
                (0, a.jsx)(i.Wn, {
                    messageType: i.QYI.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
