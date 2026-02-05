i.d(t, { A: () => u });
var n = i(627968),
    s = i(311907),
    l = i(397927),
    a = i(832712),
    r = i(543465),
    d = i(477427),
    o = i(652215),
    c = i(985018);
function u(e) {
    let { guildId: t } = e,
        i = (0, s.cf)([r.Ay], () => ({
            highligths: r.Ay.getNotifyHighlights(t),
            mobilePush: r.Ay.isMobilePushEnabled(t),
            suppressRoles: r.Ay.isSuppressRolesEnabled(t),
            suppressEveryone: r.Ay.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: r.Ay.isMuteScheduledEventsEnabled(t),
        })),
        u = a.A.updateGuildNotificationSettings;
    return (0, n.jsxs)(l.BJc, {
        gap: 24,
        children: [
            (0, n.jsx)(l.dOG, {
                checked: i.suppressEveryone,
                label: c.intl.format(c.t.OWiWAp, {}),
                onChange: (e) => u(t, { suppress_everyone: e }, d.G_.suppressEveryone(e)),
            }),
            (0, n.jsx)(l.dOG, {
                checked: i.suppressRoles,
                label: c.intl.string(c.t["O/QdoD"]),
                onChange: (e) => u(t, { suppress_roles: e }, d.G_.suppressRoles(e)),
            }),
            (0, n.jsx)(l.dOG, {
                label: c.intl.string(c.t.gPuteJ),
                description: c.intl.string(c.t["Vw/Xn8"]),
                checked: i.highligths === o.guM.ENABLED,
                onChange: (e) => u(t, { notify_highlights: e ? o.guM.ENABLED : o.guM.DISABLED }, d.G_.highlights(e)),
            }),
            (0, n.jsx)(l.dOG, {
                checked: i.muteScheduledEvents,
                label: c.intl.string(c.t.ONG3Yz),
                onChange: (e) => u(t, { mute_scheduled_events: e }, d.G_.mutedEvents(e)),
            }),
            (0, n.jsx)(l.dOG, {
                checked: i.mobilePush,
                label: c.intl.string(c.t.h1DL66),
                onChange: (e) => u(t, { mobile_push: e }, d.G_.mobilePush(e)),
            }),
        ],
    });
}
