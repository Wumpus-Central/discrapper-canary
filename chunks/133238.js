l.d(e, { m: () => F, y: () => D });
var t = l(627968);
l(64700);
var i = l(435558),
    r = l.n(i),
    a = l(17928),
    u = l(477782),
    d = l(403581),
    c = l(192308),
    o = l(27232),
    s = l(47167),
    h = l(260509),
    f = l(808728),
    _ = l(71393),
    A = l(994500),
    b = l(287809),
    m = l(181079),
    G = l(422258),
    p = l(281980),
    g = l(5180),
    v = l(551289),
    x = l(652215),
    y = l(335993),
    j = l(375708);
function C(n) {
    return n ? j.intl.string(y.default.TN4nAX) : j.intl.string(y.default.G9fGlP);
}
function F(n) {
    let e = (0, a.bG)([f.Ay], () => f.Ay.getChannels(x.YYv))[x.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: i } = (0, p.CJ)(),
        { hasAccess: F, isExperimentEnabled: D, hasHigherPrivileges: L } = (0, p.TW)("useAddToFavoritesItem"),
        Y = (0, g.IF)(n, L),
        T = (0, a.bG)([_.A], () => {
            if (null == n.guild_id) return !0;
            let e = _.A.getGuild(n.guild_id);
            return null != e && !(0, h.DG)(e);
        }),
        k = !__OVERLAY__ && Y && T,
        I = (0, a.bG)([m.A], () => m.A.isFavorite(n.id)),
        R = C(!1);
    function w(n, e, l) {
        return (0, t.jsx)(u.Dr, {
            id: "favorite-channel",
            label: R,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            action: e,
            children: l,
        });
    }
    if (!D || !k) return null;
    if (!F)
        return w(d.t, () =>
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([l.e("90797"), l.e("48609")]).then(l.bind(l, 168088));
                return (e) => (0, t.jsx)(n, { ...e, source: "channel_context_menu" });
            }),
        );
    if (I) return null;
    let [[z], E] = r().partition(e, (n) => "null" === n.channel.id);
    function O(e) {
        i(), (0, v.Yz)() || (0, G.tV)(!0, "channel_context_menu"), (0, G.Jz)(n.id, e, "channel_context_menu");
    }
    if (0 === E.length) return w(o.G, () => O(null));
    let J = j.intl.string(y.default.CgmkFJ);
    return w(
        o.G,
        () => O(null),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(u.rX, {
                    children: (0, t.jsx)(
                        u.Dr,
                        {
                            id: `favorite-${z.channel.id}`,
                            label: J,
                            action: () => O("null" === z.channel.id ? null : z.channel.id),
                        },
                        z.channel.id,
                    ),
                }),
                (0, t.jsx)(u.rX, {
                    children: E.map((n) =>
                        (0, t.jsx)(
                            u.Dr,
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
function D(n) {
    let e = (0, a.bG)([m.A], () => m.A.isFavorite(n.id)),
        { hasAccess: i } = (0, p.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && i && e
        ? (0, t.jsx)(u.Dr, {
              id: "favorite-channel",
              label: C(!0),
              color: "danger",
              action: () =>
                  n.type === x.rbe.GUILD_CATEGORY
                      ? (0, c.openModalLazy)(async () => {
                            let { default: e } = await l.e("52210").then(l.bind(l, 862377));
                            return (l) =>
                                (0, t.jsx)(e, {
                                    ...l,
                                    onConfirm: () => {
                                        l.onClose(), (0, G.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, G.i_)(n.id),
          })
        : null;
}
