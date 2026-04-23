"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(342952),
    l = n(31300),
    d = n(834730),
    _ = n(778712),
    u = n(429913),
    c = n(287809),
    E = n(58703),
    h = n(403362),
    m = n(985018),
    f = n(21274);
let g = function (e) {
    let { createdAt: t, participantIds: n, applicationId: r, title: g, guildId: p, className: A } = e,
        I = (0, u.h)(r),
        T = (0, a.yK)([c.default], () => n.map((e) => c.default.getUser(e)).filter(h.Vq) ?? []),
        S = I?.name,
        N = null != t ? (0, E.Fe)(new Date(t)) : null,
        C = I?.getIconURL(32);
    if (null == t) return null;
    let R = null == g || "" === g;
    return (0, i.jsxs)("div", {
        className: s()(A, f.kL),
        children: [
            (0, i.jsx)("div", {
                className: f.gS,
                "aria-hidden": "true",
                children:
                    null != C
                        ? (0, i.jsx)("img", { src: C, alt: "", className: f.NH })
                        : (0, i.jsx)(l.k, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsxs)("div", {
                className: f.i0,
                children: [
                    (0, i.jsx)(d.E, {
                        className: f.NV,
                        variant: "text-md/normal",
                        color: R ? "text-subtle" : "text-default",
                        children: R ? m.intl.string(m.t.Cyxddp) : g,
                    }),
                    null != S &&
                        "" !== S &&
                        (0, i.jsx)(d.E, {
                            className: f.xD,
                            color: "text-subtle",
                            variant: "text-sm/medium",
                            children: S,
                        }),
                    (0, i.jsx)(d.E, { className: f.xD, color: "text-subtle", variant: "text-sm/normal", children: N }),
                ],
            }),
            (0, i.jsx)("div", {
                className: f.jW,
                children: (0, i.jsx)(o.A, {
                    maxUsers: 4,
                    users: T,
                    guildId: p,
                    size: _._3.SIZE_24,
                    "aria-label": m.intl.string(m.t.WTozwe),
                }),
            }),
        ],
    });
};
