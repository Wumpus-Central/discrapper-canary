t.d(n, { m: () => b, y: () => C });
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    d = t(397927),
    o = t(260509),
    u = t(808728),
    s = t(71393),
    c = t(181079),
    f = t(422258),
    A = t(93055),
    h = t(5180),
    _ = t(652215),
    v = t(665606),
    E = t(985018);
function p(e) {
    return e ? E.intl.string(v.default.TN4nAX) : E.intl.string(v.default.G9fGlP);
}
function b(e) {
    let n = (0, a.bG)([u.Ay], () => u.Ay.getChannels(_.YYv))[_.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: r } = (0, A.CJ)(),
        { hasAccess: b, isExperimentEnabled: C, hasHigherPrivileges: m } = (0, A.TW)("useAddToFavoritesItem"),
        O = (0, h.IF)(e, m),
        g = (0, a.bG)([s.A], () => {
            if (null == e.guild_id) return !0;
            let n = s.A.getGuild(e.guild_id);
            return null != n && !(0, o.DG)(n);
        }),
        T = !__OVERLAY__ && O && g,
        I = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        R = p(!1);
    function y(e, n, t) {
        return (0, i.jsx)(d.Drp, {
            id: "favorite-channel",
            label: R,
            leadingAccessory: { type: "icon", icon: e },
            iconLeft: e,
            action: n,
            children: t,
        });
    }
    if (!C || !T) return null;
    if (!b)
        return y(d.tvc, () =>
            (0, d.mMO)(async () => {
                let { default: e } = await t.e("48609").then(t.bind(t, 168088));
                return (n) => (0, i.jsx)(e, { ...n, source: "channel_context_menu" });
            }),
        );
    if (I) return null;
    let [[G], S] = l().partition(n, (e) => "null" === e.channel.id);
    function N(n) {
        r(),
            c.A.favoriteGuildEnabled || (0, f.tV)(!0, "channel_context_menu"),
            (0, f.Jz)(e.id, n, "channel_context_menu");
    }
    if (0 === S.length) return y(d.Gg5, () => N(null));
    let L = E.intl.string(v.default.CgmkFJ);
    return y(
        d.Gg5,
        () => N(null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.rXV, {
                    children: (0, i.jsx)(
                        d.Drp,
                        {
                            id: `favorite-${G.channel.id}`,
                            label: L,
                            action: () => N("null" === G.channel.id ? null : G.channel.id),
                        },
                        G.channel.id,
                    ),
                }),
                (0, i.jsx)(d.rXV, {
                    children: S.map((e) =>
                        (0, i.jsx)(
                            d.Drp,
                            { id: `favorite-${e.channel.id}`, label: e.channel.name, action: () => N(e.channel.id) },
                            e.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function C(e) {
    let n = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        { hasAccess: r } = (0, A.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && n
        ? (0, i.jsx)(d.Drp, {
              id: "favorite-channel",
              label: p(!0),
              color: "danger",
              action: () =>
                  e.type === _.rbe.GUILD_CATEGORY
                      ? (0, d.mMO)(async () => {
                            let { default: n } = await t.e("52210").then(t.bind(t, 862377));
                            return (t) =>
                                (0, i.jsx)(n, {
                                    ...t,
                                    onConfirm: () => {
                                        t.onClose(), (0, f.i_)(e.id);
                                    },
                                    channel: e,
                                });
                        })
                      : (0, f.i_)(e.id),
          })
        : null;
}
