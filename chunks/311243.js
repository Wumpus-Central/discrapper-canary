n.d(t, { A: () => f });
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(834730),
    r = n(629455),
    o = n(31587),
    u = n(646917),
    c = n(576761),
    d = n(895253),
    h = n(442734),
    m = n(646764),
    p = n(417386);
let f = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: f,
            taskDetails: g,
            location: x,
            sourceQuestContent: A,
            gameProfileSource: C,
        } = e,
        v = (0, r.mU)({
            quest: s,
            taskDetails: g,
            location: x,
            questContent: f,
            sourceQuestContent: A,
            gameProfileSource: C,
        }),
        E = (0, u.z)(),
        T = (0, o.SD)(s, E),
        j = T && E === c.MA.NITRO;
    return (0, l.jsxs)("div", {
        className: i()(p.iE, t),
        children: [
            (0, l.jsx)(d.A, { visible: j }),
            (0, l.jsx)(m.A, { autoplay: n, className: p.Qq, quest: s, questContent: f, sourceQuestContent: A }),
            (0, l.jsx)("div", {
                className: p.C,
                children: (0, l.jsxs)("div", {
                    className: p.P2,
                    children: [
                        (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-default", children: v }),
                        T && (0, l.jsx)(h.e, { questId: s.id, orbMultiplierEligibility: E }),
                    ],
                }),
            }),
        ],
    });
};
