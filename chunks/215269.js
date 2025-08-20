n.d(e, { default: () => y });
var l = n(951288);
n(647438);
var r = n(481060),
    i = n(239091),
    o = n(410575),
    u = n(299206),
    c = n(70877),
    a = n(572427),
    s = n(231259),
    d = n(159233),
    g = n(924952),
    f = n(99528),
    b = n(830394),
    v = n(473545),
    E = n(124422),
    p = n(981631),
    Z = n(388032);
function y(t) {
    let {
            guildEventId: e,
            recurrenceId: n,
            channel: y,
            guild: O,
            analyticsContext: h,
            isRecurrenceItem: P = !1,
            onSelect: m,
        } = t,
        j = (0, b.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: O,
            channel: y,
        }),
        N = (0, s.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: O,
            channel: y,
        }),
        _ = (0, d.Z)({
            guildEventId: e,
            guild: O,
            channel: y,
            recurrenceId: n,
            isRecurrenceItem: P,
        }),
        w = (0, g.Z)(e, O, y),
        S = (0, E.Z)(e, O, y),
        D = (0, a.Z)(e, O.id, n),
        T = (0, f.Z)(e),
        x = (0, u.Z)({
            id: e,
            label: Z.intl.string(Z.t.WZwPOz),
        }),
        I = (0, u.Z)({
            id: n,
            label: Z.intl.string(Z.t.NZRGQk),
        }),
        C = (0, c.Z)(e, O.id, y, n),
        G = (0, v.Z)({
            guildEventId: e,
            guildId: O.id,
            recurrenceId: n,
        });
    return (0, l.jsx)(o.Z, {
        context: h,
        object: p.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.v2r, {
            navId: "user-context",
            onClose: i.Zy,
            "aria-label": Z.intl.string(Z.t.liqwPD),
            onSelect: m,
            children: [
                (0, l.jsxs)(r.kSQ, {
                    children: [C, !P && S, _, !P && w, N, j, D, P && G],
                }),
                !P && (0, l.jsx)(r.kSQ, { children: T }),
                (0, l.jsxs)(r.kSQ, {
                    children: [x, I],
                }),
            ],
        }),
    });
}
