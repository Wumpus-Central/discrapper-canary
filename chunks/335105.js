n.d(t, { Z: () => d });
var s = n(54381);
n(473749);
var l = n(780384),
    i = n(741245),
    a = n(176332),
    r = n(210642),
    C = n(859218),
    c = n(958318);
let d = (e) => {
    let { type: t, theme: n } = e;
    return (0, s.jsx)("div", {
        className: c.gradientOuterBorder,
        children: (0, s.jsx)("div", {
            className: c.gradientInnerBorder,
            children: ((e, t) => {
                let n = (0, l.wj)(t) ? "white" : "black";
                switch (e) {
                    case i.Yk.PREMIUM_UPDATED:
                        return (0, s.jsx)(C.Z, {
                            color: n,
                            className: c.svgCopy,
                        });
                    case i.Yk.PREMIUM_ACTIVATED:
                        return (0, s.jsx)(a.Z, {
                            color: n,
                            className: c.svgCopy,
                        });
                    case i.Yk.PREMIUM_PAYMENT_STARTED:
                        return (0, s.jsx)(r.Z, {
                            color: n,
                            className: c.svgCopy,
                        });
                    default:
                        return null;
                }
            })(t, n),
        }),
    });
};
