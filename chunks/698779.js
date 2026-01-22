n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(775602),
    u = n(22423);
function d() {
    let e = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = i.useMemo(
            () => ({
                styleLarge: { width: "".concat(10 + 50 * Math.random(), "%") },
                styleSmall: { width: "".concat(30 + 60 * Math.random(), "%") },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: s()(u.kL, { [u.cb]: e }),
        children: [
            (0, r.jsx)("div", { className: u.Pz }),
            (0, r.jsxs)("div", {
                className: u.FS,
                children: [
                    (0, r.jsx)("div", {
                        className: u.jC,
                        style: t,
                        children: (0, r.jsx)(l.Heading, {
                            className: u.R,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.jC,
                        style: n,
                        children: (0, r.jsx)(l.Text, {
                            className: u.R,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: u.V1 }),
        ],
    });
}
