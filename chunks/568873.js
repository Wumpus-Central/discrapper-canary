s.d(t, { A: () => h });
var d = s(627968);
s(64700);
var i = s(17928),
    n = s(477782),
    u = s(832712),
    c = s(543465),
    a = s(477427),
    r = s(375708);
function h(e) {
    let t = (0, i.bG)([c.Ay], () => c.Ay.isMuteScheduledEventsEnabled(e), [e]);
    return (0, d.jsx)(n.sL, {
        id: "mute-events",
        label: r.intl.string(r.t.ONG3Yz),
        action: () => {
            var s;
            return (
                (s = { mute_scheduled_events: !t }),
                void u.A.updateGuildNotificationSettings(e, s, a.G_.mutedEvents(s.mute_scheduled_events))
            );
        },
        checked: t,
    });
}
