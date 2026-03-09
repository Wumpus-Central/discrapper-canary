n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    i = n(397927),
    r = n(714510),
    o = n(646764),
    u = n(510823);
let c = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: c,
            taskDetails: d,
            location: m,
            sourceQuestContent: A,
            gameProfileSource: p,
        } = e,
        f = (0, r.mU)({
            quest: s,
            taskDetails: d,
            location: m,
            questContent: c,
            sourceQuestContent: A,
            gameProfileSource: p,
        });
    return (0, l.jsxs)("div", {
        className: a()(u.iE, t),
        children: [
            (0, l.jsx)(o.A, { autoplay: n, className: u.Qq, quest: s, questContent: c, sourceQuestContent: A }),
            (0, l.jsx)("div", {
                className: u.C,
                children: (0, l.jsx)(i.Text, { variant: "text-sm/normal", color: "text-default", children: f }),
            }),
        ],
    });
};
