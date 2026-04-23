s.d(t, { A: () => d });
var n = s(627968);
s(64700);
var l = s(462887),
    i = s(659746),
    a = s(896361),
    r = s(513497),
    C = s(40809),
    c = s(776043);
let d = (e) => {
    let { type: t, theme: s } = e;
    return (0, n.jsx)("div", {
        className: c.Eq,
        children: (0, n.jsx)("div", {
            className: c.v9,
            children: ((e, t) => {
                let s = (0, l.M)(t) ? "white" : "black";
                switch (e) {
                    case i.Or.PREMIUM_UPDATED:
                        return (0, n.jsx)(C.A, { color: s, className: c.gd });
                    case i.Or.PREMIUM_ACTIVATED:
                        return (0, n.jsx)(a.A, { color: s, className: c.gd });
                    case i.Or.PREMIUM_PAYMENT_STARTED:
                        return (0, n.jsx)(r.A, { color: s, className: c.gd });
                    default:
                        return null;
                }
            })(t, s),
        }),
    });
};
