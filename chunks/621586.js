n.d(t, { Z: () => _ }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n(772848),
    o = n(793030),
    s = n(442837),
    c = n(812206),
    u = n(413523),
    d = n(358221),
    p = n(390322),
    f = n(158776),
    h = n(626135),
    g = n(823379),
    m = n(164670),
    b = n(187233),
    y = n(927613),
    v = n(550642),
    O = n(582113),
    j = n(981631),
    x = n(354459),
    C = n(388032),
    E = n(542519);
let S = "vc-gifting-".concat((0, a.Z)());
function _(e) {
    var t;
    let { isHovered: n, closePopout: a, onMouseEnter: _, onMouseLeave: I, channel: P } = e;
    i.useEffect(() => {
        n || a();
    }, [a, n]);
    let Z = (0, s.e7)([c.Z], () => c.Z.getApplication(O.t9)),
        [N] = (0, s.e7)(
            [d.Z],
            () => (null != P.id ? [d.Z.getParticipants(P.id), d.Z.getParticipantsVersion(P.id)] : [[], 0]),
            [P.id],
            u.Lc,
        ),
        T = (0, s.Wu)([f.Z], () => {
            let e = new Set();
            for (let n of N)
                if ((0, x.Io)(n) || (0, x._5)(n))
                    for (let r of f.Z.getActivities(n.user.id)) {
                        var t;
                        if (
                            r.application_id === (null == Z ? void 0 : Z.id) ||
                            (null == Z || null == (t = Z.linkedGames)
                                ? void 0
                                : t.some((e) => e.id === r.application_id)) === !0
                        ) {
                            e.add(n.user.id);
                            break;
                        }
                    }
            return Array.from(e).sort();
        }, [N, Z]),
        A = i.useMemo(() => {
            let e = N.map((e) => ((0, x.Io)(e) || (0, x._5)(e) ? e.user.id : null)).filter(g.lm);
            return (0, l.uniq)([...T, ...e]);
        }, [N, T]),
        {
            state: w,
            recommendations: R,
            skuIdToUserIdsReasons: D,
        } = (0, y.Z)({
            guildId: (0, m.ac)(),
            applicationId: O.t9,
            numWishlistItems: y.W,
            userIds: A,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        }),
        M = i.useMemo(() => {
            let e = new Set(A);
            return R.map((t) => {
                var n, i;
                let l =
                    null !=
                    (i =
                        null == (n = D[t.skuId])
                            ? void 0
                            : n
                                  .filter((t) => t.reason === b.g.WISHLIST && e.has(t.userId))
                                  .map((e) => e.userId)
                                  .filter(g.lm))
                        ? i
                        : [];
                return (0, r.jsx)(
                    v.Z,
                    {
                        variant: l.length > 0 ? v.B.WISHLIST : v.B.POPULAR,
                        wishlistItem: t,
                        userIdsForRecommendation: l,
                        userIdsForGifting: A,
                        guildId: P.guild_id,
                        channelId: P.id,
                        contextContainerClassName: E.contextContainer,
                    },
                    t.skuId,
                );
            });
        }, [P.guild_id, P.id, R, D, A]);
    return (
        i.useEffect(() => {
            0 !== R.length &&
                h.default.track(j.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: P.guild_id,
                    channel_id: P.id,
                    sku_ids: R.map((e) => e.skuId),
                });
        }, [P.id, P.guild_id, R]),
        (0, r.jsx)(p.Z, {
            children: (0, r.jsx)(o.VqE, {
                "aria-labelledby": S,
                modal: !1,
                children: (0, r.jsxs)("div", {
                    className: E.container,
                    onMouseEnter: _,
                    onMouseLeave: I,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            className: E.title,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: C.intl.string(C.t.xLP3bi),
                        }),
                        (0, r.jsx)(o.xvT, {
                            className: E.subtitle,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: C.intl.format(C.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == Z ? void 0 : Z.name) ? t : C.intl.string(C.t["/1hhto"]),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: E.wishlistItemsContainer,
                            children:
                                "loading" === w || 0 === R.length ? (0, r.jsx)(o.$jN, { className: E.loading }) : M,
                        }),
                    ],
                }),
            }),
        })
    );
}
