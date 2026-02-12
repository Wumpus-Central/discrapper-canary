"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(342952),
    l = n(397927),
    u = n(429913),
    c = n(287809),
    d = n(405269),
    _ = n(403362),
    f = n(985018),
    h = n(102373);
let p = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: p, guildId: g, className: E } = e,
        A = (0, u.h)(i),
        I = (0, s.yK)([c.default], () => n.map((e) => c.default.getUser(e)).filter(_.Vq) ?? []),
        T = A?.name,
        y = null != t ? (0, d.Fe)(new Date(t)) : null,
        S = A?.getIconURL(32);
    if (null == t) return null;
    let v = null == p || "" === p;
    return (0, r.jsxs)("div", {
        className: a()(E, h.kL),
        children: [
            (0, r.jsx)("div", {
                className: h.gS,
                "aria-hidden": "true",
                children:
                    null != S
                        ? (0, r.jsx)("img", { src: S, alt: "", className: h.NH })
                        : (0, r.jsx)(l.kN9, { size: "sm", color: "currentColor" }),
            }),
            (0, r.jsxs)("div", {
                className: h.i0,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: h.NV,
                        variant: "text-md/normal",
                        color: v ? "text-subtle" : "text-default",
                        children: v ? f.intl.string(f.t.Cyxddp) : p,
                    }),
                    null != T &&
                        "" !== T &&
                        (0, r.jsx)(l.Text, {
                            className: h.xD,
                            color: "text-subtle",
                            variant: "text-sm/medium",
                            children: T,
                        }),
                    (0, r.jsx)(l.Text, {
                        className: h.xD,
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: y,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: h.jW,
                children: (0, r.jsx)(o.A, {
                    maxUsers: 4,
                    users: I,
                    guildId: g,
                    size: l._3J.SIZE_24,
                    "aria-label": f.intl.string(f.t.WTozwe),
                }),
            }),
        ],
    });
};
