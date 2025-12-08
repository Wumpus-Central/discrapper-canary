n.d(e, { Z: () => d });
var l = n(54381);
n(473749);
var s = n(780384),
    i = n(741245),
    a = n(176332),
    r = n(210642),
    C = n(859218),
    c = n(298522);
let d = (t) => {
    let { type: e, theme: n } = t;
    return (0, l.jsx)("div", {
        className: c.gradientOuterBorder,
        children: (0, l.jsx)("div", {
            className: c.gradientInnerBorder,
            children: ((t, e) => {
                let n = (0, s.wj)(e) ? "white" : "black";
                switch (t) {
                    case i.Yk.PREMIUM_UPDATED:
                        return (0, l.jsx)(C.Z, {
                            color: n,
                            className: c.svgCopy,
                        });
                    case i.Yk.PREMIUM_ACTIVATED:
                        return (0, l.jsx)(a.Z, {
                            color: n,
                            className: c.svgCopy,
                        });
                    case i.Yk.PREMIUM_PAYMENT_STARTED:
                        return (0, l.jsx)(r.Z, {
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
