(n.d(t, { Z: () => C }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(831209),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(367907),
    _ = n(213609),
    p = n(565138),
    h = n(267101),
    m = n(336197),
    g = n(661824),
    E = n(430824),
    b = n(626135),
    y = n(76535),
    O = n(866104),
    v = n(886176),
    I = n(981631),
    T = n(388032),
    S = n(24665);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
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
                A(e, t, n[t]);
            }));
    }
    return e;
}
function C(e) {
    var t;
    let { guildId: n } = e,
        a = (0, c.e7)([E.Z], () => E.Z.getGuild(n)),
        { loading: A, subscriptionsSettings: C } = (0, y.H)(n),
        { listingsLoaded: w } = (0, h.eD)(n),
        R = (0, h.ue)(n, { publishedOnly: !0 }),
        P = i.useCallback(async () => {
            (b.default.track(I.rMx.GUILD_SHOP_EMBED_CLICKED, N({}, (0, f.hH)(n))), await (0, m.Z)(I.Z5c.SERVER_SHOP(n)));
        }, [n]);
    (0, _.Z)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == a }
    );
    let D = R.length > 0 ? new Date(Math.min(...R.map((e) => Date.parse(e.published_at)))) : void 0;
    return A || !w
        ? (0, r.jsx)('div', {
              className: o()(S.guildShopEmbed, S.spinnerContainer),
              children: (0, r.jsx)(d.$jN, {})
          })
        : null == a || null == C
          ? null
          : (0, r.jsxs)('div', {
                className: S.guildShopEmbed,
                children: [
                    (0, r.jsx)(O.Z, { coverImageAsset: null != (t = C.cover_image_asset) ? t : null }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsxs)('div', {
                        className: S.serverShopLabel,
                        children: [
                            (0, r.jsx)(v.Z, {
                                height: '16px',
                                width: '16px',
                                color: l.Z.INTERACTIVE_NORMAL
                            }),
                            (0, r.jsx)(d.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: S.serverShopLabelText,
                                children: T.intl.string(T.t.al5EXF)
                            })
                        ]
                    }),
                    (0, r.jsx)(d.LZC, { size: 16 }),
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'text-default',
                        children: T.intl.format(T.t.NZeik5, { guildName: a.name })
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
                        className: S.guildShopEmbedFooter,
                        children: [
                            (0, r.jsx)(p.Z, { guild: a }),
                            (0, r.jsxs)('ul', {
                                className: S.guildShopSummary,
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: T.intl.format(T.t.tKZNlZ, { listingCount: R.length })
                                        })
                                    }),
                                    null != D &&
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: T.intl.format(T.t['kXr8+f'], { createdYear: D.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, r.jsx)(u.zx, {
                                className: S.guildShopEmbedCta,
                                onClick: P,
                                children: (0, r.jsxs)('div', {
                                    className: S.guildShopEmbedCtaContent,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: T.intl.string(T.t.jXx1CA)
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
