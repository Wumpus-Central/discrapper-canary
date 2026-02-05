n.d(t, { default: () => g });
var l = n(627968),
    i = n(64700),
    a = n(158954),
    r = n(397927),
    d = n(645034),
    s = n(664030),
    u = n(722260),
    c = n(974930),
    o = n(422845),
    x = n(985018);
function g(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: g, onClose: h } = e,
        D = (0, u.A)(n, t.id),
        m = (0, c.CI)(n, t),
        _ = (0, c.Ri)(m, D),
        [v, j] = i.useState(_),
        [p, { loading: S, error: C }] = (0, d.A)(() => {
            let e = (0, s.A)(t, n, v, D);
            return null == C && h(), e;
        });
    return (0, l.jsxs)(a.Modal, {
        transitionState: g,
        title: x.intl.string(x.t.wmVmXN),
        actions: [
            { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: h },
            { variant: "primary", text: x.intl.string(x.t.e5VEcE), onClick: p, loading: S, disabled: (0, c.sv)(v, _) },
        ],
        onClose: h,
        children: [
            (0, l.jsx)(o.A, {
                onScheduleChange: (e) => {
                    let { startDate: t, endDate: n } = e;
                    null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")),
                        j({ startDate: t, endDate: n });
                },
                schedule: v,
                showEndDate: null != v.endDate,
                requireEndDate: null != v.endDate,
                guildId: t.guild_id,
                recurrenceRule: t.recurrence_rule,
            }),
            null != C
                ? (0, l.jsx)(r.Text, {
                      color: "text-feedback-critical",
                      variant: "text-xs/normal",
                      children: C.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
