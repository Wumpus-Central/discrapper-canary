n.d(t, { default: () => O });
var r = n(200651);
n(192379);
var l = n(481060),
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
function O(e) {
    let { guildEventId: t, recurrenceId: n, channel: O, guild: N, analyticsContext: j, isRecurrenceItem: E = !1, onSelect: m } = e,
        P = (0, b.Z)({
            guildEventId: t,
            recurrenceId: n,
            guild: N,
            channel: O
        }),
        _ = (0, s.Z)({
            guildEventId: t,
            recurrenceId: n,
            guild: N,
            channel: O
        }),
        w = (0, d.Z)({
            guildEventId: t,
            guild: N,
            channel: O,
            recurrenceId: n,
            isRecurrenceItem: E
        }),
        T = (0, g.Z)(t, N, O),
        W = (0, v.Z)(t, N, O),
        Z = (0, u.Z)(t, N.id, n),
        S = (0, f.Z)(t),
        x = (0, c.Z)({
            id: t,
            label: y.NW.string(y.t.WZwPOz)
        }),
        D = (0, c.Z)({
            id: n,
            label: y.NW.string(y.t.NZRGQk)
        }),
        A = (0, a.Z)(t, N.id, O, n),
        I = (0, p.Z)({
            guildEventId: t,
            guildId: N.id,
            recurrenceId: n
        });
    return (0, r.jsx)(o.Z, {
        context: j,
        object: h.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(l.v2r, {
            navId: 'user-context',
            onClose: i.Zy,
            'aria-label': y.NW.string(y.t.liqwPD),
            onSelect: m,
            children: [
                (0, r.jsxs)(l.kSQ, {
                    children: [A, !E && W, w, !E && T, _, P, Z, E && I]
                }),
                !E && (0, r.jsx)(l.kSQ, { children: S }),
                (0, r.jsxs)(l.kSQ, {
                    children: [x, D]
                })
            ]
        })
    });
}
