n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(913527),
    l = n.n(a),
    o = n(481060),
    c = n(55935),
    d = n(955204),
    u = n(674680),
    m = n(560285);
function g(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        s = (0, d.oX)(t);
    if (null == s) return null;
    let a = null != n,
        { name: g, description: h, hideDescriptionUntilUnlock: p, onAction: x } = s,
        f = p && !a,
        _ = a ? 'header-primary' : 'text-muted',
        E = a ? 'header-secondary' : 'text-muted',
        C = l()(n),
        T = null != x && a,
        S = T ? o.Clickable : 'div';
    return (0, i.jsxs)(S, {
        className: r()(m.container, T && m.actionable),
        onClick: () => {
            T && x();
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
                            children: (0, c.Y4)(C)
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: _,
                        children: g()
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: E,
                        children: f ? '?????' : h()
                    })
                ]
            })
        ]
    });
}
