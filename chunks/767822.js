n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(92674),
    s = n(827734),
    a = n(397927),
    o = n(627794),
    c = n(53594),
    d = n(268749),
    u = n(690420),
    g = n(985018),
    m = n(522743);

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
        h = i.useMemo(() => () => (0, o._I)(t, n), [t, n]),
        [b] = i.useState(h),
        [x, j] = i.useState(!1),
        { editingRule: _, createNewEditingRule: O } = (0, d.U)(),
        { getDefaultRuleName: v } = c.i$[n],
        y = !(0, o.wC)(_) && (null == _ ? void 0 : _.triggerType) === n,
        [A, E] = i.useState(y ? _ : b),
        N = (0, a.zhh)({
            opacity: +!y,
            pointerEvents: y ? "none" : "all",
            config: f(p({}, l.config.stiff), {
                clamp: !0,
            }),
        }),
        S = (0, a.zhh)({
            opacity: +!!y,
            pointerEvents: y ? "all" : "none",
            config: f(p({}, l.config.stiff), {
                clamp: !0,
            }),
            onStart: () => {
                E(y ? _ : b);
            },
            onRest: () => {
                E(y ? _ : b), j(y);
            },
        });
    return null == _ || y
        ? (0, r.jsxs)("div", {
              className: m.$F,
              style: {
                  height: y ? "auto" : "60px",
              },
              children: [
                  (0, r.jsx)(l.animated.div, {
                      className: m.pT,
                      style: S,
                      children: (0, r.jsx)(u.A, {
                          rule: A,
                          persistEdit: x,
                      }),
                  }),
                  (0, r.jsx)(l.animated.div, {
                      className: m.animatedNewRuleContainer,
                      style: N,
                      children: (0, r.jsxs)(a.DUT, {
                          className: m.Y0,
                          onClick: () => {
                              O(t, n);
                          },
                          children: [
                              (0, r.jsx)(a.U1e, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: s.A.unsafe_rawColors.BLUE_345.css,
                                  className: m.WW,
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-link",
                                  children: g.intl.format(g.t.dNjRAf, {
                                      ruleName: v(),
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
