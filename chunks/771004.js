n.d(t, { A: () => A, h: () => p });
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
    f = n(936636),
    h = n(985018),
    g = n(851822),
    _ = n(812254);
function p(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, x] = l.useState(t?.summaryLocalized != null),
        [p, A] = l.useState(!0),
        [v, j] = l.useState(!1),
        E = l.useRef(null),
        { width: I, height: C } = (0, u.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !p);
    }, [E, I, C, p]),
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
                                      ? h.intl.format(h.t.aZ2iIp, { onShowOriginal: () => x(!1) })
                                      : h.intl.format(h.t["/2ylF4"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(c.EYj, {
                      ref: E,
                      lineClamp: p ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.summary,
                  }),
                  v &&
                      (0, a.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(p ? m.Ws.ShowMore : m.Ws.ShowLess), A(!p);
                          },
                          children: (0, a.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: p ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(f.A, { className: _.B, detectedGame: t }),
              ],
          });
}
function A(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, s] = l.useState(!1),
        [o, d] = l.useState(null),
        f = l.useRef(null),
        { width: _, height: p } = (0, u.A)(),
        { isTwoColumn: A } = (0, x.c)(),
        v = l.useMemo(() => (A ? 8 : 5), [A]),
        j = l.useCallback((e) => d(e > v), [v]);
    l.useEffect(() => {
        d(null);
    }, [t.summary, v, _, p]),
        l.useEffect(() => {
            let e = f.current;
            if (null == e || null != o) return;
            let t = parseInt(window.getComputedStyle(e).lineHeight, 10);
            isNaN(t) || j(Math.floor(e.offsetHeight / t));
        }, [f, o, j]);
    let E = l.useCallback(() => {
        let e = !i;
        n(e ? m.Ws.ShowMore : m.Ws.ShowLess), s(e);
    }, [i, n]);
    if (null == t.summary) return null;
    let I = i ? h.intl.string(h.t["6MwJo/"]) : h.intl.string(h.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [
            (0, a.jsx)(c.EYj, {
                ref: f,
                lineClamp: i || null == o ? void 0 : v,
                variant: "text-sm/normal",
                children: t.summary,
            }),
            o && (0, a.jsx)(c.QWc, { onClick: E, text: I }),
        ],
    });
}
