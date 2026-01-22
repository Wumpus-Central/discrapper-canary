r.d(t, {
    A: () => u,
}),
    r(228524);
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    o = r(158954),
    s = r(309326),
    i = r(337322),
    c = r(260905);

function u(e) {
    let { powerup: t } = e,
        r = (0, i.A)(t);
    return (0, n.jsx)("div", {
        className: c.I1,
        children: r.map((e) => {
            let { Icon: t, className: r } = (0, s.a)(e.perkIcon, !1);
            return (0, n.jsxs)(
                "div",
                {
                    className: c.Ab,
                    children: [
                        (0, n.jsx)(t, {
                            color: "currentColor",
                            className: l()(c.kf, r),
                        }),
                        (0, n.jsx)(o.EYj, {
                            className: c.uL,
                            color: "text-default",
                            variant: "text-sm/medium",
                            children: e.description,
                        }),
                    ],
                },
                "perk-".concat(e.perkIcon),
            );
        }),
    });
}
