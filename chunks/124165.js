n.d(t, {
    KX: () => d,
    X2: () => u,
    cg: () => p,
    pF: () => f,
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
    return (e[(e.SERIES = 0)] = "SERIES"), (e[(e.RECURRENCE = 1)] = "RECURRENCE"), e;
})({});
function f() {
    return [
        {
            name: c.intl.string(c.t.uoorxi),
            value: 0,
        },
        {
            name: c.intl.string(c.t.lwZCFT),
            value: 1,
        },
    ];
}
function p(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: c, openRsvpPicker: d, onRsvp: f } = e,
        p = i.ZP.getGuildScheduledEvent(t);
    if (null == p) return;
    let _ = (0, a.c)(n, t),
        { startTime: m } = (0, o.Kq)(p, n),
        h =
            (null == p ? void 0 : p.scheduled_start_time) != null
                ? (0, s.lh)(_, m, new Date(null == p ? void 0 : p.scheduled_start_time))
                : null,
        g = null != h && l.$I.has(h) ? null : null != n ? n : (0, s.DK)(p),
        E = u(p.id),
        b = u(p.id, g);
    null == g
        ? (c(t, null, r, null != E ? l.gv.UNINTERESTED : l.gv.INTERESTED), null == f || f())
        : null != b
          ? (c(t, g, r, null != E ? l.gv.INTERESTED : l.gv.UNINTERESTED), null == f || f())
          : d(p, g);
}
