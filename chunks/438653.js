i.d(e, { C: () => L, z: () => D });
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
    A = i(994500),
    b = i(287809),
    G = i(181079),
    g = i(422258),
    p = i(676168),
    v = i(93055),
    m = i(5180),
    x = i(606660),
    j = i(652215),
    y = i(449817),
    C = i(375708);
function F(n) {
    return n ? C.intl.string(y.default.TN4nAX) : C.intl.string(y.default.G9fGlP);
}
function D(n) {
    let e = (0, r.bG)([f.Ay], () => f.Ay.getChannels(j.YYv))[j.rbe.GUILD_CATEGORY],
        { hasAccess: t, isExperimentEnabled: D, hasHigherPrivileges: L } = (0, v.TW)("useAddToFavoritesItem"),
        k = (0, m.IF)(n, L),
        T = (0, r.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        Y = !__OVERLAY__ && k && T,
        I = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { shouldShowBetaTag: R, dismissBetaTag: w } = (0, p.k3)(D && Y && t && !I),
        z = F(!1);
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
    if (!t)
        return E(u.t, () =>
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([i.e("90797"), i.e("89946")]).then(i.bind(i, 507809));
                return (e) => (0, l.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (I) return null;
    let [[O], X] = a().partition(e, (n) => "null" === n.channel.id);
    function J(e) {
        w(), (0, x.A)(), (0, g.Jz)(n.id, e, "channel_context_menu");
    }
    if (0 === X.length) return E(o.G, () => J(null));
    let M = C.intl.string(y.default.CgmkFJ);
    return E(
        o.G,
        () => J(null),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.rX, {
                    children: (0, l.jsx)(
                        d.Dr,
                        {
                            id: `favorite-${O.channel.id}`,
                            label: M,
                            action: () => J("null" === O.channel.id ? null : O.channel.id),
                        },
                        O.channel.id,
                    ),
                }),
                (0, l.jsx)(d.rX, {
                    children: X.map((n) =>
                        (0, l.jsx)(
                            d.Dr,
                            {
                                id: `favorite-${n.channel.id}`,
                                label: (0, s.m1)(n.channel, b.default, A.A),
                                action: () => J(n.channel.id),
                            },
                            n.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function L(n) {
    let e = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { hasAccess: t } = (0, v.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && t && e
        ? (0, l.jsx)(d.Dr, {
              id: "favorite-channel",
              label: F(!0),
              color: "danger",
              action: () =>
                  n.type === j.rbe.GUILD_CATEGORY
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
