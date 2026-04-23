i.d(e, { A: () => u });
var t = i(627968);
i(64700);
var l = i(17928),
    a = i(477782),
    r = i(192308),
    d = i(576705),
    c = i(652215),
    o = i(985018);
function u(n, e) {
    let u = (0, l.bG)([d.A], () => d.A.can(c.xBc.MANAGE_CHANNELS, n), [n]);
    return __OVERLAY__ || !u
        ? null
        : (0, t.jsx)(a.Dr, {
              id: "clone-channel",
              label: o.intl.string(o.t.dEaPc4),
              action: () =>
                  (0, r.openModalLazy)(async () => {
                      let { default: l } = await Promise.all([i.e("42282"), i.e("9431"), i.e("36126")]).then(
                          i.bind(i, 113194),
                      );
                      return (i) =>
                          (0, t.jsx)(l, {
                              ...i,
                              channelType: n.type,
                              guildId: e.id,
                              categoryId: n.parent_id,
                              cloneChannelId: n.id,
                          });
                  }),
          });
}
