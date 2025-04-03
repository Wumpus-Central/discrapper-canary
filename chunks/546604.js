n.d(t, { default: () => b }), n(266796);
var r = n(200651);
n(192379);
var a = n(512722),
    i = n.n(a),
    s = n(990547),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(213609),
    u = n(240657),
    m = n(809086),
    x = n(430824),
    f = n(240864),
    h = n(942833),
    j = n(409110),
    _ = n(226060),
    p = n(388032),
    g = n(486893);
function b(e) {
    var t, n;
    let { transitionState: a, guildProductListingId: b, analyticsLocation: v, guildId: N, onClose: Z } = e,
        C = (0, l.e7)([f.Z], () => f.Z.getGuildProduct(b));
    i()(null != C, 'guildProductListing cannot be null'),
        (0, d.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: {
                guild_product_listing_id: b,
                has_entitlement: !0 === C.has_entitlement,
                location: v
            }
        });
    let y = null != (t = (0, h.C)(C)) ? t : '',
        I = (0, h.k)(C),
        O = (0, l.e7)([x.Z], () => x.Z.getGuild(N));
    return (0, r.jsxs)(o.Y0X, {
        className: g.modal,
        size: o.CgR.MEDIUM,
        transitionState: a,
        'aria-label': C.name,
        children: [
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                children: [
                    (0, r.jsx)(m.e, {
                        height: 267,
                        listing: C,
                        className: g.headerImage,
                        alt: ''
                    }),
                    (0, r.jsx)(o.olH, {
                        className: g.closeButton,
                        onClick: Z,
                        withCircleBackground: !0
                    })
                ]
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsxs)('div', {
                    className: g.body,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-xl/medium',
                            color: 'header-primary',
                            children: C.name
                        }),
                        (0, r.jsx)(o.LZC, { size: 4 }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: p.NW.format(p.t.xImSen, {
                                productType: y,
                                personName: null != (n = null == O ? void 0 : O.name) ? n : ''
                            })
                        }),
                        (0, r.jsx)(o.LZC, { size: 16 }),
                        (0, r.jsx)(j.Z, { listing: C }),
                        (0, r.jsx)(o.LZC, { size: 16 }),
                        (0, r.jsx)('div', { className: g.seperator }),
                        (0, r.jsx)(o.LZC, { size: 16 }),
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: p.NW.string(p.t.TNnDJi)
                        }),
                        (0, r.jsx)(o.LZC, { size: 12 }),
                        (0, r.jsx)(u.Z, {
                            className: g.description,
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            text: C.description
                        })
                    ]
                })
            }),
            (0, r.jsxs)(o.mzw, {
                className: g.footer,
                children: [
                    (0, r.jsx)(_.Z, {
                        guildId: N,
                        guildProductListingId: b,
                        sourceAnalyticsLocations: c.Z.GUILD_PRODUCT_INFO_MODAL
                    }),
                    (0, r.jsx)(o.Text, {
                        tag: 'div',
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: I
                    })
                ]
            })
        ]
    });
}
