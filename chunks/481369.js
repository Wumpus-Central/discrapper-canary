n.d(t, { Z: () => f });
var r = n(399606),
    i = n(317381),
    o = n(16609),
    a = n(917107),
    s = n(592125),
    l = n(226027),
    c = n(918559);
let u = 'no_text_activity',
    d = {
        [u]: [l.E.NEW_MESSAGES, l.E.OPT_IN_CHANNEL, l.E.SUMMARIES],
        [c.Ez.DISCONNECTED]: [l.E.NEW_MESSAGES, l.E.OPT_IN_CHANNEL, l.E.SUMMARIES],
        [c.Ez.LAUNCHING_WITH_ORIENTATION_CHANGE]: [l.E.NEW_MESSAGES, l.E.OPT_IN_CHANNEL, l.E.SUMMARIES],
        [c.Ez.PANEL]: [],
        [c.Ez.PIP]: [l.E.NEW_MESSAGES, l.E.OPT_IN_CHANNEL, l.E.SUMMARIES],
        [c.Ez.ACTIVITY_POPOUT_WINDOW]: [l.E.NEW_MESSAGES, l.E.OPT_IN_CHANNEL, l.E.SUMMARIES]
    };
function f() {
    let e = (0, r.e7)([i.ZP], () => i.ZP.getCurrentEmbeddedActivity()),
        t = (0, r.e7)([i.ZP], () => i.ZP.getActivityPanelMode()),
        n = (0, o.p)(null == e ? void 0 : e.location);
    return void 0 === e || (0, a.Z)(n, s.Z) ? d[u] : d[t];
}
