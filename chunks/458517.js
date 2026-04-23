"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(342952),
    l = n(31300),
    u = n(834730),
    c = n(778712),
    d = n(429913),
    _ = n(287809),
    f = n(405269),
    p = n(403362),
    h = n(985018),
    E = n(21274);
let m = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: m, guildId: g, className: A } = e,
        I = (0, d.h)(i),
        T = (0, a.yK)([_.default], () => n.map((e) => _.default.getUser(e)).filter(p.Vq) ?? []),
        S = I?.name,
        y = null != t ? (0, f.Fe)(new Date(t)) : null,
        N = I?.getIconURL(32);
    if (null == t) return null;
    let v = null == m || "" === m;
    return (0, r.jsxs)("div", {
        className: s()(A, E.kL),
        children: [
            (0, r.jsx)("div", {
                className: E.gS,
                "aria-hidden": "true",
                children:
                    null != N
                        ? (0, r.jsx)("img", { src: N, alt: "", className: E.NH })
                        : (0, r.jsx)(l.k, { size: "sm", color: "currentColor" }),
            }),
            (0, r.jsxs)("div", {
                className: E.i0,
                children: [
                    (0, r.jsx)(u.E, {
                        className: E.NV,
                        variant: "text-md/normal",
                        color: v ? "text-subtle" : "text-default",
                        children: v ? h.intl.string(h.t.Cyxddp) : m,
                    }),
                    null != S &&
                        "" !== S &&
                        (0, r.jsx)(u.E, {
                            className: E.xD,
                            color: "text-subtle",
                            variant: "text-sm/medium",
                            children: S,
                        }),
                    (0, r.jsx)(u.E, { className: E.xD, color: "text-subtle", variant: "text-sm/normal", children: y }),
                ],
            }),
            (0, r.jsx)("div", {
                className: E.jW,
                children: (0, r.jsx)(o.A, {
                    maxUsers: 4,
                    users: T,
                    guildId: g,
                    size: c._3.SIZE_24,
                    "aria-label": h.intl.string(h.t.WTozwe),
                }),
            }),
        ],
    });
};
