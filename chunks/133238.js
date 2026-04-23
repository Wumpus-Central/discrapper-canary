t.d(n, { m: () => v, y: () => T });
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    d = t(17928),
    a = t(477782),
    s = t(403581),
    u = t(192308),
    c = t(27232),
    o = t(47167),
    A = t(260509),
    h = t(808728),
    f = t(71393),
    g = t(994500),
    x = t(287809),
    _ = t(181079),
    j = t(422258),
    b = t(313281),
    m = t(5180),
    I = t(652215),
    C = t(335993),
    E = t(985018);
function y(e) {
    return e ? E.intl.string(C.default.TN4nAX) : E.intl.string(C.default.G9fGlP);
}
function v(e) {
    let n = (0, d.bG)([h.Ay], () => h.Ay.getChannels(I.YYv))[I.rbe.GUILD_CATEGORY],
        { notifyFavoriteAdded: r } = (0, b.CJ)(),
        { hasAccess: v, isExperimentEnabled: T, hasHigherPrivileges: p } = (0, b.TW)("useAddToFavoritesItem"),
        D = (0, m.IF)(e, p),
        U = (0, d.bG)([f.A], () => {
            if (null == e.guild_id) return !0;
            let n = f.A.getGuild(e.guild_id);
            return null != n && !(0, A.DG)(n);
        }),
        G = !__OVERLAY__ && D && U,
        N = (0, d.bG)([_.A], () => _.A.isFavorite(e.id)),
        R = y(!1);
    function S(e, n, t) {
        return (0, i.jsx)(a.Dr, {
            id: "favorite-channel",
            label: R,
            leadingAccessory: { type: "icon", icon: e },
            iconLeft: e,
            action: n,
            children: t,
        });
    }
    if (!T || !G) return null;
    if (!v)
        return S(s.t, () =>
            (0, u.openModalLazy)(async () => {
                let { default: e } = await t.e("48609").then(t.bind(t, 168088));
                return (n) => (0, i.jsx)(e, { ...n, source: "channel_context_menu" });
            }),
        );
    if (N) return null;
    let [[M], X] = l().partition(n, (e) => "null" === e.channel.id);
    function O(n) {
        r(),
            _.A.favoriteGuildEnabled || (0, j.tV)(!0, "channel_context_menu"),
            (0, j.Jz)(e.id, n, "channel_context_menu");
    }
    if (0 === X.length) return S(c.G, () => O(null));
    let P = E.intl.string(C.default.CgmkFJ);
    return S(
        c.G,
        () => O(null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.rX, {
                    children: (0, i.jsx)(
                        a.Dr,
                        {
                            id: `favorite-${M.channel.id}`,
                            label: P,
                            action: () => O("null" === M.channel.id ? null : M.channel.id),
                        },
                        M.channel.id,
                    ),
                }),
                (0, i.jsx)(a.rX, {
                    children: X.map((e) =>
                        (0, i.jsx)(
                            a.Dr,
                            {
                                id: `favorite-${e.channel.id}`,
                                label: (0, o.m1)(e.channel, x.default, g.A),
                                action: () => O(e.channel.id),
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
    let n = (0, d.bG)([_.A], () => _.A.isFavorite(e.id)),
        { hasAccess: r } = (0, b.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && n
        ? (0, i.jsx)(a.Dr, {
              id: "favorite-channel",
              label: y(!0),
              color: "danger",
              action: () =>
                  e.type === I.rbe.GUILD_CATEGORY
                      ? (0, u.openModalLazy)(async () => {
                            let { default: n } = await t.e("52210").then(t.bind(t, 862377));
                            return (t) =>
                                (0, i.jsx)(n, {
                                    ...t,
                                    onConfirm: () => {
                                        t.onClose(), (0, j.i_)(e.id);
                                    },
                                    channel: e,
                                });
                        })
                      : (0, j.i_)(e.id),
          })
        : null;
}
