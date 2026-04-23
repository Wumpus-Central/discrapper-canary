i.d(t, { A: () => c });
var n = i(627968);
i(64700);
var s = i(17928),
    l = i(477782),
    a = i(832712),
    r = i(543465),
    d = i(477427),
    o = i(985018);
function c(e) {
    let t = (0, s.bG)([r.Ay], () => r.Ay.isMuteScheduledEventsEnabled(e), [e]);
    return (0, n.jsx)(l.sL, {
        id: "mute-events",
        label: o.intl.string(o.t.ONG3Yz),
        action: () => {
            var i;
            return (
                (i = { mute_scheduled_events: !t }),
                void a.A.updateGuildNotificationSettings(e, i, d.G_.mutedEvents(i.mute_scheduled_events))
            );
        },
        checked: t,
    });
}
