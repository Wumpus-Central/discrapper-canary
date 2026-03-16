"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(775602),
    c = n(22423);
function d() {
    let e = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = i.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: a()(c.kL, { [c.cb]: e }),
        children: [
            (0, r.jsx)("div", { className: c.Pz }),
            (0, r.jsxs)("div", {
                className: c.FS,
                children: [
                    (0, r.jsx)("div", {
                        className: c.jC,
                        style: t,
                        children: (0, r.jsx)(l.Heading, {
                            className: c.R,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: c.jC,
                        style: n,
                        children: (0, r.jsx)(l.Text, {
                            className: c.R,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: c.V1 }),
        ],
    });
}
