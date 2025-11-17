n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(51144),
    l = n(606837);
let c = (e) => {
    let { user: t, fill: n, hideUserTag: i } = e,
        c = "\xA0(@".concat(s.ZP.getUserTag(t, { decoration: "never" }), ")");
    return (0, r.jsxs)(o.Text, {
        className: a()([{ [l.fill]: n }]),
        variant: "text-md/medium",
        children: [
            (0, r.jsx)("span", {
                className: l.username,
                children: s.ZP.getName(t),
            }),
            i
                ? null
                : (0, r.jsx)("span", {
                      className: l.discriminator,
                      children: c,
                  }),
        ],
    });
};
