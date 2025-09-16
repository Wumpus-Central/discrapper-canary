n.d(t, { Z: () => f });
var r = n(951288),
    o = n(647438),
    i = n(494497),
    l = n(657707),
    a = n(793030),
    s = n(442837),
    c = n(692547),
    u = n(899667),
    d = n(905128),
    p = n(989308),
    m = n(388032),
    g = n(874622);
function f(e) {
    let { guildId: t, powerups: n } = e,
        f = (0, s.e7)([d.Z], () => {
            var e, n;
            return null != (n = null == (e = d.Z.getStateForGuild(t)) ? void 0 : e.appliedBoosts) ? n : 0;
        }),
        v = (0, s.e7)([u.Z], () => u.Z.getAppliedGuildBoostsForGuild(t), [t]),
        _ =
            f -
            o.useMemo(() => {
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
    if (_ <= 0) return null;
    let x = n.some((e) => e.skuId === i.A$);
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(l.Mgn, {
                color: c.Z.colors.TEXT_FEEDBACK_WARNING,
                className: g.icon,
            }),
            (0, r.jsx)(a.xvT, {
                variant: "text-md/semibold",
                color: "text-feedback-warning",
                children: m.intl.string(p.default.n5hQhY),
            }),
            (0, r.jsxs)(a.xvT, {
                variant: "text-sm/medium",
                children: [
                    m.intl.formatToPlainString(p.default.iAaAiI, {
                        boostCount: _,
                        perksString: n.map((e) => e.title).join(", "),
                    }),
                    x &&
                        (0, r.jsx)(a.xvT, {
                            variant: "text-sm/medium",
                            color: "text-feedback-warning",
                            children: m.intl.string(p.default.Sfr0Jy),
                        }),
                ],
            }),
        ],
    });
}
