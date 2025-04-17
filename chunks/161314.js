n.d(t, { Z: () => j }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(990547),
    s = n(831209),
    c = n(442837),
    u = n(481060),
    d = n(367907),
    p = n(213609),
    m = n(565138),
    f = n(267101),
    h = n(336197),
    g = n(661824),
    _ = n(430824),
    b = n(626135),
    x = n(76535),
    y = n(866104),
    E = n(886176),
    v = n(981631),
    N = n(388032),
    O = n(24665);
function j(e) {
    var t;
    let { guildId: n } = e,
        a = (0, c.e7)([_.Z], () => _.Z.getGuild(n)),
        { loading: j, subscriptionsSettings: C } = (0, x.H)(n),
        { listingsLoaded: S } = (0, f.eD)(n),
        I = (0, f.ue)(n, { publishedOnly: !0 }),
        T = i.useCallback(async () => {
            b.default.track(
                v.rMx.GUILD_SHOP_EMBED_CLICKED,
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
                })({}, (0, d.hH)(n))
            ),
                await (0, h.Z)(v.Z5c.SERVER_SHOP(n));
        }, [n]);
    (0, p.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == a }
    );
    let P = I.length > 0 ? new Date(Math.min(...I.map((e) => Date.parse(e.published_at)))) : void 0;
    return j || !S
        ? (0, r.jsx)('div', {
              className: l()(O.guildShopEmbed, O.spinnerContainer),
              children: (0, r.jsx)(u.$jN, {})
          })
        : null == a || null == C
          ? null
          : (0, r.jsxs)('div', {
                className: O.guildShopEmbed,
                children: [
                    (0, r.jsx)(y.Z, { coverImageAsset: null != (t = C.cover_image_asset) ? t : null }),
                    (0, r.jsx)(u.LZC, { size: 16 }),
                    (0, r.jsxs)('div', {
                        className: O.serverShopLabel,
                        children: [
                            (0, r.jsx)(E.Z, {
                                height: '16px',
                                width: '16px',
                                color: s.Z.INTERACTIVE_NORMAL
                            }),
                            (0, r.jsx)(u.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: O.serverShopLabelText,
                                children: N.NW.string(N.t.al5EXF)
                            })
                        ]
                    }),
                    (0, r.jsx)(u.LZC, { size: 16 }),
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'text-normal',
                        children: N.NW.format(N.t.NZeik5, { guildName: a.name })
                    }),
                    (0, r.jsx)(u.LZC, { size: 4 }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        lineClamp: 2,
                        children: C.description
                    }),
                    (0, r.jsx)(u.LZC, { size: 16 }),
                    (0, r.jsx)(g.Z, {}),
                    (0, r.jsx)(u.LZC, { size: 16 }),
                    (0, r.jsxs)('div', {
                        className: O.guildShopEmbedFooter,
                        children: [
                            (0, r.jsx)(m.Z, { guild: a }),
                            (0, r.jsxs)('ul', {
                                className: O.guildShopSummary,
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: N.NW.format(N.t.tKZNlZ, { listingCount: I.length })
                                        })
                                    }),
                                    null != P &&
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: N.NW.format(N.t['kXr8+f'], { createdYear: P.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, r.jsx)(u.zxk, {
                                className: O.guildShopEmbedCta,
                                onClick: T,
                                children: (0, r.jsxs)('div', {
                                    className: O.guildShopEmbedCtaContent,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: N.NW.string(N.t.jXx1CA)
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
