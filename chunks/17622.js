t.d(o, { Z: () => u }), t(266796);
var n = t(200651);
t(192379);
var r = t(120356),
    a = t.n(r),
    c = t(793030),
    s = t(119331),
    i = t(336227),
    l = t(30748);
function u(e) {
    let { powerup: o } = e,
        t = (0, i.Z)(o);
    return (0, n.jsx)('div', {
        className: l.levelContainer,
        children: t.map((e) => {
            let { Icon: o, className: t } = (0, s.t)(e.perkIcon, !1);
            return (0, n.jsxs)(
                'div',
                {
                    className: l.perkContainer,
                    children: [
                        (0, n.jsx)(o, {
                            color: 'currentColor',
                            className: a()(l.perkIcon, t)
                        }),
                        (0, n.jsx)(c.xv, {
                            className: l.perkText,
                            color: 'text-muted',
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
