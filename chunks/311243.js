e.d(t, { A: () => m });
var a = e(627968);
e(64700);
var i = e(503698),
    r = e.n(i),
    l = e(834730),
    n = e(3738),
    c = e(347135),
    d = e(646917),
    o = e(576761),
    u = e(895253),
    x = e(442734),
    p = e(646764),
    h = e(417386);
let m = function (s) {
    let {
            className: t,
            autoplay: e,
            quest: i,
            questContent: m,
            taskDetails: j,
            location: v,
            sourceQuestContent: b,
            gameProfileSource: N,
        } = s,
        C = (0, n.mU)({ quest: i, taskDetails: j, location: v, sourceQuestContent: b, gameProfileSource: N }),
        g = (0, d.z)(),
        k = (0, c.SD)(i, g),
        y = k && g === o.MA.NITRO;
    return (0, a.jsxs)("div", {
        className: r()(h.iE, t),
        children: [
            (0, a.jsx)(u.A, { visible: y }),
            (0, a.jsx)(p.A, { autoplay: e, className: h.Qq, quest: i, questContent: m, sourceQuestContent: b }),
            (0, a.jsx)("div", {
                className: h.C,
                children: (0, a.jsxs)("div", {
                    className: h.P2,
                    children: [
                        (0, a.jsx)(l.E, { variant: "text-sm/normal", color: "text-default", children: C }),
                        k && (0, a.jsx)(x.e, { questId: i.id, orbMultiplierEligibility: g }),
                    ],
                }),
            }),
        ],
    });
};
