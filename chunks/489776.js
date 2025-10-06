n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(137317),
    s = n(722770),
    a = n(481060),
    o = n(236413),
    c = n(85960),
    d = n(65912),
    u = n(564488),
    m = n(388032),
    g = n(32490);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
        { editingRule: _, createNewEditingRule: v } = (0, d.V)(),
        { getDefaultRuleName: C } = c.I6[n],
        O = !(0, o.Vb)(_) && (null == _ ? void 0 : _.triggerType) === n,
        [y, N] = i.useState(O ? _ : x),
        E = (0, a.q_F)({
            opacity: +!O,
            pointerEvents: O ? "none" : "all",
            config: f(p({}, l.config.stiff), { clamp: !0 }),
        }),
        I = (0, a.q_F)({
            opacity: +!!O,
            pointerEvents: O ? "all" : "none",
            config: f(p({}, l.config.stiff), { clamp: !0 }),
            onStart: () => {
                N(O ? _ : x);
            },
            onRest: () => {
                N(O ? _ : x), j(O);
            },
        });
    return null == _ || O
        ? (0, r.jsxs)("div", {
              className: g.mainRuleContainer,
              style: { height: O ? "auto" : "60px" },
              children: [
                  (0, r.jsx)(l.animated.div, {
                      className: g.animatedRuleCardContainer,
                      style: I,
                      children: (0, r.jsx)(u.Z, {
                          rule: y,
                          persistEdit: b,
                      }),
                  }),
                  (0, r.jsx)(l.animated.div, {
                      className: g.animatedNewRuleContainer,
                      style: E,
                      children: (0, r.jsxs)(a.P3F, {
                          className: g.addAnotherRuleCardContainer,
                          onClick: () => {
                              v(t, n);
                          },
                          children: [
                              (0, r.jsx)(a.oFk, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: s.Z.BLUE_345,
                                  className: g.plusIcon,
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-link",
                                  children: m.intl.format(m.t.dNjRAQ, { ruleName: C() }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
