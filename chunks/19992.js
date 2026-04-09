"use strict";
n.d(t, { c: () => h });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(17372),
    a = n(204173),
    o = n(985018),
    c = n(86661);
let d = { [l.tY.MESSAGE]: o.t.fuqnBC, [l.tY.USER]: o.t.F4jrRW, [l.tY.GUILD]: o.t.gH3aMs },
    u = (e) => {
        let { title: t, menuType: n, onReopen: l } = e,
            o = s.useCallback(() => {
                (0, a.i)(n, l)();
            }, [n, l]);
        return (0, i.jsxs)(r.DUT, {
            className: c.b0,
            onClick: o,
            children: [
                (0, i.jsx)(r.Text, { variant: "text-md/medium", children: t }),
                (0, i.jsx)(r.n2b, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    h = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, i.jsx)(r.BJc, {
            gap: 16,
            children: (0, i.jsx)("div", {
                className: c.kL,
                children: t.map((e) =>
                    e === l.tY.MEDIA_TAKEDOWN || null == d[e]
                        ? null
                        : (0, i.jsx)(u, { title: o.intl.string(d[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
