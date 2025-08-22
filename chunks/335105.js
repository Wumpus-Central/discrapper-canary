n.d(e, { Z: () => d });
var s = n(951288);
n(647438);
var i = n(780384),
    l = n(741245),
    a = n(176332),
    r = n(210642),
    C = n(859218),
    c = n(298522);
let d = (t) => {
    let { type: e, theme: n } = t;
    return (0, s.jsx)("div", {
        className: c.gradientOuterBorder,
        children: (0, s.jsx)("div", {
            className: c.gradientInnerBorder,
            children: ((t, e) => {
                let n = (0, i.wj)(e) ? "white" : "black";
                switch (t) {
                    case l.Yk.PREMIUM_UPDATED:
                        return (0, s.jsx)(C.Z, {
                            color: n,
                            className: c.svgCopy,
                        });
                    case l.Yk.PREMIUM_ACTIVATED:
                        return (0, s.jsx)(a.Z, {
                            color: n,
                            className: c.svgCopy,
                        });
                    case l.Yk.PREMIUM_PAYMENT_STARTED:
                        return (0, s.jsx)(r.Z, {
                            color: n,
                            className: c.svgCopy,
                        });
                    default:
                        return null;
                }
            })(e, n),
        }),
    });
};
