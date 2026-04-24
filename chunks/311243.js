n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var a = n(503698),
    o = n.n(a),
    i = n(834730),
    s = n(838077),
    c = n(890687),
    l = n(895253),
    d = n(442734),
    p = n(646764),
    u = n(417386);
let f = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: a,
            questContent: f,
            taskDetails: _,
            location: h,
            sourceQuestContent: m,
            gameProfileSource: b,
        } = e,
        v = (0, s.mU)({
            quest: a,
            taskDetails: _,
            location: h,
            questContent: f,
            sourceQuestContent: m,
            gameProfileSource: b,
        }),
        x = (0, c.SD)(a),
        g = (0, c.Oq)(),
        y = x && g;
    return (0, r.jsxs)("div", {
        className: o()(u.iE, t),
        children: [
            (0, r.jsx)(l.A, { visible: y }),
            (0, r.jsx)(p.A, { autoplay: n, className: u.Qq, quest: a, questContent: f, sourceQuestContent: m }),
            (0, r.jsx)("div", {
                className: u.C,
                children: (0, r.jsxs)("div", {
                    className: u.P2,
                    children: [
                        (0, r.jsx)(i.E, { variant: "text-sm/normal", color: "text-default", children: v }),
                        x && (0, r.jsx)(d.e, { questId: a.id, canUseQuestOrbMultiplier: g }),
                    ],
                }),
            }),
        ],
    });
};
