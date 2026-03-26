n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(427262),
    o = n(66374);
let d = (e) => {
    let { user: t, fill: n, hideUserTag: s } = e,
        d = `\xa0(@${r.Ay.getUserTag(t, { decoration: "never" })})`;
    return (0, i.jsxs)(a.Text, {
        className: l()([{ [o.GS]: n }]),
        variant: "text-md/medium",
        children: [
            (0, i.jsx)("span", { className: o.Xh, children: r.Ay.getName(t) }),
            s ? null : (0, i.jsx)("span", { className: o.D2, children: d }),
        ],
    });
};
