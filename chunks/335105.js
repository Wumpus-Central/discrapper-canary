n.d(t, { Z: () => u });
var s = n(255367);
n(73800);
var i = n(780384),
    l = n(741245),
    a = n(176332),
    r = n(210642),
    C = n(859218),
    c = n(704106);
let d = (e, t) => {
        let n = (0, i.wj)(t) ? "white" : "black";
        switch (e) {
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
    },
    u = (e) => {
        let { type: t, theme: n } = e;
        return (0, s.jsx)("div", {
            className: c.gradientOuterBorder,
            children: (0, s.jsx)("div", {
                className: c.gradientInnerBorder,
                children: d(t, n),
            }),
        });
    };
