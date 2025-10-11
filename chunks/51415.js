n.d(t, { Z: () => u });
var a = n(951288);
n(647438);
var r = n(481060),
    i = n(703656),
    l = n(272008),
    s = n(937797),
    o = n(46140),
    c = n(981631),
    d = n(840846);
let u = function () {
    let { enabled: e } = s.m8.useConfig({ location: o.dr.INTERNAL_TOOLING });
    return (0, a.jsxs)("div", {
        className: d.container,
        children: [
            (0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, a.jsx)(r.Button, {
                onClick: () => {
                    (0, l.it)(), (0, i.uL)(e ? c.Z5c.QUEST_HOME_V2 : c.Z5c.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
