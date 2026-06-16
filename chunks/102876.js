a.d(e, { A: () => r });
var c = a(627968),
    i = a(137177),
    n = a(199199);
function r(s) {
    let { application: e, useComma: a = !1 } = s;
    return (0, c.jsxs)("div", {
        className: n.z,
        children: [
            (0, c.jsx)(i.A, { className: n.I, game: e, size: i.M.XSMALL }),
            (0, c.jsx)("strong", { children: `${e.name}${a ? ", " : ""}` }),
        ],
    });
}
