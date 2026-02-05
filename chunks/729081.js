n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(835245),
    r = n(158954),
    o = n(311907),
    d = n(587895),
    c = n(568598),
    u = n(313961),
    h = n(246356),
    A = n(178213),
    g = n(594832),
    m = n(290863),
    p = n(954571),
    _ = n(403362),
    x = n(79871),
    f = n(592356),
    E = n(568751),
    C = n(620406),
    I = n(188275),
    S = n(652215),
    b = n(806931),
    N = n(985018),
    T = n(877409);
let j = `vc-gifting-${(0, a.A)()}`;
function v(e) {
    let { isHovered: t, closePopout: n, onMouseEnter: a, onMouseLeave: v, channel: y } = e;
    l.useEffect(() => {
        t || n();
    }, [n, t]);
    let R = (0, A.G)("social_layer_storefront_gifting_mini_shelf"),
        O = (0, o.bG)([d.A], () => d.A.getApplication(I.XR)),
        [L] = (0, o.bG)(
            [u.A],
            () => (null != y.id ? [u.A.getParticipants(y.id), u.A.getParticipantsVersion(y.id)] : [[], 0]),
            [y.id],
            c.hS,
        ),
        D = (0, o.yK)([m.A], () => {
            let e = new Set();
            for (let t of L)
                if ((0, b.Xw)(t) || (0, b.Ay)(t)) {
                    for (let n of m.A.getActivities(t.user.id))
                        if (
                            n.application_id === O?.id ||
                            O?.linkedGames?.some((e) => e.id === n.application_id) === !0
                        ) {
                            e.add(t.user.id);
                            break;
                        }
                }
            return Array.from(e).sort();
        }, [L, O]),
        M = l.useMemo(() => {
            let e = L.map((e) => ((0, b.Xw)(e) || (0, b.Ay)(e) ? e.user.id : null)).filter(_.Vq);
            return (0, s.uniq)([...D, ...e]);
        }, [L, D]),
        {
            state: G,
            recommendations: U,
            skuIdToUserIdsReasons: P,
        } = (0, f.A)({
            applicationId: I.XR,
            numWishlistItems: f.o,
            userIds: M,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        }),
        k = l.useMemo(() => {
            let e = new Set(M);
            return U.map((t) => {
                let n =
                    P[t.skuId]
                        ?.filter((t) => t.reason === x.G.WISHLIST && e.has(t.userId))
                        .map((e) => e.userId)
                        .filter(_.Vq) ?? [];
                return R
                    ? (0, i.jsx)(
                          E.A,
                          {
                              sku: t.sku,
                              source: n.length > 0 ? g.uS.WISHLIST : g.uS.POPULAR,
                              guildId: y.guild_id,
                              channelId: y.id,
                              contextContainerClassName: T.RL,
                              userIdsForGifting: M,
                              userIdsForRecommendation: n,
                          },
                          t.skuId,
                      )
                    : (0, i.jsx)(
                          C.A,
                          {
                              variant: n.length > 0 ? C.$.WISHLIST : C.$.POPULAR,
                              wishlistItem: t,
                              userIdsForRecommendation: n,
                              userIdsForGifting: M,
                              guildId: y.guild_id,
                              channelId: y.id,
                              contextContainerClassName: T.RL,
                          },
                          t.skuId,
                      );
            });
        }, [y.guild_id, y.id, U, P, M, R]);
    return (
        l.useEffect(() => {
            0 !== U.length &&
                p.default.track(S.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: y.guild_id,
                    channel_id: y.id,
                    sku_ids: U.map((e) => e.skuId),
                });
        }, [y.id, y.guild_id, U]),
        (0, i.jsx)(h.A, {
            children: (0, i.jsx)(r.lGe, {
                "aria-labelledby": j,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: T.kL,
                    onMouseEnter: a,
                    onMouseLeave: v,
                    children: [
                        (0, i.jsx)(r.DZT, {
                            className: T.DD,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: N.intl.string(N.t.xLP3bi),
                        }),
                        (0, i.jsx)(r.EYj, {
                            className: T.VA,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: N.intl.format(N.t["+SqhBF"], {
                                applicationName: O?.name ?? N.intl.string(N.t["/1hhto"]),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: T.Xb,
                            children: "loading" === G || 0 === U.length ? (0, i.jsx)(r.y$y, { className: T.Lq }) : k,
                        }),
                    ],
                }),
            }),
        })
    );
}
