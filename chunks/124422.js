e.d(n, { Z: () => c });
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(357156),
    d = e(924301),
    a = e(554747),
    s = e(981631),
    o = e(388032);
function c(t, n, c) {
    var E;
    let { canManageGuildEvent: g } = (0, u.XJ)(null != c ? c : n),
        v = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t), [t]),
        h = g(v),
        _ = null != (0, a.qY)(null !== (E = null == c ? void 0 : c.id) && void 0 !== E ? E : s.lds),
        f = null != v && (0, d.xt)(v);
    return !h || f || _
        ? null
        : (0, l.jsx)(r.sNh, {
              id: o.intl.string(o.t.cK1GGR),
              label: o.intl.string(o.t.cK1GGR),
              action: function () {
                  null != v &&
                      (0, r.ZDy)(async () => {
                          let { default: t } = await Promise.all([e.e('84722'), e.e('47200')]).then(e.bind(e, 296864));
                          return (n) =>
                              (0, l.jsx)(t, {
                                  ...n,
                                  event: v
                              });
                      });
              }
          });
}
