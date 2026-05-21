"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(834730),
    o = n(838077),
    l = n(31587),
    u = n(646917),
    c = n(576761),
    d = n(895253),
    _ = n(442734),
    f = n(646764),
    h = n(417386);
let p = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: r,
            questContent: p,
            taskDetails: E,
            location: m,
            sourceQuestContent: g,
            gameProfileSource: A,
        } = e,
        I = (0, o.mU)({
            quest: r,
            taskDetails: E,
            location: m,
            questContent: p,
            sourceQuestContent: g,
            gameProfileSource: A,
        }),
        T = (0, u.z)(),
        S = (0, l.SD)(r, T),
        N = S && T === c.MA.NITRO;
    return (0, i.jsxs)("div", {
        className: s()(h.iE, t),
        children: [
            (0, i.jsx)(d.A, { visible: N }),
            (0, i.jsx)(f.A, { autoplay: n, className: h.Qq, quest: r, questContent: p, sourceQuestContent: g }),
            (0, i.jsx)("div", {
                className: h.C,
                children: (0, i.jsxs)("div", {
                    className: h.P2,
                    children: [
                        (0, i.jsx)(a.E, { variant: "text-sm/normal", color: "text-default", children: I }),
                        S && (0, i.jsx)(_.e, { questId: r.id, orbMultiplierEligibility: T }),
                    ],
                }),
            }),
        ],
    });
};
