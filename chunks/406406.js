n.d(t, {
    default: () => O,
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(442433),
    u = n(820284),
    o = n(50268),
    a = n(247191),
    c = n(971961),
    s = n(753333),
    d = n(544255),
    g = n(28314),
    y = n(24661),
    f = n(288357),
    b = n(587018),
    p = n(675623),
    A = n(174966),
    v = n(652215),
    E = n(985018);

function O(e) {
    let {
            guildEventId: t,
            recurrenceId: n,
            channel: O,
            guild: m,
            analyticsContext: j,
            isRecurrenceItem: h = !1,
            onSelect: D,
            target: _,
        } = e,
        w = (0, b.A)({
            guildEventId: t,
            recurrenceId: n,
            guild: m,
            channel: O,
        }),
        N = (0, d.A)({
            guildEventId: t,
            recurrenceId: n,
            guild: m,
            channel: O,
        }),
        G = (0, g.A)({
            guildEventId: t,
            guild: m,
            channel: O,
            recurrenceId: n,
            isRecurrenceItem: h,
        }),
        S = (0, y.A)(t, m, O),
        P = (0, A.A)(t, m, O),
        x = (0, s.A)(t, m.id, n),
        T = (0, c.A)(t, _),
        C = (0, f.A)(t),
        I = (0, o.A)({
            id: t,
            label: E.intl.string(E.t.WZwPO4),
        }),
        L = (0, o.A)({
            id: n,
            label: E.intl.string(E.t.NZRGQo),
        }),
        U = (0, a.A)(t, m.id, O, n),
        V = (0, p.A)({
            guildEventId: t,
            guildId: m.id,
            recurrenceId: n,
        });
    return (0, l.jsx)(u.A, {
        context: j,
        object: v.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W1t, {
            "data-menu-mixed": !0,
            navId: "user-context",
            onClose: i.Z_,
            "aria-label": E.intl.string(E.t.liqwPJ),
            onSelect: D,
            children: [
                (0, l.jsxs)(r.rXV, {
                    children: [U, !h && P, G, !h && S, N, w, x, h && V],
                }),
                !h &&
                    (0, l.jsx)(r.rXV, {
                        children: C,
                    }),
                null != T &&
                    (0, l.jsx)(r.rXV, {
                        children: T,
                    }),
                (0, l.jsxs)(r.rXV, {
                    children: [I, L],
                }),
            ],
        }),
    });
}
