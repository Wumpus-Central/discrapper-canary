n.d(t, { Z: () => N }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(990547),
    s = n(831209),
    c = n(442837),
    d = n(481060),
    u = n(367907),
    p = n(213609),
    m = n(565138),
    f = n(267101),
    h = n(336197),
    g = n(661824),
    _ = n(430824),
    b = n(626135),
    v = n(76535),
    y = n(866104),
    x = n(886176),
    O = n(981631),
    E = n(388032),
    j = n(906989);
function N(e) {
    var t;
    let { guildId: n } = e,
        a = (0, c.e7)([_.Z], () => _.Z.getGuild(n)),
        { loading: N, subscriptionsSettings: C } = (0, v.H)(n),
        { listingsLoaded: I } = (0, f.eD)(n),
        S = (0, f.ue)(n, { publishedOnly: !0 }),
        P = i.useCallback(async () => {
            b.default.track(
                O.rMx.GUILD_SHOP_EMBED_CLICKED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, (0, u.hH)(n))
            ),
                await (0, h.Z)(O.Z5c.SERVER_SHOP(n));
        }, [n]);
    (0, p.Z)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == a }
    );
    let T = S.length > 0 ? new Date(Math.min(...S.map((e) => Date.parse(e.published_at)))) : void 0;
    return N || !I
        ? (0, r.jsx)('div', {
              className: o()(j.guildShopEmbed, j.spinnerContainer),
              children: (0, r.jsx)(d.$jN, {})
          })
        : null == a || null == C
          ? null
          : (0, r.jsxs)('div', {
                className: j.guildShopEmbed,
                children: [
                    (0, r.jsx)(y.Z, { coverImageAsset: null !== (t = C.cover_image_asset) && void 0 !== t ? t : null }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsxs)('div', {
                        className: j.serverShopLabel,
                        children: [
                            (0, r.jsx)(x.Z, {
                                height: '16px',
                                width: '16px',
                                color: s.Z.INTERACTIVE_NORMAL
                            }),
                            (0, r.jsx)(d.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: j.serverShopLabelText,
                                children: E.NW.string(E.t.al5EXF)
                            })
                        ]
                    }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'text-normal',
                        children: E.NW.format(E.t.NZeik5, { guildName: a.name })
                    }),
                    (0, r.jsx)(d.LZC, { size: 4 }),
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        lineClamp: 2,
                        children: C.description
                    }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsx)(g.Z, {}),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsxs)('div', {
                        className: j.guildShopEmbedFooter,
                        children: [
                            (0, r.jsx)(m.Z, { guild: a }),
                            (0, r.jsxs)('ul', {
                                className: j.guildShopSummary,
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: E.NW.format(E.t.tKZNlZ, { listingCount: S.length })
                                        })
                                    }),
                                    null != T &&
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: E.NW.format(E.t['kXr8+f'], { createdYear: T.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, r.jsx)(d.zxk, {
                                className: j.guildShopEmbedCta,
                                onClick: P,
                                children: (0, r.jsxs)('div', {
                                    className: j.guildShopEmbedCtaContent,
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: E.NW.string(E.t.jXx1CA)
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
