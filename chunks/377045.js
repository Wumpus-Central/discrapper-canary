n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(607399),
    a = n(311907),
    r = n(289873),
    o = n(396478),
    d = n(93055),
    c = n(369170),
    u = n(58736),
    h = n(353202),
    A = n(544028),
    _ = n(985018),
    m = n(768142);
function g(e) {
    let t,
        { channelId: g } = e;
    l.useEffect(() => {
        h.A.loadThread(g);
    });
    let p = (0, d.DZ)(),
        f = (0, a.bG)([A.A], () => A.A.theme);
    return p
        ? (0, i.jsxs)("div", {
              className: m.A,
              children: [s.Fr && (0, i.jsx)(u.Ay, { children: null }), (0, i.jsx)(c.A, { theme: f })],
          })
        : ((t =
              null != g
                  ? (0, i.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                  : (0, i.jsx)(o.SG, { note: _.intl.string(_.t["LTr+x9"]), children: _.intl.string(_.t.ai6Lbr) })),
          (0, i.jsxs)("div", {
              className: m.j,
              children: [
                  s.Fr && (0, i.jsx)(u.Ay, { children: null }),
                  (0, i.jsxs)(o.pp, {
                      theme: f,
                      children: [
                          (0, i.jsx)(o.G8, { darkSrc: n(355937), lightSrc: n(332327), width: 272, height: 222 }),
                          t,
                      ],
                  }),
              ],
          }));
}
