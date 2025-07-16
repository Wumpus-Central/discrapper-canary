n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    o = n(494497),
    a = n(657707),
    s = n(793030),
    l = n(442837),
    c = n(692547),
    d = n(899667),
    u = n(905128),
    p = n(93841),
    m = n(388032),
    _ = n(45355);
function f(e) {
    let { guildId: t, powerups: n } = e,
        f = (0, l.e7)([u.Z], () => {
            var e, n;
            return null != (n = null == (e = u.Z.getStateForGuild(t)) ? void 0 : e.appliedBoosts) ? n : 0;
        }),
        x = (0, l.e7)([d.Z], () => d.Z.getAppliedGuildBoostsForGuild(t), [t]),
        b =
            f -
            i.useMemo(() => {
                var e, t, n;
                return null != (n = null == x || null == (t = x.filter) || null == (e = t.call(x, (e) => !e.ended && null == e.endsAt)) ? void 0 : e.length) ? n : 0;
            }, [x]);
    if (b <= 0) return null;
    let v = n.some((e) => e.skuId === o.A);
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            (0, r.jsx)(a.P4T, {
                color: c.Z.colors.TEXT_FEEDBACK_WARNING,
                className: _.icon
            }),
            (0, r.jsx)(s.xv, {
                variant: 'text-md/semibold',
                color: 'text-feedback-warning',
                children: m.intl.string(p.default.n5hQhY)
            }),
            (0, r.jsxs)(s.xv, {
                variant: 'text-sm/medium',
                children: [
                    m.intl.formatToPlainString(p.default.iAaAiI, {
                        boostCount: b,
                        perksString: n.map((e) => e.title).join(', ')
                    }),
                    v &&
                        (0, r.jsx)(s.xv, {
                            variant: 'text-sm/medium',
                            color: 'text-feedback-warning',
                            children: m.intl.string(p.default.Sfr0Jy)
                        })
                ]
            })
        ]
    });
}
