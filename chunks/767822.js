"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(382222),
    r = n(827734),
    a = n(397927),
    o = n(627794),
    d = n(53594),
    c = n(268749),
    u = n(690420),
    m = n(985018),
    g = n(170218);
function x(e) {
    let { guildId: t, triggerType: n } = e,
        x = s.useMemo(() => () => (0, o._I)(t, n), [t, n]),
        [h] = s.useState(x),
        [_, p] = s.useState(!1),
        { editingRule: A, createNewEditingRule: f } = (0, c.U)(),
        { getDefaultRuleName: j } = d.i$[n],
        N = !(0, o.wC)(A) && A?.triggerType === n,
        [E, b] = s.useState(N ? A : h),
        C = (0, a.zhh)({ opacity: +!N, pointerEvents: N ? "none" : "all", config: { ...l.config.stiff, clamp: !0 } }),
        T = (0, a.zhh)({
            opacity: +!!N,
            pointerEvents: N ? "all" : "none",
            config: { ...l.config.stiff, clamp: !0 },
            onStart: () => {
                b(N ? A : h);
            },
            onRest: () => {
                b(N ? A : h), p(N);
            },
        });
    return null == A || N
        ? (0, i.jsxs)("div", {
              className: g.$F,
              style: { height: N ? "auto" : "60px" },
              children: [
                  (0, i.jsx)(l.animated.div, {
                      className: g.pT,
                      style: T,
                      children: (0, i.jsx)(u.A, { rule: E, persistEdit: _ }),
                  }),
                  (0, i.jsx)(l.animated.div, {
                      className: g.animatedNewRuleContainer,
                      style: C,
                      children: (0, i.jsxs)(a.DUT, {
                          className: g.Y0,
                          onClick: () => {
                              f(t, n);
                          },
                          children: [
                              (0, i.jsx)(a.U1e, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: r.A.unsafe_rawColors.BLUE_345.css,
                                  className: g.WW,
                              }),
                              (0, i.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-link",
                                  children: m.intl.format(m.t.dNjRAf, { ruleName: j() }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
