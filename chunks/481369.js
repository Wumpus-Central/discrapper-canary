n.d(t, { Z: () => p });
var r = n(399606),
    i = n(317381),
    l = n(16609),
    o = n(917107),
    a = n(592125),
    s = n(226027),
    c = n(918559);
let u = 'no_text_activity',
    d = {
        [u]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES],
        [c.Ez.DISCONNECTED]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES],
        [c.Ez.LAUNCHING_WITH_ORIENTATION_CHANGE]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES],
        [c.Ez.PANEL]: [],
        [c.Ez.PIP]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES],
        [c.Ez.ACTIVITY_POPOUT_WINDOW]: [s.E.NEW_MESSAGES, s.E.OPT_IN_CHANNEL, s.E.SUMMARIES]
    };
function p() {
    let e = (0, r.e7)([i.ZP], () => i.ZP.getCurrentEmbeddedActivity()),
        t = (0, r.e7)([i.ZP], () => i.ZP.getActivityPanelMode()),
        n = (0, l.pY)(null == e ? void 0 : e.location);
    return void 0 === e || (0, o.Z)(n, a.Z) ? d[u] : d[t];
}
