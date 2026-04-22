n.d(e, { A: () => g });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(192308),
    a = n(477782),
    d = n(931991),
    s = n(698441),
    u = n(508654),
    o = n(652215),
    c = n(985018);
function g(t, e, g) {
    let { canManageGuildEvent: A } = (0, d.nr)(g ?? e),
        E = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(t), [t]),
        m = A(E),
        f = null != (0, u.Qs)(g?.id ?? o.dJq),
        v = null != E && (0, s.Fd)(E);
    return !m || v || f
        ? null
        : (0, l.jsx)(a.Dr, {
              id: c.intl.string(c.t.cK1GGY),
              label: c.intl.string(c.t.cK1GGY),
              action: function () {
                  null != E &&
                      (0, r.openModalLazy)(async () => {
                          let { default: t } = await Promise.all([n.e("77223"), n.e("18489")]).then(n.bind(n, 199226));
                          return (e) => (0, l.jsx)(t, { ...e, event: E });
                      });
              },
          });
}
