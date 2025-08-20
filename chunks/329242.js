n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(51144),
    l = n(606837);
let c = (e) => {
    let { user: t, fill: n } = e,
        i = "\xA0(@".concat(s.ZP.getUserTag(t, { decoration: "never" }), ")");
    return (0, r.jsxs)(o.Text, {
        className: a()([{ [l.fill]: n }]),
        variant: "text-md/medium",
        children: [
            (0, r.jsx)("span", {
                className: l.username,
                children: s.ZP.getName(t),
            }),
            (0, r.jsx)("span", {
                className: l.discriminator,
                children: i,
            }),
        ],
    });
};
