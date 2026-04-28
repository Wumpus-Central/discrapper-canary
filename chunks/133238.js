l.d(e, { m: () => C, y: () => F });
var i = l(627968);
l(64700);
var t = l(735438),
    a = l.n(t),
    r = l(17928),
    d = l(477782),
    u = l(403581),
    c = l(192308),
    o = l(27232),
    s = l(47167),
    h = l(260509),
    f = l(808728),
    _ = l(71393),
    A = l(994500),
    b = l(287809),
    G = l(181079),
    m = l(422258),
    p = l(313281),
    v = l(5180),
    g = l(652215),
    x = l(335993),
    y = l(985018);
function j(n) {
    return n ? y.intl.string(x.default.TN4nAX) : y.intl.string(x.default.G9fGlP);
}
function C(n) {
    let e = (0, r.bG)([f.Ay], () => f.Ay.getChannels(g.YYv))[g.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: t } = (0, p.CJ)(),
        { hasAccess: C, isExperimentEnabled: F, hasHigherPrivileges: D } = (0, p.TW)("useAddToFavoritesItem"),
        L = (0, v.IF)(n, D),
        T = (0, r.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        Y = !__OVERLAY__ && L && T,
        k = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        E = j(!1);
    function I(n, e, l) {
        return (0, i.jsx)(d.Dr, {
            id: "favorite-channel",
            label: E,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            action: e,
            children: l,
        });
    }
    if (!F || !Y) return null;
    if (!C)
        return I(u.t, () =>
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([l.e("90797"), l.e("48609")]).then(l.bind(l, 168088));
                return (e) => (0, i.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (k) return null;
    let [[R], w] = a().partition(e, (n) => "null" === n.channel.id);
    function O(e) {
        t(),
            G.A.favoriteGuildEnabled || (0, m.tV)(!0, "channel_context_menu"),
            (0, m.Jz)(n.id, e, "channel_context_menu");
    }
    if (0 === w.length) return I(o.G, () => O(null));
    let z = y.intl.string(x.default.CgmkFJ);
    return I(
        o.G,
        () => O(null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.rX, {
                    children: (0, i.jsx)(
                        d.Dr,
                        {
                            id: `favorite-${R.channel.id}`,
                            label: z,
                            action: () => O("null" === R.channel.id ? null : R.channel.id),
                        },
                        R.channel.id,
                    ),
                }),
                (0, i.jsx)(d.rX, {
                    children: w.map((n) =>
                        (0, i.jsx)(
                            d.Dr,
                            {
                                id: `favorite-${n.channel.id}`,
                                label: (0, s.m1)(n.channel, b.default, A.A),
                                action: () => O(n.channel.id),
                            },
                            n.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function F(n) {
    let e = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { hasAccess: t } = (0, p.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && t && e
        ? (0, i.jsx)(d.Dr, {
              id: "favorite-channel",
              label: j(!0),
              color: "danger",
              action: () =>
                  n.type === g.rbe.GUILD_CATEGORY
                      ? (0, c.openModalLazy)(async () => {
                            let { default: e } = await l.e("52210").then(l.bind(l, 862377));
                            return (l) =>
                                (0, i.jsx)(e, {
                                    ...l,
                                    onConfirm: () => {
                                        l.onClose(), (0, m.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, m.i_)(n.id),
          })
        : null;
}
