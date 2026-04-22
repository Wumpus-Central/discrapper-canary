n.d(t, { A: () => a });
var r = n(627968),
    l = n(769015),
    i = n(199199);
function a(e) {
    let { application: t, useComma: n = !1 } = e;
    return (0, r.jsxs)("div", {
        className: i.z,
        children: [
            (0, r.jsx)(l.A, { className: i.I, game: t, size: l.M.XSMALL }),
            (0, r.jsx)("strong", { children: `${t.name}${n ? ", " : ""}` }),
        ],
    });
}
