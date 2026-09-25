n.d(i, { default: () => k });
var s = n(477900),
    e = n(582128),
    a = n(17928),
    o = n(189213),
    r = n(184809),
    u = n(531685),
    c = n(723702),
    l = n(19575),
    d = n(9302),
    f = n(652215),
    p = n(375708);
function k(t) {
    let { transitionState: i, onClose: n, contextKey: k, ...b } = t,
        g = (0, a.bG)([u.A], () => u.A.isFocused()),
        h = k === f.BRT.APP,
        C = (0, d.getPID)(),
        E = (0, a.bG)([r.default], () => r.default.isLocked(C));
    return (e.useEffect(() => {
        (g || h || E) && n?.();
    }, [g, n, h, E]),
    g || E)
        ? null
        : (0, s.jsx)(o.a, {
              ...b,
              title: p.intl.string(p.t.DJ8ojF),
              subtitle: p.intl.string(p.t["E+Ph7D"]),
              actions: [
                  { variant: "secondary", text: p.intl.string(p.t.FgK5QE), onClick: () => n?.() },
                  {
                      variant: "primary",
                      text: p.intl.string(p.t.ELRJQu),
                      onClick: function () {
                          (c.isPlatformEmbedded ? l.Ay.focus() : window.focus(), n());
                      },
                  },
              ],
              onClose: n,
              transitionState: i,
          });
}
