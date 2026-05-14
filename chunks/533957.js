a.d(n, { A: () => p });
var t = a(627968);
a(64700);
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
                          a.e("94513"),
                          a.e("11585"),
                          a.e("3589"),
                          a.e("89916"),
                          a.e("60773"),
                          a.e("8018"),
                          a.e("20379"),
                          a.e("19193"),
                          a.e("7775"),
                          a.e("58608"),
                          a.e("70195"),
                          a.e("37038"),
                      ]).then(a.bind(a, 946430));
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
