"use strict";
n.d(t, { c: () => p });
var i = n(627968),
    s = n(64700),
    r = n(939249),
    l = n(834730),
    a = n(921853),
    o = n(331322),
    c = n(17372),
    d = n(204173),
    u = n(985018),
    _ = n(750997);
let h = { [c.tY.MESSAGE]: u.t.fuqnBC, [c.tY.USER]: u.t.F4jrRW, [c.tY.GUILD]: u.t.gH3aMs },
    m = (e) => {
        let { title: t, menuType: n, onReopen: o } = e,
            c = s.useCallback(() => {
                (0, d.i)(n, o)();
            }, [n, o]);
        return (0, i.jsxs)(r.D, {
            className: _.b0,
            onClick: c,
            children: [
                (0, i.jsx)(l.E, { variant: "text-md/medium", children: t }),
                (0, i.jsx)(a.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    p = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, i.jsx)(o.B, {
            gap: 16,
            children: (0, i.jsx)("div", {
                className: _.kL,
                children: t.map((e) =>
                    e === c.tY.MEDIA_TAKEDOWN || null == h[e]
                        ? null
                        : (0, i.jsx)(m, { title: u.intl.string(h[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
