n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    a = n(556012),
    s = n(862085),
    o = n(769998),
    c = n(671066),
    d = n(273504),
    u = n(464992);
function m(e) {
    let { action: t, triggerType: n, toggled: s, onToggleAction: o } = e,
        c = (0, a.c)(t.type, t, n);
    if (null == c) return null;
    let { headerText: d, descriptionText: m, icon: g } = c;
    return (0, r.jsxs)("div", {
        className: u.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: u.actionIconContainer,
                children: (0, r.jsx)(g, {
                    size: "md",
                    color: "currentColor",
                    className: u.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: u.actionTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-sm/semibold",
                        children: d,
                    }),
                    (0, r.jsx)(l.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.$q, {
                    disabled: !c.isEditable,
                    type: i.M0.INVERTED,
                    value: s,
                    onChange: () => o(!1),
                    className: u.__invalid_actionCheckbox,
                }),
            }),
        ],
    });
}
function g(e) {
    let { action: t, guildId: n, triggerType: i, toggled: l, onToggleAction: a } = e;
    switch (t.type) {
        case d.jj.FLAG_TO_CHANNEL:
            return (0, r.jsx)(c.Z, {
                action: t,
                triggerType: i,
                toggled: l,
                onToggleAction: a,
            });
        case d.jj.USER_COMMUNICATION_DISABLED:
            return (0, r.jsx)(o.Z, {
                action: t,
                guildId: n,
                triggerType: i,
                toggled: l,
                onToggleAction: a,
            });
        case d.jj.BLOCK_MESSAGE:
            return (0, r.jsx)(s.Z, {
                action: t,
                triggerType: i,
                toggled: l,
                onToggleAction: a,
            });
        default:
            return (0, r.jsx)(m, {
                action: t,
                guildId: n,
                toggled: l,
                triggerType: i,
                onToggleAction: a,
            });
    }
}
