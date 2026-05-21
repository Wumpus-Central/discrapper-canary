n.d(t, { A: () => f });
var s = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(834730),
    r = n(838077),
    o = n(31587),
    c = n(646917),
    u = n(576761),
    d = n(895253),
    h = n(442734),
    m = n(646764),
    p = n(417386);
let f = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: l,
            questContent: f,
            taskDetails: g,
            location: A,
            sourceQuestContent: x,
            gameProfileSource: C,
        } = e,
        E = (0, r.mU)({
            quest: l,
            taskDetails: g,
            location: A,
            questContent: f,
            sourceQuestContent: x,
            gameProfileSource: C,
        }),
        v = (0, c.z)(),
        T = (0, o.SD)(l, v),
        j = T && v === u.MA.NITRO;
    return (0, s.jsxs)("div", {
        className: i()(p.iE, t),
        children: [
            (0, s.jsx)(d.A, { visible: j }),
            (0, s.jsx)(m.A, { autoplay: n, className: p.Qq, quest: l, questContent: f, sourceQuestContent: x }),
            (0, s.jsx)("div", {
                className: p.C,
                children: (0, s.jsxs)("div", {
                    className: p.P2,
                    children: [
                        (0, s.jsx)(a.E, { variant: "text-sm/normal", color: "text-default", children: E }),
                        T && (0, s.jsx)(h.e, { questId: l.id, orbMultiplierEligibility: v }),
                    ],
                }),
            }),
        ],
    });
};
