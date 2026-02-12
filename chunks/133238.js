t.d(e, { m: () => _, y: () => b });
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    d = t(397927),
    s = t(808728),
    o = t(181079),
    A = t(422258),
    c = t(93055),
    u = t(652215),
    h = t(985018);
function f(n, e) {
    return n.type === u.rbe.GROUP_DM
        ? e
            ? h.intl.string(h.t["0BWmSM"])
            : h.intl.string(h.t.uuVTOK)
        : n.type === u.rbe.DM
          ? e
              ? h.intl.string(h.t["2wfKGo"])
              : h.intl.string(h.t.wPbAse)
          : e
            ? h.intl.string(h.t.Bou7lT)
            : h.intl.string(h.t["4wcdE/"]);
}
function _(n) {
    let e = (0, a.bG)([s.Ay], () => s.Ay.getChannels(u.YYv))[u.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: t } = (0, c.CJ)();
    if (!(0, c.pe)(n)) return null;
    let [[r], o] = l().partition(e, (n) => "null" === n.channel.id);
    function h(e) {
        t(), (0, A.Jz)(n.id, e);
    }
    return 0 === o.length
        ? (0, i.jsx)(d.Drp, { id: "favorite-channel", label: f(n, !1), action: () => h(null) })
        : (0, i.jsxs)(d.Drp, {
              id: "favorite-channel",
              label: f(n, !1),
              action: () => h(null),
              children: [
                  !1,
                  (0, i.jsx)(d.rXV, {
                      children: o.map((n) =>
                          (0, i.jsx)(
                              d.Drp,
                              { id: `favorite-${n.channel.id}`, label: n.channel.name, action: () => h(n.channel.id) },
                              n.channel.id,
                          ),
                      ),
                  }),
              ],
          });
}
function b(n) {
    let e = (0, a.bG)([o.A], () => o.A.isFavorite(n.id));
    return __OVERLAY__ || !e
        ? null
        : (0, i.jsx)(d.Drp, {
              id: "favorite-channel",
              label: f(n, !0),
              color: "danger",
              action: () =>
                  n.type === u.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: e } = await t.e("52210").then(t.bind(t, 862377));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    onConfirm: () => {
                                        t.onClose(), (0, A.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, A.i_)(n.id),
          });
}
