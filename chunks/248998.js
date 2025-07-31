(n.d(t, { Z: () => p }), n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(913527),
    l = n.n(a),
    o = n(481060),
    c = n(55935),
    d = n(955204),
    u = n(674680),
    m = n(927671);
function p(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        r = (0, d.oX)(t);
    if (null == r) return null;
    let a = null != n,
        { name: p, description: g, hideDescriptionUntilUnlock: h, onAction: f } = r,
        b = h && !a,
        x = a ? 'header-primary' : 'text-muted',
        _ = a ? 'header-secondary' : 'text-muted',
        j = l()(n),
        E = null != f && a,
        O = E ? o.P3F : 'div';
    return (0, i.jsxs)(O, {
        className: s()(m.container, E && m.actionable),
        onClick: () => {
            E && f();
        },
        children: [
            (0, i.jsx)('div', {
                className: m.iconContainer,
                children: (0, i.jsx)(u.Z, {
                    achievementId: t,
                    size: u.Z.Sizes.SIZE_40,
                    unlocked: a
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
                            children: (0, c.Y4)(j)
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: x,
                        children: p()
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: _,
                        children: b ? '?????' : g()
                    })
                ]
            })
        ]
    });
}
