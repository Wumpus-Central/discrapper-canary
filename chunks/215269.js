e.d(n, { default: () => N });
var l = e(200651);
e(192379);
var i = e(481060),
    r = e(239091),
    u = e(410575),
    d = e(299206),
    a = e(70877),
    s = e(572427),
    o = e(231259),
    c = e(159233),
    E = e(924952),
    g = e(99528),
    v = e(830394),
    h = e(473545),
    _ = e(124422),
    f = e(981631),
    Z = e(388032);
function N(t) {
    let { guildEventId: n, recurrenceId: e, channel: N, guild: T, analyticsContext: m, isRecurrenceItem: p = !1, onSelect: S } = t,
        I = (0, v.Z)({
            guildEventId: n,
            recurrenceId: e,
            guild: T,
            channel: N
        }),
        P = (0, o.Z)({
            guildEventId: n,
            recurrenceId: e,
            guild: T,
            channel: N
        }),
        D = (0, c.Z)({
            guildEventId: n,
            guild: T,
            channel: N,
            recurrenceId: e,
            isRecurrenceItem: p
        }),
        b = (0, E.Z)(n, T, N),
        C = (0, _.Z)(n, T, N),
        x = (0, s.Z)(n, T.id, e),
        A = (0, g.Z)(n),
        y = (0, d.Z)({
            id: n,
            label: Z.intl.string(Z.t.WZwPOz)
        }),
        G = (0, d.Z)({
            id: e,
            label: Z.intl.string(Z.t.NZRGQk)
        }),
        w = (0, a.Z)(n, T.id, N, e),
        j = (0, h.Z)({
            guildEventId: n,
            guildId: T.id,
            recurrenceId: e
        });
    return (0, l.jsx)(u.Z, {
        context: m,
        object: f.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.v2r, {
            navId: 'user-context',
            onClose: r.Zy,
            'aria-label': Z.intl.string(Z.t.liqwPD),
            onSelect: S,
            children: [
                (0, l.jsxs)(i.kSQ, {
                    children: [w, !p && C, D, !p && b, P, I, x, p && j]
                }),
                !p && (0, l.jsx)(i.kSQ, { children: A }),
                (0, l.jsxs)(i.kSQ, {
                    children: [y, G]
                })
            ]
        })
    });
}
