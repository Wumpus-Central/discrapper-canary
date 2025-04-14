n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var s = n(442837),
    d = n(481060),
    r = n(87051),
    c = n(9156),
    a = n(621600),
    u = n(388032);
function l(e) {
    let t = (0, s.e7)([c.ZP], () => c.ZP.isMuteScheduledEventsEnabled(e), [e]);
    return (0, i.jsx)(d.S89, {
        id: 'mute-events',
        label: u.NW.string(u.t.ONG3Y2),
        action: () => {
            var n;
            return (n = { mute_scheduled_events: !t }), void r.Z.updateGuildNotificationSettings(e, n, a.UE.mutedEvents(n.mute_scheduled_events));
        },
        checked: t
    });
}
