n.d(i, { default: () => k });
var s = n(627968),
    e = n(64700),
    a = n(189213),
    o = n(17928),
    l = n(256415),
    r = n(531685),
    d = n(723702),
    u = n(19575),
    c = n(9302),
    f = n(652215),
    p = n(985018);
function k(t) {
    let { transitionState: i, onClose: n, contextKey: k, ...b } = t,
        g = (0, o.bG)([r.A], () => r.A.isFocused()),
        h = k === f.BRT.APP,
        C = (0, c.getPID)(),
        E = (0, o.bG)([l.default], () => l.default.isLocked(C));
    return (e.useEffect(() => {
        (g || h || E) && n?.();
    }, [g, n, h, E]),
    g || E)
        ? null
        : (0, s.jsx)(a.Modal, {
              ...b,
              title: p.intl.string(p.t.DJ8ojF),
              subtitle: p.intl.string(p.t["E+Ph7D"]),
              actions: [
                  { variant: "secondary", text: p.intl.string(p.t.FgK5QE), onClick: () => n?.() },
                  {
                      variant: "primary",
                      text: p.intl.string(p.t.ELRJQu),
                      onClick: () => {
                          d.isPlatformEmbedded ? u.Ay.focus() : window.focus(), n();
                      },
                  },
              ],
              onClose: n,
              transitionState: i,
          });
}
