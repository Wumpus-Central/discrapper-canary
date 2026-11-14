var s = n(477900),
    i = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(855986),
    o = n(339350),
    u = n(687966),
    c = n(782134),
    d = n(271536),
    x = n(768622),
    m = n(793934),
    E = n(834730),
    h = n(122760),
    C = n(61387),
    f = n(79545),
    g = n(662940),
    A = n(535618),
    j = n(792996),
    S = n(853978);
n.d(
    t,
    {},
    {
        Q: function (e) {
            let { quest: t, isHovering: n = !1, content: l } = e,
                v = (0, f.Pd)(t),
                I = (0, a.bG)([h.A], () => v === f.UA.UNENROLLED && null != h.A.questEnrollmentBlockedUntil, [v]),
                N = (0, C.fc)(t),
                p = (0, C.I3)(t),
                O = i.useMemo(() => (0, g.Dd)(t.config, v, I), [t.config, v, I]),
                y = i.useMemo(() => (0, g.CK)(v, N, p, I), [v, N, p, I]),
                T = (0, A.A)(t, null == l),
                q = null != l ? l.leadingText : (T ?? O),
                w = null == l || l.showTask ? y : null;
            return null != l && null == q && null == w
                ? null
                : (0, s.jsxs)("div", {
                      className: r()(S.fC, { [S.R]: n }),
                      children: [
                          (0, s.jsxs)("div", {
                              className: S.qS,
                              children: [
                                  null != q &&
                                      (0, s.jsx)(E.E, {
                                          variant: "body-xs/semibold",
                                          className: S.SJ,
                                          color: "text-overlay-light",
                                          children: q,
                                      }),
                                  null != q &&
                                      null != w &&
                                      (0, s.jsx)(E.E, {
                                          variant: "body-xs/semibold",
                                          color: "text-overlay-light",
                                          className: S.If,
                                          children: "\u2022",
                                      }),
                                  null != w &&
                                      (0, s.jsxs)("span", {
                                          className: S.BA,
                                          children: [
                                              (function (e, t) {
                                                  let n = { size: "xxs", className: S.rF, color: "currentColor" };
                                                  if (t) return (0, s.jsx)(o.HourglassIcon, { ...n });
                                                  switch ((0, g.pv)(e)) {
                                                      case g.UK.PLAY:
                                                          return (0, s.jsx)(u.GameControllerIcon, { ...n });
                                                      case g.UK.WATCH:
                                                          return (0, s.jsx)(c.PlayIcon, { ...n });
                                                      case g.UK.ACTIVITY:
                                                          return (0, s.jsx)(d.QuestsMissionsIcon, { ...n });
                                                      case g.UK.INSTANT_PLAY:
                                                          return (0, s.jsx)(x.FlashIcon, { ...n });
                                                      case g.UK.ARENA:
                                                          return (0, s.jsx)(m.QuestsArenaIcon, { ...n });
                                                  }
                                              })(t, I),
                                              (0, s.jsx)(E.E, {
                                                  variant: "body-xs/semibold",
                                                  tag: "span",
                                                  color: "text-overlay-light",
                                                  children: w,
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                          t.preview &&
                              null == l &&
                              (0, s.jsx)("div", {
                                  className: r()(S.qS, S.WZ),
                                  children: (0, s.jsx)(E.E, {
                                      variant: "body-xs/semibold",
                                      color: "currentColor",
                                      children: j.intl.string(j.t.SKNnqq),
                                  }),
                              }),
                      ],
                  });
        },
    },
);
