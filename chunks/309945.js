t.d(n, { Z: () => v });
var i = t(200651),
    r = t(192379),
    o = t(657707),
    s = t(793030),
    a = t(442837),
    l = t(692547),
    c = t(899667),
    d = t(905128),
    u = t(367123),
    x = t(388032),
    m = t(576945);
function v(e) {
    let { guildId: n, powerups: t } = e,
        v = (0, a.e7)([d.Z], () => {
            var e, t;
            return null !== (t = null === (e = d.Z.getStateForGuild(n)) || void 0 === e ? void 0 : e.appliedBoosts) && void 0 !== t ? t : 0;
        }),
        p = (0, a.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(n), [n]),
        _ =
            v -
            r.useMemo(() => {
                var e, n, t;
                return null !== (t = null == p ? void 0 : null === (n = p.filter) || void 0 === n ? void 0 : null === (e = n.call(p, (e) => !e.ended && null == e.endsAt)) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
            }, [p]);
    return _ <= 0
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(o.P4T, {
                      color: l.Z.colors.TEXT_WARNING,
                      className: m.icon
                  }),
                  (0, i.jsx)(s.xv, {
                      variant: 'text-md/semibold',
                      color: 'text-warning',
                      children: x.NW.string(u.Z.n5hQhY)
                  }),
                  (0, i.jsx)(s.xv, {
                      variant: 'text-sm/medium',
                      children: x.NW.formatToPlainString(u.Z.iAaAiI, {
                          boostCount: _,
                          perksString: t.map((e) => e.title).join(', ')
                      })
                  })
              ]
          });
}
