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
    p = n(617145);
function g(e) {
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
        { editingRule: N, createNewEditingRule: v } = (0, d.V)(),
        { getDefaultRuleName: _ } = c.I6[n],
        O = !(0, o.Vb)(N) && (null == N ? void 0 : N.triggerType) === n,
        [y, C] = i.useState(O ? N : b),
        I = (0, l.q_F)({
            opacity: +!O,
            pointerEvents: O ? 'none' : 'all',
            config: h(g({}, s.config.stiff), { clamp: !0 })
        }),
        E = (0, l.q_F)({
            opacity: +!!O,
            pointerEvents: O ? 'all' : 'none',
            config: h(g({}, s.config.stiff), { clamp: !0 }),
            onStart: () => {
                C(O ? N : b);
            },
            onRest: () => {
                C(O ? N : b), j(O);
            }
        });
    return null == N || O
        ? (0, r.jsxs)('div', {
              className: p.mainRuleContainer,
              style: { height: O ? 'auto' : '60px' },
              children: [
                  (0, r.jsx)(s.animated.div, {
                      className: p.animatedRuleCardContainer,
                      style: E,
                      children: (0, r.jsx)(u.Z, {
                          rule: y,
                          persistEdit: x
                      })
                  }),
                  (0, r.jsx)(s.animated.div, {
                      className: p.animatedNewRuleContainer,
                      style: I,
                      children: (0, r.jsxs)(l.P3F, {
                          className: p.addAnotherRuleCardContainer,
                          onClick: () => {
                              v(t, n);
                          },
                          children: [
                              (0, r.jsx)(l.oFk, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: a.Z.BLUE_345,
                                  className: p.plusIcon
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-md/semibold',
                                  color: 'text-link',
                                  children: m.NW.format(m.t.dNjRAQ, { ruleName: _() })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
