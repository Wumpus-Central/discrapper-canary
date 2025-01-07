n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(666912),
    a = n(722770),
    s = n(481060),
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
        { getDefaultRuleName: _ } = c.I6[n],
        I = !(0, o.Vb)(C) && (null == C ? void 0 : C.triggerType) === n,
        [N, T] = r.useState(I ? C : x),
        j = (0, s.useSpring)({
            opacity: I ? 0 : 1,
            pointerEvents: I ? 'none' : 'all',
            config: {
                ...l.config.stiff,
                clamp: !0
            }
        }),
        b = (0, s.useSpring)({
            opacity: I ? 1 : 0,
            pointerEvents: I ? 'all' : 'none',
            config: {
                ...l.config.stiff,
                clamp: !0
            },
            onStart: () => {
                T(I ? C : x);
            },
            onRest: () => {
                T(I ? C : x), f(I);
            }
        });
    return null == C || I
        ? (0, i.jsxs)('div', {
              className: h.mainRuleContainer,
              style: { height: I ? 'auto' : '60px' },
              children: [
                  (0, i.jsx)(l.animated.div, {
                      className: h.animatedRuleCardContainer,
                      style: b,
                      children: (0, i.jsx)(u.Z, {
                          rule: N,
                          persistEdit: p
                      })
                  }),
                  (0, i.jsx)(l.animated.div, {
                      className: h.animatedNewRuleContainer,
                      style: j,
                      children: (0, i.jsxs)(s.Clickable, {
                          className: h.addAnotherRuleCardContainer,
                          onClick: () => {
                              v(t, n);
                          },
                          children: [
                              (0, i.jsx)(s.CirclePlusIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: a.Z.BLUE_345,
                                  className: h.plusIcon
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/semibold',
                                  color: 'text-link',
                                  children: m.intl.format(m.t.dNjRAQ, { ruleName: _() })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
