n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(556012),
    a = n(862085),
    s = n(769998),
    o = n(671066),
    c = n(273504),
    d = n(239244);
function u(e) {
    let { action: t, triggerType: n, toggled: a, onToggleAction: s } = e,
        o = (0, l.c)(t.type, t, n);
    if (null == o) return null;
    let { headerText: c, descriptionText: u, icon: g } = o;
    return (0, r.jsxs)("div", {
        className: d.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: d.actionIconContainer,
                children: (0, r.jsx)(g, {
                    size: "md",
                    color: "currentColor",
                    className: d.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: d.actionTextContainer,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-sm/semibold",
                        children: c,
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "interactive-text-default",
                        variant: "text-xs/medium",
                        children: u,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.P3F, {
                    onClick: o.isEditable ? () => s(!1) : void 0,
                    children: (0, r.jsx)(i.FZ5, {
                        checked: a,
                        disabled: !o.isEditable,
                    }),
                }),
            }),
        ],
    });
}
function g(e) {
    let { action: t, guildId: n, triggerType: i, toggled: l, onToggleAction: d } = e;
    switch (t.type) {
        case c.jj.FLAG_TO_CHANNEL:
            return (0, r.jsx)(o.Z, {
                action: t,
                triggerType: i,
                toggled: l,
                onToggleAction: d,
            });
        case c.jj.USER_COMMUNICATION_DISABLED:
            return (0, r.jsx)(s.Z, {
                action: t,
                guildId: n,
                triggerType: i,
                toggled: l,
                onToggleAction: d,
            });
        case c.jj.BLOCK_MESSAGE:
            return (0, r.jsx)(a.Z, {
                action: t,
                triggerType: i,
                toggled: l,
                onToggleAction: d,
            });
        default:
            return (0, r.jsx)(u, {
                action: t,
                guildId: n,
                toggled: l,
                triggerType: i,
                onToggleAction: d,
            });
    }
}
