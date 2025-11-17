n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(442837),
    s = n(481060),
    l = n(87051),
    a = n(9156),
    c = n(621600),
    o = n(388032);
function u(e) {
    let t = (0, r.e7)([a.ZP], () => a.ZP.isMuteScheduledEventsEnabled(e), [e]);
    return (0, i.jsx)(s.S89, {
        id: "mute-events",
        label: o.intl.string(o.t.ONG3Yz),
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
