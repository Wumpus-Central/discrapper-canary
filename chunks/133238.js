i.d(n, { m: () => g, y: () => p });
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
    v = i(985018);
function b(e) {
    return e ? v.intl.string(_.default.TN4nAX) : v.intl.string(_.default.G9fGlP);
}
function g(e) {
    let n = (0, a.bG)([o.Ay], () => o.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: r } = (0, h.CJ)(),
        { hasAccess: g, isExperimentEnabled: p, hasHigherPrivileges: j } = (0, h.TW)("useAddToFavoritesItem"),
        m = e.isThread(),
        x = (0, a.bG)([u.A], () => {
            if (null == e.guild_id) return !0;
            let n = u.A.getGuild(e.guild_id);
            return null != n && !(0, s.DG)(n);
        }),
        y = !__OVERLAY__ && (!m || j) && x,
        C = (0, a.bG)([c.A], () => c.A.isFavorite(e.id));
    if (!p || !y) return null;
    if (!g)
        return (0, t.jsx)(d.Drp, {
            id: "favorite-channel",
            label: b(!1),
            action: () =>
                (0, d.mMO)(async () => {
                    let { default: e } = await i.e("48609").then(i.bind(i, 168088));
                    return (n) => (0, t.jsx)(e, { ...n });
                }),
            trailingIndicator: { type: "icon", icon: d.tvc },
        });
    if (C) return null;
    let [[T], G] = l().partition(n, (e) => "null" === e.channel.id);
    function D(n) {
        r(), (0, A.Jz)(e.id, n);
    }
    if (0 === G.length) return (0, t.jsx)(d.Drp, { id: "favorite-channel", label: b(!1), action: () => D(null) });
    let E = v.intl.string(_.default.CgmkFJ);
    return (0, t.jsxs)(d.Drp, {
        id: "favorite-channel",
        label: b(!1),
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
                children: G.map((e) =>
                    (0, t.jsx)(
                        d.Drp,
                        { id: `favorite-${e.channel.id}`, label: e.channel.name, action: () => D(e.channel.id) },
                        e.channel.id,
                    ),
                ),
            }),
        ],
    });
}
function p(e) {
    let n = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        { hasAccess: r } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && n
        ? (0, t.jsx)(d.Drp, {
              id: "favorite-channel",
              label: b(!0),
              color: "danger",
              action: () =>
                  e.type === f.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: n } = await i.e("52210").then(i.bind(i, 862377));
                            return (i) =>
                                (0, t.jsx)(n, {
                                    ...i,
                                    onConfirm: () => {
                                        i.onClose(), (0, A.i_)(e.id);
                                    },
                                    channel: e,
                                });
                        })
                      : (0, A.i_)(e.id),
          })
        : null;
}
