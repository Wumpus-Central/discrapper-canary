"use strict";
n.d(t, { A: () => v, h: () => p });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(934551),
    c = n(158954),
    o = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    x = n(305080),
    h = n(936636),
    f = n(985018),
    g = n(851822),
    _ = n(812254);
function p(e) {
    let { detectedGame: t, trackAction: n } = e,
        [a, x] = l.useState(t?.summaryLocalized != null),
        [p, v] = l.useState(!0),
        [I, j] = l.useState(!1),
        A = l.useRef(null),
        { width: E, height: b } = (0, u.A)();
    return (l.useEffect(() => {
        let e = A.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !p);
    }, [A, E, b, p]),
    null == t.summary)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(g.fi, g.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)("div", {
                          className: r()(g.nM, g.Lc),
                          children: [
                              (0, i.jsx)(s.PencilSparkleIcon, { color: o.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, i.jsx)(c.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: a
                                      ? f.intl.format(f.t.aZ2iIp, { onShowOriginal: () => x(!1) })
                                      : f.intl.format(f.t["/2ylF4"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, i.jsx)(c.EYj, {
                      ref: A,
                      lineClamp: p ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: a ? t.summaryLocalized : t.summary,
                  }),
                  I &&
                      (0, i.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(p ? m.Ws.ShowMore : m.Ws.ShowLess), v(!p);
                          },
                          children: (0, i.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: p ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
                  (0, i.jsx)(h.A, { className: _.B, detectedGame: t }),
              ],
          });
}
function v(e) {
    let { detectedGame: t, trackAction: n } = e,
        [a, h] = l.useState(t?.summaryLocalized != null),
        [_, p] = l.useState(!0),
        [v, I] = l.useState(!1),
        j = l.useRef(null),
        { width: A, height: E } = (0, u.A)(),
        { isTwoColumn: b } = (0, x.c)();
    return (l.useEffect(() => {
        let e = j.current;
        null != e && I(e.scrollHeight - e.clientHeight > 1 || !_);
    }, [j, A, E, _, b]),
    null == t.summary)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(g.fi, g.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, i.jsxs)("div", {
                          className: r()(g.nM, g.Lc),
                          children: [
                              (0, i.jsx)(s.PencilSparkleIcon, { color: o.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, i.jsx)(c.EYj, {
                                  variant: "text-md/medium",
                                  color: "text-default",
                                  children: a
                                      ? f.intl.format(f.t.aZ2iIp, { onShowOriginal: () => h(!1) })
                                      : f.intl.format(f.t["/2ylF4"], { onShowTranslated: () => h(!0) }),
                              }),
                          ],
                      }),
                  (0, i.jsx)(c.EYj, {
                      ref: j,
                      lineClamp: _ ? (b ? 8 : 5) : void 0,
                      variant: "text-sm/normal",
                      children: a ? t.summaryLocalized : t.summary,
                  }),
                  v &&
                      (0, i.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(_ ? m.Ws.ShowMore : m.Ws.ShowLess), p(!_);
                          },
                          children: (0, i.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: _ ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
              ],
          });
}
