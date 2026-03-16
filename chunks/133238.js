i.d(n, { m: () => j, y: () => m });
var t = i(627968);
i(64700);
var r = i(735438),
    l = i.n(r),
    a = i(311907),
    d = i(397927),
    s = i(260509),
    u = i(808728),
    o = i(71393),
    c = i(181079),
    A = i(422258),
    h = i(93055),
    f = i(5180),
    _ = i(652215),
    g = i(665606),
    v = i(985018);
function b(e) {
    return e ? v.intl.string(g.default.TN4nAX) : v.intl.string(g.default.G9fGlP);
}
function j(e) {
    let n = (0, a.bG)([u.Ay], () => u.Ay.getChannels(_.YYv))[_.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: r } = (0, h.CJ)(),
        { hasAccess: j, isExperimentEnabled: m, hasHigherPrivileges: p } = (0, h.TW)("useAddToFavoritesItem"),
        x = (0, f.IF)(e, p),
        y = (0, a.bG)([o.A], () => {
            if (null == e.guild_id) return !0;
            let n = o.A.getGuild(e.guild_id);
            return null != n && !(0, s.DG)(n);
        }),
        C = !__OVERLAY__ && x && y,
        G = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        T = b(!1);
    function E(e, n, i) {
        return (0, t.jsx)(d.Drp, {
            id: "favorite-channel",
            label: T,
            leadingAccessory: { type: "icon", icon: e },
            iconLeft: e,
            action: n,
            children: i,
        });
    }
    if (!m || !C) return null;
    if (!j)
        return E(d.tvc, () =>
            (0, d.mMO)(async () => {
                let { default: e } = await i.e("48609").then(i.bind(i, 168088));
                return (n) => (0, t.jsx)(e, { ...n });
            }),
        );
    if (G) return null;
    let [[N], O] = l().partition(n, (e) => "null" === e.channel.id);
    function D(n) {
        r(), c.A.favoriteGuildEnabled || (0, A.tV)(!0), (0, A.Jz)(e.id, n);
    }
    if (0 === O.length) return E(d.Gg5, () => D(null));
    let F = v.intl.string(g.default.CgmkFJ);
    return E(
        d.Gg5,
        () => D(null),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(d.rXV, {
                    children: (0, t.jsx)(
                        d.Drp,
                        {
                            id: `favorite-${N.channel.id}`,
                            label: F,
                            action: () => D("null" === N.channel.id ? null : N.channel.id),
                        },
                        N.channel.id,
                    ),
                }),
                (0, t.jsx)(d.rXV, {
                    children: O.map((e) =>
                        (0, t.jsx)(
                            d.Drp,
                            { id: `favorite-${e.channel.id}`, label: e.channel.name, action: () => D(e.channel.id) },
                            e.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function m(e) {
    let n = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        { hasAccess: r } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && n
        ? (0, t.jsx)(d.Drp, {
              id: "favorite-channel",
              label: b(!0),
              color: "danger",
              action: () =>
                  e.type === _.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: n } = await i.e("52210").then(i.bind(i, 862377));
                            return (i) =>
                                (0, t.jsx)(n, {
                                    ...i,
                                    onConfirm: () => {
                                        i.onClose(), (0, A.i_)(e.id);
                                    },
                                    channel: e,
                                });
                        })
                      : (0, A.i_)(e.id),
          })
        : null;
}
