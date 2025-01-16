n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(556012),
    s = n(862085),
    a = n(769998),
    o = n(671066),
    c = n(273504),
    d = n(421273);
function u(e) {
    let { action: t, triggerType: n, toggled: s, onToggleAction: a } = e,
        o = (0, l.c)(t.type, t, n);
    if (null == o) return null;
    let { headerText: c, descriptionText: u, icon: m } = o;
    return (0, i.jsxs)('div', {
        className: d.actionContainer,
        children: [
            (0, i.jsx)('div', {
                className: d.actionIconContainer,
                children: (0, i.jsx)(m, {
                    size: 'md',
                    color: 'currentColor',
                    className: d.actionIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: d.actionTextContainer,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-sm/semibold',
                        children: c
                    }),
                    (0, i.jsx)(r.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: u
                    })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(r.Checkbox, {
                    disabled: !o.isEditable,
                    type: r.Checkbox.Types.INVERTED,
                    value: s,
                    onChange: () => a(!1),
                    className: d.__invalid_actionCheckbox
                })
            })
        ]
    });
}
function m(e) {
    let { action: t, guildId: n, triggerType: r, toggled: l, onToggleAction: d } = e;
    switch (t.type) {
        case c.jj.FLAG_TO_CHANNEL:
            return (0, i.jsx)(o.Z, {
                action: t,
                triggerType: r,
                toggled: l,
                onToggleAction: d
            });
        case c.jj.USER_COMMUNICATION_DISABLED:
            return (0, i.jsx)(a.Z, {
                action: t,
                guildId: n,
                triggerType: r,
                toggled: l,
                onToggleAction: d
            });
        case c.jj.BLOCK_MESSAGE:
            return (0, i.jsx)(s.Z, {
                action: t,
                triggerType: r,
                toggled: l,
                onToggleAction: d
            });
        default:
            return (0, i.jsx)(u, {
                action: t,
                guildId: n,
                toggled: l,
                triggerType: r,
                onToggleAction: d
            });
    }
}
