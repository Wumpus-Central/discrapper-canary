n.d(t, { A: () => m });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(534514),
    c = n(834730),
    d = n(775602),
    u = n(68614);
function m() {
    let e = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = i.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, l.jsxs)("div", {
        className: s()(u.kL, { [u.cb]: e }),
        children: [
            (0, l.jsx)("div", { className: u.Pz }),
            (0, l.jsxs)("div", {
                className: u.FS,
                children: [
                    (0, l.jsx)("div", {
                        className: u.jC,
                        style: t,
                        children: (0, l.jsx)(o.D, {
                            className: u.R,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: u.jC,
                        style: n,
                        children: (0, l.jsx)(c.E, {
                            className: u.R,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: u.V1 }),
        ],
    });
}
