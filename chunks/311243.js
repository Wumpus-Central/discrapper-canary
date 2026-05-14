"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(834730),
    o = n(838077),
    l = n(31587),
    u = n(646917),
    c = n(895253),
    d = n(442734),
    _ = n(646764),
    f = n(417386);
let h = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: r,
            questContent: h,
            taskDetails: p,
            location: E,
            sourceQuestContent: m,
            gameProfileSource: g,
        } = e,
        A = (0, o.mU)({
            quest: r,
            taskDetails: p,
            location: E,
            questContent: h,
            sourceQuestContent: m,
            gameProfileSource: g,
        }),
        I = (0, u.z)(),
        T = (0, l.SD)(r, I),
        S = T && I === u.M.NITRO;
    return (0, i.jsxs)("div", {
        className: s()(f.iE, t),
        children: [
            (0, i.jsx)(c.A, { visible: S }),
            (0, i.jsx)(_.A, { autoplay: n, className: f.Qq, quest: r, questContent: h, sourceQuestContent: m }),
            (0, i.jsx)("div", {
                className: f.C,
                children: (0, i.jsxs)("div", {
                    className: f.P2,
                    children: [
                        (0, i.jsx)(a.E, { variant: "text-sm/normal", color: "text-default", children: A }),
                        T && (0, i.jsx)(d.e, { questId: r.id, orbMultiplierEligibility: I }),
                    ],
                }),
            }),
        ],
    });
};
