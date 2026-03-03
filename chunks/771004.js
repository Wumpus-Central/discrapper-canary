i.d(t, { A: () => p, h: () => v });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(934551),
    o = i(158954),
    c = i(827734),
    d = i(397927),
    u = i(981355),
    m = i(409626),
    x = i(305080),
    g = i(936636),
    h = i(985018),
    f = i(851822),
    j = i(812254);
function v(e) {
    let { detectedGame: t, trackAction: i } = e,
        [a, x] = l.useState(t?.summaryLocalized != null),
        [v, p] = l.useState(!0),
        [A, E] = l.useState(!1),
        I = l.useRef(null),
        { width: _, height: N } = (0, u.A)();
    return (l.useEffect(() => {
        let e = I.current;
        null != e && E(e.scrollHeight - e.clientHeight > 1 || !v);
    }, [I, _, N, v]),
    null == t.summary)
        ? null
        : (0, n.jsxs)("div", {
              className: s()(f.fi, f.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)("div", {
                          className: s()(f.nM, f.Lc),
                          children: [
                              (0, n.jsx)(r.PencilSparkleIcon, { color: c.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, n.jsx)(o.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: a
                                      ? h.intl.format(h.t.aZ2iIp, { onShowOriginal: () => x(!1) })
                                      : h.intl.format(h.t["/2ylF4"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, n.jsx)(o.EYj, {
                      ref: I,
                      lineClamp: v ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: a ? t.summaryLocalized : t.summary,
                  }),
                  A &&
                      (0, n.jsx)(d.DUT, {
                          className: f.vk,
                          onClick: () => {
                              i(v ? m.Ws.ShowMore : m.Ws.ShowLess), p(!v);
                          },
                          children: (0, n.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: v ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"]),
                          }),
                      }),
                  (0, n.jsx)(g.A, { className: j.B, detectedGame: t }),
              ],
          });
}
function p(e) {
    let { detectedGame: t, trackAction: i } = e,
        [a, g] = l.useState(t?.summaryLocalized != null),
        [j, v] = l.useState(!0),
        [p, A] = l.useState(!1),
        E = l.useRef(null),
        { width: I, height: _ } = (0, u.A)(),
        { isTwoColumn: N } = (0, x.c)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && A(e.scrollHeight - e.clientHeight > 1 || !j);
    }, [E, I, _, j, N]),
    null == t.summary)
        ? null
        : (0, n.jsxs)("div", {
              className: s()(f.fi, f.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, n.jsxs)("div", {
                          className: s()(f.nM, f.Lc),
                          children: [
                              (0, n.jsx)(r.PencilSparkleIcon, { color: c.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, n.jsx)(o.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: a
                                      ? h.intl.format(h.t.aZ2iIp, { onShowOriginal: () => g(!1) })
                                      : h.intl.format(h.t["/2ylF4"], { onShowTranslated: () => g(!0) }),
                              }),
                          ],
                      }),
                  (0, n.jsx)(o.EYj, {
                      ref: E,
                      lineClamp: j ? (N ? 8 : 5) : void 0,
                      variant: "text-sm/normal",
                      children: a ? t.summaryLocalized : t.summary,
                  }),
                  p &&
                      (0, n.jsx)(d.DUT, {
                          className: f.vk,
                          onClick: () => {
                              i(j ? m.Ws.ShowMore : m.Ws.ShowLess), v(!j);
                          },
                          children: (0, n.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: j ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"]),
                          }),
                      }),
              ],
          });
}
