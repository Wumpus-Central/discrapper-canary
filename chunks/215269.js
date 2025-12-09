n.d(e, { default: () => O });
var l = n(54381);
n(473749);
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
    p = n(473545),
    v = n(124422),
    E = n(981631),
    y = n(388032);
function O(t) {
    let {
            guildEventId: e,
            recurrenceId: n,
            channel: O,
            guild: P,
            analyticsContext: Z,
            isRecurrenceItem: h = !1,
            onSelect: j,
        } = t,
        m = (0, b.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: P,
            channel: O,
        }),
        N = (0, s.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: P,
            channel: O,
        }),
        w = (0, d.Z)({
            guildEventId: e,
            guild: P,
            channel: O,
            recurrenceId: n,
            isRecurrenceItem: h,
        }),
        _ = (0, g.Z)(e, P, O),
        D = (0, v.Z)(e, P, O),
        S = (0, a.Z)(e, P.id, n),
        x = (0, f.Z)(e),
        T = (0, u.Z)({
            id: e,
            label: y.intl.string(y.t.WZwPO4),
        }),
        I = (0, u.Z)({
            id: n,
            label: y.intl.string(y.t.NZRGQo),
        }),
        C = (0, c.Z)(e, P.id, O, n),
        G = (0, p.Z)({
            guildEventId: e,
            guildId: P.id,
            recurrenceId: n,
        });
    return (0, l.jsx)(o.Z, {
        context: Z,
        object: E.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.v2r, {
            navId: "user-context",
            onClose: i.Zy,
            "aria-label": y.intl.string(y.t.liqwPJ),
            onSelect: j,
            children: [
                (0, l.jsxs)(r.kSQ, {
                    children: [C, !h && D, w, !h && _, N, m, S, h && G],
                }),
                !h && (0, l.jsx)(r.kSQ, { children: x }),
                (0, l.jsxs)(r.kSQ, {
                    children: [T, I],
                }),
            ],
        }),
    });
}
