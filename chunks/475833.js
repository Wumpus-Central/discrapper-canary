n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(427262),
    o = n(717270);
let d = (e) => {
    let { user: t, fill: n, hideUserTag: s } = e,
        d = `\xa0(@${a.Ay.getUserTag(t, { decoration: "never" })})`;
    return (0, i.jsxs)(r.Text, {
        className: l()([{ [o.GS]: n }]),
        variant: "text-md/medium",
        children: [
            (0, i.jsx)("span", { className: o.Xh, children: a.Ay.getName(t) }),
            s ? null : (0, i.jsx)("span", { className: o.D2, children: d }),
        ],
    });
};
