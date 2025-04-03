n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(642128),
    a = n(722770),
    l = n(481060),
    o = n(236413),
    c = n(85960),
    d = n(65912),
    u = n(564488),
    m = n(388032),
    g = n(914661);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { guildId: t, triggerType: n } = e,
        f = i.useMemo(() => () => (0, o.ep)(t, n), [t, n]),
        [b] = i.useState(f),
        [x, j] = i.useState(!1),
        { editingRule: N, createNewEditingRule: _ } = (0, d.V)(),
        { getDefaultRuleName: v } = c.I6[n],
        C = !(0, o.Vb)(N) && (null == N ? void 0 : N.triggerType) === n,
        [O, y] = i.useState(C ? N : b),
        I = (0, l.q_F)({
            opacity: +!C,
            pointerEvents: C ? 'none' : 'all',
            config: h(p({}, s.config.stiff), { clamp: !0 })
        }),
        E = (0, l.q_F)({
            opacity: +!!C,
            pointerEvents: C ? 'all' : 'none',
            config: h(p({}, s.config.stiff), { clamp: !0 }),
            onStart: () => {
                y(C ? N : b);
            },
            onRest: () => {
                y(C ? N : b), j(C);
            }
        });
    return null == N || C
        ? (0, r.jsxs)('div', {
              className: g.mainRuleContainer,
              style: { height: C ? 'auto' : '60px' },
              children: [
                  (0, r.jsx)(s.animated.div, {
                      className: g.animatedRuleCardContainer,
                      style: E,
                      children: (0, r.jsx)(u.Z, {
                          rule: O,
                          persistEdit: x
                      })
                  }),
                  (0, r.jsx)(s.animated.div, {
                      className: g.animatedNewRuleContainer,
                      style: I,
                      children: (0, r.jsxs)(l.P3F, {
                          className: g.addAnotherRuleCardContainer,
                          onClick: () => {
                              _(t, n);
                          },
                          children: [
                              (0, r.jsx)(l.oFk, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: a.Z.BLUE_345,
                                  className: g.plusIcon
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-md/semibold',
                                  color: 'text-link',
                                  children: m.NW.format(m.t.dNjRAQ, { ruleName: v() })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
