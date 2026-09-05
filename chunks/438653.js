l.d(e, { C: () => F, z: () => D });
var t = l(477900);
l(582128);
var i = l(435558),
    a = l.n(i),
    r = l(17928),
    d = l(477782),
    c = l(403581),
    u = l(192308),
    o = l(27232),
    s = l(47167),
    h = l(260509),
    f = l(808728),
    _ = l(71393),
    b = l(994500),
    A = l(287809),
    g = l(181079),
    p = l(16236),
    v = l(676168),
    m = l(93055),
    G = l(5180),
    x = l(652215),
    j = l(384539),
    y = l(375708);
function C(n) {
    return n ? y.intl.string(j.default.TN4nAX) : y.intl.string(j.default.G9fGlP);
}
function D(n) {
    let e = (0, r.bG)([f.Ay], () => f.Ay.getChannels(x.YYv))[x.rbe.GUILD_CATEGORY],
        { hasAccess: i, isExperimentEnabled: D } = (0, m.TW)("useAddToFavoritesItem"),
        F = (0, G.jt)(n),
        I = (0, r.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        L = !__OVERLAY__ && F && I,
        k = (0, r.bG)([g.A], () => g.A.isFavorite(n.id)),
        { shouldShowBetaTag: T, dismissBetaTag: Y } = (0, v.k3)(D && L && i && !k),
        R = C(!1);
    function w(n, e, l) {
        return (0, t.jsx)(d.Dr, {
            id: "favorite-channel",
            label: R,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            badge: T ? "beta" : void 0,
            action: e,
            children: l,
        });
    }
    if (!D || !L) return null;
    if (!i)
        return w(c.t, () =>
            (0, u.openModalLazy)(async () => {
                let { default: n } = await Promise.all([l.e("390797"), l.e("307476")]).then(l.bind(l, 777023));
                return (e) => (0, t.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (k) return null;
    let [[E], O] = a().partition(e, (n) => "null" === n.channel.id);
    function z(e) {
        Y(), (0, p.S_)({ channelIds: [n.id], parentId: e, source: "channel_context_menu" });
    }
    if (0 === O.length) return w(o.StarIcon, () => z(null));
    let S = y.intl.string(j.default.CgmkFJ);
    return w(
        o.StarIcon,
        () => z(null),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(d.rX, {
                    children: (0, t.jsx)(
                        d.Dr,
                        {
                            id: `favorite-${E.channel.id}`,
                            label: S,
                            action: () => z("null" === E.channel.id ? null : E.channel.id),
                        },
                        E.channel.id,
                    ),
                }),
                (0, t.jsx)(d.rX, {
                    children: O.map((n) =>
                        (0, t.jsx)(
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
    let e = (0, r.bG)([g.A], () => g.A.isFavorite(n.id)),
        { hasAccess: i } = (0, m.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && i && e
        ? (0, t.jsx)(d.Dr, {
              id: "favorite-channel",
              label: C(!0),
              color: "danger",
              action: () =>
                  n.type === x.rbe.GUILD_CATEGORY
                      ? (0, u.openModalLazy)(async () => {
                            let { default: e } = await l.e("992085").then(l.bind(l, 703476));
                            return (l) =>
                                (0, t.jsx)(e, {
                                    ...l,
                                    onConfirm: () => {
                                        l.onClose(), (0, p.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, p.i_)(n.id),
          })
        : null;
}
