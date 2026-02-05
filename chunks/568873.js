i.d(t, { A: () => c });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(832712),
    a = i(543465),
    d = i(477427),
    o = i(985018);
function c(e) {
    let t = (0, l.bG)([a.Ay], () => a.Ay.isMuteScheduledEventsEnabled(e), [e]);
    return (0, n.jsx)(s.sLh, {
        id: "mute-events",
        label: o.intl.string(o.t.ONG3Yz),
        action: () => {
            var i;
            return (
                (i = { mute_scheduled_events: !t }),
                void r.A.updateGuildNotificationSettings(e, i, d.G_.mutedEvents(i.mute_scheduled_events))
            );
        },
        checked: t,
    });
}
