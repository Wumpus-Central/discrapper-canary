n.d(e, { A: () => A });
var l = n(627968);
n(64700);
var i = n(158954),
    r = n(311907),
    a = n(397927),
    d = n(931991),
    s = n(698441),
    u = n(496092),
    o = n(722260),
    c = n(563312),
    E = n(985018);
function A(t) {
    let { guildEventId: e, recurrenceId: n, guild: A, channel: g } = t,
        _ = null != n,
        { canManageGuildEvent: h } = (0, d.nr)(g ?? A),
        [T, f] = (0, r.yK)([s.Ay], () => [s.Ay.isActive(e), s.Ay.getGuildScheduledEvent(e)]),
        y = (0, o.A)(n, f?.id),
        m = null != f && h(f),
        v = f?.recurrence_rule != null && !_,
        p = (0, c.nh)(e, n);
    if (!m || (T && !v && !_) || (_ && !_) || null == f || null == p) return null;
    let { startTime: N } = p;
    if (T && _) {
        if (null == N) return null;
        let t = new Date(y?.scheduled_start_time ?? N);
        if (new Date() > t) return null;
    }
    let S = (t) => {
        (0, a.qfG)((r) =>
            (0, l.jsx)(i.ConfirmModal, {
                ...r,
                title: E.intl.string(E.t.R5bpin),
                subtitle: E.intl.string(E.t.v2GWNQ),
                confirmText: v || t ? E.intl.string(E.t["8ZsNv5"]) : E.intl.string(E.t.B9sJLX),
                cancelText: E.intl.string(E.t.oEAioF),
                onConfirm: () => (_ && !t ? u.A.deleteRecurrence(A.id, e, n, y) : u.A.deleteGuildEvent(e, A.id)),
                children:
                    (v || t) &&
                    (0, l.jsx)(a.Text, { variant: "text-md/normal", children: E.intl.format(E.t.ZcpcyO, {}) }),
            }),
        );
    };
    return (0, l.jsx)(a.Drp, {
        id: E.intl.string(E.t.B9sJLX),
        label: E.intl.string(E.t.B9sJLX),
        action: _ ? void 0 : () => S(),
        color: "danger",
        children:
            _ &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(a.Drp, {
                        id: E.intl.string(E.t.tqClly),
                        label: E.intl.string(E.t.tqClly),
                        action: () => S(),
                        disabled: y?.is_canceled,
                        color: "danger",
                    }),
                    (0, l.jsx)(a.Drp, {
                        id: E.intl.string(E.t.wr33rW),
                        label: E.intl.string(E.t.wr33rW),
                        action: () => S(!0),
                        color: "danger",
                    }),
                ],
            }),
    });
}
