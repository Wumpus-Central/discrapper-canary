s.d(t, { A: () => c });
var l = s(627968);
s(64700);
var n = s(503698),
    a = s.n(n),
    i = s(397927),
    r = s(714510),
    o = s(646764),
    u = s(96373);
let c = function (e) {
    let {
            className: t,
            autoplay: s,
            quest: n,
            questContent: c,
            taskDetails: d,
            location: m,
            sourceQuestContent: A,
            gameProfileSource: p,
        } = e,
        x = (0, r.mU)({
            quest: n,
            taskDetails: d,
            location: m,
            questContent: c,
            sourceQuestContent: A,
            gameProfileSource: p,
        });
    return (0, l.jsxs)("div", {
        className: a()(u.iE, t),
        children: [
            (0, l.jsx)(o.A, { autoplay: s, className: u.Qq, quest: n, questContent: c, sourceQuestContent: A }),
            (0, l.jsx)("div", {
                className: u.C,
                children: (0, l.jsx)(i.Text, { variant: "text-sm/normal", color: "text-default", children: x }),
            }),
        ],
    });
};
