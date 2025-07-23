n.d(t, { Z: () => _ });
var r = n(255367),
    o = n(73800),
    i = n(494497),
    l = n(657707),
    s = n(793030),
    a = n(442837),
    c = n(692547),
    u = n(899667),
    d = n(905128),
    m = n(93841),
    p = n(388032),
    f = n(45355);
function _(e) {
    let { guildId: t, powerups: n } = e,
        _ = (0, a.e7)([d.Z], () => {
            var e, n;
            return null != (n = null == (e = d.Z.getStateForGuild(t)) ? void 0 : e.appliedBoosts) ? n : 0;
        }),
        x = (0, a.e7)([u.Z], () => u.Z.getAppliedGuildBoostsForGuild(t), [t]),
        v =
            _ -
            o.useMemo(() => {
                var e, t, n;
                return null != (n = null == x || null == (t = x.filter) || null == (e = t.call(x, (e) => !e.ended && null == e.endsAt)) ? void 0 : e.length) ? n : 0;
            }, [x]);
    if (v <= 0) return null;
    let g = n.some((e) => e.skuId === i.A$);
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            (0, r.jsx)(l.P4T, {
                color: c.Z.colors.TEXT_FEEDBACK_WARNING,
                className: f.icon
            }),
            (0, r.jsx)(s.xv, {
                variant: 'text-md/semibold',
                color: 'text-feedback-warning',
                children: p.intl.string(m.default.n5hQhY)
            }),
            (0, r.jsxs)(s.xv, {
                variant: 'text-sm/medium',
                children: [
                    p.intl.formatToPlainString(m.default.iAaAiI, {
                        boostCount: v,
                        perksString: n.map((e) => e.title).join(', ')
                    }),
                    g &&
                        (0, r.jsx)(s.xv, {
                            variant: 'text-sm/medium',
                            color: 'text-feedback-warning',
                            children: p.intl.string(m.default.Sfr0Jy)
                        })
                ]
            })
        ]
    });
}
