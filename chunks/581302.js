n.d(t, { Z: () => c });
var a = n(54381);
n(473749);
var l = n(481060),
    i = n(703656),
    r = n(52647),
    s = n(981631),
    o = n(906406);
let c = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, r.Z)();
    return (0, a.jsx)("div", {
        className: o.container,
        children: (0, a.jsxs)(l.C3N, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, a.jsx)("div", {
                    children: (0, a.jsx)(l.Button, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, i.uL)(s.Z5c.APP);
                        },
                    }),
                }),
                (0, a.jsx)(l.Wn, {
                    messageType: l.QYI.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
