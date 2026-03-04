i.d(n, { m: () => b, y: () => v });
var t = i(627968);
i(64700);
var r = i(735438),
    l = i.n(r),
    a = i(311907),
    d = i(397927),
    s = i(808728),
    o = i(181079),
    c = i(422258),
    u = i(93055),
    A = i(652215),
    h = i(665606),
    f = i(985018);
function _(e, n) {
    return e.type === A.rbe.GROUP_DM
        ? n
            ? f.intl.string(f.t["0BWmSM"])
            : f.intl.string(f.t.uuVTOK)
        : e.type === A.rbe.DM
          ? n
              ? f.intl.string(f.t["2wfKGo"])
              : f.intl.string(f.t.wPbAse)
          : n
            ? f.intl.string(f.t.Bou7lT)
            : f.intl.string(f.t["4wcdE/"]);
}
function b(e) {
    let n = (0, a.bG)([s.Ay], () => s.Ay.getChannels(A.YYv))[A.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: i } = (0, u.CJ)(),
        { hasAccess: r, isExperimentEnabled: b, hasHigherPrivileges: v } = (0, u.TW)("useAddToFavoritesItem"),
        g = e.isThread(),
        p = !__OVERLAY__ && (!g || v),
        j = (0, a.bG)([o.A], () => o.A.isFavorite(e.id));
    if (!b || !p) return null;
    if (!r)
        return (0, t.jsx)(d.Drp, {
            id: "favorite-channel",
            label: _(e, !1),
            action: () => {},
            trailingIndicator: { type: "icon", icon: d.tvc },
        });
    if (j) return null;
    let [[m], y] = l().partition(n, (e) => "null" === e.channel.id);
    function x(n) {
        i(), (0, c.Jz)(e.id, n);
    }
    if (0 === y.length) return (0, t.jsx)(d.Drp, { id: "favorite-channel", label: _(e, !1), action: () => x(null) });
    let T = f.intl.string(h.default["5ckhsK"]);
    return (0, t.jsxs)(d.Drp, {
        id: "favorite-channel",
        label: _(e, !1),
        action: () => x(null),
        children: [
            (0, t.jsx)(d.rXV, {
                children: (0, t.jsx)(
                    d.Drp,
                    {
                        id: `favorite-${m.channel.id}`,
                        label: T,
                        action: () => x("null" === m.channel.id ? null : m.channel.id),
                        trailingIndicator: { type: "icon", icon: d.Gg5 },
                    },
                    m.channel.id,
                ),
            }),
            (0, t.jsx)(d.rXV, {
                children: y.map((e) =>
                    (0, t.jsx)(
                        d.Drp,
                        { id: `favorite-${e.channel.id}`, label: e.channel.name, action: () => x(e.channel.id) },
                        e.channel.id,
                    ),
                ),
            }),
        ],
    });
}
function v(e) {
    let n = (0, a.bG)([o.A], () => o.A.isFavorite(e.id)),
        { hasAccess: r } = (0, u.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && n
        ? (0, t.jsx)(d.Drp, {
              id: "favorite-channel",
              label: _(e, !0),
              color: "danger",
              action: () =>
                  e.type === A.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: n } = await i.e("52210").then(i.bind(i, 862377));
                            return (i) =>
                                (0, t.jsx)(n, {
                                    ...i,
                                    onConfirm: () => {
                                        i.onClose(), (0, c.i_)(e.id);
                                    },
                                    channel: e,
                                });
                        })
                      : (0, c.i_)(e.id),
          })
        : null;
}
