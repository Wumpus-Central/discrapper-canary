n.d(t, { Z: () => u }), n(953529);
var r = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    i = n(793030),
    s = n(119331),
    l = n(336227),
    c = n(15537);
function u(e) {
    let { powerup: t } = e,
        n = (0, l.Z)(t);
    return (0, r.jsx)('div', {
        className: c.levelContainer,
        children: n.map((e) => {
            let { Icon: t, className: n } = (0, s.t)(e.perkIcon, !1);
            return (0, r.jsxs)(
                'div',
                {
                    className: c.perkContainer,
                    children: [
                        (0, r.jsx)(t, {
                            color: 'currentColor',
                            className: a()(c.perkIcon, n)
                        }),
                        (0, r.jsx)(i.xv, {
                            className: c.perkText,
                            color: 'text-normal',
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
