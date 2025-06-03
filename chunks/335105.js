n.d(e, { Z: () => c });
var i = n(255367);
n(73800);
var l = n(780384),
    s = n(741245),
    C = n(176332),
    r = n(210642),
    a = n(859218),
    L = n(297100);
let H = (t, e) => {
        let n = (0, l.wj)(e) ? 'white' : 'black';
        switch (t) {
            case s.Yk.PREMIUM_UPDATED:
                return (0, i.jsx)(a.Z, {
                    color: n,
                    className: L.svgCopy
                });
            case s.Yk.PREMIUM_ACTIVATED:
                return (0, i.jsx)(C.Z, {
                    color: n,
                    className: L.svgCopy
                });
            case s.Yk.PREMIUM_PAYMENT_STARTED:
                return (0, i.jsx)(r.Z, {
                    color: n,
                    className: L.svgCopy
                });
            default:
                return null;
        }
    },
    c = (t) => {
        let { type: e, theme: n } = t;
        return (0, i.jsx)('div', {
            className: L.gradientOuterBorder,
            children: (0, i.jsx)('div', {
                className: L.gradientInnerBorder,
                children: H(e, n)
            })
        });
    };
