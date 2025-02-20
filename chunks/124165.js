n.d(t, {
    KX: () => d,
    X2: () => u,
    cg: () => p,
    pF: () => f
});
var r = n(314897),
    i = n(924301),
    o = n(894017),
    a = n(79874),
    s = n(854698),
    l = n(765305),
    c = n(388032);
function u(e, t) {
    let n = r.default.getId();
    return i.ZP.getRsvp(e, t, n);
}
var d = (function (e) {
    return (e[(e.SERIES = 0)] = 'SERIES'), (e[(e.RECURRENCE = 1)] = 'RECURRENCE'), e;
})({});
function f() {
    return [
        {
            name: c.NW.string(c.t.uoorxs),
            value: 0
        },
        {
            name: c.NW.string(c.t.lwZCFR),
            value: 1
        }
    ];
}
function p(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: c, openRsvpPicker: d, onRsvp: f } = e,
        p = i.ZP.getGuildScheduledEvent(t);
    if (null == p) return;
    let _ = (0, o.c)(n, t),
        { startTime: h } = (0, a.Kq)(p, n),
        m = (null == p ? void 0 : p.scheduled_start_time) != null ? (0, s.lh)(_, h, new Date(null == p ? void 0 : p.scheduled_start_time)) : null,
        g = null != m && l.$I.has(m) ? null : null != n ? n : (0, s.DK)(p),
        E = u(p.id),
        v = u(p.id, g);
    null == g ? (c(t, null, r, null != E ? l.gv.UNINTERESTED : l.gv.INTERESTED), null == f || f()) : null != v ? (c(t, g, r, null != E ? l.gv.INTERESTED : l.gv.UNINTERESTED), null == f || f()) : d(p, g);
}
