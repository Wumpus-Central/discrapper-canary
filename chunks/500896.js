n.d(t, { A: () => u });
var i = n(627968),
    l = n(311907),
    s = n(397927),
    r = n(832712),
    a = n(543465),
    d = n(477427),
    o = n(652215),
    c = n(985018);
function u(e) {
    let { guildId: t } = e,
        n = (0, l.cf)([a.Ay], () => ({
            highligths: a.Ay.getNotifyHighlights(t),
            mobilePush: a.Ay.isMobilePushEnabled(t),
            suppressRoles: a.Ay.isSuppressRolesEnabled(t),
            suppressEveryone: a.Ay.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: a.Ay.isMuteScheduledEventsEnabled(t),
        })),
        u = r.A.updateGuildNotificationSettings;
    return (0, i.jsxs)(s.BJc, {
        gap: 24,
        children: [
            (0, i.jsx)(s.dOG, {
                checked: n.suppressEveryone,
                label: c.intl.format(c.t.OWiWAp, {}),
                onChange: (e) => u(t, { suppress_everyone: e }, d.G_.suppressEveryone(e)),
            }),
            (0, i.jsx)(s.dOG, {
                checked: n.suppressRoles,
                label: c.intl.string(c.t["O/QdoD"]),
                onChange: (e) => u(t, { suppress_roles: e }, d.G_.suppressRoles(e)),
            }),
            (0, i.jsx)(s.dOG, {
                label: c.intl.string(c.t.gPuteJ),
                description: c.intl.string(c.t["Vw/Xn8"]),
                checked: n.highligths === o.guM.ENABLED,
                onChange: (e) => u(t, { notify_highlights: e ? o.guM.ENABLED : o.guM.DISABLED }, d.G_.highlights(e)),
            }),
            (0, i.jsx)(s.dOG, {
                checked: n.muteScheduledEvents,
                label: c.intl.string(c.t.ONG3Yz),
                onChange: (e) => u(t, { mute_scheduled_events: e }, d.G_.mutedEvents(e)),
            }),
            (0, i.jsx)(s.dOG, {
                checked: n.mobilePush,
                label: c.intl.string(c.t.h1DL66),
                onChange: (e) => u(t, { mobile_push: e }, d.G_.mobilePush(e)),
            }),
        ],
    });
}
