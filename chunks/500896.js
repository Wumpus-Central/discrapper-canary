n.d(t, { A: () => h });
var i = n(627968),
    s = n(311907),
    l = n(331322),
    a = n(243721),
    r = n(832712),
    d = n(543465),
    o = n(477427),
    c = n(652215),
    u = n(985018);
function h(e) {
    let { guildId: t } = e,
        n = (0, s.cf)([d.Ay], () => ({
            highligths: d.Ay.getNotifyHighlights(t),
            mobilePush: d.Ay.isMobilePushEnabled(t),
            suppressRoles: d.Ay.isSuppressRolesEnabled(t),
            suppressEveryone: d.Ay.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: d.Ay.isMuteScheduledEventsEnabled(t),
        })),
        h = r.A.updateGuildNotificationSettings;
    return (0, i.jsxs)(l.B, {
        gap: 24,
        children: [
            (0, i.jsx)(a.d, {
                checked: n.suppressEveryone,
                label: u.intl.format(u.t.OWiWAp, {}),
                onChange: (e) => h(t, { suppress_everyone: e }, o.G_.suppressEveryone(e)),
            }),
            (0, i.jsx)(a.d, {
                checked: n.suppressRoles,
                label: u.intl.string(u.t["O/QdoD"]),
                onChange: (e) => h(t, { suppress_roles: e }, o.G_.suppressRoles(e)),
            }),
            (0, i.jsx)(a.d, {
                label: u.intl.string(u.t.gPuteJ),
                description: u.intl.string(u.t["Vw/Xn8"]),
                checked: n.highligths === c.guM.ENABLED,
                onChange: (e) => h(t, { notify_highlights: e ? c.guM.ENABLED : c.guM.DISABLED }, o.G_.highlights(e)),
            }),
            (0, i.jsx)(a.d, {
                checked: n.muteScheduledEvents,
                label: u.intl.string(u.t.ONG3Yz),
                onChange: (e) => h(t, { mute_scheduled_events: e }, o.G_.mutedEvents(e)),
            }),
            (0, i.jsx)(a.d, {
                checked: n.mobilePush,
                label: u.intl.string(u.t.h1DL66),
                onChange: (e) => h(t, { mobile_push: e }, o.G_.mobilePush(e)),
            }),
        ],
    });
}
