s.d(t, { A: () => c });
var n = s(627968);
s(64700);
var l = s(503698),
    i = s.n(l),
    a = s(397927),
    r = s(714510),
    u = s(646764),
    o = s(96373);
let c = function (e) {
    let {
            className: t,
            autoplay: s,
            quest: l,
            questContent: c,
            taskDetails: d,
            location: m,
            sourceQuestContent: A,
            gameProfileSource: E,
        } = e,
        p = (0, r.mU)({
            quest: l,
            taskDetails: d,
            location: m,
            questContent: c,
            sourceQuestContent: A,
            gameProfileSource: E,
        });
    return (0, n.jsxs)("div", {
        className: i()(o.iE, t),
        children: [
            (0, n.jsx)(u.A, { autoplay: s, className: o.Qq, quest: l, questContent: c, sourceQuestContent: A }),
            (0, n.jsx)("div", {
                className: o.C,
                children: (0, n.jsx)(a.Text, { variant: "text-sm/normal", color: "text-default", children: p }),
            }),
        ],
    });
};
