e.d(t, { m: () => p, y: () => x });
var i = e(627968);
e(64700);
var r = e(735438),
    l = e.n(r),
    a = e(311907),
    d = e(397927),
    s = e(260509),
    u = e(808728),
    o = e(71393),
    c = e(181079),
    A = e(422258),
    f = e(93055),
    h = e(652215),
    g = e(665606),
    _ = e(985018);
function j(n, t) {
    return n.type === h.rbe.GROUP_DM
        ? t
            ? _.intl.string(_.t["0BWmSM"])
            : _.intl.string(_.t.uuVTOK)
        : n.type === h.rbe.DM
          ? t
              ? _.intl.string(_.t["2wfKGo"])
              : _.intl.string(_.t.wPbAse)
          : t
            ? _.intl.string(_.t.Bou7lT)
            : _.intl.string(_.t["4wcdE/"]);
}
function p(n) {
    let t = (0, a.bG)([u.Ay], () => u.Ay.getChannels(h.YYv))[h.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: e } = (0, f.CJ)(),
        { hasAccess: r, isExperimentEnabled: p, hasHigherPrivileges: x } = (0, f.TW)("useAddToFavoritesItem"),
        b = n.isThread(),
        m = (0, a.bG)([o.A], () => {
            if (null == n.guild_id) return !0;
            let t = o.A.getGuild(n.guild_id);
            return null != t && !(0, s.DG)(t);
        }),
        I = !__OVERLAY__ && (!b || x) && m,
        v = (0, a.bG)([c.A], () => c.A.isFavorite(n.id));
    if (!p || !I) return null;
    if (!r)
        return (0, i.jsx)(d.Drp, {
            id: "favorite-channel",
            label: j(n, !1),
            action: () => {},
            trailingIndicator: { type: "icon", icon: d.tvc },
        });
    if (v) return null;
    let [[E], y] = l().partition(t, (n) => "null" === n.channel.id);
    function T(t) {
        e(), (0, A.Jz)(n.id, t);
    }
    if (0 === y.length) return (0, i.jsx)(d.Drp, { id: "favorite-channel", label: j(n, !1), action: () => T(null) });
    let D = _.intl.string(g.default.G9fGlP);
    return (0, i.jsxs)(d.Drp, {
        id: "favorite-channel",
        label: j(n, !1),
        action: () => T(null),
        children: [
            (0, i.jsx)(d.rXV, {
                children: (0, i.jsx)(
                    d.Drp,
                    {
                        id: `favorite-${E.channel.id}`,
                        label: D,
                        action: () => T("null" === E.channel.id ? null : E.channel.id),
                        trailingIndicator: { type: "icon", icon: d.Gg5 },
                    },
                    E.channel.id,
                ),
            }),
            (0, i.jsx)(d.rXV, {
                children: y.map((n) =>
                    (0, i.jsx)(
                        d.Drp,
                        { id: `favorite-${n.channel.id}`, label: n.channel.name, action: () => T(n.channel.id) },
                        n.channel.id,
                    ),
                ),
            }),
        ],
    });
}
function x(n) {
    let t = (0, a.bG)([c.A], () => c.A.isFavorite(n.id)),
        { hasAccess: r } = (0, f.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && t
        ? (0, i.jsx)(d.Drp, {
              id: "favorite-channel",
              label: j(n, !0),
              color: "danger",
              action: () =>
                  n.type === h.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: t } = await e.e("52210").then(e.bind(e, 862377));
                            return (e) =>
                                (0, i.jsx)(t, {
                                    ...e,
                                    onConfirm: () => {
                                        e.onClose(), (0, A.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, A.i_)(n.id),
          })
        : null;
}
