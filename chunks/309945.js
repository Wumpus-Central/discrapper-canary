t.d(n, { Z: () => _ });
var r = t(255367),
    i = t(73800),
    o = t(657707),
    a = t(793030),
    s = t(442837),
    l = t(692547),
    c = t(899667),
    d = t(905128),
    u = t(93841),
    m = t(388032),
    p = t(45355);
function _(e) {
    let { guildId: n, powerups: t } = e,
        _ = (0, s.e7)([d.Z], () => {
            var e, t;
            return null != (t = null == (e = d.Z.getStateForGuild(n)) ? void 0 : e.appliedBoosts) ? t : 0;
        }),
        f = (0, s.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(n), [n]),
        x =
            _ -
            i.useMemo(() => {
                var e, n, t;
                return null != (t = null == f || null == (n = f.filter) || null == (e = n.call(f, (e) => !e.ended && null == e.endsAt)) ? void 0 : e.length) ? t : 0;
            }, [f]);
    return x <= 0
        ? null
        : (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsx)(o.P4T, {
                      color: l.Z.colors.TEXT_FEEDBACK_WARNING,
                      className: p.icon
                  }),
                  (0, r.jsx)(a.xv, {
                      variant: 'text-md/semibold',
                      color: 'text-feedback-warning',
                      children: m.intl.string(u.default.n5hQhY)
                  }),
                  (0, r.jsx)(a.xv, {
                      variant: 'text-sm/medium',
                      children: m.intl.formatToPlainString(u.default.iAaAiI, {
                          boostCount: x,
                          perksString: t.map((e) => e.title).join(', ')
                      })
                  })
              ]
          });
}
