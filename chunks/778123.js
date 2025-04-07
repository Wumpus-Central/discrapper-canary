n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(87051),
    o = n(9156),
    a = n(621600),
    c = n(388032);
function u(e) {
    let t = (0, r.e7)([o.ZP], () => o.ZP.isMuteScheduledEventsEnabled(e), [e]);
    return (0, i.jsx)(s.S89, {
        id: 'mute-events',
        label: c.NW.string(c.t.ONG3Y2),
        action: () => {
            var n;
            return (n = { mute_scheduled_events: !t }), void l.Z.updateGuildNotificationSettings(e, n, a.UE.mutedEvents(n.mute_scheduled_events));
        },
        checked: t
    });
}
