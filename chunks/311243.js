"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(834730),
    o = n(838077),
    l = n(124366),
    u = n(895253),
    c = n(442734),
    d = n(646764),
    _ = n(417386);
let f = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: r,
            questContent: f,
            taskDetails: h,
            location: p,
            sourceQuestContent: E,
            gameProfileSource: m,
        } = e,
        g = (0, o.mU)({
            quest: r,
            taskDetails: h,
            location: p,
            questContent: f,
            sourceQuestContent: E,
            gameProfileSource: m,
        }),
        A = (0, l.SD)(r),
        I = (0, l.Oq)(),
        T = A && I;
    return (0, i.jsxs)("div", {
        className: s()(_.iE, t),
        children: [
            (0, i.jsx)(u.A, { visible: T }),
            (0, i.jsx)(d.A, { autoplay: n, className: _.Qq, quest: r, questContent: f, sourceQuestContent: E }),
            (0, i.jsx)("div", {
                className: _.C,
                children: (0, i.jsxs)("div", {
                    className: _.P2,
                    children: [
                        (0, i.jsx)(a.E, { variant: "text-sm/normal", color: "text-default", children: g }),
                        A && (0, i.jsx)(c.e, { questId: r.id, canUseQuestOrbMultiplier: I }),
                    ],
                }),
            }),
        ],
    });
};
