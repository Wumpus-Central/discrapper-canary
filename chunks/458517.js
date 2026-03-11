"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(342952),
    l = n(397927),
    u = n(429913),
    c = n(287809),
    d = n(405269),
    _ = n(403362),
    f = n(985018),
    p = n(51099);
let h = function (e) {
    let { createdAt: t, participantIds: n, applicationId: i, title: h, guildId: m, className: E } = e,
        g = (0, u.h)(i),
        A = (0, a.yK)([c.default], () => n.map((e) => c.default.getUser(e)).filter(_.Vq) ?? []),
        I = g?.name,
        T = null != t ? (0, d.Fe)(new Date(t)) : null,
        S = g?.getIconURL(32);
    if (null == t) return null;
    let y = null == h || "" === h;
    return (0, r.jsxs)("div", {
        className: s()(E, p.kL),
        children: [
            (0, r.jsx)("div", {
                className: p.gS,
                "aria-hidden": "true",
                children:
                    null != S
                        ? (0, r.jsx)("img", { src: S, alt: "", className: p.NH })
                        : (0, r.jsx)(l.kN9, { size: "sm", color: "currentColor" }),
            }),
            (0, r.jsxs)("div", {
                className: p.i0,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: p.NV,
                        variant: "text-md/normal",
                        color: y ? "text-subtle" : "text-default",
                        children: y ? f.intl.string(f.t.Cyxddp) : h,
                    }),
                    null != I &&
                        "" !== I &&
                        (0, r.jsx)(l.Text, {
                            className: p.xD,
                            color: "text-subtle",
                            variant: "text-sm/medium",
                            children: I,
                        }),
                    (0, r.jsx)(l.Text, {
                        className: p.xD,
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: T,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: p.jW,
                children: (0, r.jsx)(o.A, {
                    maxUsers: 4,
                    users: A,
                    guildId: m,
                    size: l._3J.SIZE_24,
                    "aria-label": f.intl.string(f.t.WTozwe),
                }),
            }),
        ],
    });
};
