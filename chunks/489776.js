n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
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
    h = n(697132);
function g(e) {
    let { guildId: t, triggerType: n } = e,
        g = r.useMemo(() => () => (0, o.ep)(t, n), [t, n]),
        [x] = r.useState(g),
        [p, f] = r.useState(!1),
        { editingRule: C, createNewEditingRule: v } = (0, d.V)(),
        { getDefaultRuleName: I } = c.I6[n],
        N = !(0, o.Vb)(C) && (null == C ? void 0 : C.triggerType) === n,
        [_, T] = r.useState(N ? C : x),
        j = (0, a.useSpring)({
            opacity: N ? 0 : 1,
            pointerEvents: N ? 'none' : 'all',
            config: {
                ...l.config.stiff,
                clamp: !0
            }
        }),
        b = (0, a.useSpring)({
            opacity: N ? 1 : 0,
            pointerEvents: N ? 'all' : 'none',
            config: {
                ...l.config.stiff,
                clamp: !0
            },
            onStart: () => {
                T(N ? C : x);
            },
            onRest: () => {
                T(N ? C : x), f(N);
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
                          rule: _,
                          persistEdit: p
                      })
                  }),
                  (0, i.jsx)(l.animated.div, {
                      className: h.animatedNewRuleContainer,
                      style: j,
                      children: (0, i.jsxs)(a.Clickable, {
                          className: h.addAnotherRuleCardContainer,
                          onClick: () => {
                              v(t, n);
                          },
                          children: [
                              (0, i.jsx)(a.CirclePlusIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: s.Z.BLUE_345,
                                  className: h.plusIcon
                              }),
                              (0, i.jsx)(a.Text, {
                                  variant: 'text-md/semibold',
                                  color: 'text-link',
                                  children: m.intl.format(m.t.dNjRAQ, { ruleName: I() })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
