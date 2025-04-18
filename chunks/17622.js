n.d(t, { Z: () => u }), n(953529);
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    s = n(793030),
    c = n(119331),
    i = n(336227),
    l = n(88921);
function u(e) {
    let { powerup: t } = e,
        n = (0, i.Z)(t);
    return (0, r.jsx)('div', {
        className: l.levelContainer,
        children: n.map((e) => {
            let { Icon: t, className: n } = (0, c.t)(e.perkIcon, !1);
            return (0, r.jsxs)(
                'div',
                {
                    className: l.perkContainer,
                    children: [
                        (0, r.jsx)(t, {
                            color: 'currentColor',
                            className: a()(l.perkIcon, n)
                        }),
                        (0, r.jsx)(s.xv, {
                            className: l.perkText,
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
