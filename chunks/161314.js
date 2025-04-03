n.d(t, { Z: () => j }), n(47120), n(266796);
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
    O = n(388032),
    N = n(24665);
function j(e) {
    var t;
    let { guildId: n } = e,
        a = (0, c.e7)([_.Z], () => _.Z.getGuild(n)),
        { loading: j, subscriptionsSettings: C } = (0, x.H)(n),
        { listingsLoaded: I } = (0, f.eD)(n),
        S = (0, f.ue)(n, { publishedOnly: !0 }),
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
    let P = S.length > 0 ? new Date(Math.min(...S.map((e) => Date.parse(e.published_at)))) : void 0;
    return j || !I
        ? (0, r.jsx)('div', {
              className: l()(N.guildShopEmbed, N.spinnerContainer),
              children: (0, r.jsx)(u.$jN, {})
          })
        : null == a || null == C
          ? null
          : (0, r.jsxs)('div', {
                className: N.guildShopEmbed,
                children: [
                    (0, r.jsx)(y.Z, { coverImageAsset: null != (t = C.cover_image_asset) ? t : null }),
                    (0, r.jsx)(u.LZC, { size: 16 }),
                    (0, r.jsxs)('div', {
                        className: N.serverShopLabel,
                        children: [
                            (0, r.jsx)(E.Z, {
                                height: '16px',
                                width: '16px',
                                color: s.Z.INTERACTIVE_NORMAL
                            }),
                            (0, r.jsx)(u.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: N.serverShopLabelText,
                                children: O.NW.string(O.t.al5EXF)
                            })
                        ]
                    }),
                    (0, r.jsx)(u.LZC, { size: 16 }),
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'text-normal',
                        children: O.NW.format(O.t.NZeik5, { guildName: a.name })
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
                        className: N.guildShopEmbedFooter,
                        children: [
                            (0, r.jsx)(m.Z, { guild: a }),
                            (0, r.jsxs)('ul', {
                                className: N.guildShopSummary,
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: O.NW.format(O.t.tKZNlZ, { listingCount: S.length })
                                        })
                                    }),
                                    null != P &&
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: O.NW.format(O.t['kXr8+f'], { createdYear: P.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, r.jsx)(u.zxk, {
                                className: N.guildShopEmbedCta,
                                onClick: T,
                                children: (0, r.jsxs)('div', {
                                    className: N.guildShopEmbedCtaContent,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: O.NW.string(O.t.jXx1CA)
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
