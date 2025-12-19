n.d(t, { Z: () => _ }), n(388685), n(642613);
var i = n(54381),
    r = n(473749),
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
    m = n(823379),
    g = n(164670),
    b = n(187233),
    y = n(927613),
    C = n(550642),
    v = n(582113),
    x = n(981631),
    O = n(354459),
    E = n(388032),
    j = n(542519);
let S = "vc-gifting-".concat((0, a.Z)());
function _(e) {
    var t;
    let { isHovered: n, closePopout: a, onMouseEnter: _, onMouseLeave: P, channel: I } = e;
    r.useEffect(() => {
        n || a();
    }, [a, n]);
    let Z = (0, s.e7)([c.Z], () => c.Z.getApplication(v.t9)),
        [T] = (0, s.e7)(
            [d.Z],
            () => (null != I.id ? [d.Z.getParticipants(I.id), d.Z.getParticipantsVersion(I.id)] : [[], 0]),
            [I.id],
            u.Lc,
        ),
        N = (0, s.Wu)([f.Z], () => {
            let e = new Set();
            for (let n of T)
                if ((0, O.Io)(n) || (0, O._5)(n))
                    for (let i of f.Z.getActivities(n.user.id)) {
                        var t;
                        if (
                            i.application_id === (null == Z ? void 0 : Z.id) ||
                            (null == Z || null == (t = Z.linkedGames)
                                ? void 0
                                : t.some((e) => e.id === i.application_id)) === !0
                        ) {
                            e.add(n.user.id);
                            break;
                        }
                    }
            return Array.from(e).sort();
        }, [T, Z]),
        A = r.useMemo(() => {
            let e = T.map((e) => ((0, O.Io)(e) || (0, O._5)(e) ? e.user.id : null)).filter(m.lm);
            return (0, l.uniq)([...N, ...e]);
        }, [T, N]),
        {
            state: w,
            recommendations: M,
            skuIdToUserIdsReasons: R,
        } = (0, y.Z)({
            guildId: (0, g.ac)(),
            applicationId: v.t9,
            numWishlistItems: y.W,
            userIds: A,
            location: "Social Layer Gifting Mini Shelf",
            includeWishlists: !0,
        }),
        D = r.useMemo(() => {
            let e = new Set(A);
            return M.map((t) => {
                var n, r;
                let l =
                    null !=
                    (r =
                        null == (n = R[t.skuId])
                            ? void 0
                            : n
                                  .filter((t) => t.reason === b.g.WISHLIST && e.has(t.userId))
                                  .map((e) => e.userId)
                                  .filter(m.lm))
                        ? r
                        : [];
                return (0, i.jsx)(
                    C.Z,
                    {
                        variant: l.length > 0 ? C.B.WISHLIST : C.B.POPULAR,
                        wishlistItem: t,
                        userIds: l,
                        guildId: I.guild_id,
                        channelId: I.id,
                        contextContainerClassName: j.contextContainer,
                    },
                    t.skuId,
                );
            });
        }, [I.guild_id, I.id, M, R, A]);
    return (
        r.useEffect(() => {
            0 !== M.length &&
                h.default.track(x.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
                    guild_id: I.guild_id,
                    channel_id: I.id,
                    sku_ids: M.map((e) => e.skuId),
                });
        }, [I.id, I.guild_id, M]),
        (0, i.jsx)(p.Z, {
            children: (0, i.jsx)(o.VqE, {
                "aria-labelledby": S,
                modal: !1,
                children: (0, i.jsxs)("div", {
                    className: j.container,
                    onMouseEnter: _,
                    onMouseLeave: P,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            className: j.title,
                            variant: "text-lg/bold",
                            color: "text-strong",
                            children: E.intl.string(E.t.xLP3bi),
                        }),
                        (0, i.jsx)(o.xvT, {
                            className: j.subtitle,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: E.intl.format(E.t["+SqhBF"], {
                                applicationName:
                                    null != (t = null == Z ? void 0 : Z.name) ? t : E.intl.string(E.t["/1hhto"]),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: j.wishlistItemsContainer,
                            children:
                                "loading" === w || 0 === M.length ? (0, i.jsx)(o.$jN, { className: j.loading }) : D,
                        }),
                    ],
                }),
            }),
        })
    );
}
