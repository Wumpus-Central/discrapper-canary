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
    g = n(325952),
    p = n(679080);
function _(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, x] = l.useState(t?.summaryLocalized != null),
        [_, v] = l.useState(!0),
        [j, A] = l.useState(!1),
        C = l.useRef(null),
        { width: b, height: I } = (0, u.A)();
    return (l.useEffect(() => {
        let e = C.current;
        null != e && A(e.scrollHeight - e.clientHeight > 1 || !_);
    }, [C, b, I, _]),
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
                      ref: C,
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
        [i, s] = l.useState(!1),
        [o, d] = l.useState(null),
        h = l.useRef(null),
        { width: p, height: _ } = (0, u.A)(),
        { isTwoColumn: v } = (0, x.c)(),
        j = l.useMemo(() => (v ? 8 : 5), [v]),
        A = l.useCallback((e) => d(e > j), [j]);
    l.useEffect(() => {
        d(null);
    }, [t.summary, j, p, _]),
        l.useEffect(() => {
            let e = h.current;
            if (null == e || null != o) return;
            let t = parseInt(window.getComputedStyle(e).lineHeight, 10);
            isNaN(t) || A(Math.floor(e.offsetHeight / t));
        }, [h, o, A]);
    let C = l.useCallback(() => {
        let e = !i;
        n(e ? m.Ws.ShowMore : m.Ws.ShowLess), s(e);
    }, [i, n]);
    if (null == t.summary) return null;
    let b = i ? f.intl.string(f.t["6MwJo/"]) : f.intl.string(f.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [
            (0, a.jsx)(c.EYj, {
                ref: h,
                lineClamp: i || null == o ? void 0 : j,
                variant: "text-md/medium",
                children: t.summary,
            }),
            o && (0, a.jsx)(c.QWc, { onClick: C, text: b }),
        ],
    });
}
