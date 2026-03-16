t.d(e, { m: () => _, y: () => m });
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    d = t(311907),
    a = t(397927),
    s = t(260509),
    u = t(808728),
    c = t(71393),
    o = t(181079),
    A = t(422258),
    f = t(93055),
    h = t(652215),
    g = t(665606),
    j = t(985018);
function x(n) {
    return n ? j.intl.string(g.default.TN4nAX) : j.intl.string(g.default.G9fGlP);
}
function _(n) {
    let e = (0, d.bG)([u.Ay], () => u.Ay.getChannels(h.YYv))[h.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: r } = (0, f.CJ)(),
        { hasAccess: _, isExperimentEnabled: m, hasHigherPrivileges: b } = (0, f.TW)("useAddToFavoritesItem"),
        p = n.isThread(),
        v = (0, d.bG)([c.A], () => {
            if (null == n.guild_id) return !0;
            let e = c.A.getGuild(n.guild_id);
            return null != e && !(0, s.DG)(e);
        }),
        I = !__OVERLAY__ && (!p || b) && v,
        C = (0, d.bG)([o.A], () => o.A.isFavorite(n.id)),
        E = x(!1);
    function T(n, e, t) {
        return (0, i.jsx)(a.Drp, {
            id: "favorite-channel",
            label: E,
            leadingAccessory: { type: "icon", icon: n },
            iconLeft: n,
            action: e,
            children: t,
        });
    }
    if (!m || !I) return null;
    if (!_)
        return T(a.tvc, () =>
            (0, a.mMO)(async () => {
                let { default: n } = await t.e("48609").then(t.bind(t, 168088));
                return (e) => (0, i.jsx)(n, { ...e });
            }),
        );
    if (C) return null;
    let [[y], V] = l().partition(e, (n) => "null" === n.channel.id);
    function D(e) {
        r(), o.A.favoriteGuildEnabled || (0, A.tV)(!0), (0, A.Jz)(n.id, e);
    }
    if (0 === V.length) return T(a.Gg5, () => D(null));
    let G = j.intl.string(g.default.CgmkFJ);
    return T(
        a.Gg5,
        () => D(null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.rXV, {
                    children: (0, i.jsx)(
                        a.Drp,
                        {
                            id: `favorite-${y.channel.id}`,
                            label: G,
                            action: () => D("null" === y.channel.id ? null : y.channel.id),
                        },
                        y.channel.id,
                    ),
                }),
                (0, i.jsx)(a.rXV, {
                    children: V.map((n) =>
                        (0, i.jsx)(
                            a.Drp,
                            { id: `favorite-${n.channel.id}`, label: n.channel.name, action: () => D(n.channel.id) },
                            n.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function m(n) {
    let e = (0, d.bG)([o.A], () => o.A.isFavorite(n.id)),
        { hasAccess: r } = (0, f.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && e
        ? (0, i.jsx)(a.Drp, {
              id: "favorite-channel",
              label: x(!0),
              color: "danger",
              action: () =>
                  n.type === h.rbe.GUILD_CATEGORY
                      ? (0, a.mMO)(async () => {
                            let { default: e } = await t.e("52210").then(t.bind(t, 862377));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    onConfirm: () => {
                                        t.onClose(), (0, A.i_)(n.id);
                                    },
                                    channel: n,
                                });
                        })
                      : (0, A.i_)(n.id),
          })
        : null;
}
