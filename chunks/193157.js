a.d(t, { A: () => d });
var n = a(627968);
a(64700);
var r = a(503698),
    s = a.n(r),
    i = a(158954),
    l = a(309326),
    o = a(337322),
    c = a(260905);
function d(e) {
    let { powerup: t } = e,
        a = (0, o.A)(t);
    return (0, n.jsx)("div", {
        className: c.I1,
        children: a.map((e) => {
            let { Icon: t, className: a } = (0, l.a)(e.perkIcon, !1);
            return (0, n.jsxs)(
                "div",
                {
                    className: c.Ab,
                    children: [
                        (0, n.jsx)(t, { color: "currentColor", className: s()(c.kf, a) }),
                        (0, n.jsx)(i.EYj, {
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
