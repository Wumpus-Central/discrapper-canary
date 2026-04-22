"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(342952),
    o = n(31300),
    c = n(834730),
    u = n(778712),
    d = n(429913),
    h = n(287809),
    m = n(405269),
    p = n(403362),
    f = n(985018),
    g = n(910618);
let _ = function (e) {
    let { createdAt: t, participantIds: n, applicationId: l, title: _, guildId: x, className: A } = e,
        C = (0, d.h)(l),
        E = (0, r.yK)([h.default], () => n.map((e) => h.default.getUser(e)).filter(p.Vq) ?? []),
        I = C?.name,
        v = null != t ? (0, m.Fe)(new Date(t)) : null,
        y = C?.getIconURL(32);
    if (null == t) return null;
    let S = null == _ || "" === _;
    return (0, i.jsxs)("div", {
        className: s()(A, g.kL),
        children: [
            (0, i.jsx)("div", {
                className: g.gS,
                "aria-hidden": "true",
                children:
                    null != y
                        ? (0, i.jsx)("img", { src: y, alt: "", className: g.NH })
                        : (0, i.jsx)(o.k, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsxs)("div", {
                className: g.i0,
                children: [
                    (0, i.jsx)(c.E, {
                        className: g.NV,
                        variant: "text-md/normal",
                        color: S ? "text-subtle" : "text-default",
                        children: S ? f.intl.string(f.t.Cyxddp) : _,
                    }),
                    null != I &&
                        "" !== I &&
                        (0, i.jsx)(c.E, {
                            className: g.xD,
                            color: "text-subtle",
                            variant: "text-sm/medium",
                            children: I,
                        }),
                    (0, i.jsx)(c.E, { className: g.xD, color: "text-subtle", variant: "text-sm/normal", children: v }),
                ],
            }),
            (0, i.jsx)("div", {
                className: g.jW,
                children: (0, i.jsx)(a.A, {
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
