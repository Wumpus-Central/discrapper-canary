n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(832712),
    a = n(543465),
    o = n(477427),
    c = n(985018);
function u(e) {
    let t = (0, r.bG)([a.Ay], () => a.Ay.isMuteScheduledEventsEnabled(e), [e]);
    return (0, i.jsx)(s.sLh, {
        id: "mute-events",
        label: c.intl.string(c.t.ONG3Yz),
        action: () => {
            var n;
            return (
                (n = { mute_scheduled_events: !t }),
                void l.A.updateGuildNotificationSettings(e, n, o.G_.mutedEvents(n.mute_scheduled_events))
            );
        },
        checked: t,
    });
}
