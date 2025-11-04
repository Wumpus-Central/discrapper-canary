n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(358458),
    a = n(722770),
    s = n(481060),
    o = n(236413),
    c = n(85960),
    d = n(65912),
    u = n(564488),
    g = n(388032),
    m = n(32490);
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
        [b] = i.useState(h),
        [x, j] = i.useState(!1),
        { editingRule: v, createNewEditingRule: _ } = (0, d.V)(),
        { getDefaultRuleName: O } = c.I6[n],
        C = !(0, o.Vb)(v) && (null == v ? void 0 : v.triggerType) === n,
        [y, N] = i.useState(C ? v : b),
        E = (0, s.q_F)({
            opacity: +!C,
            pointerEvents: C ? "none" : "all",
            config: f(p({}, l.config.stiff), { clamp: !0 }),
        }),
        I = (0, s.q_F)({
            opacity: +!!C,
            pointerEvents: C ? "all" : "none",
            config: f(p({}, l.config.stiff), { clamp: !0 }),
            onStart: () => {
                N(C ? v : b);
            },
            onRest: () => {
                N(C ? v : b), j(C);
            },
        });
    return null == v || C
        ? (0, r.jsxs)("div", {
              className: m.mainRuleContainer,
              style: { height: C ? "auto" : "60px" },
              children: [
                  (0, r.jsx)(l.animated.div, {
                      className: m.animatedRuleCardContainer,
                      style: I,
                      children: (0, r.jsx)(u.Z, {
                          rule: y,
                          persistEdit: x,
                      }),
                  }),
                  (0, r.jsx)(l.animated.div, {
                      className: m.animatedNewRuleContainer,
                      style: E,
                      children: (0, r.jsxs)(s.P3F, {
                          className: m.addAnotherRuleCardContainer,
                          onClick: () => {
                              _(t, n);
                          },
                          children: [
                              (0, r.jsx)(s.oFk, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: a.Z.BLUE_345,
                                  className: m.plusIcon,
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-link",
                                  children: g.intl.format(g.t.dNjRAf, { ruleName: O() }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
