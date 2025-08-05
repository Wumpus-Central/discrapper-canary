e.d(n, { default: () => y });
var l = e(255367);
e(73800);
var i = e(481060),
    r = e(239091),
    o = e(410575),
    a = e(299206),
    c = e(70877),
    s = e(572427),
    u = e(231259),
    d = e(159233),
    g = e(924952),
    v = e(99528),
    b = e(830394),
    f = e(473545),
    p = e(124422),
    j = e(981631),
    h = e(388032);
function y(t) {
    let { guildEventId: n, recurrenceId: e, channel: y, guild: Z, analyticsContext: m, isRecurrenceItem: O = !1, onSelect: P } = t,
        w = (0, b.Z)({
            guildEventId: n,
            recurrenceId: e,
            guild: Z,
            channel: y
        }),
        x = (0, u.Z)({
            guildEventId: n,
            recurrenceId: e,
            guild: Z,
            channel: y
        }),
        E = (0, d.Z)({
            guildEventId: n,
            guild: Z,
            channel: y,
            recurrenceId: e,
            isRecurrenceItem: O
        }),
        S = (0, g.Z)(n, Z, y),
        D = (0, p.Z)(n, Z, y),
        N = (0, s.Z)(n, Z.id, e),
        T = (0, v.Z)(n),
        _ = (0, a.Z)({
            id: n,
            label: h.intl.string(h.t.WZwPOz)
        }),
        R = (0, a.Z)({
            id: e,
            label: h.intl.string(h.t.NZRGQk)
        }),
        k = (0, c.Z)(n, Z.id, y, e),
        C = (0, f.Z)({
            guildEventId: n,
            guildId: Z.id,
            recurrenceId: e
        });
    return (0, l.jsx)(o.Z, {
        context: m,
        object: j.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.v2r, {
            navId: 'user-context',
            onClose: r.Zy,
            'aria-label': h.intl.string(h.t.liqwPD),
            onSelect: P,
            children: [
                (0, l.jsxs)(i.kSQ, {
                    children: [k, !O && D, E, !O && S, x, w, N, O && C]
                }),
                !O && (0, l.jsx)(i.kSQ, { children: T }),
                (0, l.jsxs)(i.kSQ, {
                    children: [_, R]
                })
            ]
        })
    });
}
