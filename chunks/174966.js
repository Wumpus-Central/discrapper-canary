n.d(e, { A: () => c });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(931991),
    d = n(698441),
    s = n(508654),
    u = n(652215),
    o = n(985018);
function c(t, e, c) {
    let { canManageGuildEvent: E } = (0, a.nr)(c ?? e),
        A = (0, i.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(t), [t]),
        g = E(A),
        _ = null != (0, s.Qs)(c?.id ?? u.dJq),
        h = null != A && (0, d.Fd)(A);
    return !g || h || _
        ? null
        : (0, l.jsx)(r.Drp, {
              id: o.intl.string(o.t.cK1GGY),
              label: o.intl.string(o.t.cK1GGY),
              action: function () {
                  null != A &&
                      (0, r.mMO)(async () => {
                          let { default: t } = await Promise.all([n.e("77223"), n.e("84083")]).then(n.bind(n, 199226));
                          return (e) => (0, l.jsx)(t, { ...e, event: A });
                      });
              },
          });
}
