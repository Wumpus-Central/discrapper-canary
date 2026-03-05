e.d(n, { m: () => p, y: () => _ });
var i = e(627968);
e(64700);
var l = e(735438),
    r = e.n(l),
    a = e(311907),
    d = e(397927),
    o = e(808728),
    s = e(181079),
    u = e(422258),
    c = e(93055),
    f = e(652215),
    A = e(665606),
    h = e(985018);
function v(t, n) {
    return t.type === f.rbe.GROUP_DM
        ? n
            ? h.intl.string(h.t["0BWmSM"])
            : h.intl.string(h.t.uuVTOK)
        : t.type === f.rbe.DM
          ? n
              ? h.intl.string(h.t["2wfKGo"])
              : h.intl.string(h.t.wPbAse)
          : n
            ? h.intl.string(h.t.Bou7lT)
            : h.intl.string(h.t["4wcdE/"]);
}
function p(t) {
    let n = (0, a.bG)([o.Ay], () => o.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: e } = (0, c.CJ)(),
        { hasAccess: l, isExperimentEnabled: p, hasHigherPrivileges: _ } = (0, c.TW)("useAddToFavoritesItem"),
        g = t.isThread(),
        m = !__OVERLAY__ && (!g || _),
        C = (0, a.bG)([s.A], () => s.A.isFavorite(t.id));
    if (!p || !m) return null;
    if (!l)
        return (0, i.jsx)(d.Drp, {
            id: "favorite-channel",
            label: v(t, !1),
            action: () => {},
            trailingIndicator: { type: "icon", icon: d.tvc },
        });
    if (C) return null;
    let [[b], E] = r().partition(n, (t) => "null" === t.channel.id);
    function O(n) {
        e(), (0, u.Jz)(t.id, n);
    }
    if (0 === E.length) return (0, i.jsx)(d.Drp, { id: "favorite-channel", label: v(t, !1), action: () => O(null) });
    let T = h.intl.string(A.default.G9fGlP);
    return (0, i.jsxs)(d.Drp, {
        id: "favorite-channel",
        label: v(t, !1),
        action: () => O(null),
        children: [
            (0, i.jsx)(d.rXV, {
                children: (0, i.jsx)(
                    d.Drp,
                    {
                        id: `favorite-${b.channel.id}`,
                        label: T,
                        action: () => O("null" === b.channel.id ? null : b.channel.id),
                        trailingIndicator: { type: "icon", icon: d.Gg5 },
                    },
                    b.channel.id,
                ),
            }),
            (0, i.jsx)(d.rXV, {
                children: E.map((t) =>
                    (0, i.jsx)(
                        d.Drp,
                        { id: `favorite-${t.channel.id}`, label: t.channel.name, action: () => O(t.channel.id) },
                        t.channel.id,
                    ),
                ),
            }),
        ],
    });
}
function _(t) {
    let n = (0, a.bG)([s.A], () => s.A.isFavorite(t.id)),
        { hasAccess: l } = (0, c.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && l && n
        ? (0, i.jsx)(d.Drp, {
              id: "favorite-channel",
              label: v(t, !0),
              color: "danger",
              action: () =>
                  t.type === f.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: n } = await e.e("52210").then(e.bind(e, 862377));
                            return (e) =>
                                (0, i.jsx)(n, {
                                    ...e,
                                    onConfirm: () => {
                                        e.onClose(), (0, u.i_)(t.id);
                                    },
                                    channel: t,
                                });
                        })
                      : (0, u.i_)(t.id),
          })
        : null;
}
