n.d(t, { Z: () => g }), n(953529);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(913527),
    l = n.n(a),
    o = n(481060),
    c = n(55935),
    d = n(955204),
    u = n(674680),
    m = n(924206);
function g(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, d.oX)(t);
    if (null == i) return null;
    let a = null != n,
        { name: g, description: p, hideDescriptionUntilUnlock: h, onAction: f } = i,
        b = h && !a,
        _ = a ? 'header-primary' : 'text-muted',
        N = a ? 'header-secondary' : 'text-muted',
        x = l()(n),
        E = null != f && a,
        j = E ? o.P3F : 'div';
    return (0, r.jsxs)(j, {
        className: s()(m.container, E && m.actionable),
        onClick: () => {
            E && f();
        },
        children: [
            (0, r.jsx)('div', {
                className: m.iconContainer,
                children: (0, r.jsx)(u.Z, {
                    achievementId: t,
                    size: u.Z.Sizes.SIZE_40,
                    unlocked: a
                })
            }),
            (0, r.jsxs)('div', {
                className: m.nameContainer,
                children: [
                    null != n &&
                        (0, r.jsx)(o.Text, {
                            variant: 'text-xxs/semibold',
                            color: 'text-muted',
                            className: m.unlocked,
                            children: (0, c.Y4)(x)
                        }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: _,
                        children: g()
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: N,
                        children: b ? '?????' : p()
                    })
                ]
            })
        ]
    });
}
