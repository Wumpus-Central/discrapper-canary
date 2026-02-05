i.d(t, { A: () => p, h: () => j });
var l = i(627968),
    a = i(64700),
    n = i(503698),
    s = i.n(n),
    r = i(934551),
    c = i(158954),
    o = i(827734),
    d = i(397927),
    u = i(203736),
    m = i(409626),
    x = i(936636),
    g = i(985018),
    h = i(851822),
    f = i(812254);
function j(e) {
    let { detectedGame: t, trackAction: i } = e,
        [n, j] = a.useState(t?.summaryLocalized != null),
        [p, v] = a.useState(!0),
        [A, N] = a.useState(!1),
        _ = a.useRef(null),
        { width: I, height: b } = (0, u.A)();
    return (a.useEffect(() => {
        let e = _.current;
        null != e && N(e.scrollHeight - e.clientHeight > 1 || !p);
    }, [_, I, b, p]),
    null == t.summary)
        ? null
        : (0, l.jsxs)("div", {
              className: s()(h.fi, h.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, l.jsxs)("div", {
                          className: s()(h.nM, h.Lc),
                          children: [
                              (0, l.jsx)(r.PencilSparkleIcon, { color: o.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, l.jsx)(c.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: n
                                      ? g.intl.format(g.t.aZ2iIp, { onShowOriginal: () => j(!1) })
                                      : g.intl.format(g.t["/2ylF4"], { onShowTranslated: () => j(!0) }),
                              }),
                          ],
                      }),
                  (0, l.jsx)(c.EYj, {
                      ref: _,
                      lineClamp: p ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: n ? t.summaryLocalized : t.summary,
                  }),
                  A &&
                      (0, l.jsx)(d.DUT, {
                          className: h.vk,
                          onClick: () => {
                              i(p ? m.Ws.ShowMore : m.Ws.ShowLess), v(!p);
                          },
                          children: (0, l.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: p ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"]),
                          }),
                      }),
                  (0, l.jsx)(x.A, { className: f.B, detectedGame: t }),
              ],
          });
}
function p(e) {
    let { detectedGame: t, trackAction: i } = e,
        [n, j] = a.useState(t?.summaryLocalized != null),
        [p, v] = a.useState(!0),
        [A, N] = a.useState(!1),
        _ = a.useRef(null),
        { width: I, height: b } = (0, u.A)();
    return (a.useEffect(() => {
        let e = _.current;
        null != e && N(e.scrollHeight - e.clientHeight > 1 || !p);
    }, [_, I, b, p]),
    null == t.summary)
        ? null
        : (0, l.jsxs)("div", {
              className: s()(h.fi, h.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, l.jsxs)("div", {
                          className: s()(h.nM, h.Lc),
                          children: [
                              (0, l.jsx)(r.PencilSparkleIcon, { color: o.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, l.jsx)(c.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: n
                                      ? g.intl.format(g.t.aZ2iIp, { onShowOriginal: () => j(!1) })
                                      : g.intl.format(g.t["/2ylF4"], { onShowTranslated: () => j(!0) }),
                              }),
                          ],
                      }),
                  (0, l.jsx)(c.EYj, {
                      ref: _,
                      lineClamp: p ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: n ? t.summaryLocalized : t.summary,
                  }),
                  A &&
                      (0, l.jsx)(d.DUT, {
                          className: h.vk,
                          onClick: () => {
                              i(p ? m.Ws.ShowMore : m.Ws.ShowLess), v(!p);
                          },
                          children: (0, l.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: p ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"]),
                          }),
                      }),
                  (0, l.jsx)(x.A, { className: f.B, detectedGame: t }),
              ],
          });
}
