n.r(t),
    n.d(t, {
        default: function () {
            return v;
        }
    });
var a = n(200651);
n(192379);
var r = n(512722),
    i = n.n(r),
    s = n(990547),
    o = n(442837),
    l = n(481060),
    c = n(100527),
    d = n(213609),
    u = n(240657),
    m = n(809086),
    x = n(430824),
    h = n(240864),
    f = n(942833),
    j = n(409110),
    p = n(226060),
    g = n(388032),
    _ = n(294877);
function v(e) {
    var t, n;
    let { transitionState: r, guildProductListingId: v, analyticsLocation: b, guildId: N, onClose: I } = e,
        Z = (0, o.e7)([h.Z], () => h.Z.getGuildProduct(v));
    i()(null != Z, 'guildProductListing cannot be null'),
        (0, d.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: {
                guild_product_listing_id: v,
                has_entitlement: !0 === Z.has_entitlement,
                location: b
            }
        });
    let C = null !== (t = (0, f.C)(Z)) && void 0 !== t ? t : '',
        S = (0, f.k)(Z),
        z = (0, o.e7)([x.Z], () => x.Z.getGuild(N));
    return (0, a.jsxs)(l.ModalRoot, {
        className: _.modal,
        size: l.ModalSize.MEDIUM,
        transitionState: r,
        'aria-label': Z.name,
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                separator: !1,
                children: [
                    (0, a.jsx)(m.e, {
                        height: 267,
                        listing: Z,
                        className: _.headerImage,
                        alt: ''
                    }),
                    (0, a.jsx)(l.ModalCloseButton, {
                        className: _.closeButton,
                        onClick: I,
                        withCircleBackground: !0
                    })
                ]
            }),
            (0, a.jsx)(l.ModalContent, {
                children: (0, a.jsxs)('div', {
                    className: _.body,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: 'heading-xl/medium',
                            color: 'header-primary',
                            children: Z.name
                        }),
                        (0, a.jsx)(l.Spacer, { size: 4 }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: g.intl.format(g.t.xImSen, {
                                productType: C,
                                personName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : ''
                            })
                        }),
                        (0, a.jsx)(l.Spacer, { size: 16 }),
                        (0, a.jsx)(j.Z, { listing: Z }),
                        (0, a.jsx)(l.Spacer, { size: 16 }),
                        (0, a.jsx)('div', { className: _.seperator }),
                        (0, a.jsx)(l.Spacer, { size: 16 }),
                        (0, a.jsx)(l.Heading, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: g.intl.string(g.t.TNnDJi)
                        }),
                        (0, a.jsx)(l.Spacer, { size: 12 }),
                        (0, a.jsx)(u.Z, {
                            className: _.description,
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            text: Z.description
                        })
                    ]
                })
            }),
            (0, a.jsxs)(l.ModalFooter, {
                className: _.footer,
                children: [
                    (0, a.jsx)(p.Z, {
                        guildId: N,
                        guildProductListingId: v,
                        sourceAnalyticsLocations: c.Z.GUILD_PRODUCT_INFO_MODAL
                    }),
                    (0, a.jsx)(l.Text, {
                        tag: 'div',
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: S
                    })
                ]
            })
        ]
    });
}
