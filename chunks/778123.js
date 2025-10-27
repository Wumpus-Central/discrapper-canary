n.d(t, { Z: () => l });
var i = n(951288);
n(647438);
var s = n(442837),
    d = n(481060),
    r = n(87051),
    c = n(9156),
    a = n(621600),
    u = n(388032);
function l(e) {
    let t = (0, s.e7)([c.ZP], () => c.ZP.isMuteScheduledEventsEnabled(e), [e]);
    return (0, i.jsx)(d.S89, {
        id: "mute-events",
        label: u.intl.string(u.t.ONG3Yz),
        action: () => {
            var n;
            return (
                (n = { mute_scheduled_events: !t }),
                void r.Z.updateGuildNotificationSettings(e, n, a.UE.mutedEvents(n.mute_scheduled_events))
            );
        },
        checked: t,
    });
}
