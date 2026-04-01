n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(397927),
    r = n(714510),
    u = n(890687),
    o = n(895253),
    c = n(646764),
    d = n(102810);
let m = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: m,
            taskDetails: A,
            location: E,
            sourceQuestContent: p,
            gameProfileSource: f,
        } = e,
        S = (0, r.mU)({
            quest: s,
            taskDetails: A,
            location: E,
            questContent: m,
            sourceQuestContent: p,
            gameProfileSource: f,
        }),
        h = (0, u.SD)(s),
        x = (0, u.Oq)();
    return (0, l.jsxs)("div", {
        className: i()(d.iE, t),
        children: [
            (0, l.jsx)(o.A, { visible: h && x }),
            (0, l.jsx)(c.A, { autoplay: n, className: d.Qq, quest: s, questContent: m, sourceQuestContent: p }),
            (0, l.jsx)("div", {
                className: d.C,
                children: (0, l.jsx)(a.Text, { variant: "text-sm/normal", color: "text-default", children: S }),
            }),
        ],
    });
};
