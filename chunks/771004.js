n.d(t, { A: () => A, h: () => b });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(566679),
    o = n(834730),
    d = n(123292),
    c = n(827734),
    u = n(939249),
    m = n(981355),
    _ = n(409626),
    h = n(305080),
    f = n(936636),
    g = n(985018),
    p = n(141535),
    x = n(242021);
function b(e) {
    let { game: t, trackAction: n } = e,
        [i, d] = l.useState(t?.summaryLocalized != null),
        [h, b] = l.useState(!0),
        [A, v] = l.useState(!1),
        E = l.useRef(null),
        { width: I, height: C } = (0, m.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && v(e.scrollHeight - e.clientHeight > 1 || !h);
    }, [E, I, C, h]),
    null == t.description)
        ? null
        : (0, a.jsxs)("div", {
              className: r()(p.fi, p.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, a.jsxs)("div", {
                          className: r()(p.nM, p.Lc),
                          children: [
                              (0, a.jsx)(s.Z, { color: c.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, a.jsx)(o.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: i
                                      ? g.intl.format(g.t.aZ2iIp, { onShowOriginal: () => d(!1) })
                                      : g.intl.format(g.t["/2ylF4"], { onShowTranslated: () => d(!0) }),
                              }),
                          ],
                      }),
                  (0, a.jsx)(o.E, {
                      ref: E,
                      lineClamp: h ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.description,
                  }),
                  A &&
                      (0, a.jsx)(u.D, {
                          className: p.vk,
                          onClick: () => {
                              n(h ? _.Ws.ShowMore : _.Ws.ShowLess), b(!h);
                          },
                          children: (0, a.jsx)(o.E, {
                              variant: "text-sm/semibold",
                              children: h ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"]),
                          }),
                      }),
                  (0, a.jsx)(f.A, { className: x.B, game: t }),
              ],
          });
}
function A(e) {
    let { game: t, trackAction: n } = e,
        i = l.useRef(null),
        {
            isExpanded: s,
            showToggle: c,
            handleToggleExpanded: u,
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
                    ? (t(_.Ws.ShowLess), a("collapsed"))
                    : "collapsed" === n && (t(_.Ws.ShowMore), a("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(i, n),
        { isTwoColumn: m } = (0, h.c)(),
        f = l.useMemo(() => (m ? 8 : 5), [m]);
    if (null == t.description) return null;
    let x = s ? g.intl.string(g.t["6MwJo/"]) : g.intl.string(g.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(p.fi, p.mX),
        children: [
            (0, a.jsx)(o.E, { ref: i, lineClamp: s ? void 0 : f, variant: "text-md/medium", children: t.description }),
            c && (0, a.jsx)(d.Q, { onClick: u, text: x }),
        ],
    });
}
