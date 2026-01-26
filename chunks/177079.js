n.d(e, {
    default: () => u,
});
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(442433),
    o = n(723702),
    a = n(115184),
    c = n(777933),
    s = n(985018);

function u(t) {
    let { src: e, onSelect: n } = t,
        u = (0, a.A)(e),
        d = (0, c.A)(e, null);
    return o.isPlatformEmbedded
        ? (0, l.jsxs)(i.W1t, {
              "data-menu-all-icons-auto": !0,
              navId: "image-context",
              onClose: r.Z_,
              "aria-label": s.intl.string(s.t.Zow2V5),
              onSelect: n,
              children: [
                  (0, l.jsx)(i.rXV, {
                      children: u,
                  }),
                  (0, l.jsx)(i.rXV, {
                      children: d,
                  }),
              ],
          })
        : null;
}
