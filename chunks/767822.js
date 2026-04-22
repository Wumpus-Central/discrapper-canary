n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(517738),
    r = n(827734),
    a = n(717421),
    o = n(939249),
    d = n(245604),
    c = n(834730),
    u = n(627794),
    m = n(53594),
    g = n(268749),
    h = n(690420),
    x = n(985018),
    _ = n(676602);
function p(e) {
    let { guildId: t, triggerType: n } = e,
        p = l.useMemo(() => () => (0, u._I)(t, n), [t, n]),
        [A] = l.useState(p),
        [E, f] = l.useState(!1),
        { editingRule: j, createNewEditingRule: N } = (0, g.U)(),
        { getDefaultRuleName: I } = m.i$[n],
        C = !(0, u.wC)(j) && j?.triggerType === n,
        [b, v] = l.useState(C ? j : A),
        S = (0, a.z)({ opacity: +!C, pointerEvents: C ? "none" : "all", config: { ...s.config.stiff, clamp: !0 } }),
        T = (0, a.z)({
            opacity: +!!C,
            pointerEvents: C ? "all" : "none",
            config: { ...s.config.stiff, clamp: !0 },
            onStart: () => {
                v(C ? j : A);
            },
            onRest: () => {
                v(C ? j : A), f(C);
            },
        });
    return null == j || C
        ? (0, i.jsxs)("div", {
              className: _.$F,
              style: { height: C ? "auto" : "60px" },
              children: [
                  (0, i.jsx)(s.animated.div, {
                      className: _.pT,
                      style: T,
                      children: (0, i.jsx)(h.A, { rule: b, persistEdit: E }),
                  }),
                  (0, i.jsx)(s.animated.div, {
                      className: _.animatedNewRuleContainer,
                      style: S,
                      children: (0, i.jsxs)(o.D, {
                          className: _.Y0,
                          onClick: () => {
                              N(t, n);
                          },
                          children: [
                              (0, i.jsx)(d.U, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: r.A.unsafe_rawColors.BLUE_345.css,
                                  className: _.WW,
                              }),
                              (0, i.jsx)(c.E, {
                                  variant: "text-md/semibold",
                                  color: "text-link",
                                  children: x.intl.format(x.t.dNjRAf, { ruleName: I() }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
