t.d(e, { m: () => _, y: () => j });
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    d = t(397927),
    s = t(808728),
    u = t(181079),
    c = t(422258),
    o = t(93055),
    A = t(616075),
    h = t(652215),
    f = t(985018);
function g(n, e) {
    return n.type === h.rbe.GROUP_DM
        ? e
            ? f.intl.string(f.t["0BWmSM"])
            : f.intl.string(f.t.uuVTOK)
        : n.type === h.rbe.DM
          ? e
              ? f.intl.string(f.t["2wfKGo"])
              : f.intl.string(f.t.wPbAse)
          : e
            ? f.intl.string(f.t.Bou7lT)
            : f.intl.string(f.t["4wcdE/"]);
}
function _(n) {
    let e = (0, a.bG)([s.Ay], () => s.Ay.getChannels(h.YYv))[h.rbe.GUILD_CATEGORY],
        { isFavoritesPerk: t } = (0, A.l)("58e21a_1"),
        { notifyFavoriteAdded: r } = (0, o.CJ)();
    if (!(0, o.pe)(n)) return null;
    let [[u], f] = l().partition(e, (n) => "null" === n.channel.id);
    function _(e) {
        r(), (0, c.Jz)(n.id, e);
    }
    return 0 === f.length
        ? (0, i.jsx)(d.Drp, { id: "favorite-channel", label: g(n, !1), action: () => _(null) })
        : (0, i.jsxs)(d.Drp, {
              id: "favorite-channel",
              label: g(n, !1),
              action: () => _(null),
              children: [
                  t &&
                      (0, i.jsx)(d.rXV, {
                          children: (0, i.jsx)(
                              d.Drp,
                              {
                                  id: `favorite-${u.channel.id}`,
                                  label: u.channel.name,
                                  action: () => _("null" === u.channel.id ? null : u.channel.id),
                              },
                              u.channel.id,
                          ),
                      }),
                  (0, i.jsx)(d.rXV, {
                      children: f.map((n) =>
                          (0, i.jsx)(
                              d.Drp,
                              { id: `favorite-${n.channel.id}`, label: n.channel.name, action: () => _(n.channel.id) },
                              n.channel.id,
                          ),
                      ),
                  }),
              ],
          });
}
function j(n) {
    let e = (0, a.bG)([u.A], () => u.A.isFavorite(n.id));
    return __OVERLAY__ || !e
        ? null
        : (0, i.jsx)(d.Drp, {
              id: "favorite-channel",
              label: g(n, !0),
              color: "danger",
              action: () =>
                  n.type === h.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: e } = await t.e("52210").then(t.bind(t, 862377));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    onConfirm: () => {
                                        t.onClose(), (0, c.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, c.i_)(n.id),
          });
}
