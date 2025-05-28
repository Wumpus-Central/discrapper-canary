t.d(n, { Z: () => _ });
var r = t(255367),
    i = t(73800),
    o = t(657707),
    s = t(793030),
    a = t(442837),
    l = t(692547),
    c = t(899667),
    d = t(905128),
    u = t(348189),
    p = t(388032),
    m = t(45355);
function _(e) {
    let { guildId: n, powerups: t } = e,
        _ = (0, a.e7)([d.Z], () => {
            var e, t;
            return null != (t = null == (e = d.Z.getStateForGuild(n)) ? void 0 : e.appliedBoosts) ? t : 0;
        }),
        x = (0, a.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(n), [n]),
        f =
            _ -
            i.useMemo(() => {
                var e, n, t;
                return null != (t = null == x || null == (n = x.filter) || null == (e = n.call(x, (e) => !e.ended && null == e.endsAt)) ? void 0 : e.length) ? t : 0;
            }, [x]);
    return f <= 0
        ? null
        : (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsx)(o.P4T, {
                      color: l.Z.colors.TEXT_WARNING,
                      className: m.icon
                  }),
                  (0, r.jsx)(s.xv, {
                      variant: 'text-md/semibold',
                      color: 'text-warning',
                      children: p.intl.string(u.default.n5hQhY)
                  }),
                  (0, r.jsx)(s.xv, {
                      variant: 'text-sm/medium',
                      children: p.intl.formatToPlainString(u.default.iAaAiI, {
                          boostCount: f,
                          perksString: t.map((e) => e.title).join(', ')
                      })
                  })
              ]
          });
}
