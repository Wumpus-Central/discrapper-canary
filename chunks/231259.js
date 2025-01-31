e.d(n, { Z: () => E }), e(47120);
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(357156),
    d = e(924301),
    a = e(482241),
    s = e(894017),
    o = e(79874),
    c = e(388032);
function E(t) {
    let { guildEventId: n, recurrenceId: e, guild: E, channel: g } = t,
        v = null != e,
        { canManageGuildEvent: h } = (0, u.XJ)(null != g ? g : E),
        [_, f] = (0, i.Wu)([d.ZP], () => [d.ZP.isActive(n), d.ZP.getGuildScheduledEvent(n)]),
        Z = (0, s.Z)(e, null == f ? void 0 : f.id),
        N = null != f && h(f),
        T = (null == f ? void 0 : f.recurrence_rule) != null && !v,
        m = (0, o.zI)(n, e);
    if (!N || (_ && !T && !v) || (v && !v) || null == f || null == m) return null;
    let { startTime: p } = m;
    if (_ && v) {
        var S;
        if (null == p) return null;
        let t = new Date(null !== (S = null == Z ? void 0 : Z.scheduled_start_time) && void 0 !== S ? S : p);
        if (new Date() > t) return null;
    }
    let I = (t) => {
        (0, r.h7j)((i) =>
            (0, l.jsxs)(r.ConfirmModal, {
                ...i,
                header: c.intl.string(c.t.R5bpio),
                confirmText: T || t ? c.intl.string(c.t['8ZsNv7']) : c.intl.string(c.t.B9sJLS),
                cancelText: c.intl.string(c.t.oEAioK),
                onConfirm: () => (v && !t ? a.Z.deleteRecurrence(E.id, n, e, Z) : a.Z.deleteGuildEvent(n, E.id)),
                children: [
                    (0, l.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: c.intl.string(c.t.v2GWNT)
                    }),
                    (0, l.jsx)('br', {}),
                    (T || t) &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: c.intl.format(c.t.ZcpcyM, {})
                        })
                ]
            })
        );
    };
    return (0, l.jsx)(r.sNh, {
        id: c.intl.string(c.t.B9sJLS),
        label: c.intl.string(c.t.B9sJLS),
        action: v ? void 0 : () => I(),
        color: 'danger',
        children:
            v &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.sNh, {
                        id: c.intl.string(c.t.tqCll5),
                        label: c.intl.string(c.t.tqCll5),
                        action: () => I(),
                        disabled: null == Z ? void 0 : Z.is_canceled,
                        color: 'danger'
                    }),
                    (0, l.jsx)(r.sNh, {
                        id: c.intl.string(c.t.wr33ra),
                        label: c.intl.string(c.t.wr33ra),
                        action: () => I(!0),
                        color: 'danger'
                    })
                ]
            })
    });
}
