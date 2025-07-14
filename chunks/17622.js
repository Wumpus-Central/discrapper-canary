(n.d(t, { Z: () => u }), n(953529));
var r = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    l = n(793030),
    a = n(119331),
    s = n(336227),
    c = n(15537);
function u(e) {
    let { powerup: t } = e,
        n = (0, s.Z)(t);
    return (0, r.jsx)('div', {
        className: c.levelContainer,
        children: n.map((e) => {
            let { Icon: t, className: n } = (0, a.t)(e.perkIcon, !1);
            return (0, r.jsxs)(
                'div',
                {
                    className: c.perkContainer,
                    children: [
                        (0, r.jsx)(t, {
                            color: 'currentColor',
                            className: i()(c.perkIcon, n)
                        }),
                        (0, r.jsx)(l.xv, {
                            className: c.perkText,
                            color: 'text-default',
                            variant: 'text-sm/medium',
                            children: e.description
                        })
                    ]
                },
                'perk-'.concat(e.perkIcon)
            );
        })
    });
}
