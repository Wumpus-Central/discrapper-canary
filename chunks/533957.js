e.d(t, { A: () => c });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(576705),
    d = e(652215),
    s = e(985018);
function c(n, t) {
    let c = (0, l.bG)([a.A], () => a.A.can(d.xBc.MANAGE_CHANNELS, n), [n]);
    return __OVERLAY__ || !c
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "clone-channel",
              label: s.intl.string(s.t.dEaPc4),
              action: () =>
                  (0, r.mMO)(async () => {
                      let { default: l } = await Promise.all([e.e("93142"), e.e("64233"), e.e("56651")]).then(
                          e.bind(e, 409200),
                      );
                      return (e) =>
                          (0, i.jsx)(l, {
                              ...e,
                              channelType: n.type,
                              guildId: t.id,
                              categoryId: n.parent_id,
                              cloneChannelId: n.id,
                          });
                  }),
          });
}
