(n.d(t, { Z: () => I }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(831209),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    p = n(367907),
    m = n(213609),
    f = n(565138),
    g = n(267101),
    h = n(336197),
    _ = n(661824),
    b = n(430824),
    E = n(626135),
    x = n(76535),
    v = n(866104),
    y = n(886176),
    C = n(981631),
    O = n(388032),
    j = n(24665);
function I(e) {
    var t;
    let { guildId: n } = e,
        l = (0, c.e7)([b.Z], () => b.Z.getGuild(n)),
        { loading: I, subscriptionsSettings: S } = (0, x.H)(n),
        { listingsLoaded: T } = (0, g.eD)(n),
        N = (0, g.ue)(n, { publishedOnly: !0 }),
        P = i.useCallback(async () => {
            (E.default.track(
                C.rMx.GUILD_SHOP_EMBED_CLICKED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, (0, p.hH)(n))
            ),
                await (0, h.Z)(C.Z5c.SERVER_SHOP(n)));
        }, [n]);
    (0, m.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == l }
    );
    let A = N.length > 0 ? new Date(Math.min(...N.map((e) => Date.parse(e.published_at)))) : void 0;
    return I || !T
        ? (0, r.jsx)('div', {
              className: a()(j.guildShopEmbed, j.spinnerContainer),
              children: (0, r.jsx)(d.$jN, {})
          })
        : null == l || null == S
          ? null
          : (0, r.jsxs)('div', {
                className: j.guildShopEmbed,
                children: [
                    (0, r.jsx)(v.Z, { coverImageAsset: null != (t = S.cover_image_asset) ? t : null }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsxs)('div', {
                        className: j.serverShopLabel,
                        children: [
                            (0, r.jsx)(y.Z, {
                                height: '16px',
                                width: '16px',
                                color: s.Z.INTERACTIVE_NORMAL
                            }),
                            (0, r.jsx)(d.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: j.serverShopLabelText,
                                children: O.intl.string(O.t.al5EXF)
                            })
                        ]
                    }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'text-default',
                        children: O.intl.format(O.t.NZeik5, { guildName: l.name })
                    }),
                    (0, r.jsx)(d.LZC, { size: 4 }),
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        lineClamp: 2,
                        children: S.description
                    }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsx)(_.Z, {}),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsxs)('div', {
                        className: j.guildShopEmbedFooter,
                        children: [
                            (0, r.jsx)(f.Z, { guild: l }),
                            (0, r.jsxs)('ul', {
                                className: j.guildShopSummary,
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: O.intl.format(O.t.tKZNlZ, { listingCount: N.length })
                                        })
                                    }),
                                    null != A &&
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: O.intl.format(O.t['kXr8+f'], { createdYear: A.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, r.jsx)(u.zx, {
                                className: j.guildShopEmbedCta,
                                onClick: P,
                                children: (0, r.jsxs)('div', {
                                    className: j.guildShopEmbedCtaContent,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: O.intl.string(O.t.jXx1CA)
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
