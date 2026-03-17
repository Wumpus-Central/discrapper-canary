"use strict";
n.d(t, { A: () => M });
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
    m = n(246356),
    p = n(178213),
    g = n(332772),
    _ = n(594832),
    f = n(290863),
    x = n(954571),
    C = n(403362),
    E = n(871123),
    I = n(79871),
    N = n(592356),
    b = n(568751),
    S = n(620406),
    T = n(84511),
    v = n(188275),
    y = n(652215),
    j = n(806931),
    R = n(985018),
    O = n(877409);
let L = `vc-gifting-${(0, o.A)()}`;
function M(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: l, onMouseLeave: o, channel: M } = e;
    s.useEffect(() => {
        t || n();
    }, [n, t]);
    let D = (0, p.GG)("social_layer_storefront_gifting_mini_shelf");
    (0, g.T)({ location: "social_layer_storefront_gifting_mini_shelf" });
    let G = (0, d.bG)([u.A], () => u.A.getApplication(v.XR)),
        [U] = (0, d.bG)(
            [A.A],
            () => (null != M.id ? [A.A.getParticipants(M.id), A.A.getParticipantsVersion(M.id)] : [[], 0]),
            [M.id],
            h.hS,
        ),
        P = (0, d.yK)([f.A], () => {
            let e = new Set();
            for (let t of U)
                if ((0, j.Xw)(t) || (0, j.Ay)(t)) {
                    for (let n of f.A.getActivities(t.user.id))
                        if (
                            n.application_id === G?.id ||
                            G?.linkedGames?.some((e) => e.id === n.application_id) === !0
                        ) {
                            e.add(t.user.id);
                            break;
                        }
                }
            return Array.from(e).sort();
        }, [U, G]),
        w = s.useMemo(() => {
            let e = U.map((e) => ((0, j.Xw)(e) || (0, j.Ay)(e) ? e.user.id : null)).filter(C.Vq);
            return (0, a.uniq)([...P, ...e]);
        }, [U, P]),
        {
            state: k,
            recommendations: V,
            skuIdToUserIdsReasons: B,
        } = (0, N.A)({ applicationId: v.XR, numWishlistItems: N.o, userIds: w, includeWishlists: !0 }),
        H = s.useMemo(() => {
            let e = new Set(w),
                { hasWishlist: t, hasPopular: n } = (0, E.wH)(V, B, e),
                s = t && n;
            return V.map((t) => {
                let n =
                    B[t.skuId]
                        ?.filter((t) => t.reason === I.G.WISHLIST && e.has(t.userId))
                        .map((e) => e.userId)
                        .filter(C.Vq) ?? [];
                return D
                    ? (0, i.jsx)(
                          b.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? _.uS.WISHLIST : _.uS.POPULAR,
                              application: G,
                              guildId: M.guild_id,
                              channelId: M.id,
                              showIcons: s,
                              userIdsForGifting: w,
                              userIdsForRecommendation: n,
                          },
                          t.skuId,
                      )
                    : (0, i.jsx)(
                          S.A,
                          {
                              variant: n.length > 0 ? S.$.WISHLIST : S.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: n,
                              userIdsForGifting: w,
                              guildId: M.guild_id,
                              channelId: M.id,
                              contextContainerClassName: O.RL,
                          },
                          t.skuId,
                      );
            });
        }, [M.guild_id, M.id, V, B, w, D, G]);
    return (
        s.useEffect(() => {
            0 !== V.length &&
                x.default.track(y.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: M.guild_id,
                    channel_id: M.id,
                    sku_ids: V.map((e) => e.skuId),
                });
        }, [M.id, M.guild_id, V]),
        (0, i.jsx)(m.A, {
            children: (0, i.jsx)(c.lGe, {
                "aria-labelledby": L,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: O.kL,
                    onMouseEnter: l,
                    onMouseLeave: o,
                    children: [
                        (0, i.jsx)("div", {
                            className: O.wx,
                            children: (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(c.DZT, {
                                        className: O.DD,
                                        variant: "text-lg/bold",
                                        color: "text-strong",
                                        children: R.intl.string(R.t.xLP3bi),
                                    }),
                                    (0, i.jsx)(c.EYj, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["+SqhBF"], {
                                            applicationName: G?.name ?? R.intl.string(R.t["/1hhto"]),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: r()(O.Xb, { [O.Im]: D }),
                            children: "loading" === k || 0 === V.length ? (0, i.jsx)(c.y$y, { className: O.Lq }) : H,
                        }),
                        (0, i.jsx)(T.A, { location: "social_layer_gifting_mini_shelf", className: O.Ij }),
                    ],
                }),
            }),
        })
    );
}
