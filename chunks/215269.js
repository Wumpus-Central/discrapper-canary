e.d(n, { default: () => E });
var l = e(255367);
e(73800);
var i = e(481060),
    r = e(239091),
    o = e(410575),
    a = e(299206),
    c = e(70877),
    u = e(572427),
    s = e(231259),
    d = e(159233),
    g = e(924952),
    f = e(99528),
    b = e(830394),
    p = e(473545),
    v = e(124422),
    h = e(981631),
    y = e(388032);
function E(t) {
    let { guildEventId: n, recurrenceId: e, channel: E, guild: O, analyticsContext: j, isRecurrenceItem: m = !1, onSelect: _ } = t,
        P = (0, b.Z)({
            guildEventId: n,
            recurrenceId: e,
            guild: O,
            channel: E
        }),
        Z = (0, s.Z)({
            guildEventId: n,
            recurrenceId: e,
            guild: O,
            channel: E
        }),
        T = (0, d.Z)({
            guildEventId: n,
            guild: O,
            channel: E,
            recurrenceId: e,
            isRecurrenceItem: m
        }),
        w = (0, g.Z)(n, O, E),
        S = (0, v.Z)(n, O, E),
        N = (0, u.Z)(n, O.id, e),
        x = (0, f.Z)(n),
        D = (0, a.Z)({
            id: n,
            label: y.intl.string(y.t.WZwPOz)
        }),
        A = (0, a.Z)({
            id: e,
            label: y.intl.string(y.t.NZRGQk)
        }),
        I = (0, c.Z)(n, O.id, E, e),
        C = (0, p.Z)({
            guildEventId: n,
            guildId: O.id,
            recurrenceId: e
        });
    return (0, l.jsx)(o.Z, {
        context: j,
        object: h.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.v2r, {
            navId: 'user-context',
            onClose: r.Zy,
            'aria-label': y.intl.string(y.t.liqwPD),
            onSelect: _,
            children: [
                (0, l.jsxs)(i.kSQ, {
                    children: [I, !m && S, T, !m && w, Z, P, N, m && C]
                }),
                !m && (0, l.jsx)(i.kSQ, { children: x }),
                (0, l.jsxs)(i.kSQ, {
                    children: [D, A]
                })
            ]
        })
    });
}
