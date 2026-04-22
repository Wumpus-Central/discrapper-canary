n.d(t, { default: () => p });
var l = n(627968),
    a = n(64700),
    i = n(189213),
    r = n(834730),
    s = n(645034),
    u = n(664030),
    d = n(722260),
    o = n(974930),
    c = n(422845),
    h = n(985018);
function p(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: p, onClose: x } = e,
        m = (0, d.A)(n, t.id),
        g = (0, o.CI)(n, t),
        _ = (0, o.Ri)(g, m),
        [v, f] = a.useState(_),
        [D, { loading: b, error: C }] = (0, s.A)(() => {
            let e = (0, u.A)(t, n, v, m);
            return null == C && x(), e;
        });
    return (0, l.jsxs)(i.Modal, {
        transitionState: p,
        title: h.intl.string(h.t.wmVmXN),
        actions: [
            { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: x },
            { variant: "primary", text: h.intl.string(h.t.e5VEcE), onClick: D, loading: b, disabled: (0, o.sv)(v, _) },
        ],
        onClose: x,
        children: [
            (0, l.jsx)(c.A, {
                onScheduleChange: (e) => {
                    let { startDate: t, endDate: n } = e;
                    null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")),
                        f({ startDate: t, endDate: n });
                },
                schedule: v,
                showEndDate: null != v.endDate,
                requireEndDate: null != v.endDate,
                guildId: t.guild_id,
                recurrenceRule: t.recurrence_rule,
            }),
            null != C
                ? (0, l.jsx)(r.E, {
                      color: "text-feedback-critical",
                      variant: "text-xs/normal",
                      children: C.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
