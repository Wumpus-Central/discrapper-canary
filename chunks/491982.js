n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(976860),
    r = n(324861),
    s = n(652215),
    o = n(663024);
let c = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, r.A)();
    return (0, a.jsx)("div", {
        className: o.k,
        children: (0, a.jsxs)(l.nVY, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, a.jsx)("div", {
                    children: (0, a.jsx)(l.Button, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, i.pX)(s.BVt.APP);
                        },
                    }),
                }),
                (0, a.jsx)(l.po8, {
                    messageType: l.YCn.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
