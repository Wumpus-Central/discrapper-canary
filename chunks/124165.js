n.d(t, {
    KX: () => d,
    X2: () => u,
    cg: () => f,
    pF: () => _
});
var r = n(314897),
    i = n(924301),
    a = n(894017),
    o = n(79874),
    s = n(854698),
    l = n(765305),
    c = n(388032);
function u(e, t) {
    let n = r.default.getId();
    return i.ZP.getRsvp(e, t, n);
}
var d = (function (e) {
    return ((e[(e.SERIES = 0)] = 'SERIES'), (e[(e.RECURRENCE = 1)] = 'RECURRENCE'), e);
})({});
function _() {
    return [
        {
            name: c.intl.string(c.t.uoorxs),
            value: 0
        },
        {
            name: c.intl.string(c.t.lwZCFR),
            value: 1
        }
    ];
}
function f(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: c, openRsvpPicker: d, onRsvp: _ } = e,
        f = i.ZP.getGuildScheduledEvent(t);
    if (null == f) return;
    let p = (0, a.c)(n, t),
        { startTime: h } = (0, o.Kq)(f, n),
        m = (null == f ? void 0 : f.scheduled_start_time) != null ? (0, s.lh)(p, h, new Date(null == f ? void 0 : f.scheduled_start_time)) : null,
        g = null != m && l.$I.has(m) ? null : null != n ? n : (0, s.DK)(f),
        E = u(f.id),
        b = u(f.id, g);
    null == g ? (c(t, null, r, null != E ? l.gv.UNINTERESTED : l.gv.INTERESTED), null == _ || _()) : null != b ? (c(t, g, r, null != E ? l.gv.INTERESTED : l.gv.UNINTERESTED), null == _ || _()) : d(f, g);
}
