n.d(t, { Z: () => g });
var r = n(255367),
    o = n(73800),
    i = n(494497),
    l = n(657707),
    s = n(793030),
    a = n(442837),
    u = n(692547),
    c = n(899667),
    d = n(905128),
    p = n(93841),
    f = n(388032),
    m = n(200985);
function g(e) {
    let { guildId: t, powerups: n } = e,
        g = (0, a.e7)([d.Z], () => {
            var e, n;
            return null != (n = null == (e = d.Z.getStateForGuild(t)) ? void 0 : e.appliedBoosts) ? n : 0;
        }),
        x = (0, a.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(t), [t]),
        v =
            g -
            o.useMemo(() => {
                var e, t, n;
                return null !=
                    (n =
                        null == x ||
                        null == (t = x.filter) ||
                        null == (e = t.call(x, (e) => !e.ended && null == e.endsAt))
                            ? void 0
                            : e.length)
                    ? n
                    : 0;
            }, [x]);
    if (v <= 0) return null;
    let _ = n.some((e) => e.skuId === i.A$);
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)(l.Mgn, {
                color: u.Z.colors.TEXT_FEEDBACK_WARNING,
                className: m.icon,
            }),
            (0, r.jsx)(s.xv, {
                variant: "text-md/semibold",
                color: "text-feedback-warning",
                children: f.intl.string(p.default.n5hQhY),
            }),
            (0, r.jsxs)(s.xv, {
                variant: "text-sm/medium",
                children: [
                    f.intl.formatToPlainString(p.default.iAaAiI, {
                        boostCount: v,
                        perksString: n.map((e) => e.title).join(", "),
                    }),
                    _ &&
                        (0, r.jsx)(s.xv, {
                            variant: "text-sm/medium",
                            color: "text-feedback-warning",
                            children: f.intl.string(p.default.Sfr0Jy),
                        }),
                ],
            }),
        ],
    });
}
