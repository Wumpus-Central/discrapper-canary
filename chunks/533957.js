a.d(n, { A: () => p });
var t = a(477900);
a(582128);
var d = a(17928),
    i = a(477782),
    l = a(192308),
    c = a(576705),
    r = a(652215),
    s = a(375708);
function p(e, n) {
    let p = (0, d.bG)([c.A], () => c.A.can(r.xBc.MANAGE_CHANNELS, e), [e]);
    return __OVERLAY__ || !p
        ? null
        : (0, t.jsx)(i.Dr, {
              id: "clone-channel",
              label: s.intl.string(s.t.dEaPc4),
              action: () =>
                  (0, l.openModalLazy)(async () => {
                      let { default: d } = await Promise.all([
                          a.e("598574"),
                          a.e("451272"),
                          a.e("999726"),
                          a.e("436865"),
                          a.e("203589"),
                          a.e("692513"),
                          a.e("589916"),
                          a.e("460773"),
                          a.e("208018"),
                          a.e("120379"),
                          a.e("777487"),
                          a.e("819193"),
                          a.e("507775"),
                          a.e("358608"),
                          a.e("528034"),
                          a.e("637038"),
                      ]).then(a.bind(a, 333369));
                      return (a) =>
                          (0, t.jsx)(d, {
                              ...a,
                              channelType: e.type,
                              guildId: n.id,
                              categoryId: e.parent_id,
                              cloneChannelId: e.id,
                          });
                  }),
          });
}
