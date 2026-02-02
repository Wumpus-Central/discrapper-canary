n.d(t, {
    $: () => v,
    A: () => I,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
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
    y = n(778712),
    b = n(985018),
    O = n(279357),
    v = (function (e) {
        return (e.POPULAR = "popular"), (e.WISHLIST = "wishlist"), (e.NO_ICON = "no_icon"), e;
    })({});
let A = 3;

function I(e) {
    let {
            variant: t,
            wishlistItem: n,
            guildId: a,
            channelId: s,
            userIdsForGifting: v,
            userIdsForRecommendation: I,
            cardSize: S = _.Y.SMALL,
            contextContainerClassName: T,
        } = e,
        [C, N] = i.useState(l().uniq(v)),
        [w, R] = i.useState(l().uniq(I));
    i.useEffect(() => {
        R((e) => {
            let t = l().uniq(I);
            return (0, d.v)(e, t) ? e : t;
        });
    }, [I]),
        i.useEffect(() => {
            N((e) => {
                let t = l().uniq(v);
                return (0, d.v)(e, t) ? e : t;
            });
        }, [v]);
    let P = (0, u.bG)([h.default], () => (1 === C.length ? h.default.getUser(C[0]) : void 0), [C]),
        D = (0, u.yK)([h.default], () => w.map((e) => h.default.getUser(e)).filter(m.Vq), [w]);
    return (0, r.jsxs)("div", {
        className: O.kL,
        children: [
            "no_icon" === t
                ? null
                : (0, r.jsx)(p.m_, {
                      text: "popular" === t ? b.intl.string(b.t["DP0o+u"]) : b.intl.string(b.t["OnWY3/"]),
                      position: "top",
                      children: (0, r.jsx)("div", {
                          className: o()(O.RL, T),
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
                                        channelId: null != s ? s : void 0,
                                        maxUsers: A,
                                        size: y._3.SIZE_20,
                                    }),
                      }),
                  }),
            (0, r.jsx)(g.A, {
                item: n,
                wishlistId: null,
                isOwner: !1,
                cardSize: S,
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
