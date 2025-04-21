n.d(e, { default: () => O });
var l = n(200651);
n(192379);
var r = n(481060),
    i = n(239091),
    o = n(410575),
    c = n(299206),
    a = n(70877),
    u = n(572427),
    s = n(231259),
    d = n(159233),
    g = n(924952),
    f = n(99528),
    b = n(830394),
    p = n(473545),
    v = n(124422),
    h = n(981631),
    y = n(388032);
function O(t) {
    let { guildEventId: e, recurrenceId: n, channel: O, guild: j, analyticsContext: E, isRecurrenceItem: m = !1, onSelect: P } = t,
        _ = (0, b.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: j,
            channel: O
        }),
        w = (0, s.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: j,
            channel: O
        }),
        T = (0, d.Z)({
            guildEventId: e,
            guild: j,
            channel: O,
            recurrenceId: n,
            isRecurrenceItem: m
        }),
        Z = (0, g.Z)(e, j, O),
        S = (0, v.Z)(e, j, O),
        x = (0, u.Z)(e, j.id, n),
        N = (0, f.Z)(e),
        D = (0, c.Z)({
            id: e,
            label: y.intl.string(y.t.WZwPOz)
        }),
        A = (0, c.Z)({
            id: n,
            label: y.intl.string(y.t.NZRGQk)
        }),
        I = (0, a.Z)(e, j.id, O, n),
        C = (0, p.Z)({
            guildEventId: e,
            guildId: j.id,
            recurrenceId: n
        });
    return (0, l.jsx)(o.Z, {
        context: E,
        object: h.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.v2r, {
            navId: 'user-context',
            onClose: i.Zy,
            'aria-label': y.intl.string(y.t.liqwPD),
            onSelect: P,
            children: [
                (0, l.jsxs)(r.kSQ, {
                    children: [I, !m && S, T, !m && Z, w, _, x, m && C]
                }),
                !m && (0, l.jsx)(r.kSQ, { children: N }),
                (0, l.jsxs)(r.kSQ, {
                    children: [D, A]
                })
            ]
        })
    });
}
