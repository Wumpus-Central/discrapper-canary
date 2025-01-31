n.d(t, {
    KX: () => d,
    X2: () => c,
    cg: () => _,
    pF: () => f
});
var i = n(314897),
    r = n(924301),
    a = n(894017),
    s = n(79874),
    o = n(854698),
    l = n(765305),
    u = n(388032);
function c(e, t) {
    let n = i.default.getId();
    return r.ZP.getRsvp(e, t, n);
}
var d = (function (e) {
    return (e[(e.SERIES = 0)] = 'SERIES'), (e[(e.RECURRENCE = 1)] = 'RECURRENCE'), e;
})({});
function f() {
    return [
        {
            name: u.intl.string(u.t.uoorxs),
            value: 0
        },
        {
            name: u.intl.string(u.t.lwZCFR),
            value: 1
        }
    ];
}
function _(e) {
    let { eventId: t, recurrenceId: n, guildId: i, updateRsvp: u, openRsvpPicker: d, onRsvp: f } = e,
        _ = r.ZP.getGuildScheduledEvent(t);
    if (null == _) return;
    let p = (0, a.c)(n, t),
        { startTime: h } = (0, s.Kq)(_, n),
        m = (null == _ ? void 0 : _.scheduled_start_time) != null ? (0, o.lh)(p, h, new Date(null == _ ? void 0 : _.scheduled_start_time)) : null,
        g = null != m && l.$I.has(m) ? null : null != n ? n : (0, o.DK)(_),
        E = c(_.id),
        v = c(_.id, g);
    null == g ? (u(t, null, i, null != E ? l.gv.UNINTERESTED : l.gv.INTERESTED), null == f || f()) : null != v ? (u(t, g, i, null != E ? l.gv.INTERESTED : l.gv.UNINTERESTED), null == f || f()) : d(_, g);
}
