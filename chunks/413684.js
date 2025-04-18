n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(87051),
    a = n(9156),
    o = n(621600),
    d = n(981631),
    c = n(388032),
    u = n(920271);
function h(e) {
    let { guildId: t } = e,
        n = (0, s.cj)([a.ZP], () => ({
            highligths: a.ZP.getNotifyHighlights(t),
            mobilePush: a.ZP.isMobilePushEnabled(t),
            suppressRoles: a.ZP.isSuppressRolesEnabled(t),
            suppressEveryone: a.ZP.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: a.ZP.isMuteScheduledEventsEnabled(t)
        })),
        h = r.Z.updateGuildNotificationSettings;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g, {
                value: n.suppressEveryone,
                title: c.NW.format(c.t.OWiWAg, {}),
                onChange: (e) => h(t, { suppress_everyone: e }, o.UE.suppressEveryone(e))
            }),
            (0, i.jsx)(g, {
                value: n.suppressRoles,
                title: c.NW.string(c.t['O/QdoK']),
                onChange: (e) => h(t, { suppress_roles: e }, o.UE.suppressRoles(e))
            }),
            (0, i.jsx)(g, {
                title: (0, i.jsxs)('div', {
                    className: u.advanceSettingTitle,
                    children: [
                        c.NW.string(c.t.gPuteH),
                        (0, i.jsx)(l.ua7, {
                            text: c.NW.string(c.t['Vw/Xn5']),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(l.d3s, {
                                    size: 'custom',
                                    width: 14,
                                    height: 14,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    color: l.TVs.colors.ICON_MUTED,
                                    className: u.settingTitleIcon
                                });
                            }
                        })
                    ]
                }),
                value: n.highligths === d.gLR.ENABLED,
                onChange: (e) => h(t, { notify_highlights: e ? d.gLR.ENABLED : d.gLR.DISABLED }, o.UE.highlights(e))
            }),
            (0, i.jsx)(g, {
                value: n.muteScheduledEvents,
                title: c.NW.string(c.t.ONG3Y2),
                onChange: (e) => h(t, { mute_scheduled_events: e }, o.UE.mutedEvents(e))
            }),
            (0, i.jsx)(g, {
                value: n.mobilePush,
                title: c.NW.string(c.t['h1DL6+']),
                onChange: (e) => h(t, { mobile_push: e }, o.UE.mobilePush(e))
            })
        ]
    });
}
function g(e) {
    return (0, i.jsx)(l.j7V, {
        hideBorder: !0,
        className: u.advanceSetting,
        value: e.value,
        onChange: e.onChange,
        note: e.subtitle,
        children: e.title
    });
}
