r.d(t, { A: () => d });
var a = r(627968);
r(64700);
var s = r(503698),
    n = r.n(s),
    o = r(834730),
    i = r(309326),
    l = r(337322),
    c = r(482460);
function d(e) {
    let { powerup: t } = e,
        r = (0, l.A)(t);
    return (0, a.jsx)("div", {
        className: c.I1,
        children: r.map((e) => {
            let { Icon: t, className: r } = (0, i.a)(e.perkIcon, !1);
            return (0, a.jsxs)(
                "div",
                {
                    className: c.Ab,
                    children: [
                        (0, a.jsx)(t, { color: "currentColor", className: n()(c.kf, r) }),
                        (0, a.jsx)(o.E, {
                            className: c.uL,
                            color: "text-default",
                            variant: "text-sm/medium",
                            children: e.description,
                        }),
                    ],
                },
                `perk-${e.perkIcon}`,
            );
        }),
    });
}
