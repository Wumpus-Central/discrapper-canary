n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(834730),
    r = n(838077),
    o = n(31587),
    c = n(895253),
    u = n(442734),
    d = n(646764),
    h = n(417386);
let m = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: m,
            taskDetails: p,
            location: f,
            sourceQuestContent: g,
            gameProfileSource: A,
        } = e,
        x = (0, r.mU)({
            quest: s,
            taskDetails: p,
            location: f,
            questContent: m,
            sourceQuestContent: g,
            gameProfileSource: A,
        }),
        C = (0, o.SD)(s),
        E = (0, o.Oq)(),
        v = C && E;
    return (0, l.jsxs)("div", {
        className: i()(h.iE, t),
        children: [
            (0, l.jsx)(c.A, { visible: v }),
            (0, l.jsx)(d.A, { autoplay: n, className: h.Qq, quest: s, questContent: m, sourceQuestContent: g }),
            (0, l.jsx)("div", {
                className: h.C,
                children: (0, l.jsxs)("div", {
                    className: h.P2,
                    children: [
                        (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-default", children: x }),
                        C && (0, l.jsx)(u.e, { questId: s.id, canUseQuestOrbMultiplier: E }),
                    ],
                }),
            }),
        ],
    });
};
