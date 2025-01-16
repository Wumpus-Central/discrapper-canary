e.d(t, {
    Z: function () {
        return s;
    }
});
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(357156),
    d = e(924301),
    o = e(554747),
    a = e(981631),
    c = e(388032);
function s(n, t, s) {
    var E;
    let { canManageGuildEvent: g } = (0, u.XJ)(null != s ? s : t),
        f = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(n), [n]),
        _ = g(f),
        v = null != (0, o.qY)(null !== (E = null == s ? void 0 : s.id) && void 0 !== E ? E : a.lds),
        Z = null != f && (0, d.xt)(f);
    return _ && !Z && !v
        ? (0, l.jsx)(r.MenuItem, {
              id: c.intl.string(c.t.cK1GGR),
              label: c.intl.string(c.t.cK1GGR),
              action: function () {
                  null != f &&
                      (0, r.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([e.e('84722'), e.e('86962')]).then(e.bind(e, 296864));
                          return (t) =>
                              (0, l.jsx)(n, {
                                  ...t,
                                  event: f
                              });
                      });
              }
          })
        : null;
}
