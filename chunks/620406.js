"use strict";
n.d(t, { $: () => y, A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(158954),
    c = n(311907),
    d = n(52133),
    _ = n(342952),
    f = n(435371),
    p = n(242640),
    h = n(287809),
    m = n(403362),
    g = n(235218),
    E = n(788868),
    A = n(778712),
    I = n(985018),
    T = n(279357),
    y = (function (e) {
        return (e.POPULAR = "popular"), (e.WISHLIST = "wishlist"), (e.NO_ICON = "no_icon"), e;
    })({});
let S = 3;
function v(e) {
    let {
            variant: t,
            wishlistItem: n,
            guildId: a,
            channelId: o,
            userIdsForGifting: y,
            userIdsForRecommendation: v,
            cardSize: C = p.Y.SMALL,
            contextContainerClassName: b,
        } = e,
        [N, R] = i.useState(l().uniq(y)),
        [O, D] = i.useState(l().uniq(v));
    i.useEffect(() => {
        D((e) => {
            let t = l().uniq(v);
            return (0, d.v)(e, t) ? e : t;
        });
    }, [v]),
        i.useEffect(() => {
            R((e) => {
                let t = l().uniq(y);
                return (0, d.v)(e, t) ? e : t;
            });
        }, [y]);
    let L = (0, c.bG)([h.default], () => (1 === N.length ? h.default.getUser(N[0]) : void 0), [N]),
        w = (0, c.yK)([h.default], () => O.map((e) => h.default.getUser(e)).filter(m.Vq), [O]);
    return (0, r.jsxs)("div", {
        className: T.kL,
        children: [
            "no_icon" === t
                ? null
                : (0, r.jsx)(f.m_, {
                      text: "popular" === t ? I.intl.string(I.t["DP0o+u"]) : I.intl.string(I.t["OnWY3/"]),
                      position: "top",
                      children: (0, r.jsx)("div", {
                          className: s()(T.RL, b),
                          children:
                              "popular" === t || 0 === w.length
                                  ? (0, r.jsx)("div", {
                                        className: T.fd,
                                        children: (0, r.jsx)(u.Y3C, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: T.I$,
                                        }),
                                    })
                                  : (0, r.jsx)(_.I, {
                                        users: w,
                                        guildId: a ?? void 0,
                                        channelId: o ?? void 0,
                                        maxUsers: S,
                                        size: A._3.SIZE_20,
                                    }),
                      }),
                  }),
            (0, r.jsx)(g.A, {
                item: n,
                wishlistId: null,
                isOwner: !1,
                cardSize: C,
                showOverlayButton: !0,
                hideButtonIcon: !0,
                showPrice: !0,
                showIcons: !1,
                giftingOrigin: E.vQ.SHOP_PAGE,
                profileOwner: L,
                additionalUserIds: N.length > 1 ? N : void 0,
            }),
        ],
    });
}
