n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(990547),
    o = n(831209),
    c = n(442837),
    d = n(481060),
    u = n(367907),
    m = n(213609),
    h = n(565138),
    _ = n(267101),
    p = n(336197),
    g = n(661824),
    f = n(430824),
    x = n(626135),
    E = n(76535),
    C = n(866104),
    v = n(886176),
    I = n(981631),
    N = n(388032),
    S = n(894840);
function T(e) {
    var t;
    let { guildId: n } = e,
        a = (0, c.e7)([f.Z], () => f.Z.getGuild(n)),
        { loading: T, subscriptionsSettings: b } = (0, E.H)(n),
        { listingsLoaded: A } = (0, _.eD)(n),
        j = (0, _.ue)(n, { publishedOnly: !0 }),
        y = l.useCallback(async () => {
            x.default.track(I.rMx.GUILD_SHOP_EMBED_CLICKED, { ...(0, u.hH)(n) }), await (0, p.Z)(I.Z5c.SERVER_SHOP(n));
        }, [n]);
    (0, m.Z)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == a }
    );
    let Z = j.length > 0 ? new Date(Math.min(...j.map((e) => Date.parse(e.published_at)))) : void 0;
    return T || !A
        ? (0, i.jsx)('div', {
              className: r()(S.guildShopEmbed, S.spinnerContainer),
              children: (0, i.jsx)(d.$jN, {})
          })
        : null == a || null == b
          ? null
          : (0, i.jsxs)('div', {
                className: S.guildShopEmbed,
                children: [
                    (0, i.jsx)(C.Z, { coverImageAsset: null !== (t = b.cover_image_asset) && void 0 !== t ? t : null }),
                    (0, i.jsx)(d.LZC, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: S.serverShopLabel,
                        children: [
                            (0, i.jsx)(v.Z, {
                                height: '16px',
                                width: '16px',
                                color: o.Z.INTERACTIVE_NORMAL
                            }),
                            (0, i.jsx)(d.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: S.serverShopLabelText,
                                children: N.intl.string(N.t.al5EXF)
                            })
                        ]
                    }),
                    (0, i.jsx)(d.LZC, { size: 16 }),
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'text-normal',
                        children: N.intl.format(N.t.NZeik5, { guildName: a.name })
                    }),
                    (0, i.jsx)(d.LZC, { size: 4 }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        lineClamp: 2,
                        children: b.description
                    }),
                    (0, i.jsx)(d.LZC, { size: 16 }),
                    (0, i.jsx)(g.Z, {}),
                    (0, i.jsx)(d.LZC, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: S.guildShopEmbedFooter,
                        children: [
                            (0, i.jsx)(h.Z, { guild: a }),
                            (0, i.jsxs)('ul', {
                                className: S.guildShopSummary,
                                children: [
                                    (0, i.jsx)('li', {
                                        children: (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: N.intl.format(N.t.tKZNlZ, { listingCount: j.length })
                                        })
                                    }),
                                    null != Z &&
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: N.intl.format(N.t['kXr8+f'], { createdYear: Z.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, i.jsx)(d.zxk, {
                                className: S.guildShopEmbedCta,
                                onClick: y,
                                children: (0, i.jsxs)('div', {
                                    className: S.guildShopEmbedCtaContent,
                                    children: [
                                        (0, i.jsx)(v.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: N.intl.string(N.t.jXx1CA)
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
