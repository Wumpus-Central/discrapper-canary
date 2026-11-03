i.d(e, { A: () => t });
var a = i(477900),
    l = i(582128),
    r = i(857707),
    n = i(268593);
function t(s) {
    let { prefix: e, advertiserDetails: i, secondaryAction: t, primaryAction: c } = s,
        { isPortrait: d, portraitFooterRef: o } = l.useContext(r.D);
    return d && null != t
        ? (0, a.jsxs)("div", {
              ref: o,
              className: n.bx,
              children: [
                  (0, a.jsxs)("div", { className: n.O_, children: [e, i] }),
                  (0, a.jsxs)("div", {
                      className: n.pq,
                      children: [
                          (0, a.jsx)("div", {
                              className: n.ad,
                              children: (0, a.jsx)("div", { className: n.Ik, children: t }),
                          }),
                          c,
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              ref: d ? o : void 0,
              className: n.qr,
              children: [
                  (0, a.jsxs)("div", { className: n.zH, children: [e, i] }),
                  (0, a.jsxs)("div", { className: n.o1, children: [t, c] }),
              ],
          });
}
