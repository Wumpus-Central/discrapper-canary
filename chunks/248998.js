n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(913527),
    a = n.n(r),
    o = n(481060),
    c = n(55935),
    d = n(955204),
    u = n(674680),
    h = n(344618);
function m(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        s = (0, d.oX)(t);
    if (null == s) return null;
    let r = null != n,
        { name: m, description: g, hideDescriptionUntilUnlock: x, onAction: _ } = s,
        p = x && !r,
        E = r ? 'header-primary' : 'text-muted',
        C = r ? 'header-secondary' : 'text-muted',
        N = a()(n),
        I = null != _ && r,
        f = I ? o.P3F : 'div';
    return (0, i.jsxs)(f, {
        className: l()(h.container, I && h.actionable),
        onClick: () => {
            I && _();
        },
        children: [
            (0, i.jsx)('div', {
                className: h.iconContainer,
                children: (0, i.jsx)(u.Z, {
                    achievementId: t,
                    size: u.Z.Sizes.SIZE_40,
                    unlocked: r
                })
            }),
            (0, i.jsxs)('div', {
                className: h.nameContainer,
                children: [
                    null != n &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xxs/semibold',
                            color: 'text-muted',
                            className: h.unlocked,
                            children: (0, c.Y4)(N)
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: E,
                        children: m()
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: C,
                        children: p ? '?????' : g()
                    })
                ]
            })
        ]
    });
}
