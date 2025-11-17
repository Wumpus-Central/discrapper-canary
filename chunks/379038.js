n.d(t, { default: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(793030),
    a = n(481060),
    u = n(981888),
    s = n(157689),
    d = n(894017),
    c = n(854698),
    o = n(440371),
    g = n(388032);
function p(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: p, onClose: b } = e,
        x = (0, d.Z)(n, t.id),
        h = (0, c.iA)(n, t),
        f = (0, c.x6)(h, x),
        [j, v] = l.useState(f),
        [m, { loading: D, error: O }] = (0, u.Z)(() => {
            let e = (0, s.Z)(t, n, j, x);
            return null == O && b(), e;
        });
    return (0, r.jsxs)(i.Modal, {
        transitionState: p,
        title: g.intl.string(g.t.wmVmXN),
        actions: [
            {
                variant: "secondary",
                text: g.intl.string(g.t["ETE/oC"]),
                onClick: b,
            },
            {
                variant: "primary",
                text: g.intl.string(g.t.e5VEcE),
                onClick: m,
                loading: D,
                disabled: (0, c.Y4)(j, f),
            },
        ],
        onClose: b,
        children: [
            (0, r.jsx)(o.Z, {
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
                ? (0, r.jsx)(a.Text, {
                      color: "text-danger",
                      variant: "text-xs/normal",
                      children: O.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
