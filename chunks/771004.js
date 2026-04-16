n.d(t, { A: () => v, h: () => _ });
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
    f = n(305080),
    x = n(936636),
    h = n(985018),
    g = n(141535),
    p = n(242021);
function _(e) {
    let { game: t, trackAction: n } = e,
        [i, f] = l.useState(t?.summaryLocalized != null),
        [_, v] = l.useState(!0),
        [A, b] = l.useState(!1),
        E = l.useRef(null),
        { width: j, height: I } = (0, u.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && b(e.scrollHeight - e.clientHeight > 1 || !_);
    }, [E, j, I, _]),
    null == t.description)
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
                                      ? h.intl.format(h.t.aZ2iIp, { onShowOriginal: () => f(!1) })
                                      : h.intl.format(h.t["/2ylF4"], { onShowTranslated: () => f(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(o.EYj, {
                      ref: E,
                      lineClamp: _ ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.description,
                  }),
                  A &&
                      (0, a.jsx)(d.DUT, {
                          className: g.vk,
                          onClick: () => {
                              n(_ ? m.Ws.ShowMore : m.Ws.ShowLess), v(!_);
                          },
                          children: (0, a.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: _ ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(x.A, { className: p.B, game: t }),
              ],
          });
}
function v(e) {
    let { game: t, trackAction: n } = e,
        i = l.useRef(null),
        {
            isExpanded: s,
            showToggle: c,
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
        { isTwoColumn: u } = (0, f.c)(),
        x = l.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let p = s ? h.intl.string(h.t["6MwJo/"]) : h.intl.string(h.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [
            (0, a.jsx)(o.EYj, {
                ref: i,
                lineClamp: s ? void 0 : x,
                variant: "text-md/medium",
                children: t.description,
            }),
            c && (0, a.jsx)(o.QWc, { onClick: d, text: p }),
        ],
    });
}
