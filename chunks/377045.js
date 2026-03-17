"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(607399),
    r = n(311907),
    a = n(397927),
    o = n(93055),
    c = n(369170),
    d = n(58736),
    u = n(353202),
    h = n(544028),
    A = n(985018),
    m = n(70461);
function p(e) {
    let t,
        { channelId: p } = e;
    s.useEffect(() => {
        u.A.loadThread(p);
    });
    let g = (0, o.DZ)(),
        _ = (0, r.bG)([h.A], () => h.A.theme);
    return g
        ? (0, i.jsxs)("div", {
              className: m.A,
              children: [l.Fr && (0, i.jsx)(d.Ay, { children: null }), (0, i.jsx)(c.A, { theme: _ })],
          })
        : ((t =
              null != p
                  ? (0, i.jsx)(a.y$y, { type: a.y$y.Type.SPINNING_CIRCLE })
                  : (0, i.jsx)(a.SGT, { note: A.intl.string(A.t["LTr+x9"]), children: A.intl.string(A.t.ai6Lbr) })),
          (0, i.jsxs)("div", {
              className: m.j,
              children: [
                  l.Fr && (0, i.jsx)(d.Ay, { children: null }),
                  (0, i.jsxs)(a.ppr, {
                      theme: _,
                      children: [
                          (0, i.jsx)(a.G8R, { darkSrc: n(355937), lightSrc: n(332327), width: 272, height: 222 }),
                          t,
                      ],
                  }),
              ],
          }));
}
