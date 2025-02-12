n.d(t, { default: () => v });
var a = n(200651);
n(192379);
var i = n(512722),
    s = n.n(i),
    r = n(990547),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(213609),
    x = n(240657),
    m = n(809086),
    u = n(430824),
    h = n(240864),
    _ = n(942833),
    f = n(409110),
    j = n(226060),
    p = n(388032),
    g = n(769975);
function v(e) {
    var t, n;
    let { transitionState: i, guildProductListingId: v, analyticsLocation: Z, guildId: N, onClose: C } = e,
        b = (0, l.e7)([h.Z], () => h.Z.getGuildProduct(v));
    s()(null != b, 'guildProductListing cannot be null'),
        (0, d.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: {
                guild_product_listing_id: v,
                has_entitlement: !0 === b.has_entitlement,
                location: Z
            }
        });
    let I = null !== (t = (0, _.C)(b)) && void 0 !== t ? t : '',
        L = (0, _.k)(b),
        z = (0, l.e7)([u.Z], () => u.Z.getGuild(N));
    return (0, a.jsxs)(o.Y0X, {
        className: g.modal,
        size: o.CgR.MEDIUM,
        transitionState: i,
        'aria-label': b.name,
        children: [
            (0, a.jsxs)(o.xBx, {
                separator: !1,
                children: [
                    (0, a.jsx)(m.e, {
                        height: 267,
                        listing: b,
                        className: g.headerImage,
                        alt: ''
                    }),
                    (0, a.jsx)(o.olH, {
                        className: g.closeButton,
                        onClick: C,
                        withCircleBackground: !0
                    })
                ]
            }),
            (0, a.jsx)(o.hzk, {
                children: (0, a.jsxs)('div', {
                    className: g.body,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: 'heading-xl/medium',
                            color: 'header-primary',
                            children: b.name
                        }),
                        (0, a.jsx)(o.LZC, { size: 4 }),
                        (0, a.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: p.intl.format(p.t.xImSen, {
                                productType: I,
                                personName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : ''
                            })
                        }),
                        (0, a.jsx)(o.LZC, { size: 16 }),
                        (0, a.jsx)(f.Z, { listing: b }),
                        (0, a.jsx)(o.LZC, { size: 16 }),
                        (0, a.jsx)('div', { className: g.seperator }),
                        (0, a.jsx)(o.LZC, { size: 16 }),
                        (0, a.jsx)(o.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: p.intl.string(p.t.TNnDJi)
                        }),
                        (0, a.jsx)(o.LZC, { size: 12 }),
                        (0, a.jsx)(x.Z, {
                            className: g.description,
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            text: b.description
                        })
                    ]
                })
            }),
            (0, a.jsxs)(o.mzw, {
                className: g.footer,
                children: [
                    (0, a.jsx)(j.Z, {
                        guildId: N,
                        guildProductListingId: v,
                        sourceAnalyticsLocations: c.Z.GUILD_PRODUCT_INFO_MODAL
                    }),
                    (0, a.jsx)(o.Text, {
                        tag: 'div',
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: L
                    })
                ]
            })
        ]
    });
}
