n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(397927),
    r = n(714510),
    u = n(646764),
    o = n(805285);
let c = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: c,
            taskDetails: d,
            location: m,
            sourceQuestContent: A,
            gameProfileSource: E,
        } = e,
        p = (0, r.mU)({
            quest: s,
            taskDetails: d,
            location: m,
            questContent: c,
            sourceQuestContent: A,
            gameProfileSource: E,
        });
    return (0, l.jsxs)("div", {
        className: i()(o.iE, t),
        children: [
            (0, l.jsx)(u.A, { autoplay: n, className: o.Qq, quest: s, questContent: c, sourceQuestContent: A }),
            (0, l.jsx)("div", {
                className: o.C,
                children: (0, l.jsx)(a.Text, { variant: "text-sm/normal", color: "text-default", children: p }),
            }),
        ],
    });
};
