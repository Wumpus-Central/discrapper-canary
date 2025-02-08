n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(913527),
    a = n.n(l),
    o = n(481060),
    c = n(55935),
    d = n(955204),
    u = n(674680),
    m = n(560285);
function g(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        s = (0, d.oX)(t);
    if (null == s) return null;
    let l = null != n,
        { name: g, description: h, hideDescriptionUntilUnlock: x, onAction: _ } = s,
        p = x && !l,
        E = l ? 'header-primary' : 'text-muted',
        C = l ? 'header-secondary' : 'text-muted',
        f = a()(n),
        T = null != _ && l,
        N = T ? o.P3F : 'div';
    return (0, i.jsxs)(N, {
        className: r()(m.container, T && m.actionable),
        onClick: () => {
            T && _();
        },
        children: [
            (0, i.jsx)('div', {
                className: m.iconContainer,
                children: (0, i.jsx)(u.Z, {
                    achievementId: t,
                    size: u.Z.Sizes.SIZE_40,
                    unlocked: l
                })
            }),
            (0, i.jsxs)('div', {
                className: m.nameContainer,
                children: [
                    null != n &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xxs/semibold',
                            color: 'text-muted',
                            className: m.unlocked,
                            children: (0, c.Y4)(f)
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: E,
                        children: g()
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: C,
                        children: p ? '?????' : h()
                    })
                ]
            })
        ]
    });
}
