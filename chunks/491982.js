a.d(t, { A: () => u });
var n = a(627968);
a(64700);
var l = a(270003),
    i = a(821609),
    s = a(512950),
    r = a(976860),
    o = a(324861),
    d = a(652215),
    c = a(243655);
let u = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, o.A)();
    return (0, n.jsx)("div", {
        className: c.k,
        children: (0, n.jsxs)(l.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(i.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, r.pX)(d.BVt.APP);
                        },
                    }),
                }),
                (0, n.jsx)(s.p, {
                    messageType: s.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
