n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(642128),
    s = n(722770),
    a = n(481060),
    o = n(236413),
    c = n(85960),
    d = n(65912),
    u = n(564488),
    m = n(388032),
    h = n(751254);
function g(e) {
    let { guildId: t, triggerType: n } = e,
        g = r.useMemo(() => () => (0, o.ep)(t, n), [t, n]),
        [x] = r.useState(g),
        [p, _] = r.useState(!1),
        { editingRule: C, createNewEditingRule: f } = (0, d.V)(),
        { getDefaultRuleName: v } = c.I6[n],
        N = !(0, o.Vb)(C) && (null == C ? void 0 : C.triggerType) === n,
        [j, I] = r.useState(N ? C : x),
        E = (0, a.q_F)({
            opacity: N ? 0 : 1,
            pointerEvents: N ? 'none' : 'all',
            config: {
                ...l.config.stiff,
                clamp: !0
            }
        }),
        b = (0, a.q_F)({
            opacity: N ? 1 : 0,
            pointerEvents: N ? 'all' : 'none',
            config: {
                ...l.config.stiff,
                clamp: !0
            },
            onStart: () => {
                I(N ? C : x);
            },
            onRest: () => {
                I(N ? C : x), _(N);
            }
        });
    return null == C || N
        ? (0, i.jsxs)('div', {
              className: h.mainRuleContainer,
              style: { height: N ? 'auto' : '60px' },
              children: [
                  (0, i.jsx)(l.animated.div, {
                      className: h.animatedRuleCardContainer,
                      style: b,
                      children: (0, i.jsx)(u.Z, {
                          rule: j,
                          persistEdit: p
                      })
                  }),
                  (0, i.jsx)(l.animated.div, {
                      className: h.animatedNewRuleContainer,
                      style: E,
                      children: (0, i.jsxs)(a.P3F, {
                          className: h.addAnotherRuleCardContainer,
                          onClick: () => {
                              f(t, n);
                          },
                          children: [
                              (0, i.jsx)(a.oFk, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: s.Z.BLUE_345,
                                  className: h.plusIcon
                              }),
                              (0, i.jsx)(a.Text, {
                                  variant: 'text-md/semibold',
                                  color: 'text-link',
                                  children: m.intl.format(m.t.dNjRAQ, { ruleName: v() })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
