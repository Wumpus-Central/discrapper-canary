var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(941524),
    a = n(563115),
    o = n(388032),
    c = n(317193);
t.Z = r.memo(function (e) {
    let { rule: t, onlyRoles: n = !1, onChangeRule: r } = e,
        d = (0, i.jsx)(s.Z, {
            guildId: t.guildId,
            selectedChannelIds: t.exemptChannels,
            selectedRoleIds: t.exemptRoles,
            onChange: (e, n) =>
                r({
                    ...t,
                    exemptChannels: e,
                    exemptRoles: n
                }),
            disableEveryoneRole: !0,
            includeRoleRestrictedPrivateChannels: !0
        });
    return (
        n &&
            (d = (0, i.jsx)(a.Z, {
                guildId: t.guildId,
                selectedRoleIds: t.exemptRoles,
                onChange: (e) =>
                    r({
                        ...t,
                        exemptRoles: e
                    }),
                placeholder: o.intl.string(o.t.aFO1Iy),
                disableEveryoneRole: !0
            })),
        (0, i.jsxs)(l.FormItem, {
            children: [
                d,
                (0, i.jsx)(l.Text, {
                    color: 'header-secondary',
                    variant: 'text-xs/normal',
                    className: c.exemptionHint,
                    children: o.intl.string(o.t.GKlYaW)
                })
            ]
        })
    );
});
