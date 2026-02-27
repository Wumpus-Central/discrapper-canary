l.d(t, { A: () => c });
var s = l(627968);
l(64700);
var n = l(503698),
    a = l.n(n),
    i = l(397927),
    r = l(714510),
    u = l(646764),
    o = l(510823);
let c = function (e) {
    let {
            className: t,
            autoplay: l,
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
    return (0, s.jsxs)("div", {
        className: a()(o.iE, t),
        children: [
            (0, s.jsx)(u.A, { autoplay: l, className: o.Qq, quest: n, questContent: c, sourceQuestContent: A }),
            (0, s.jsx)("div", {
                className: o.C,
                children: (0, s.jsx)(i.Text, { variant: "text-sm/normal", color: "text-default", children: x }),
            }),
        ],
    });
};
