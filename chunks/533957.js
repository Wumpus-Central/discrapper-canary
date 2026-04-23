t.d(e, { A: () => u });
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(477782),
    r = t(192308),
    d = t(576705),
    c = t(652215),
    o = t(985018);
function u(n, e) {
    let u = (0, l.bG)([d.A], () => d.A.can(c.xBc.MANAGE_CHANNELS, n), [n]);
    return __OVERLAY__ || !u
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "clone-channel",
              label: o.intl.string(o.t.dEaPc4),
              action: () =>
                  (0, r.openModalLazy)(async () => {
                      let { default: l } = await Promise.all([t.e("93142"), t.e("64233"), t.e("36126")]).then(
                          t.bind(t, 409200),
                      );
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
