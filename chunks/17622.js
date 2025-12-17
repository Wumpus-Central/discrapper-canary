o.d(t, { Z: () => d }), o(953529);
var n = o(54381);
o(473749);
var a = o(120356),
    r = o.n(a),
    c = o(793030),
    s = o(119331),
    i = o(336227),
    l = o(287416);
function d(e) {
    let { powerup: t } = e,
        o = (0, i.Z)(t);
    return (0, n.jsx)("div", {
        className: l.levelContainer,
        children: o.map((e) => {
            let { Icon: t, className: o } = (0, s.t)(e.perkIcon, !1);
            return (0, n.jsxs)(
                "div",
                {
                    className: l.perkContainer,
                    children: [
                        (0, n.jsx)(t, {
                            color: "currentColor",
                            className: r()(l.perkIcon, o),
                        }),
                        (0, n.jsx)(c.xvT, {
                            className: l.perkText,
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
