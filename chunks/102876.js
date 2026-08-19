i.d(t, { A: () => a });
var r = i(477900),
    s = i(769015),
    n = i(227196);
function a(e) {
    let { application: t, useComma: i = !1 } = e;
    return (0, r.jsxs)("div", {
        className: n.z,
        children: [
            (0, r.jsx)(s.A, { className: n.I, game: t, size: s.M.XSMALL }),
            (0, r.jsx)("strong", { children: `${t.name}${i ? ", " : ""}` }),
        ],
    });
}
