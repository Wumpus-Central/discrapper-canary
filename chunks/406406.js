n.d(e, { default: () => m });
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(442433),
    a = n(820284),
    d = n(50268),
    s = n(247191),
    u = n(971961),
    o = n(753333),
    c = n(544255),
    E = n(28314),
    A = n(24661),
    g = n(288357),
    _ = n(587018),
    h = n(675623),
    T = n(174966),
    f = n(652215),
    y = n(985018);
function m(t) {
    let {
            guildEventId: e,
            recurrenceId: n,
            channel: m,
            guild: v,
            analyticsContext: p,
            isRecurrenceItem: N = !1,
            onSelect: S,
            target: G,
        } = t,
        D = (0, _.A)({ guildEventId: e, recurrenceId: n, guild: v, channel: m }),
        b = (0, c.A)({ guildEventId: e, recurrenceId: n, guild: v, channel: m }),
        I = (0, E.A)({ guildEventId: e, guild: v, channel: m, recurrenceId: n, isRecurrenceItem: N }),
        C = (0, A.A)(e, v, m),
        x = (0, T.A)(e, v, m),
        w = (0, o.A)(e, v.id, n),
        O = (0, u.A)(e, G),
        R = (0, g.A)(e),
        j = (0, d.A)({ id: e, label: y.intl.string(y.t.WZwPO4) }),
        L = (0, d.A)({ id: n, label: y.intl.string(y.t.NZRGQo) }),
        U = (0, s.A)(e, v.id, m, n),
        P = (0, h.A)({ guildEventId: e, guildId: v.id, recurrenceId: n });
    return (0, l.jsx)(a.A, {
        context: p,
        object: f.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(i.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: r.Z_,
            "aria-label": y.intl.string(y.t.liqwPJ),
            onSelect: S,
            children: [
                (0, l.jsxs)(i.rXV, { children: [U, !N && x, I, !N && C, b, D, w, N && P] }),
                !N && (0, l.jsx)(i.rXV, { children: R }),
                null != O && (0, l.jsx)(i.rXV, { children: O }),
                (0, l.jsxs)(i.rXV, { children: [j, L] }),
            ],
        }),
    });
}
