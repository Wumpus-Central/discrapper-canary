"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(607399),
    a = n(311907),
    r = n(397927),
    o = n(369170),
    c = n(58736),
    d = n(353202),
    u = n(544028),
    h = n(967198),
    A = n(652215),
    m = n(985018),
    p = n(985531);
function g(e) {
    let t,
        { channelId: g } = e;
    s.useEffect(() => {
        d.A.loadThread(g);
    });
    let _ = (0, a.bG)([h.A], () => h.A.getGuildId()) === A.YYv,
        f = (0, a.bG)([u.A], () => u.A.theme);
    return _
        ? (0, i.jsxs)("div", {
              className: p.j,
              children: [l.Fr && (0, i.jsx)(c.Ay, { children: null }), (0, i.jsx)(o.A, { theme: f })],
          })
        : ((t =
              null != g
                  ? (0, i.jsx)(r.y$y, { type: r.y$y.Type.SPINNING_CIRCLE })
                  : (0, i.jsx)(r.SGT, { note: m.intl.string(m.t["LTr+x9"]), children: m.intl.string(m.t.ai6Lbr) })),
          (0, i.jsxs)("div", {
              className: p.j,
              children: [
                  l.Fr && (0, i.jsx)(c.Ay, { children: null }),
                  (0, i.jsxs)(r.ppr, {
                      theme: f,
                      children: [
                          (0, i.jsx)(r.G8R, { darkSrc: n(355937), lightSrc: n(332327), width: 272, height: 222 }),
                          t,
                      ],
                  }),
              ],
          }));
}
