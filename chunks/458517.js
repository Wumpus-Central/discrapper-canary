"use strict";
n.d(t, { A: () => _ });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(17928),
    r = n(342952),
    o = n(31300),
    c = n(834730),
    u = n(778712),
    d = n(429913),
    h = n(287809),
    m = n(58703),
    p = n(403362),
    f = n(985018),
    g = n(21274);
let _ = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: _, guildId: x, className: C } = e,
        A = (0, d.h)(i),
        E = (0, a.yK)([h.default], () => n.map((e) => h.default.getUser(e)).filter(p.Vq) ?? []),
        I = A?.name,
        v = null != t ? (0, m.Fe)(new Date(t)) : null,
        y = A?.getIconURL(32);
    if (null == t) return null;
    let b = null == _ || "" === _;
    return (0, l.jsxs)("div", {
        className: s()(C, g.kL),
        children: [
            (0, l.jsx)("div", {
                className: g.gS,
                "aria-hidden": "true",
                children:
                    null != y
                        ? (0, l.jsx)("img", { src: y, alt: "", className: g.NH })
                        : (0, l.jsx)(o.k, { size: "sm", color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: g.i0,
                children: [
                    (0, l.jsx)(c.E, {
                        className: g.NV,
                        variant: "text-md/normal",
                        color: b ? "text-subtle" : "text-default",
                        children: b ? f.intl.string(f.t.Cyxddp) : _,
                    }),
                    null != I &&
                        "" !== I &&
                        (0, l.jsx)(c.E, {
                            className: g.xD,
                            color: "text-subtle",
                            variant: "text-sm/medium",
                            children: I,
                        }),
                    (0, l.jsx)(c.E, { className: g.xD, color: "text-subtle", variant: "text-sm/normal", children: v }),
                ],
            }),
            (0, l.jsx)("div", {
                className: g.jW,
                children: (0, l.jsx)(r.A, {
                    maxUsers: 4,
                    users: E,
                    guildId: x,
                    size: u._3.SIZE_24,
                    "aria-label": f.intl.string(f.t.WTozwe),
                }),
            }),
        ],
    });
};
