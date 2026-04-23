n.d(t, { A: () => A, h: () => E });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(566679),
    o = n(834730),
    c = n(123292),
    d = n(827734),
    u = n(939249),
    m = n(981355),
    h = n(409626),
    f = n(305080),
    _ = n(936636),
    g = n(985018),
    p = n(141535),
    x = n(242021);
function E(e) {
    let { game: t, trackAction: n } = e,
        [i, c] = a.useState(t?.summaryLocalized != null),
        [f, E] = a.useState(!0),
        [A, v] = a.useState(!1),
        I = a.useRef(null),
        { width: b, height: j } = (0, m.A)();
    return (a.useEffect(() => {
        let e = I.current;
        null != e && v(e.scrollHeight - e.clientHeight > 1 || !f);
    }, [I, b, j, f]),
    null == t.description)
        ? null
        : (0, l.jsxs)("div", {
              className: r()(p.fi, p.mX),
              children: [
                  null != t.summaryLocalized &&
                      (0, l.jsxs)("div", {
                          className: r()(p.nM, p.Lc),
                          children: [
                              (0, l.jsx)(s.Z, { color: d.A.colors.TEXT_DEFAULT, size: "xs" }),
                              (0, l.jsx)(o.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: i
                                      ? g.intl.format(g.t.aZ2iIp, { onShowOriginal: () => c(!1) })
                                      : g.intl.format(g.t["/2ylF4"], { onShowTranslated: () => c(!0) }),
                              }),
                          ],
                      }),
                  (0, l.jsx)(o.E, {
                      ref: I,
                      lineClamp: f ? 8 : void 0,
                      variant: "text-sm/normal",
                      children: i ? t.summaryLocalized : t.description,
                  }),
                  A &&
                      (0, l.jsx)(u.D, {
                          className: p.vk,
                          onClick: () => {
                              n(f ? h.Ws.ShowMore : h.Ws.ShowLess), E(!f);
                          },
                          children: (0, l.jsx)(o.E, {
                              variant: "text-sm/semibold",
                              children: f ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"]),
                          }),
                      }),
                  (0, l.jsx)(_.A, { className: x.B, game: t }),
              ],
          });
}
function A(e) {
    let { game: t, trackAction: n } = e,
        i = a.useRef(null),
        {
            isExpanded: s,
            showToggle: d,
            handleToggleExpanded: u,
        } = (function (e, t) {
            let [n, l] = a.useState("full");
            a.useEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = new ResizeObserver(() => {
                    let t = e.current;
                    null != t &&
                        l((e) => ("expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full"));
                });
                return n.observe(t), () => n.disconnect();
            }, [e]);
            let i = a.useCallback(() => {
                "expanded" === n
                    ? (t(h.Ws.ShowLess), l("collapsed"))
                    : "collapsed" === n && (t(h.Ws.ShowMore), l("expanded"));
            }, [t, n]);
            return {
                isExpanded: "expanded" === n,
                showToggle: "expanded" === n || "collapsed" === n,
                handleToggleExpanded: i,
            };
        })(i, n),
        { isTwoColumn: m } = (0, f.c)(),
        _ = a.useMemo(() => (m ? 8 : 5), [m]);
    if (null == t.description) return null;
    let x = s ? g.intl.string(g.t["6MwJo/"]) : g.intl.string(g.t.lBeKY2);
    return (0, l.jsxs)("div", {
        className: r()(p.fi, p.mX),
        children: [
            (0, l.jsx)(o.E, { ref: i, lineClamp: s ? void 0 : _, variant: "text-md/medium", children: t.description }),
            d && (0, l.jsx)(c.Q, { onClick: u, text: x }),
        ],
    });
}
