n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(467721),
    a = n(692547),
    s = n(481060),
    o = n(236413),
    c = n(85960),
    d = n(65912),
    u = n(564488),
    g = n(388032),
    f = n(402766);
function m(e) {
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
function b(e, t) {
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
function p(e) {
    let { guildId: t, triggerType: n } = e,
        p = i.useMemo(() => () => (0, o.ep)(t, n), [t, n]),
        [h] = i.useState(p),
        [x, j] = i.useState(!1),
        { editingRule: v, createNewEditingRule: O } = (0, d.V)(),
        { getDefaultRuleName: C } = c.I6[n],
        y = !(0, o.Vb)(v) && (null == v ? void 0 : v.triggerType) === n,
        [N, E] = i.useState(y ? v : h),
        I = (0, s.q_F)({
            opacity: +!y,
            pointerEvents: y ? "none" : "all",
            config: b(m({}, l.config.stiff), { clamp: !0 }),
        }),
        S = (0, s.q_F)({
            opacity: +!!y,
            pointerEvents: y ? "all" : "none",
            config: b(m({}, l.config.stiff), { clamp: !0 }),
            onStart: () => {
                E(y ? v : h);
            },
            onRest: () => {
                E(y ? v : h), j(y);
            },
        });
    return null == v || y
        ? (0, r.jsxs)("div", {
              className: f.mainRuleContainer,
              style: { height: y ? "auto" : "60px" },
              children: [
                  (0, r.jsx)(l.animated.div, {
                      className: f.animatedRuleCardContainer,
                      style: S,
                      children: (0, r.jsx)(u.Z, {
                          rule: N,
                          persistEdit: x,
                      }),
                  }),
                  (0, r.jsx)(l.animated.div, {
                      className: f.animatedNewRuleContainer,
                      style: I,
                      children: (0, r.jsxs)(s.P3F, {
                          className: f.addAnotherRuleCardContainer,
                          onClick: () => {
                              O(t, n);
                          },
                          children: [
                              (0, r.jsx)(s.oFk, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: a.Z.unsafe_rawColors.BLUE_345.css,
                                  className: f.plusIcon,
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-link",
                                  children: g.intl.format(g.t.dNjRAf, { ruleName: C() }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
