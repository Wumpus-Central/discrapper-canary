n.d(t, { Z: () => u });
var i = n(951288);
n(647438);
var r = n(442837),
    s = n(481060),
    l = n(87051),
    o = n(9156),
    c = n(621600),
    a = n(388032);
function u(e) {
    let t = (0, r.e7)([o.ZP], () => o.ZP.isMuteScheduledEventsEnabled(e), [e]);
    return (0, i.jsx)(s.S89, {
        id: "mute-events",
        label: a.intl.string(a.t.ONG3Y2),
        action: () => {
            var n;
            return (
                (n = { mute_scheduled_events: !t }),
                void l.Z.updateGuildNotificationSettings(e, n, c.UE.mutedEvents(n.mute_scheduled_events))
            );
        },
        checked: t,
    });
}
