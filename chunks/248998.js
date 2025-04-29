n.d(t, { Z: () => p }), n(953529);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(913527),
    a = n.n(l),
    o = n(481060),
    c = n(55935),
    d = n(955204),
    u = n(674680),
    m = n(927671);
function p(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        r = (0, d.oX)(t);
    if (null == r) return null;
    let l = null != n,
        { name: p, description: g, hideDescriptionUntilUnlock: h, onAction: f } = r,
        b = h && !l,
        _ = l ? 'header-primary' : 'text-muted',
        x = l ? 'header-secondary' : 'text-muted',
        E = a()(n),
        j = null != f && l,
        C = j ? o.P3F : 'div';
    return (0, i.jsxs)(C, {
        className: s()(m.container, j && m.actionable),
        onClick: () => {
            j && f();
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
                            children: (0, c.Y4)(E)
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: _,
                        children: p()
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: x,
                        children: b ? '?????' : g()
                    })
                ]
            })
        ]
    });
}
