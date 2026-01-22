n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(427262),
    l = n(585665);
let c = (e) => {
    let { user: t, fill: n, hideUserTag: i } = e,
        c = "\xA0(@".concat(o.Ay.getUserTag(t, { decoration: "never" }), ")");
    return (0, r.jsxs)(s.Text, {
        className: a()([{ [l.GS]: n }]),
        variant: "text-md/medium",
        children: [
            (0, r.jsx)("span", {
                className: l.Xh,
                children: o.Ay.getName(t),
            }),
            i
                ? null
                : (0, r.jsx)("span", {
                      className: l.D2,
                      children: c,
                  }),
        ],
    });
};
