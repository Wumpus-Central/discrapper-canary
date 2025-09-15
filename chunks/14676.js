n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(703656),
    o = n(342386),
    s = n(272008),
    l = n(937797),
    c = n(46140),
    u = n(981631),
    d = n(571006);
let f = function () {
    let { enabled: e } = l.m8.useConfig({ location: c.dr.INTERNAL_TOOLING });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.X6q, {
                variant: "heading-xl/semibold",
                children: "Quest Minor Reward Capping Config",
            }),
            (0, r.jsxs)("div", {
                className: d.container,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "Click the button below to clear your Minor Reward Capping History.",
                    }),
                    (0, r.jsx)(i.zxk, {
                        onClick: () => {
                            (0, s.it)(), (0, o.default)(), (0, a.uL)(e ? u.Z5c.QUEST_HOME_V2 : u.Z5c.QUEST_HOME);
                        },
                        text: "Clear History",
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        children:
                            "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
                    }),
                ],
            }),
        ],
    });
};
