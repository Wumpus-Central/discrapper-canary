i.d(e, { C: () => D, z: () => F });
var l = i(477900);
i(582128);
var t = i(435558),
    a = i.n(t),
    r = i(17928),
    d = i(477782),
    u = i(403581),
    c = i(192308),
    o = i(27232),
    s = i(47167),
    h = i(260509),
    f = i(808728),
    _ = i(71393),
    b = i(994500),
    A = i(287809),
    G = i(181079),
    g = i(422258),
    p = i(676168),
    v = i(313281),
    m = i(5180),
    x = i(652215),
    C = i(449817),
    j = i(375708);
function y(n) {
    return n ? j.intl.string(C.default.TN4nAX) : j.intl.string(C.default.G9fGlP);
}
function F(n) {
    let e = (0, r.bG)([f.Ay], () => f.Ay.getChannels(x.YYv))[x.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: t } = (0, v.CJ)(),
        { hasAccess: F, isExperimentEnabled: D, hasHigherPrivileges: L } = (0, v.TW)("useAddToFavoritesItem"),
        k = (0, m.IF)(n, L),
        T = (0, r.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        Y = !__OVERLAY__ && k && T,
        I = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { shouldShowBetaTag: R, dismissBetaTag: w } = (0, p.k3)(D && Y && F && !I),
        z = y(!1);
    function E(n, e, i) {
        return (0, l.jsx)(d.Dr, {
            id: "favorite-channel",
            label: z,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            badge: R ? "beta" : void 0,
            action: e,
            children: i,
        });
    }
    if (!D || !Y) return null;
    if (!F)
        return E(u.t, () =>
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([i.e("90797"), i.e("89946")]).then(i.bind(i, 507809));
                return (e) => (0, l.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (I) return null;
    let [[O], J] = a().partition(e, (n) => "null" === n.channel.id);
    function X(e) {
        w(), t(), (0, g.Jz)(n.id, e, "channel_context_menu");
    }
    if (0 === J.length) return E(o.G, () => X(null));
    let M = j.intl.string(C.default.CgmkFJ);
    return E(
        o.G,
        () => X(null),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.rX, {
                    children: (0, l.jsx)(
                        d.Dr,
                        {
                            id: `favorite-${O.channel.id}`,
                            label: M,
                            action: () => X("null" === O.channel.id ? null : O.channel.id),
                        },
                        O.channel.id,
                    ),
                }),
                (0, l.jsx)(d.rX, {
                    children: J.map((n) =>
                        (0, l.jsx)(
                            d.Dr,
                            {
                                id: `favorite-${n.channel.id}`,
                                label: (0, s.m1)(n.channel, A.default, b.A),
                                action: () => X(n.channel.id),
                            },
                            n.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function D(n) {
    let e = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { hasAccess: t } = (0, v.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && t && e
        ? (0, l.jsx)(d.Dr, {
              id: "favorite-channel",
              label: y(!0),
              color: "danger",
              action: () =>
                  n.type === x.rbe.GUILD_CATEGORY
                      ? (0, c.openModalLazy)(async () => {
                            let { default: e } = await i.e("52210").then(i.bind(i, 862377));
                            return (i) =>
                                (0, l.jsx)(e, {
                                    ...i,
                                    onConfirm: () => {
                                        i.onClose(), (0, g.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, g.i_)(n.id),
          })
        : null;
}
