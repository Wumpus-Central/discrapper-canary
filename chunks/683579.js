n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(556012),
    s = n(862085),
    a = n(769998),
    o = n(671066),
    c = n(273504),
    u = n(467397);
function d(e) {
    let { action: t, triggerType: n, toggled: s, onToggleAction: a } = e,
        o = (0, l.c)(t.type, t, n);
    if (null == o) return null;
    let { headerText: c, descriptionText: d, icon: m } = o;
    return (0, r.jsxs)('div', {
        className: u.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: u.actionIconContainer,
                children: (0, r.jsx)(m, {
                    size: 'md',
                    color: 'currentColor',
                    className: u.actionIcon
                })
            }),
            (0, r.jsxs)('div', {
                className: u.actionTextContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-sm/semibold',
                        children: c
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: d
                    })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(i.XZJ, {
                    disabled: !o.isEditable,
                    type: i.XZJ.Types.INVERTED,
                    value: s,
                    onChange: () => a(!1),
                    className: u.__invalid_actionCheckbox
                })
            })
        ]
    });
}
function m(e) {
    let { action: t, guildId: n, triggerType: i, toggled: l, onToggleAction: u } = e;
    switch (t.type) {
        case c.jj.FLAG_TO_CHANNEL:
            return (0, r.jsx)(o.Z, {
                action: t,
                triggerType: i,
                toggled: l,
                onToggleAction: u
            });
        case c.jj.USER_COMMUNICATION_DISABLED:
            return (0, r.jsx)(a.Z, {
                action: t,
                guildId: n,
                triggerType: i,
                toggled: l,
                onToggleAction: u
            });
        case c.jj.BLOCK_MESSAGE:
            return (0, r.jsx)(s.Z, {
                action: t,
                triggerType: i,
                toggled: l,
                onToggleAction: u
            });
        default:
            return (0, r.jsx)(d, {
                action: t,
                guildId: n,
                toggled: l,
                triggerType: i,
                onToggleAction: u
            });
    }
}
