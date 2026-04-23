n.d(e, { A: () => m });
var l = n(627968);
n(64700);
var i = n(732159),
    r = n(311907),
    a = n(192308),
    d = n(834730),
    s = n(477782),
    u = n(931991),
    o = n(698441),
    c = n(496092),
    g = n(722260),
    A = n(563312),
    E = n(985018);
function m(t) {
    let { guildEventId: e, recurrenceId: n, guild: m, channel: f } = t,
        v = null != n,
        { canManageGuildEvent: y } = (0, u.nr)(f ?? m),
        [_, h] = (0, r.yK)([o.Ay], () => [o.Ay.isActive(e), o.Ay.getGuildScheduledEvent(e)]),
        N = (0, g.A)(n, h?.id),
        T = null != h && y(h),
        b = h?.recurrence_rule != null && !v,
        G = (0, A.nh)(e, n);
    if (!T || (_ && !b && !v) || (v && !v) || null == h || null == G) return null;
    let { startTime: p } = G;
    if (_ && v) {
        if (null == p) return null;
        let t = new Date(N?.scheduled_start_time ?? p);
        if (new Date() > t) return null;
    }
    let x = (t) => {
        (0, a.openModal)((r) =>
            (0, l.jsx)(i.ConfirmModal, {
                ...r,
                title: E.intl.string(E.t.R5bpin),
                subtitle: E.intl.string(E.t.v2GWNQ),
                confirmText: b || t ? E.intl.string(E.t["8ZsNv5"]) : E.intl.string(E.t.B9sJLX),
                cancelText: E.intl.string(E.t.oEAioF),
                onConfirm: () => (v && !t ? c.A.deleteRecurrence(m.id, e, n, N) : c.A.deleteGuildEvent(e, m.id)),
                children:
                    (b || t) && (0, l.jsx)(d.E, { variant: "text-md/normal", children: E.intl.format(E.t.ZcpcyO, {}) }),
            }),
        );
    };
    return (0, l.jsx)(s.Dr, {
        id: E.intl.string(E.t.B9sJLX),
        label: E.intl.string(E.t.B9sJLX),
        action: v ? void 0 : () => x(),
        color: "danger",
        children:
            v &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(s.Dr, {
                        id: E.intl.string(E.t.tqClly),
                        label: E.intl.string(E.t.tqClly),
                        action: () => x(),
                        disabled: N?.is_canceled,
                        color: "danger",
                    }),
                    (0, l.jsx)(s.Dr, {
                        id: E.intl.string(E.t.wr33rW),
                        label: E.intl.string(E.t.wr33rW),
                        action: () => x(!0),
                        color: "danger",
                    }),
                ],
            }),
    });
}
