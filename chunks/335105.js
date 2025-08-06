n.d(e, { Z: () => u });
var i = n(255367);
n(73800);
var s = n(780384),
    l = n(741245),
    a = n(176332),
    r = n(210642),
    C = n(859218),
    c = n(297100);
let d = (t, e) => {
        let n = (0, s.wj)(e) ? "white" : "black";
        switch (t) {
            case l.Yk.PREMIUM_UPDATED:
                return (0, i.jsx)(C.Z, {
                    color: n,
                    className: c.svgCopy,
                });
            case l.Yk.PREMIUM_ACTIVATED:
                return (0, i.jsx)(a.Z, {
                    color: n,
                    className: c.svgCopy,
                });
            case l.Yk.PREMIUM_PAYMENT_STARTED:
                return (0, i.jsx)(r.Z, {
                    color: n,
                    className: c.svgCopy,
                });
            default:
                return null;
        }
    },
    u = (t) => {
        let { type: e, theme: n } = t;
        return (0, i.jsx)("div", {
            className: c.gradientOuterBorder,
            children: (0, i.jsx)("div", {
                className: c.gradientInnerBorder,
                children: d(e, n),
            }),
        });
    };
