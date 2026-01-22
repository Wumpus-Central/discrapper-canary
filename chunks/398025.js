n.d(t, {
    $: () => A,
    A: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(158954),
    u = n(311907),
    d = n(52133),
    f = n(342952),
    p = n(435371),
    _ = n(242640),
    h = n(287809),
    m = n(403362),
    g = n(235218),
    E = n(788868),
    b = n(778712),
    y = n(985018),
    O = n(279357),
    A = (function (e) {
        return (e.POPULAR = "popular"), (e.WISHLIST = "wishlist"), (e.NO_ICON = "no_icon"), e;
    })({});
let v = 3;

function S(e) {
    let {
            variant: t,
            wishlistItem: n,
            guildId: a,
            channelId: o,
            userIdsForGifting: A,
            userIdsForRecommendation: S,
            cardSize: I = _.Y.SMALL,
            contextContainerClassName: T,
        } = e,
        [C, N] = i.useState(l().uniq(A)),
        [R, w] = i.useState(l().uniq(S));
    i.useEffect(() => {
        w((e) => {
            let t = l().uniq(S);
            return (0, d.v)(e, t) ? e : t;
        });
    }, [S]),
        i.useEffect(() => {
            N((e) => {
                let t = l().uniq(A);
                return (0, d.v)(e, t) ? e : t;
            });
        }, [A]);
    let P = (0, u.bG)([h.default], () => (1 === C.length ? h.default.getUser(C[0]) : void 0), [C]),
        D = (0, u.yK)([h.default], () => R.map((e) => h.default.getUser(e)).filter(m.Vq), [R]);
    return (0, r.jsxs)("div", {
        className: O.kL,
        children: [
            "no_icon" === t
                ? null
                : (0, r.jsx)(p.m_, {
                      text: "popular" === t ? y.intl.string(y.t["DP0o+u"]) : y.intl.string(y.t["OnWY3/"]),
                      position: "top",
                      children: (0, r.jsx)("div", {
                          className: s()(O.RL, T),
                          children:
                              "popular" === t || 0 === D.length
                                  ? (0, r.jsx)("div", {
                                        className: O.fd,
                                        children: (0, r.jsx)(c.Y3C, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: O.I$,
                                        }),
                                    })
                                  : (0, r.jsx)(f.I, {
                                        users: D,
                                        guildId: null != a ? a : void 0,
                                        channelId: null != o ? o : void 0,
                                        maxUsers: v,
                                        size: b._3.SIZE_20,
                                    }),
                      }),
                  }),
            (0, r.jsx)(g.A, {
                item: n,
                wishlistId: null,
                isOwner: !1,
                cardSize: I,
                showOverlayButton: !0,
                hideButtonIcon: !0,
                showPrice: !0,
                showIcons: !1,
                giftingOrigin: E.vQ.SHOP_PAGE,
                profileOwner: P,
                additionalUserIds: C.length > 1 ? C : void 0,
            }),
        ],
    });
}
