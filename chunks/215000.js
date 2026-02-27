n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var i = n(397927),
    s = n(976860),
    l = n(829219),
    r = n(652215),
    o = n(490602);
let d = function () {
    return (0, a.jsxs)("div", {
        className: o.k,
        children: [
            (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, a.jsx)(i.Button, {
                onClick: () => {
                    (0, l.Ov)(), (0, s.pX)(r.BVt.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
