n.d(t, { A: () => s });
var r = n(627968),
    i = n(769015),
    a = n(770182);
function s(e) {
    let { application: t, useComma: n = !1 } = e;
    return (0, r.jsxs)("div", {
        className: a.z,
        children: [
            (0, r.jsx)(i.A, {
                className: a.I,
                game: t,
                size: i.M.XSMALL,
            }),
            (0, r.jsx)("strong", { children: "".concat(t.name).concat(n ? ", " : "") }),
        ],
    });
}
