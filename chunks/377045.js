n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(607399),
    a = n(311907),
    r = n(397927),
    o = n(93055),
    c = n(369170),
    d = n(58736),
    u = n(353202),
    h = n(544028),
    A = n(985018),
    _ = n(614238);
function m(e) {
    let t,
        { channelId: m } = e;
    l.useEffect(() => {
        u.A.loadThread(m);
    });
    let g = (0, o.DZ)(),
        p = (0, a.bG)([h.A], () => h.A.theme);
    return g
        ? (0, i.jsxs)("div", {
              className: _.A,
              children: [s.Fr && (0, i.jsx)(d.Ay, { children: null }), (0, i.jsx)(c.A, { theme: p })],
          })
        : ((t =
              null != m
                  ? (0, i.jsx)(r.y$y, { type: r.y$y.Type.SPINNING_CIRCLE })
                  : (0, i.jsx)(r.SGT, { note: A.intl.string(A.t["LTr+x9"]), children: A.intl.string(A.t.ai6Lbr) })),
          (0, i.jsxs)("div", {
              className: _.j,
              children: [
                  s.Fr && (0, i.jsx)(d.Ay, { children: null }),
                  (0, i.jsxs)(r.ppr, {
                      theme: p,
                      children: [
                          (0, i.jsx)(r.G8R, { darkSrc: n(355937), lightSrc: n(332327), width: 272, height: 222 }),
                          t,
                      ],
                  }),
              ],
          }));
}
