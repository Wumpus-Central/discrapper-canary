n.d(t, { A: () => v, h: () => p });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(934551),
    c = n(158954),
    o = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    x = n(305080),
    h = n(936636),
    f = n(985018),
    g = n(282063),
    _ = n(48757);
function p(e) {
    let { detectedGame: t, trackAction: n } = e,
        [l, x] = i.useState(t?.summaryLocalized != null),
        [p, v] = i.useState(!0),
        [A, j] = i.useState(!1),
        C = i.useRef(null),
        { width: E, height: I } = (0, u.A)();
    return (i.useEffect(() => {
        let e = C.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !p);
    }, [C, E, I, p]),
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
                                  children: l
                                      ? f.intl.format(f.t.aZ2iIp, { onShowOriginal: () => x(!1) })
                                      : f.intl.format(f.t["/2ylF4"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(c.EYj, {
                      ref: C,
                      lineClamp: p ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: l ? t.summaryLocalized : t.summary,
                  }),
                  A &&
                      (0, a.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(p ? m.Ws.ShowMore : m.Ws.ShowLess), v(!p);
                          },
                          children: (0, a.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: p ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(h.A, { className: _.B, detectedGame: t }),
              ],
          });
}
function v(e) {
    let { detectedGame: t, trackAction: n } = e,
        [l, s] = i.useState(!1),
        [o, d] = i.useState(null),
        h = i.useRef(null),
        { width: _, height: p } = (0, u.A)(),
        { isTwoColumn: v } = (0, x.c)(),
        A = i.useMemo(() => (v ? 8 : 5), [v]),
        j = i.useCallback((e) => d(e > A), [A]);
    i.useEffect(() => {
        d(null);
    }, [t.summary, A, _, p]),
        i.useEffect(() => {
            let e = h.current;
            if (null == e || null != o) return;
            let t = parseInt(window.getComputedStyle(e).lineHeight, 10);
            isNaN(t) || j(Math.floor(e.offsetHeight / t));
        }, [h, o, j]);
    let C = i.useCallback(() => {
        let e = !l;
        n(e ? m.Ws.ShowMore : m.Ws.ShowLess), s(e);
    }, [l, n]);
    if (null == t.summary) return null;
    let E = l ? f.intl.string(f.t["6MwJo/"]) : f.intl.string(f.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [
            (0, a.jsx)(c.EYj, {
                ref: h,
                lineClamp: l || null == o ? void 0 : A,
                variant: "text-md/medium",
                children: t.summary,
            }),
            o && (0, a.jsx)(c.QWc, { onClick: C, text: E }),
        ],
    });
}
