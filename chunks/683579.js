n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(556012),
    a = n(862085),
    l = n(769998),
    o = n(671066),
    c = n(273504),
    d = n(467397);
function u(e) {
    let { action: t, triggerType: n, toggled: a, onToggleAction: l } = e,
        o = (0, s.c)(t.type, t, n);
    if (null == o) return null;
    let { headerText: c, descriptionText: u, icon: m } = o;
    return (0, r.jsxs)('div', {
        className: d.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: d.actionIconContainer,
                children: (0, r.jsx)(m, {
                    size: 'md',
                    color: 'currentColor',
                    className: d.actionIcon
                })
            }),
            (0, r.jsxs)('div', {
                className: d.actionTextContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-sm/semibold',
                        children: c
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: u
                    })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(i.XZJ, {
                    disabled: !o.isEditable,
                    type: i.XZJ.Types.INVERTED,
                    value: a,
                    onChange: () => l(!1),
                    className: d.__invalid_actionCheckbox
                })
            })
        ]
    });
}
function m(e) {
    let { action: t, guildId: n, triggerType: i, toggled: s, onToggleAction: d } = e;
    switch (t.type) {
        case c.jj.FLAG_TO_CHANNEL:
            return (0, r.jsx)(o.Z, {
                action: t,
                triggerType: i,
                toggled: s,
                onToggleAction: d
            });
        case c.jj.USER_COMMUNICATION_DISABLED:
            return (0, r.jsx)(l.Z, {
                action: t,
                guildId: n,
                triggerType: i,
                toggled: s,
                onToggleAction: d
            });
        case c.jj.BLOCK_MESSAGE:
            return (0, r.jsx)(a.Z, {
                action: t,
                triggerType: i,
                toggled: s,
                onToggleAction: d
            });
        default:
            return (0, r.jsx)(u, {
                action: t,
                guildId: n,
                toggled: s,
                triggerType: i,
                onToggleAction: d
            });
    }
}
