l.d(e, { C: () => L, z: () => D });
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
    A = l(994500),
    b = l(287809),
    G = l(181079),
    g = l(422258),
    p = l(676168),
    v = l(93055),
    m = l(5180),
    x = l(606660),
    j = l(652215),
    y = l(449817),
    C = l(375708);
function F(n) {
    return n ? C.intl.string(y.default.TN4nAX) : C.intl.string(y.default.G9fGlP);
}
function D(n) {
    let e = (0, r.bG)([f.Ay], () => f.Ay.getChannels(j.YYv))[j.rbe.GUILD_CATEGORY],
        { hasAccess: t, isExperimentEnabled: D, hasHigherPrivileges: L } = (0, v.TW)("useAddToFavoritesItem"),
        k = (0, m.IF)(n, L),
        I = (0, r.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        T = !__OVERLAY__ && k && I,
        Y = (0, r.bG)([G.A], () => G.A.isFavorite(n.id)),
        { shouldShowBetaTag: R, dismissBetaTag: w } = (0, p.k3)(D && T && t && !Y),
        E = F(!1);
    function O(n, e, l) {
        return (0, i.jsx)(d.Dr, {
            id: "favorite-channel",
            label: E,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            badge: R ? "beta" : void 0,
            action: e,
            children: l,
        });
    }
    if (!D || !T) return null;
    if (!t)
        return O(u.t, () =>
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([l.e("90797"), l.e("7476")]).then(l.bind(l, 777023));
                return (e) => (0, i.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (Y) return null;
    let [[z], X] = a().partition(e, (n) => "null" === n.channel.id);
    function M(e) {
        w(), (0, x.A)(), (0, g.S_)({ channelIds: [n.id], parentId: e, source: "channel_context_menu" });
    }
    if (0 === X.length) return O(o.G, () => M(null));
    let P = C.intl.string(y.default.CgmkFJ);
    return O(
        o.G,
        () => M(null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.rX, {
                    children: (0, i.jsx)(
                        d.Dr,
                        {
                            id: `favorite-${z.channel.id}`,
                            label: P,
                            action: () => M("null" === z.channel.id ? null : z.channel.id),
                        },
                        z.channel.id,
                    ),
                }),
                (0, i.jsx)(d.rX, {
                    children: X.map((n) =>
                        (0, i.jsx)(
                            d.Dr,
                            {
                                id: `favorite-${n.channel.id}`,
                                label: (0, s.m1)(n.channel, b.default, A.A),
                                action: () => M(n.channel.id),
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
        ? (0, i.jsx)(d.Dr, {
              id: "favorite-channel",
              label: F(!0),
              color: "danger",
              action: () =>
                  n.type === j.rbe.GUILD_CATEGORY
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
