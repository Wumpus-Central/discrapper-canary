l.d(e, { C: () => D, z: () => F });
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
function F(n) {
    let e = (0, r.bG)([f.Ay], () => f.Ay.getChannels(x.YYv))[x.rbe.GUILD_CATEGORY],
        { hasAccess: t, isExperimentEnabled: F, hasHigherPrivileges: D } = (0, v.TW)("useAddToFavoritesItem"),
        L = (0, m.IF)(n, D),
        k = (0, r.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        I = !__OVERLAY__ && L && k,
        T = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { shouldShowBetaTag: Y, dismissBetaTag: R } = (0, p.k3)(F && I && t && !T),
        w = C(!1);
    function E(n, e, l) {
        return (0, i.jsx)(d.Dr, {
            id: "favorite-channel",
            label: w,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            badge: Y ? "beta" : void 0,
            action: e,
            children: l,
        });
    }
    if (!F || !I) return null;
    if (!t)
        return E(u.t, () =>
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([l.e("90797"), l.e("7476")]).then(l.bind(l, 777023));
                return (e) => (0, i.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (T) return null;
    let [[O], z] = a().partition(e, (n) => "null" === n.channel.id);
    function X(e) {
        R(), (0, g.S_)({ channelIds: [n.id], parentId: e, source: "channel_context_menu" });
    }
    if (0 === z.length) return E(o.G, () => X(null));
    let M = y.intl.string(j.default.CgmkFJ);
    return E(
        o.G,
        () => X(null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.rX, {
                    children: (0, i.jsx)(
                        d.Dr,
                        {
                            id: `favorite-${O.channel.id}`,
                            label: M,
                            action: () => X("null" === O.channel.id ? null : O.channel.id),
                        },
                        O.channel.id,
                    ),
                }),
                (0, i.jsx)(d.rX, {
                    children: z.map((n) =>
                        (0, i.jsx)(
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
        ? (0, i.jsx)(d.Dr, {
              id: "favorite-channel",
              label: C(!0),
              color: "danger",
              action: () =>
                  n.type === x.rbe.GUILD_CATEGORY
                      ? (0, c.openModalLazy)(async () => {
                            let { default: e } = await l.e("92085").then(l.bind(l, 703476));
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
