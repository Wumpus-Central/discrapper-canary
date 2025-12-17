n.d(t, { default: () => b }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(793030),
    a = n(481060),
    u = n(981888),
    s = n(157689),
    d = n(894017),
    c = n(854698),
    o = n(440371),
    g = n(388032);
function b(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: b, onClose: p } = e,
        f = (0, d.Z)(n, t.id),
        x = (0, c.iA)(n, t),
        h = (0, c.x6)(x, f),
        [j, v] = r.useState(h),
        [m, { loading: D, error: O }] = (0, u.Z)(() => {
            let e = (0, s.Z)(t, n, j, f);
            return null == O && p(), e;
        });
    return (0, l.jsxs)(i.Modal, {
        transitionState: b,
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
                disabled: (0, c.Y4)(j, h),
            },
        ],
        onClose: p,
        children: [
            (0, l.jsx)(o.Z, {
                onScheduleChange: (e) => {
                    let { startDate: t, endDate: n } = e;
                    null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")),
                        v({
                            startDate: t,
                            endDate: n,
                        });
                },
                schedule: j,
                showEndDate: null != j.endDate,
                requireEndDate: null != j.endDate,
                guildId: t.guild_id,
                recurrenceRule: t.recurrence_rule,
            }),
            null != O
                ? (0, l.jsx)(a.Text, {
                      color: "text-feedback-critical",
                      variant: "text-xs/normal",
                      children: O.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
