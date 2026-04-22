n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(834730),
    i = n(714510),
    o = n(890687),
    u = n(895253),
    d = n(442734),
    c = n(646764),
    p = n(417386);
let m = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: m,
            taskDetails: f,
            location: A,
            sourceQuestContent: v,
            gameProfileSource: h,
        } = e,
        E = (0, i.mU)({
            quest: s,
            taskDetails: f,
            location: A,
            questContent: m,
            sourceQuestContent: v,
            gameProfileSource: h,
        }),
        g = (0, o.SD)(s),
        x = (0, o.Oq)(),
        S = g && x;
    return (0, l.jsxs)("div", {
        className: a()(p.iE, t),
        children: [
            (0, l.jsx)(u.A, { visible: S }),
            (0, l.jsx)(c.A, { autoplay: n, className: p.Qq, quest: s, questContent: m, sourceQuestContent: v }),
            (0, l.jsx)("div", {
                className: p.C,
                children: (0, l.jsxs)("div", {
                    className: p.P2,
                    children: [
                        (0, l.jsx)(r.E, { variant: "text-sm/normal", color: "text-default", children: E }),
                        g && (0, l.jsx)(d.e, { questId: s.id, canUseQuestOrbMultiplier: x }),
                    ],
                }),
            }),
        ],
    });
};
