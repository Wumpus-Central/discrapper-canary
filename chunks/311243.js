n.d(t, { A: () => A });
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(397927),
    r = n(714510),
    u = n(890687),
    o = n(895253),
    c = n(442734),
    d = n(646764),
    m = n(102810);
let A = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: A,
            taskDetails: E,
            location: p,
            sourceQuestContent: f,
            gameProfileSource: S,
        } = e,
        h = (0, r.mU)({
            quest: s,
            taskDetails: E,
            location: p,
            questContent: A,
            sourceQuestContent: f,
            gameProfileSource: S,
        }),
        x = (0, u.SD)(s),
        T = (0, u.Oq)(),
        _ = x && T;
    return (0, l.jsxs)("div", {
        className: i()(m.iE, t),
        children: [
            (0, l.jsx)(o.A, { visible: _ }),
            (0, l.jsx)(d.A, { autoplay: n, className: m.Qq, quest: s, questContent: A, sourceQuestContent: f }),
            (0, l.jsx)("div", {
                className: m.C,
                children: (0, l.jsxs)("div", {
                    className: m.P2,
                    children: [
                        (0, l.jsx)(a.Text, { variant: "text-sm/normal", color: "text-default", children: h }),
                        x && (0, l.jsx)(c.e, { questId: s.id, canUseQuestOrbMultiplier: T }),
                    ],
                }),
            }),
        ],
    });
};
