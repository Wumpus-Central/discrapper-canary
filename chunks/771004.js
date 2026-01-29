l.d(t, {
    A: () => j,
    h: () => p,
}),
    l(896048);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(934551),
    o = l(158954),
    c = l(827734),
    d = l(397927),
    u = l(203736),
    m = l(409626),
    x = l(936636),
    f = l(985018),
    g = l(851822),
    h = l(812254);

function p(e) {
    let { detectedGame: t, trackAction: l } = e,
        [a, p] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [j, v] = i.useState(!0),
        [b, y] = i.useState(!1),
        A = i.useRef(null),
        { width: N, height: O } = (0, u.A)();
    return (i.useEffect(() => {
        let e = A.current;
        null != e && y(e.scrollHeight - e.clientHeight > 1 || !j);
    }, [A, N, O, j]),
    null == t.summary)
        ? null
        : (0, n.jsxs)("div", {
              className: r()(g.fi, g.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)("div", {
                          className: r()(g.nM, g.Lc),
                          children: [
                              (0, n.jsx)(s.PencilSparkleIcon, {
                                  color: c.A.colors.TEXT_DEFAULT,
                                  size: "xs",
                              }),
                              (0, n.jsx)(o.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: a
                                      ? f.intl.format(f.t.aZ2iIp, {
                                            onShowOriginal: () => p(!1),
                                        })
                                      : f.intl.format(f.t["/2ylF4"], {
                                            onShowTranslated: () => p(!0),
                                        }),
                              }),
                          ],
                      }),
                  (0, n.jsx)(o.EYj, {
                      ref: A,
                      lineClamp: j ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: a ? t.summaryLocalized : t.summary,
                  }),
                  b &&
                      (0, n.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              l(j ? m.Ws.ShowMore : m.Ws.ShowLess), v(!j);
                          },
                          children: (0, n.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: j ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
                  (0, n.jsx)(x.A, {
                      className: h.B,
                      detectedGame: t,
                  }),
              ],
          });
}

function j(e) {
    let { detectedGame: t, trackAction: l } = e,
        [a, p] = i.useState((null == t ? void 0 : t.summaryLocalized) != null),
        [j, v] = i.useState(!0),
        [b, y] = i.useState(!1),
        A = i.useRef(null),
        { width: N, height: O } = (0, u.A)();
    return (i.useEffect(() => {
        let e = A.current;
        null != e && y(e.scrollHeight - e.clientHeight > 1 || !j);
    }, [A, N, O, j]),
    null == t.summary)
        ? null
        : (0, n.jsxs)("div", {
              className: r()(g.fi, g.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)("div", {
                          className: r()(g.nM, g.Lc),
                          children: [
                              (0, n.jsx)(s.PencilSparkleIcon, {
                                  color: c.A.colors.TEXT_DEFAULT,
                                  size: "xs",
                              }),
                              (0, n.jsx)(o.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: a
                                      ? f.intl.format(f.t.aZ2iIp, {
                                            onShowOriginal: () => p(!1),
                                        })
                                      : f.intl.format(f.t["/2ylF4"], {
                                            onShowTranslated: () => p(!0),
                                        }),
                              }),
                          ],
                      }),
                  (0, n.jsx)(o.EYj, {
                      ref: A,
                      lineClamp: j ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: a ? t.summaryLocalized : t.summary,
                  }),
                  b &&
                      (0, n.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              l(j ? m.Ws.ShowMore : m.Ws.ShowLess), v(!j);
                          },
                          children: (0, n.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: j ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
                  (0, n.jsx)(x.A, {
                      className: h.B,
                      detectedGame: t,
                  }),
              ],
          });
}
