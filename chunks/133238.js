i.d(n, { m: () => b, y: () => j });
var r = i(627968);
i(64700);
var t = i(735438),
    l = i.n(t),
    a = i(311907),
    d = i(397927),
    s = i(260509),
    u = i(808728),
    o = i(71393),
    c = i(181079),
    A = i(422258),
    h = i(93055),
    f = i(652215),
    _ = i(665606),
    g = i(985018);
function v(e) {
    return e ? g.intl.string(_.default.TN4nAX) : g.intl.string(_.default.G9fGlP);
}
function b(e) {
    let n = (0, a.bG)([u.Ay], () => u.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: t } = (0, h.CJ)(),
        { hasAccess: b, isExperimentEnabled: j, hasHigherPrivileges: m } = (0, h.TW)("useAddToFavoritesItem"),
        p = e.isThread(),
        x = (0, a.bG)([o.A], () => {
            if (null == e.guild_id) return !0;
            let n = o.A.getGuild(e.guild_id);
            return null != n && !(0, s.DG)(n);
        }),
        y = !__OVERLAY__ && (!p || m) && x,
        G = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        C = v(!1);
    function T(e, n, i) {
        return (0, r.jsx)(d.Drp, {
            id: "favorite-channel",
            label: C,
            leadingAccessory: { type: "icon", icon: e },
            action: n,
            children: i,
        });
    }
    if (!j || !y) return null;
    if (!b)
        return T(d.tvc, () =>
            (0, d.mMO)(async () => {
                let { default: e } = await i.e("48609").then(i.bind(i, 168088));
                return (n) => (0, r.jsx)(e, { ...n });
            }),
        );
    if (G) return null;
    let [[E], N] = l().partition(n, (e) => "null" === e.channel.id);
    function O(n) {
        t(), c.A.favoriteGuildEnabled || (0, A.tV)(!0), (0, A.Jz)(e.id, n);
    }
    if (0 === N.length) return T(d.Gg5, () => O(null));
    let D = g.intl.string(_.default.CgmkFJ);
    return T(
        d.Gg5,
        () => O(null),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.rXV, {
                    children: (0, r.jsx)(
                        d.Drp,
                        {
                            id: `favorite-${E.channel.id}`,
                            label: D,
                            action: () => O("null" === E.channel.id ? null : E.channel.id),
                        },
                        E.channel.id,
                    ),
                }),
                (0, r.jsx)(d.rXV, {
                    children: N.map((e) =>
                        (0, r.jsx)(
                            d.Drp,
                            { id: `favorite-${e.channel.id}`, label: e.channel.name, action: () => O(e.channel.id) },
                            e.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function j(e) {
    let n = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        { hasAccess: t } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && t && n
        ? (0, r.jsx)(d.Drp, {
              id: "favorite-channel",
              label: v(!0),
              color: "danger",
              action: () =>
                  e.type === f.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: n } = await i.e("52210").then(i.bind(i, 862377));
                            return (i) =>
                                (0, r.jsx)(n, {
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
