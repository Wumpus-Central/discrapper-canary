s.d(t, {
    A: () => d,
});
var l = s(627968);
s(64700);
var n = s(582754),
    i = s(659746),
    a = s(896361),
    r = s(513497),
    C = s(40809),
    c = s(693346);
let d = (e) => {
    let { type: t, theme: s } = e;
    return (0, l.jsx)("div", {
        className: c.Eq,
        children: (0, l.jsx)("div", {
            className: c.v9,
            children: ((e, t) => {
                let s = (0, n.Mw)(t) ? "white" : "black";
                switch (e) {
                    case i.Or.PREMIUM_UPDATED:
                        return (0, l.jsx)(C.A, {
                            color: s,
                            className: c.gd,
                        });
                    case i.Or.PREMIUM_ACTIVATED:
                        return (0, l.jsx)(a.A, {
                            color: s,
                            className: c.gd,
                        });
                    case i.Or.PREMIUM_PAYMENT_STARTED:
                        return (0, l.jsx)(r.A, {
                            color: s,
                            className: c.gd,
                        });
                    default:
                        return null;
                }
            })(t, s),
        }),
    });
};
