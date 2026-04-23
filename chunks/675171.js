n.d(t, { A: () => h });
var i = n(417597),
    l = n(933958),
    a = n(969151),
    s = n(108959),
    r = n(734057),
    o = n(626360),
    c = n(5867);
let d = "no_text_activity",
    u = {
        [d]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
        [c.Gd.DISCONNECTED]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
        [c.Gd.LAUNCHING_WITH_ORIENTATION_CHANGE]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
        [c.Gd.PANEL]: [],
        [c.Gd.PIP]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
        [c.Gd.ACTIVITY_POPOUT_WINDOW]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
    };
function h() {
    let e = (0, i.bG)([l.Ay], () => l.Ay.getCurrentEmbeddedActivity()),
        t = (0, i.bG)([l.Ay], () => l.Ay.getActivityPanelMode()),
        n = (0, a.H)(e?.location);
    return void 0 === e || (0, s.A)(n, r.A) ? u[d] : u[t];
}
