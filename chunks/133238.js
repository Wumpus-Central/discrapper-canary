i.d(e, { m: () => v, y: () => p });
var t = i(627968);
i(64700);
var r = i(735438),
    l = i.n(r),
    a = i(311907),
    d = i(397927),
    s = i(260509),
    o = i(808728),
    u = i(71393),
    c = i(181079),
    A = i(422258),
    h = i(93055),
    f = i(652215),
    _ = i(665606),
    b = i(985018);
function g(n, e) {
    return n.type === f.rbe.GROUP_DM
        ? e
            ? b.intl.string(b.t["0BWmSM"])
            : b.intl.string(b.t.uuVTOK)
        : n.type === f.rbe.DM
          ? e
              ? b.intl.string(b.t["2wfKGo"])
              : b.intl.string(b.t.wPbAse)
          : e
            ? b.intl.string(b.t.Bou7lT)
            : b.intl.string(b.t["4wcdE/"]);
}
function v(n) {
    let e = (0, a.bG)([o.Ay], () => o.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: r } = (0, h.CJ)(),
        { hasAccess: v, isExperimentEnabled: p, hasHigherPrivileges: j } = (0, h.TW)("useAddToFavoritesItem"),
        y = n.isThread(),
        m = (0, a.bG)([u.A], () => {
            if (null == n.guild_id) return !0;
            let e = u.A.getGuild(n.guild_id);
            return null != e && !(0, s.DG)(e);
        }),
        x = !__OVERLAY__ && (!y || j) && m,
        G = (0, a.bG)([c.A], () => c.A.isFavorite(n.id));
    if (!p || !x) return null;
    if (!v)
        return (0, t.jsx)(d.Drp, {
            id: "favorite-channel",
            label: g(n, !1),
            action: () =>
                (0, d.mMO)(async () => {
                    let { default: n } = await i.e("48609").then(i.bind(i, 168088));
                    return (e) => (0, t.jsx)(n, { ...e });
                }),
            trailingIndicator: { type: "icon", icon: d.tvc },
        });
    if (G) return null;
    let [[T], C] = l().partition(e, (n) => "null" === n.channel.id);
    function D(e) {
        r(), (0, A.Jz)(n.id, e);
    }
    if (0 === C.length) return (0, t.jsx)(d.Drp, { id: "favorite-channel", label: g(n, !1), action: () => D(null) });
    let E = b.intl.string(_.default.G9fGlP);
    return (0, t.jsxs)(d.Drp, {
        id: "favorite-channel",
        label: g(n, !1),
        action: () => D(null),
        children: [
            (0, t.jsx)(d.rXV, {
                children: (0, t.jsx)(
                    d.Drp,
                    {
                        id: `favorite-${T.channel.id}`,
                        label: E,
                        action: () => D("null" === T.channel.id ? null : T.channel.id),
                        trailingIndicator: { type: "icon", icon: d.Gg5 },
                    },
                    T.channel.id,
                ),
            }),
            (0, t.jsx)(d.rXV, {
                children: C.map((n) =>
                    (0, t.jsx)(
                        d.Drp,
                        { id: `favorite-${n.channel.id}`, label: n.channel.name, action: () => D(n.channel.id) },
                        n.channel.id,
                    ),
                ),
            }),
        ],
    });
}
function p(n) {
    let e = (0, a.bG)([c.A], () => c.A.isFavorite(n.id)),
        { hasAccess: r } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && e
        ? (0, t.jsx)(d.Drp, {
              id: "favorite-channel",
              label: g(n, !0),
              color: "danger",
              action: () =>
                  n.type === f.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: e } = await i.e("52210").then(i.bind(i, 862377));
                            return (i) =>
                                (0, t.jsx)(e, {
                                    ...i,
                                    onConfirm: () => {
                                        i.onClose(), (0, A.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, A.i_)(n.id),
          })
        : null;
}
