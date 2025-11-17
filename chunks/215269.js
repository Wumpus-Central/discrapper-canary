n.d(e, { default: () => h });
var l = n(54381);
n(473749);
var r = n(481060),
    i = n(239091),
    u = n(410575),
    o = n(299206),
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
function h(t) {
    let {
            guildEventId: e,
            recurrenceId: n,
            channel: h,
            guild: y,
            analyticsContext: P,
            isRecurrenceItem: O = !1,
            onSelect: m,
        } = t,
        j = (0, b.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: y,
            channel: h,
        }),
        N = (0, s.Z)({
            guildEventId: e,
            recurrenceId: n,
            guild: y,
            channel: h,
        }),
        _ = (0, d.Z)({
            guildEventId: e,
            guild: y,
            channel: h,
            recurrenceId: n,
            isRecurrenceItem: O,
        }),
        w = (0, g.Z)(e, y, h),
        S = (0, E.Z)(e, y, h),
        D = (0, a.Z)(e, y.id, n),
        T = (0, f.Z)(e),
        x = (0, o.Z)({
            id: e,
            label: Z.intl.string(Z.t.WZwPO4),
        }),
        I = (0, o.Z)({
            id: n,
            label: Z.intl.string(Z.t.NZRGQo),
        }),
        C = (0, c.Z)(e, y.id, h, n),
        G = (0, v.Z)({
            guildEventId: e,
            guildId: y.id,
            recurrenceId: n,
        });
    return (0, l.jsx)(u.Z, {
        context: P,
        object: p.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(r.v2r, {
            navId: "user-context",
            onClose: i.Zy,
            "aria-label": Z.intl.string(Z.t.liqwPJ),
            onSelect: m,
            children: [
                (0, l.jsxs)(r.kSQ, {
                    children: [C, !O && S, _, !O && w, N, j, D, O && G],
                }),
                !O && (0, l.jsx)(r.kSQ, { children: T }),
                (0, l.jsxs)(r.kSQ, {
                    children: [x, I],
                }),
            ],
        }),
    });
}
