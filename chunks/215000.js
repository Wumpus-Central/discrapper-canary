n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(976860),
    r = n(829219),
    s = n(652215),
    o = n(490602);
let c = function () {
    return (0, a.jsxs)("div", {
        className: o.k,
        children: [
            (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, a.jsx)(l.Button, {
                onClick: () => {
                    (0, r.Ov)(), (0, i.pX)(s.BVt.QUEST_HOME_V2);
                },
                text: "Clear History",
            }),
            (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
