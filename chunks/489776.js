(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(42133),
    s = n(722770),
    a = n(481060),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function f(e, t) {
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
function h(e) {
    let { guildId: t, triggerType: n } = e,
        h = i.useMemo(() => () => (0, o.ep)(t, n), [t, n]),
        [x] = i.useState(h),
        [b, j] = i.useState(!1),
        { editingRule: v, createNewEditingRule: _ } = (0, d.V)(),
        { getDefaultRuleName: O } = c.I6[n],
        y = !(0, o.Vb)(v) && (null == v ? void 0 : v.triggerType) === n,
        [C, N] = i.useState(y ? v : x),
        I = (0, a.q_F)({
            opacity: +!y,
            pointerEvents: y ? 'none' : 'all',
            config: f(p({}, l.config.stiff), { clamp: !0 })
        }),
        E = (0, a.q_F)({
            opacity: +!!y,
            pointerEvents: y ? 'all' : 'none',
            config: f(p({}, l.config.stiff), { clamp: !0 }),
            onStart: () => {
                N(y ? v : x);
            },
            onRest: () => {
                (N(y ? v : x), j(y));
            }
        });
    return null == v || y
        ? (0, r.jsxs)('div', {
              className: g.mainRuleContainer,
              style: { height: y ? 'auto' : '60px' },
              children: [
                  (0, r.jsx)(l.animated.div, {
                      className: g.animatedRuleCardContainer,
                      style: E,
                      children: (0, r.jsx)(u.Z, {
                          rule: C,
                          persistEdit: b
                      })
                  }),
                  (0, r.jsx)(l.animated.div, {
                      className: g.animatedNewRuleContainer,
                      style: I,
                      children: (0, r.jsxs)(a.P3F, {
                          className: g.addAnotherRuleCardContainer,
                          onClick: () => {
                              _(t, n);
                          },
                          children: [
                              (0, r.jsx)(a.oFk, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: s.Z.BLUE_345,
                                  className: g.plusIcon
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: 'text-md/semibold',
                                  color: 'text-link',
                                  children: m.intl.format(m.t.dNjRAQ, { ruleName: O() })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
