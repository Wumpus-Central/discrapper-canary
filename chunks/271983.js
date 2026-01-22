n.d(t, {
    default: () => h,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(158954),
    a = n(397927),
    s = n(645034),
    d = n(664030),
    u = n(722260),
    c = n(974930),
    o = n(422845),
    g = n(985018);

function h(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: h, onClose: p } = e,
        x = (0, u.A)(n, t.id),
        j = (0, c.CI)(n, t),
        v = (0, c.Ri)(j, x),
        [b, f] = r.useState(v),
        [m, { loading: D, error: y }] = (0, s.A)(() => {
            let e = (0, d.A)(t, n, b, x);
            return null == y && p(), e;
        });
    return (0, l.jsxs)(i.Modal, {
        transitionState: h,
        title: g.intl.string(g.t.wmVmXN),
        actions: [
            {
                variant: "secondary",
                text: g.intl.string(g.t["ETE/oC"]),
                onClick: p,
            },
            {
                variant: "primary",
                text: g.intl.string(g.t.e5VEcE),
                onClick: m,
                loading: D,
                disabled: (0, c.sv)(b, v),
            },
        ],
        onClose: p,
        children: [
            (0, l.jsx)(o.A, {
                onScheduleChange: (e) => {
                    let { startDate: t, endDate: n } = e;
                    null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")),
                        f({
                            startDate: t,
                            endDate: n,
                        });
                },
                schedule: b,
                showEndDate: null != b.endDate,
                requireEndDate: null != b.endDate,
                guildId: t.guild_id,
                recurrenceRule: t.recurrence_rule,
            }),
            null != y
                ? (0, l.jsx)(a.Text, {
                      color: "text-feedback-critical",
                      variant: "text-xs/normal",
                      children: y.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
