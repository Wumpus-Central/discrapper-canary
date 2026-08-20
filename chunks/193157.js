a.d(e, { A: () => u });
var s = a(477900);
a(582128);
var i = a(503698),
    r = a.n(i);
if (588245 != a.j) var l = a(834730);
var n = a(309326),
    o = a(337322),
    d = a(870247);
function u(t) {
    let { powerup: e } = t,
        a = (0, o.A)(e);
    return (0, s.jsx)("div", {
        className: d.I1,
        children: a.map((t) => {
            let { Icon: e, className: a } = (0, n.a)(t.perkIcon, !1);
            return (0, s.jsxs)(
                "div",
                {
                    className: d.Ab,
                    children: [
                        (0, s.jsx)(e, { color: "currentColor", className: r()(d.kf, a) }),
                        (0, s.jsx)(l.E, {
                            className: d.uL,
                            color: "text-default",
                            variant: "text-sm/medium",
                            children: t.description,
                        }),
                    ],
                },
                `perk-${t.perkIcon}`,
            );
        }),
    });
}
