n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(432022),
    s = n(827734),
    a = n(397927),
    c = n(627794),
    o = n(53594),
    d = n(268749),
    u = n(690420),
    f = n(985018),
    g = n(522743);
function b(e) {
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
function m(e, t) {
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
        p = i.useMemo(() => () => (0, c._I)(t, n), [t, n]),
        [x] = i.useState(p),
        [h, j] = i.useState(!1),
        { editingRule: O, createNewEditingRule: y } = (0, d.U)(),
        { getDefaultRuleName: v } = o.i$[n],
        A = !(0, c.wC)(O) && (null == O ? void 0 : O.triggerType) === n,
        [E, N] = i.useState(A ? O : x),
        _ = (0, a.zhh)({
            opacity: +!A,
            pointerEvents: A ? "none" : "all",
            config: m(b({}, l.config.stiff), { clamp: !0 }),
        }),
        S = (0, a.zhh)({
            opacity: +!!A,
            pointerEvents: A ? "all" : "none",
            config: m(b({}, l.config.stiff), { clamp: !0 }),
            onStart: () => {
                N(A ? O : x);
            },
            onRest: () => {
                N(A ? O : x), j(A);
            },
        });
    return null == O || A
        ? (0, r.jsxs)("div", {
              className: g.$F,
              style: { height: A ? "auto" : "60px" },
              children: [
                  (0, r.jsx)(l.animated.div, {
                      className: g.pT,
                      style: S,
                      children: (0, r.jsx)(u.A, {
                          rule: E,
                          persistEdit: h,
                      }),
                  }),
                  (0, r.jsx)(l.animated.div, {
                      className: g.animatedNewRuleContainer,
                      style: _,
                      children: (0, r.jsxs)(a.DUT, {
                          className: g.Y0,
                          onClick: () => {
                              y(t, n);
                          },
                          children: [
                              (0, r.jsx)(a.U1e, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: s.A.unsafe_rawColors.BLUE_345.css,
                                  className: g.WW,
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-link",
                                  children: f.intl.format(f.t.dNjRAf, { ruleName: v() }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
