n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(427262),
    o = n(585665);
let c = (e) => {
    let { user: t, fill: n, hideUserTag: s } = e,
        c = `\xa0(@${l.Ay.getUserTag(t, { decoration: "never" })})`;
    return (0, i.jsxs)(a.Text, {
        className: r()([{ [o.GS]: n }]),
        variant: "text-md/medium",
        children: [
            (0, i.jsx)("span", { className: o.Xh, children: l.Ay.getName(t) }),
            s ? null : (0, i.jsx)("span", { className: o.D2, children: c }),
        ],
    });
};
