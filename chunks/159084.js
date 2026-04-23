n.d(t, { z: () => h });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(854378),
    l = n(10088),
    s = n(723702),
    o = n(652215),
    d = n(985018),
    u = n(370227);
let c = n(843020);
function A(e) {
    let { children: t } = e,
        n = (0, r.bG)([l.A], () => l.A.getHighestState());
    return (0, s.isDesktop)() || n !== o.fAW.OPENING
        ? (0, s.isDesktop)() || n !== o.fAW.OPEN
            ? t
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("img", { className: u.Lq, src: c, alt: "" }),
                      (0, i.jsx)("div", {
                          className: u.kL,
                          children: (0, i.jsxs)(a.Ay, {
                              children: [
                                  (0, i.jsx)(a.hE, { className: u.Ns, children: d.intl.string(d.t.csrAMJ) }),
                                  (0, i.jsx)(a.tK, { children: d.intl.string(d.t.ghBJz9) }),
                              ],
                          }),
                      }),
                  ],
              })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("img", { className: u.Lq, src: c, alt: "" }),
                  (0, i.jsx)("div", {
                      className: u.kL,
                      children: (0, i.jsxs)(a.Ay, {
                          children: [
                              (0, i.jsx)(a.hE, { children: d.intl.string(d.t["Z+hCVU"]) }),
                              (0, i.jsx)(a.CK, {}),
                          ],
                      }),
                  }),
              ],
          });
}
function h(e) {
    function t(t) {
        return (0, i.jsx)(A, { children: (0, i.jsx)(e, { ...t }, "deeplink-wrapper") });
    }
    return (t.displayName = `Deeplink(${e.displayName ?? e.name ?? "<Unknown>"})`), t;
}
