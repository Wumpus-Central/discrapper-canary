l.d(t, { A: () => c });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(834730),
    r = l(427262),
    d = l(717270);
let c = (e) => {
    let { user: t, fill: l, hideUserTag: i } = e,
        c = `\xa0(@${r.Ay.getUserTag(t, { decoration: "never" })})`;
    return (0, n.jsxs)(a.E, {
        className: s()([{ [d.GS]: l }]),
        variant: "text-md/medium",
        children: [
            (0, n.jsx)("span", { className: d.Xh, children: r.Ay.getName(t) }),
            i ? null : (0, n.jsx)("span", { className: d.D2, children: c }),
        ],
    });
};
