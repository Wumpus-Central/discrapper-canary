n.d(t, { A: () => v, h: () => _ });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(934551),
    o = n(158954),
    c = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    x = n(305080),
    g = n(936636),
    h = n(985018),
    f = n(282063),
    p = n(48757);
function _(e) {
    let { game: t, trackAction: n } = e,
        [l, x] = i.useState(t?.summaryLocalized != null),
        [_, v] = i.useState(!0),
        [A, j] = i.useState(!1),
        E = i.useRef(null),
        { width: b, height: I } = (0, u.A)();
    return (i.useEffect(() => {
        let e = E.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !_);
    }, [E, b, I, _]),
    null == t.description)
        ? null
        : (0, a.jsxs)("div", {
              className: r()(f.fi, f.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: r()(f.nM, f.Lc),
                          children: [
                              (0, a.jsx)(s.PencilSparkleIcon, { color: c.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, a.jsx)(o.EYj, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: l
                                      ? h.intl.format(h.t.aZ2iIp, { onShowOriginal: () => x(!1) })
                                      : h.intl.format(h.t["/2ylF4"], { onShowTranslated: () => x(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(o.EYj, {
                      ref: E,
                      lineClamp: _ ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: l ? t.summaryLocalized : t.description,
                  }),
                  A &&
                      (0, a.jsx)(d.DUT, {
                          className: f.vk,
                          onClick: () => {
                              n(_ ? m.Ws.ShowMore : m.Ws.ShowLess), v(!_);
                          },
                          children: (0, a.jsx)(o.EYj, {
                              variant: "text-sm/semibold",
                              children: _ ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(g.A, { className: p.B, game: t }),
              ],
          });
}
function v(e) {
    let { game: t, trackAction: n } = e,
        l = i.useRef(null),
        {
            isExpanded: s,
            showToggle: c,
            handleToggleExpanded: d,
        } = (function (e, t) {
            let [n, a] = i.useState("full");
            i.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        a((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return n.observe(t), () => n.disconnect();
            }, [e]);
            let l = i.useCallback(() => {
                "expanded" === n
                    ? (t(m.Ws.ShowLess), a("collapsed"))
                    : "collapsed" === n && (t(m.Ws.ShowMore), a("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: l,
            };
        })(l, n),
        { isTwoColumn: u } = (0, x.c)(),
        g = i.useMemo(() => (u ? 8 : 5), [u]);
    if (null == t.description) return null;
    let p = s ? h.intl.string(h.t["6MwJo/"]) : h.intl.string(h.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(f.fi, f.mX),
        children: [
            (0, a.jsx)(o.EYj, {
                ref: l,
                lineClamp: s ? void 0 : g,
                variant: "text-md/medium",
                children: t.description,
            }),
            c && (0, a.jsx)(o.QWc, { onClick: d, text: p }),
        ],
    });
}
