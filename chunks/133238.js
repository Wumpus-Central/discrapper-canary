n.d(t, { m: () => v, y: () => L });
var r = n(627968);
n(64700);
var l = n(735438),
    i = n.n(l),
    a = n(311907),
    u = n(477782),
    o = n(403581),
    d = n(192308),
    s = n(27232),
    c = n(47167),
    _ = n(260509),
    h = n(808728),
    A = n(71393),
    E = n(994500),
    T = n(287809),
    f = n(181079),
    N = n(422258),
    S = n(93055),
    m = n(5180),
    C = n(652215),
    g = n(335993),
    I = n(985018);
function p(e) {
    return e ? I.intl.string(g.default.TN4nAX) : I.intl.string(g.default.G9fGlP);
}
function v(e) {
    let t = (0, a.bG)([h.Ay], () => h.Ay.getChannels(C.YYv))[C.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: l } = (0, S.CJ)(),
        { hasAccess: v, isExperimentEnabled: L, hasHigherPrivileges: y } = (0, S.TW)("useAddToFavoritesItem"),
        j = (0, m.IF)(e, y),
        b = (0, a.bG)([A.A], () => {
            if (null == e.guild_id) return !0;
            let t = A.A.getGuild(e.guild_id);
            return null != t && !(0, _.DG)(t);
        }),
        O = !__OVERLAY__ && j && b,
        G = (0, a.bG)([f.A], () => f.A.isFavorite(e.id)),
        R = p(!1);
    function x(e, t, n) {
        return (0, r.jsx)(u.Dr, {
            id: "favorite-channel",
            label: R,
            leadingAccessory: { type: "icon", icon: e },
            iconLeft: e,
            action: t,
            children: n,
        });
    }
    if (!L || !O) return null;
    if (!v)
        return x(o.t, () =>
            (0, d.openModalLazy)(async () => {
                let { default: e } = await n.e("48609").then(n.bind(n, 168088));
                return (t) => (0, r.jsx)(e, { ...t, source: "channel_context_menu" });
            }),
        );
    if (G) return null;
    let [[U], H] = i().partition(t, (e) => "null" === e.channel.id);
    function M(t) {
        l(),
            f.A.favoriteGuildEnabled || (0, N.tV)(!0, "channel_context_menu"),
            (0, N.Jz)(e.id, t, "channel_context_menu");
    }
    if (0 === H.length) return x(s.G, () => M(null));
    let D = I.intl.string(g.default.CgmkFJ);
    return x(
        s.G,
        () => M(null),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.rX, {
                    children: (0, r.jsx)(
                        u.Dr,
                        {
                            id: `favorite-${U.channel.id}`,
                            label: D,
                            action: () => M("null" === U.channel.id ? null : U.channel.id),
                        },
                        U.channel.id,
                    ),
                }),
                (0, r.jsx)(u.rX, {
                    children: H.map((e) =>
                        (0, r.jsx)(
                            u.Dr,
                            {
                                id: `favorite-${e.channel.id}`,
                                label: (0, c.m1)(e.channel, T.default, E.A),
                                action: () => M(e.channel.id),
                            },
                            e.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function L(e) {
    let t = (0, a.bG)([f.A], () => f.A.isFavorite(e.id)),
        { hasAccess: l } = (0, S.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && l && t
        ? (0, r.jsx)(u.Dr, {
              id: "favorite-channel",
              label: p(!0),
              color: "danger",
              action: () =>
                  e.type === C.rbe.GUILD_CATEGORY
                      ? (0, d.openModalLazy)(async () => {
                            let { default: t } = await n.e("52210").then(n.bind(n, 862377));
                            return (n) =>
                                (0, r.jsx)(t, {
                                    ...n,
                                    onConfirm: () => {
                                        n.onClose(), (0, N.i_)(e.id);
                                    },
                                    channel: e,
                                });
                        })
                      : (0, N.i_)(e.id),
          })
        : null;
}
