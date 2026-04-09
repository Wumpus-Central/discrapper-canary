t.d(n, { m: () => O, y: () => T });
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    d = t(397927),
    o = t(47167),
    u = t(260509),
    s = t(808728),
    c = t(71393),
    f = t(994500),
    A = t(287809),
    h = t(181079),
    _ = t(422258),
    v = t(93055),
    E = t(5180),
    p = t(652215),
    b = t(525736),
    C = t(985018);
function g(e) {
    return e ? C.intl.string(b.default.TN4nAX) : C.intl.string(b.default.G9fGlP);
}
function O(e) {
    let n = (0, a.bG)([s.Ay], () => s.Ay.getChannels(p.YYv))[p.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: r } = (0, v.CJ)(),
        { hasAccess: O, isExperimentEnabled: T, hasHigherPrivileges: I } = (0, v.TW)("useAddToFavoritesItem"),
        R = (0, E.IF)(e, I),
        m = (0, a.bG)([c.A], () => {
            if (null == e.guild_id) return !0;
            let n = c.A.getGuild(e.guild_id);
            return null != n && !(0, u.DG)(n);
        }),
        y = !__OVERLAY__ && R && m,
        G = (0, a.bG)([h.A], () => h.A.isFavorite(e.id)),
        F = g(!1);
    function N(e, n, t) {
        return (0, i.jsx)(d.Drp, {
            id: "favorite-channel",
            label: F,
            leadingAccessory: { type: "icon", icon: e },
            iconLeft: e,
            action: n,
            children: t,
        });
    }
    if (!T || !y) return null;
    if (!O)
        return N(d.tvc, () =>
            (0, d.mMO)(async () => {
                let { default: e } = await t.e("48609").then(t.bind(t, 168088));
                return (n) => (0, i.jsx)(e, { ...n, source: "channel_context_menu" });
            }),
        );
    if (G) return null;
    let [[x], S] = l().partition(n, (e) => "null" === e.channel.id);
    function j(n) {
        r(),
            h.A.favoriteGuildEnabled || (0, _.tV)(!0, "channel_context_menu"),
            (0, _.Jz)(e.id, n, "channel_context_menu");
    }
    if (0 === S.length) return N(d.Gg5, () => j(null));
    let D = C.intl.string(b.default.CgmkFJ);
    return N(
        d.Gg5,
        () => j(null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.rXV, {
                    children: (0, i.jsx)(
                        d.Drp,
                        {
                            id: `favorite-${x.channel.id}`,
                            label: D,
                            action: () => j("null" === x.channel.id ? null : x.channel.id),
                        },
                        x.channel.id,
                    ),
                }),
                (0, i.jsx)(d.rXV, {
                    children: S.map((e) =>
                        (0, i.jsx)(
                            d.Drp,
                            {
                                id: `favorite-${e.channel.id}`,
                                label: (0, o.m1)(e.channel, A.default, f.A),
                                action: () => j(e.channel.id),
                            },
                            e.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function T(e) {
    let n = (0, a.bG)([h.A], () => h.A.isFavorite(e.id)),
        { hasAccess: r } = (0, v.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && n
        ? (0, i.jsx)(d.Drp, {
              id: "favorite-channel",
              label: g(!0),
              color: "danger",
              action: () =>
                  e.type === p.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: n } = await t.e("52210").then(t.bind(t, 862377));
                            return (t) =>
                                (0, i.jsx)(n, {
                                    ...t,
                                    onConfirm: () => {
                                        t.onClose(), (0, _.i_)(e.id);
                                    },
                                    channel: e,
                                });
                        })
                      : (0, _.i_)(e.id),
          })
        : null;
}
