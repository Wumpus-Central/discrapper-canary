n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    o = n(657707),
    a = n(793030),
    s = n(442837),
    l = n(692547),
    c = n(899667),
    d = n(905128),
    u = n(93841),
    p = n(388032),
    m = n(45355);
function _(e) {
    let { guildId: t, powerups: n } = e,
        _ = (0, s.e7)([d.Z], () => {
            var e, n;
            return null != (n = null == (e = d.Z.getStateForGuild(t)) ? void 0 : e.appliedBoosts) ? n : 0;
        }),
        f = (0, s.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(t), [t]),
        x =
            _ -
            i.useMemo(() => {
                var e, t, n;
                return null != (n = null == f || null == (t = f.filter) || null == (e = t.call(f, (e) => !e.ended && null == e.endsAt)) ? void 0 : e.length) ? n : 0;
            }, [f]);
    return x <= 0
        ? null
        : (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsx)(o.P4T, {
                      color: l.Z.colors.TEXT_FEEDBACK_WARNING,
                      className: m.icon
                  }),
                  (0, r.jsx)(a.xv, {
                      variant: 'text-md/semibold',
                      color: 'text-feedback-warning',
                      children: p.intl.string(u.default.n5hQhY)
                  }),
                  (0, r.jsx)(a.xv, {
                      variant: 'text-sm/medium',
                      children: p.intl.formatToPlainString(u.default.iAaAiI, {
                          boostCount: x,
                          perksString: n.map((e) => e.title).join(', ')
                      })
                  })
              ]
          });
}
