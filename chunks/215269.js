n.d(e, { default: () => y });
var l = n(54381);
n(473749);
var i = n(481060),
    r = n(239091),
    u = n(410575),
    o = n(299206),
    c = n(70877),
    a = n(147236),
    s = n(572427),
    d = n(231259),
    g = n(159233),
    f = n(924952),
    v = n(99528),
    b = n(830394),
    E = n(473545),
    p = n(124422),
    Z = n(981631),
    h = n(388032);
function y(t) {
    let {
            guildEventId: e,
            recurrenceId: n,
            channel: y,
            guild: P,
            analyticsContext: O,
            isRecurrenceItem: m = !1,
            onSelect: j,
            target: N,
        } = t,
        _ = (0, b.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: P,
            channel: y,
        }),
        S = (0, d.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: P,
            channel: y,
        }),
        w = (0, g.Z)({
            guildEventId: e,
            guild: P,
            channel: y,
            recurrenceId: n,
            isRecurrenceItem: m,
        }),
        D = (0, f.Z)(e, P, y),
        x = (0, p.Z)(e, P, y),
        T = (0, s.Z)(e, P.id, n),
        I = (0, a.Z)(e, N),
        C = (0, v.Z)(e),
        G = (0, o.Z)({
            id: e,
            label: h.intl.string(h.t.WZwPO4),
        }),
        L = (0, o.Z)({
            id: n,
            label: h.intl.string(h.t.NZRGQo),
        }),
        U = (0, c.Z)(e, P.id, y, n),
        A = (0, E.Z)({
            guildEventId: e,
            guildId: P.id,
            recurrenceId: n,
        });
    return (0, l.jsx)(u.Z, {
        context: O,
        object: Z.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.v2r, {
            navId: "user-context",
            onClose: r.Zy,
            "aria-label": h.intl.string(h.t.liqwPJ),
            onSelect: j,
            children: [
                (0, l.jsxs)(i.kSQ, {
                    children: [U, !m && x, w, !m && D, S, _, T, m && A],
                }),
                !m && (0, l.jsx)(i.kSQ, { children: C }),
                null != I && (0, l.jsx)(i.kSQ, { children: I }),
                (0, l.jsxs)(i.kSQ, {
                    children: [G, L],
                }),
            ],
        }),
    });
}
