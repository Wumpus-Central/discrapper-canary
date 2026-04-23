n.d(e, { default: () => N });
var l = n(627968);
n(64700);
var i = n(861672),
    r = n(477782),
    a = n(442433),
    d = n(820284),
    s = n(50268),
    u = n(247191),
    o = n(971961),
    c = n(753333),
    g = n(544255),
    A = n(28314),
    E = n(24661),
    m = n(288357),
    f = n(587018),
    v = n(675623),
    y = n(174966),
    _ = n(652215),
    h = n(985018);
function N(t) {
    let {
            guildEventId: e,
            recurrenceId: n,
            channel: N,
            guild: T,
            analyticsContext: b,
            isRecurrenceItem: G = !1,
            onSelect: p,
            target: x,
        } = t,
        D = (0, f.A)({ guildEventId: e, recurrenceId: n, guild: T, channel: N }),
        S = (0, g.A)({ guildEventId: e, recurrenceId: n, guild: T, channel: N }),
        C = (0, A.A)({ guildEventId: e, guild: T, channel: N, recurrenceId: n, isRecurrenceItem: G }),
        I = (0, E.A)(e, T, N),
        w = (0, y.A)(e, T, N),
        j = (0, c.A)(e, T.id, n),
        L = (0, o.A)(e, x),
        M = (0, m.A)(e),
        P = (0, s.A)({ id: e, label: h.intl.string(h.t.WZwPO4) }),
        U = (0, s.A)({ id: n, label: h.intl.string(h.t.NZRGQo) }),
        O = (0, u.A)(e, T.id, N, n),
        R = (0, v.A)({ guildEventId: e, guildId: T.id, recurrenceId: n });
    return (0, l.jsx)(d.A, {
        context: b,
        object: _.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(i.W, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: a.Z_,
            "aria-label": h.intl.string(h.t.liqwPJ),
            onSelect: p,
            children: [
                (0, l.jsxs)(r.rX, { children: [O, !G && w, C, !G && I, S, D, j, G && R] }),
                !G && (0, l.jsx)(r.rX, { children: M }),
                null != L && (0, l.jsx)(r.rX, { children: L }),
                (0, l.jsxs)(r.rX, { children: [P, U] }),
            ],
        }),
    });
}
