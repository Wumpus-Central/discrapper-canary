t.d(e, { A: () => c });
var i = t(627968);
t(64700);
var l = t(17928),
    r = t(477782),
    a = t(192308),
    d = t(576705),
    o = t(652215),
    s = t(985018);
function c(n, e) {
    let c = (0, l.bG)([d.A], () => d.A.can(o.xBc.MANAGE_CHANNELS, n), [n]);
    return __OVERLAY__ || !c
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "clone-channel",
              label: s.intl.string(s.t.dEaPc4),
              action: () =>
                  (0, a.openModalLazy)(async () => {
                      let { default: l } = await Promise.all([
                          t.e("8018"),
                          t.e("42282"),
                          t.e("9431"),
                          t.e("43735"),
                      ]).then(t.bind(t, 113194));
                      return (t) =>
                          (0, i.jsx)(l, {
                              ...t,
                              channelType: n.type,
                              guildId: e.id,
                              categoryId: n.parent_id,
                              cloneChannelId: n.id,
                          });
                  }),
          });
}
