t.d(e, { A: () => p });
var a = t(627968);
t(64700);
var r = t(503698),
    n = t.n(r),
    i = t(834730),
    l = t(838077),
    c = t(890687),
    d = t(895253),
    o = t(442734),
    u = t(646764),
    x = t(417386);
let p = function (s) {
    let {
            className: e,
            autoplay: t,
            quest: r,
            questContent: p,
            taskDetails: h,
            location: m,
            sourceQuestContent: j,
            gameProfileSource: v,
        } = s,
        b = (0, l.mU)({
            quest: r,
            taskDetails: h,
            location: m,
            questContent: p,
            sourceQuestContent: j,
            gameProfileSource: v,
        }),
        C = (0, c.SD)(r),
        N = (0, c.Oq)(),
        k = C && N;
    return (0, a.jsxs)("div", {
        className: n()(x.iE, e),
        children: [
            (0, a.jsx)(d.A, { visible: k }),
            (0, a.jsx)(u.A, { autoplay: t, className: x.Qq, quest: r, questContent: p, sourceQuestContent: j }),
            (0, a.jsx)("div", {
                className: x.C,
                children: (0, a.jsxs)("div", {
                    className: x.P2,
                    children: [
                        (0, a.jsx)(i.E, { variant: "text-sm/normal", color: "text-default", children: b }),
                        C && (0, a.jsx)(o.e, { questId: r.id, canUseQuestOrbMultiplier: N }),
                    ],
                }),
            }),
        ],
    });
};
