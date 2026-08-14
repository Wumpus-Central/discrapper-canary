l.d(e, { C: () => F, z: () => D });
var i = l(477900);
l(582128);
var t = l(435558),
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
    b = l(994500),
    A = l(287809),
    G = l(181079),
    g = l(16236),
    p = l(676168),
    v = l(93055),
    m = l(5180),
    x = l(652215),
    j = l(449817),
    y = l(375708);
function C(n) {
    return n ? y.intl.string(j.default.TN4nAX) : y.intl.string(j.default.G9fGlP);
}
function D(n) {
    let e = (0, r.bG)([f.Ay], () => f.Ay.getChannels(x.YYv))[x.rbe.GUILD_CATEGORY],
        { hasAccess: t, isExperimentEnabled: D } = (0, v.TW)("useAddToFavoritesItem"),
        F = (0, m.jt)(n),
        L = (0, r.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        k = !__OVERLAY__ && F && L,
        T = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { shouldShowBetaTag: Y, dismissBetaTag: I } = (0, p.k3)(D && k && t && !T),
        R = C(!1);
    function w(n, e, l) {
        return (0, i.jsx)(d.Dr, {
            id: "favorite-channel",
            label: R,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            badge: Y ? "beta" : void 0,
            action: e,
            children: l,
        });
    }
    if (!D || !k) return null;
    if (!t)
        return w(u.t, () =>
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([l.e("390797"), l.e("307476")]).then(l.bind(l, 777023));
                return (e) => (0, i.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (T) return null;
    let [[E], O] = a().partition(e, (n) => "null" === n.channel.id);
    function z(e) {
        I(), (0, g.S_)({ channelIds: [n.id], parentId: e, source: "channel_context_menu" });
    }
    if (0 === O.length) return w(o.G, () => z(null));
    let X = y.intl.string(j.default.CgmkFJ);
    return w(
        o.G,
        () => z(null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.rX, {
                    children: (0, i.jsx)(
                        d.Dr,
                        {
                            id: `favorite-${E.channel.id}`,
                            label: X,
                            action: () => z("null" === E.channel.id ? null : E.channel.id),
                        },
                        E.channel.id,
                    ),
                }),
                (0, i.jsx)(d.rX, {
                    children: O.map((n) =>
                        (0, i.jsx)(
                            d.Dr,
                            {
                                id: `favorite-${n.channel.id}`,
                                label: (0, s.m1)(n.channel, A.default, b.A),
                                action: () => z(n.channel.id),
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
        { hasAccess: t } = (0, v.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && t && e
        ? (0, i.jsx)(d.Dr, {
              id: "favorite-channel",
              label: C(!0),
              color: "danger",
              action: () =>
                  n.type === x.rbe.GUILD_CATEGORY
                      ? (0, c.openModalLazy)(async () => {
                            let { default: e } = await l.e("992085").then(l.bind(l, 703476));
                            return (l) =>
                                (0, i.jsx)(e, {
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
