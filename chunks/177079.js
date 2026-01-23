n.d(e, {
    default: () => u,
});
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(442433),
    i = n(723702),
    o = n(115184),
    c = n(777933),
    s = n(985018);

function u(t) {
    let { src: e, onSelect: n } = t,
        u = (0, o.A)(e),
        d = (0, c.A)(e, null);
    return i.isPlatformEmbedded
        ? (0, l.jsxs)(r.W1t, {
              "data-menu-migration-ready": !0,
              navId: "image-context",
              onClose: a.Z_,
              "aria-label": s.intl.string(s.t.Zow2V5),
              onSelect: n,
              children: [
                  (0, l.jsx)(r.rXV, {
                      children: u,
                  }),
                  (0, l.jsx)(r.rXV, {
                      children: d,
                  }),
              ],
          })
        : null;
}
