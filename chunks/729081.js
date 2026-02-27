"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n(835245),
    c = n(158954),
    d = n(311907),
    u = n(587895),
    h = n(568598),
    A = n(313961),
    p = n(246356),
    g = n(178213),
    m = n(594832),
    _ = n(290863),
    f = n(954571),
    x = n(403362),
    C = n(871123),
    E = n(79871),
    I = n(592356),
    N = n(568751),
    b = n(620406),
    S = n(84511),
    T = n(188275),
    y = n(652215),
    v = n(806931),
    j = n(985018),
    R = n(877409);
let O = `vc-gifting-${(0, o.A)()}`;
function L(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: l, onMouseLeave: o, channel: L } = e;
    s.useEffect(() => {
        t || n();
    }, [n, t]);
    let M = (0, g.G)("social_layer_storefront_gifting_mini_shelf"),
        D = (0, d.bG)([u.A], () => u.A.getApplication(T.XR)),
        [G] = (0, d.bG)(
            [A.A],
            () => (null != L.id ? [A.A.getParticipants(L.id), A.A.getParticipantsVersion(L.id)] : [[], 0]),
            [L.id],
            h.hS,
        ),
        U = (0, d.yK)([_.A], () => {
            let e = new Set();
            for (let t of G)
                if ((0, v.Xw)(t) || (0, v.Ay)(t)) {
                    for (let n of _.A.getActivities(t.user.id))
                        if (
                            n.application_id === D?.id ||
                            D?.linkedGames?.some((e) => e.id === n.application_id) === !0
                        ) {
                            e.add(t.user.id);
                            break;
                        }
                }
            return Array.from(e).sort();
        }, [G, D]),
        P = s.useMemo(() => {
            let e = G.map((e) => ((0, v.Xw)(e) || (0, v.Ay)(e) ? e.user.id : null)).filter(x.Vq);
            return (0, a.uniq)([...U, ...e]);
        }, [G, U]),
        {
            state: w,
            recommendations: k,
            skuIdToUserIdsReasons: B,
        } = (0, I.A)({
            applicationId: T.XR,
            numWishlistItems: I.o,
            userIds: P,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        }),
        V = s.useMemo(() => {
            let e = new Set(P),
                { hasWishlist: t, hasPopular: n } = (0, C.wH)(k, B, e),
                s = t && n;
            return k.map((t) => {
                let n =
                    B[t.skuId]
                        ?.filter((t) => t.reason === E.G.WISHLIST && e.has(t.userId))
                        .map((e) => e.userId)
                        .filter(x.Vq) ?? [];
                return M
                    ? (0, i.jsx)(
                          N.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? m.uS.WISHLIST : m.uS.POPULAR,
                              application: D,
                              guildId: L.guild_id,
                              channelId: L.id,
                              showIcons: s,
                              userIdsForGifting: P,
                              userIdsForRecommendation: n,
                          },
                          t.skuId,
                      )
                    : (0, i.jsx)(
                          b.A,
                          {
                              variant: n.length > 0 ? b.$.WISHLIST : b.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: n,
                              userIdsForGifting: P,
                              guildId: L.guild_id,
                              channelId: L.id,
                              contextContainerClassName: R.RL,
                          },
                          t.skuId,
                      );
            });
        }, [L.guild_id, L.id, k, B, P, M, D]);
    return (
        s.useEffect(() => {
            0 !== k.length &&
                f.default.track(y.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: L.guild_id,
                    channel_id: L.id,
                    sku_ids: k.map((e) => e.skuId),
                });
        }, [L.id, L.guild_id, k]),
        (0, i.jsx)(p.A, {
            children: (0, i.jsx)(c.lGe, {
                "aria-labelledby": O,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: R.kL,
                    onMouseEnter: l,
                    onMouseLeave: o,
                    children: [
                        (0, i.jsx)("div", {
                            className: R.wx,
                            children: (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(c.DZT, {
                                        className: R.DD,
                                        variant: "text-lg/bold",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.xLP3bi),
                                    }),
                                    (0, i.jsx)(c.EYj, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["+SqhBF"], {
                                            applicationName: D?.name ?? j.intl.string(j.t["/1hhto"]),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: r()(R.Xb, { [R.Im]: M }),
                            children: "loading" === w || 0 === k.length ? (0, i.jsx)(c.y$y, { className: R.Lq }) : V,
                        }),
                        (0, i.jsx)(S.A, { location: "social_layer_gifting_mini_shelf", className: R.Ij }),
                    ],
                }),
            }),
        })
    );
}
