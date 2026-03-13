"use strict";
n.d(t, { A: () => v, h: () => _ });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(934551),
    c = n(158954),
    o = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    x = n(305080),
    h = n(936636),
    f = n(985018),
    g = n(728528),
    p = n(887448);
function _(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, x] = l.useState(t?.summaryLocalized != null),
        [_, v] = l.useState(!0),
        [j, A] = l.useState(!1),
        E = l.useRef(null),
        { width: I, height: b } = (0, u.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && A(e.scrollHeight - e.clientHeight > 1 || !_);
    }, [E, I, b, _]),
    null == t.summary)
        ? null
        : (0, a.jsxs)("div", {
              className: r()(g.fi, g.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: r()(g.nM, g.Lc),
                          children: [
                              (0, a.jsx)(s.PencilSparkleIcon, { color: o.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, a.jsx)(c.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: i
                                      ? f.intl.format(f.t.aZ2iIp, { onShowOriginal: () => x(!1) })
                                      : f.intl.format(f.t["/2ylF4"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(c.EYj, {
                      ref: E,
                      lineClamp: _ ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.summary,
                  }),
                  j &&
                      (0, a.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(_ ? m.Ws.ShowMore : m.Ws.ShowLess), v(!_);
                          },
                          children: (0, a.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: _ ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(h.A, { className: p.B, detectedGame: t }),
              ],
          });
}
function v(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, s] = l.useState(!0),
        [o, h] = l.useState(!1),
        p = l.useRef(null),
        { width: _, height: v } = (0, u.A)(),
        { isTwoColumn: j } = (0, x.c)();
    return (l.useEffect(() => {
        let e = p.current;
        null != e && h(e.scrollHeight - e.clientHeight > 1 || !i);
    }, [p, _, v, i, j]),
    null == t.summary)
        ? null
        : (0, a.jsxs)("div", {
              className: r()(g.fi, g.mX),
              children: [
                  (0, a.jsx)(c.EYj, {
                      ref: p,
                      lineClamp: i ? (j ? 8 : 5) : void 0,
                      variant: "text-sm/normal",
                      children: t.summary,
                  }),
                  o &&
                      (0, a.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(i ? m.Ws.ShowMore : m.Ws.ShowLess), s(!i);
                          },
                          children: (0, a.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: i ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
              ],
          });
}
