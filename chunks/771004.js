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
    g = n(985018),
    f = n(282063),
    p = n(48757);
function _(e) {
    let { detectedGame: t, trackAction: n } = e,
        [i, x] = l.useState(t?.summaryLocalized != null),
        [_, v] = l.useState(!0),
        [A, j] = l.useState(!1),
        E = l.useRef(null),
        { width: C, height: I } = (0, u.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !_);
    }, [E, C, I, _]),
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
                      lineClamp: _ ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.summary,
                  }),
                  A &&
                      (0, a.jsx)(d.DUT, {
                          className: f.vk,
                          onClick: () => {
                              n(_ ? m.Ws.ShowMore : m.Ws.ShowLess), v(!_);
                          },
                          children: (0, a.jsx)(c.EYj, {
                              variant: "text-sm/semibold",
                              children: _ ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(h.A, { className: p.B, detectedGame: t }),
              ],
          });
}
function v(e) {
    let { detectedGame: t, trackAction: n } = e,
        i = l.useRef(null),
        {
            isExpanded: s,
            showToggle: o,
            handleToggleExpanded: d,
        } = (function (e, t) {
            let [n, a] = l.useState("full");
            l.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        a((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return n.observe(t), () => n.disconnect();
            }, [e]);
            let i = l.useCallback(() => {
                "expanded" === n
                    ? (t(m.Ws.ShowLess), a("collapsed"))
                    : "collapsed" === n && (t(m.Ws.ShowMore), a("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(i, n),
        { isTwoColumn: u } = (0, x.c)(),
        h = l.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.summary) return null;
    let p = s ? g.intl.string(g.t["6MwJo/"]) : g.intl.string(g.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(f.fi, f.mX),
        children: [
            (0, a.jsx)(c.EYj, { ref: i, lineClamp: s ? void 0 : h, variant: "text-md/medium", children: t.summary }),
            o && (0, a.jsx)(c.QWc, { onClick: d, text: p }),
        ],
    });
}
