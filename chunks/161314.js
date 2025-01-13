n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(831209),
    c = n(442837),
    d = n(481060),
    u = n(367907),
    m = n(213609),
    h = n(565138),
    f = n(267101),
    p = n(336197),
    _ = n(661824),
    g = n(430824),
    E = n(626135),
    C = n(76535),
    I = n(866104),
    x = n(886176),
    N = n(981631),
    v = n(388032),
    T = n(894840);
function S(e) {
    var t;
    let { guildId: n } = e,
        l = (0, c.e7)([g.Z], () => g.Z.getGuild(n)),
        { loading: S, subscriptionsSettings: A } = (0, C.H)(n),
        { listingsLoaded: b } = (0, f.eD)(n),
        j = (0, f.ue)(n, { publishedOnly: !0 }),
        R = r.useCallback(async () => {
            E.default.track(N.rMx.GUILD_SHOP_EMBED_CLICKED, { ...(0, u.hH)(n) }), await (0, p.Z)(N.Z5c.SERVER_SHOP(n));
        }, [n]);
    (0, m.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.GUILD_SHOP_EMBED
        },
        { disableTrack: null == l }
    );
    let Z = j.length > 0 ? new Date(Math.min(...j.map((e) => Date.parse(e.published_at)))) : void 0;
    return S || !b
        ? (0, i.jsx)('div', {
              className: a()(T.guildShopEmbed, T.spinnerContainer),
              children: (0, i.jsx)(d.Spinner, {})
          })
        : null == l || null == A
          ? null
          : (0, i.jsxs)('div', {
                className: T.guildShopEmbed,
                children: [
                    (0, i.jsx)(I.Z, { coverImageAsset: null !== (t = A.cover_image_asset) && void 0 !== t ? t : null }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: T.serverShopLabel,
                        children: [
                            (0, i.jsx)(x.Z, {
                                height: '16px',
                                width: '16px',
                                color: s.Z.INTERACTIVE_NORMAL
                            }),
                            (0, i.jsx)(d.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'interactive-normal',
                                className: T.serverShopLabelText,
                                children: v.intl.string(v.t.al5EXF)
                            })
                        ]
                    }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'text-normal',
                        children: v.intl.format(v.t.NZeik5, { guildName: l.name })
                    }),
                    (0, i.jsx)(d.Spacer, { size: 4 }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        lineClamp: 2,
                        children: A.description
                    }),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsx)(_.Z, {}),
                    (0, i.jsx)(d.Spacer, { size: 16 }),
                    (0, i.jsxs)('div', {
                        className: T.guildShopEmbedFooter,
                        children: [
                            (0, i.jsx)(h.Z, { guild: l }),
                            (0, i.jsxs)('ul', {
                                className: T.guildShopSummary,
                                children: [
                                    (0, i.jsx)('li', {
                                        children: (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: v.intl.format(v.t.tKZNlZ, { listingCount: j.length })
                                        })
                                    }),
                                    null != Z &&
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-muted',
                                                children: v.intl.format(v.t['kXr8+f'], { createdYear: Z.getFullYear() })
                                            })
                                        })
                                ]
                            }),
                            (0, i.jsx)(d.Button, {
                                className: T.guildShopEmbedCta,
                                onClick: R,
                                children: (0, i.jsxs)('div', {
                                    className: T.guildShopEmbedCtaContent,
                                    children: [
                                        (0, i.jsx)(x.Z, {
                                            height: '18px',
                                            width: '18px'
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: v.intl.string(v.t.jXx1CA)
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
}
