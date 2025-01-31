n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(399606),
    s = n(481060),
    l = n(607070),
    o = n(357352),
    a = n(623488),
    c = n(695346),
    d = n(937615),
    C = n(506071),
    u = n(724598),
    x = n(629481),
    p = n(981631),
    h = n(388032),
    _ = n(342361);
function m() {
    let e = c.QK.useSetting(),
        t = (0, C.n)(),
        n = (0, r.e7)([l.Z], () => l.Z.useReducedMotion),
        s = t && e && !n ? (0, o.b)('server_products/storefront/question-mark.gif') : (0, o.b)('server_products/storefront/question-mark.png');
    return (0, i.jsxs)('div', {
        className: _.previewListingCard,
        children: [
            (0, i.jsx)(a.Z, {
                role: void 0,
                ctaComponent: null,
                imageUrl: (0, o.b)('server_products/storefront/preview-thumbnail.png'),
                name: h.intl.string(h.t.U2hvDg),
                description: h.intl.string(h.t['w/TNGR']),
                formattedPrice: (0, d.T4)(0, p.pKx.USD, {
                    localeMatcher: 'best fit',
                    style: 'currency',
                    maximumSignificantDigits: 1
                }),
                shouldShowFullDescriptionButton: !1,
                productType: h.intl.string(h.t.ih4QMT),
                onTapCard: () => null,
                hideRoleTag: !0,
                lineClamp: 3,
                thumbnailHeight: 197,
                cardWidth: 332,
                descriptionTextVariant: 'text-xs/normal'
            }),
            (0, i.jsx)('img', {
                className: _.questionMark,
                alt: '',
                src: s
            })
        ]
    });
}
function g() {
    return (0, i.jsxs)('div', {
        className: _.learnMoreTipContainer,
        children: [
            (0, i.jsx)(s.d3s, {
                size: 'md',
                color: 'currentColor',
                className: _.infoCircle
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: h.intl.format(h.t.umfZ8v, { learnMoreLink: x.P4 })
            })
        ]
    });
}
function v(e) {
    let { guildId: t } = e;
    return (0, i.jsxs)('div', {
        className: _.previewContentContainer,
        children: [
            (0, i.jsxs)('div', {
                className: _.previewContent,
                children: [
                    (0, i.jsx)(m, {}),
                    (0, i.jsx)(u.Z, {
                        guildId: t,
                        showCTA: !0
                    })
                ]
            }),
            (0, i.jsx)(g, {})
        ]
    });
}
