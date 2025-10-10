n.d(t, { Z: () => u }), n(953529);
var r = n(951288);
n(647438);
var o = n(120356),
    a = n.n(o),
    i = n(793030),
    l = n(119331),
    c = n(336227),
    s = n(467541);
function u(e) {
    let { powerup: t } = e,
        n = (0, c.Z)(t);
    return (0, r.jsx)("div", {
        className: s.levelContainer,
        children: n.map((e) => {
            let { Icon: t, className: n } = (0, l.t)(e.perkIcon, !1);
            return (0, r.jsxs)(
                "div",
                {
                    className: s.perkContainer,
                    children: [
                        (0, r.jsx)(t, {
                            color: "currentColor",
                            className: a()(s.perkIcon, n),
                        }),
                        (0, r.jsx)(i.xvT, {
                            className: s.perkText,
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
