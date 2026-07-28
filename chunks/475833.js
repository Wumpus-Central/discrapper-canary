n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    s = n(834730),
    a = n(427262),
    d = n(685710);
let c = function (e) {
    let { user: t, fill: n, hideUserTag: i } = e,
        c = `\xa0(@${a.Ay.getUserTag(t, { decoration: "never" })})`;
    return (0, l.jsxs)(s.E, {
        className: r()([{ [d.GS]: n }]),
        variant: "text-md/medium",
        children: [
            (0, l.jsx)("span", { className: d.Xh, children: a.Ay.getName(t) }),
            i ? null : (0, l.jsx)("span", { className: d.D2, children: c }),
        ],
    });
};
