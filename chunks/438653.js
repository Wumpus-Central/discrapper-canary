l.d(e, { C: () => L, z: () => D });
var t = l(477900);
l(582128);
var i = l(435558),
    a = l.n(i),
    r = l(17928),
    d = l(477782),
    u = l(403581),
    c = l(192308),
    o = l(27232),
    s = l(47167),
    h = l(260509),
    f = l(808728),
    _ = l(71393),
    b = l(994500),
    A = l(287809),
    G = l(181079),
    g = l(422258),
    m = l(676168),
    p = l(298358),
    v = l(5180),
    x = l(551289),
    C = l(652215),
    j = l(449817),
    y = l(375708);
function F(n) {
    return n ? y.intl.string(j.default.TN4nAX) : y.intl.string(j.default.G9fGlP);
}
function D(n) {
    let e = (0, r.bG)([f.Ay], () => f.Ay.getChannels(C.YYv))[C.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: i } = (0, p.CJ)(),
        { hasAccess: D, isExperimentEnabled: L, hasHigherPrivileges: Y } = (0, p.TW)("useAddToFavoritesItem"),
        k = (0, v.IF)(n, Y),
        T = (0, r.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        z = !__OVERLAY__ && k && T,
        I = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { shouldShowBetaTag: R, dismissBetaTag: w } = (0, m.k3)(L && z && D && !I),
        E = F(!1);
    function O(n, e, l) {
        return (0, t.jsx)(d.Dr, {
            id: "favorite-channel",
            label: E,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            badge: R ? "beta" : void 0,
            action: e,
            children: l,
        });
    }
    if (!L || !z) return null;
    if (!D)
        return O(u.t, () =>
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([l.e("90797"), l.e("48609")]).then(l.bind(l, 168088));
                return (e) => (0, t.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (I) return null;
    let [[J], V] = a().partition(e, (n) => "null" === n.channel.id);
    function X(e) {
        w(), i(), (0, x.Yz)() || (0, g.tV)(!0, "channel_context_menu"), (0, g.Jz)(n.id, e, "channel_context_menu");
    }
    if (0 === V.length) return O(o.G, () => X(null));
    let M = y.intl.string(j.default.CgmkFJ);
    return O(
        o.G,
        () => X(null),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(d.rX, {
                    children: (0, t.jsx)(
                        d.Dr,
                        {
                            id: `favorite-${J.channel.id}`,
                            label: M,
                            action: () => X("null" === J.channel.id ? null : J.channel.id),
                        },
                        J.channel.id,
                    ),
                }),
                (0, t.jsx)(d.rX, {
                    children: V.map((n) =>
                        (0, t.jsx)(
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
function L(n) {
    let e = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { hasAccess: i } = (0, p.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && i && e
        ? (0, t.jsx)(d.Dr, {
              id: "favorite-channel",
              label: F(!0),
              color: "danger",
              action: () =>
                  n.type === C.rbe.GUILD_CATEGORY
                      ? (0, c.openModalLazy)(async () => {
                            let { default: e } = await l.e("52210").then(l.bind(l, 862377));
                            return (l) =>
                                (0, t.jsx)(e, {
                                    ...l,
                                    onConfirm: () => {
                                        l.onClose(), (0, g.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, g.i_)(n.id),
          })
        : null;
}
