n.d(t, { A: () => v, h: () => p });
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
    g = n(985018),
    f = n(282063),
    _ = n(48757);
function p(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, x] = l.useState(t?.summaryLocalized != null),
        [p, v] = l.useState(!0),
        [A, j] = l.useState(!1),
        E = l.useRef(null),
        { width: C, height: I } = (0, u.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !p);
    }, [E, C, I, p]),
    null == t.summary)
        ? null
        : (0, a.jsxs)("div", {
              className: r()(f.fi, f.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: r()(f.nM, f.Lc),
                          children: [
                              (0, a.jsx)(s.PencilSparkleIcon, { color: o.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, a.jsx)(c.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: i
                                      ? g.intl.format(g.t.aZ2iIp, { onShowOriginal: () => x(!1) })
                                      : g.intl.format(g.t["/2ylF4"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(c.EYj, {
                      ref: E,
                      lineClamp: p ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.summary,
                  }),
                  A &&
                      (0, a.jsx)(d.DUT, {
                          className: f.vk,
                          onClick: () => {
                              n(p ? m.Ws.ShowMore : m.Ws.ShowLess), v(!p);
                          },
                          children: (0, a.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: p ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(h.A, { className: _.B, detectedGame: t }),
              ],
          });
}
function v(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, s] = l.useState(!1),
        [o, d] = l.useState(null),
        h = l.useRef(null),
        { width: _, height: p } = (0, u.A)(),
        { isTwoColumn: v } = (0, x.c)(),
        A = l.useMemo(() => (v ? 8 : 5), [v]),
        j = l.useCallback((e) => d(e > A), [A]);
    l.useEffect(() => {
        d(null);
    }, [t.summary, A, _, p]),
        l.useEffect(() => {
            let e = h.current;
            if (null == e || null != o) return;
            let t = parseInt(window.getComputedStyle(e).lineHeight, 10);
            isNaN(t) || j(Math.floor(e.offsetHeight / t));
        }, [h, o, j]);
    let E = l.useCallback(() => {
        let e = !i;
        n(e ? m.Ws.ShowMore : m.Ws.ShowLess), s(e);
    }, [i, n]);
    if (null == t.summary) return null;
    let C = i ? g.intl.string(g.t["6MwJo/"]) : g.intl.string(g.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(f.fi, f.mX),
        children: [
            (0, a.jsx)(c.EYj, {
                ref: h,
                lineClamp: i || null == o ? void 0 : A,
                variant: "text-md/medium",
                children: t.summary,
            }),
            o && (0, a.jsx)(c.QWc, { onClick: E, text: C }),
        ],
    });
}
