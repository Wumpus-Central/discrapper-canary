n.d(t, { A: () => j, h: () => v });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(934551),
    o = n(158954),
    c = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    x = n(305080),
    f = n(936636),
    h = n(985018),
    g = n(851822),
    p = n(812254);
function v(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, x] = l.useState(t?.summaryLocalized != null),
        [v, j] = l.useState(!0),
        [_, A] = l.useState(!1),
        E = l.useRef(null),
        { width: I, height: b } = (0, u.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && A(e.scrollHeight - e.clientHeight > 1 || !v);
    }, [E, I, b, v]),
    null == t.summary)
        ? null
        : (0, a.jsxs)("div", {
              className: r()(g.fi, g.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: r()(g.nM, g.Lc),
                          children: [
                              (0, a.jsx)(s.PencilSparkleIcon, { color: c.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, a.jsx)(o.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: i
                                      ? h.intl.format(h.t.aZ2iIp, { onShowOriginal: () => x(!1) })
                                      : h.intl.format(h.t["/2ylF4"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(o.EYj, {
                      ref: E,
                      lineClamp: v ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.summary,
                  }),
                  _ &&
                      (0, a.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(v ? m.Ws.ShowMore : m.Ws.ShowLess), j(!v);
                          },
                          children: (0, a.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: v ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(f.A, { className: p.B, detectedGame: t }),
              ],
          });
}
function j(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, s] = l.useState(!0),
        [c, f] = l.useState(!1),
        p = l.useRef(null),
        { width: v, height: j } = (0, u.A)(),
        { isTwoColumn: _ } = (0, x.c)();
    return (l.useEffect(() => {
        let e = p.current;
        null != e && f(e.scrollHeight - e.clientHeight > 1 || !i);
    }, [p, v, j, i, _]),
    null == t.summary)
        ? null
        : (0, a.jsxs)("div", {
              className: r()(g.fi, g.mX),
              children: [
                  (0, a.jsx)(o.EYj, {
                      ref: p,
                      lineClamp: i ? (_ ? 8 : 5) : void 0,
                      variant: "text-sm/normal",
                      children: t.summary,
                  }),
                  c &&
                      (0, a.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(i ? m.Ws.ShowMore : m.Ws.ShowLess), s(!i);
                          },
                          children: (0, a.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: i ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"]),
                          }),
                      }),
              ],
          });
}
