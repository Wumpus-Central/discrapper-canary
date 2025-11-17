n.d(t, { Z: () => u });
var i = n(54381),
    s = n(442837),
    l = n(481060),
    r = n(87051),
    a = n(9156),
    o = n(621600),
    d = n(981631),
    c = n(388032);
function u(e) {
    let { guildId: t } = e,
        n = (0, s.cj)([a.ZP], () => ({
            highligths: a.ZP.getNotifyHighlights(t),
            mobilePush: a.ZP.isMobilePushEnabled(t),
            suppressRoles: a.ZP.isSuppressRolesEnabled(t),
            suppressEveryone: a.ZP.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: a.ZP.isMuteScheduledEventsEnabled(t),
        })),
        u = r.Z.updateGuildNotificationSettings;
    return (0, i.jsxs)(l.Kqy, {
        gap: 24,
        children: [
            (0, i.jsx)(l.rsf, {
                checked: n.suppressEveryone,
                label: c.intl.format(c.t.OWiWAp, {}),
                onChange: (e) => u(t, { suppress_everyone: e }, o.UE.suppressEveryone(e)),
            }),
            (0, i.jsx)(l.rsf, {
                checked: n.suppressRoles,
                label: c.intl.string(c.t["O/QdoD"]),
                onChange: (e) => u(t, { suppress_roles: e }, o.UE.suppressRoles(e)),
            }),
            (0, i.jsx)(l.rsf, {
                label: c.intl.string(c.t.gPuteJ),
                description: c.intl.string(c.t["Vw/Xn8"]),
                checked: n.highligths === d.gLR.ENABLED,
                onChange: (e) => u(t, { notify_highlights: e ? d.gLR.ENABLED : d.gLR.DISABLED }, o.UE.highlights(e)),
            }),
            (0, i.jsx)(l.rsf, {
                checked: n.muteScheduledEvents,
                label: c.intl.string(c.t.ONG3Yz),
                onChange: (e) => u(t, { mute_scheduled_events: e }, o.UE.mutedEvents(e)),
            }),
            (0, i.jsx)(l.rsf, {
                checked: n.mobilePush,
                label: c.intl.string(c.t.h1DL66),
                onChange: (e) => u(t, { mobile_push: e }, o.UE.mobilePush(e)),
            }),
        ],
    });
}
