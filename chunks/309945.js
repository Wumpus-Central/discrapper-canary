n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    o = n(494497),
    l = n(657707),
    a = n(793030),
    s = n(442837),
    c = n(692547),
    u = n(899667),
    d = n(317169),
    p = n(149829),
    f = n(388032),
    m = n(874622);
function g(e) {
    let { guildId: t, powerups: n } = e,
        { spent: g } = (0, d.Z)(t),
        v = (0, s.e7)([u.Z], () => u.Z.getAppliedGuildBoostsForGuild(t), [t]),
        x =
            g -
            i.useMemo(() => {
                var e, t, n;
                return null !=
                    (n =
                        null == v ||
                        null == (t = v.filter) ||
                        null == (e = t.call(v, (e) => !e.ended && null == e.endsAt))
                            ? void 0
                            : e.length)
                    ? n
                    : 0;
            }, [v]);
    if (x <= 0) return null;
    let _ = n.some((e) => e.skuId === o.A$);
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)(l.Mgn, {
                color: c.Z.colors.TEXT_FEEDBACK_WARNING,
                className: m.icon,
            }),
            (0, r.jsx)(a.xvT, {
                variant: "text-md/semibold",
                color: "text-feedback-warning",
                children: f.intl.string(p.default.n5hQhc),
            }),
            (0, r.jsxs)(a.xvT, {
                variant: "text-sm/medium",
                children: [
                    f.intl.formatToPlainString(p.default.iAaAiG, {
                        boostCount: x,
                        perksString: n.map((e) => e.title).join(", "),
                    }),
                    _ &&
                        (0, r.jsx)(a.xvT, {
                            variant: "text-sm/medium",
                            color: "text-feedback-warning",
                            children: f.intl.string(p.default.Sfr0Jw),
                        }),
                ],
            }),
        ],
    });
}
