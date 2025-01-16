n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var i = n(399606),
    s = n(481060),
    o = n(607070),
    l = n(357352),
    a = n(623488),
    c = n(695346),
    d = n(937615),
    C = n(506071),
    u = n(724598),
    x = n(629481),
    f = n(981631),
    p = n(388032),
    h = n(342361);
function m() {
    let e = c.QK.useSetting(),
        t = (0, C.n)(),
        n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        s = t && e && !n ? (0, l.b)('server_products/storefront/question-mark.gif') : (0, l.b)('server_products/storefront/question-mark.png');
    return (0, r.jsxs)('div', {
        className: h.previewListingCard,
        children: [
            (0, r.jsx)(a.Z, {
                role: void 0,
                ctaComponent: null,
                imageUrl: (0, l.b)('server_products/storefront/preview-thumbnail.png'),
                name: p.intl.string(p.t.U2hvDg),
                description: p.intl.string(p.t['w/TNGR']),
                formattedPrice: (0, d.T4)(0, f.pKx.USD, {
                    localeMatcher: 'best fit',
                    style: 'currency',
                    maximumSignificantDigits: 1
                }),
                shouldShowFullDescriptionButton: !1,
                productType: p.intl.string(p.t.ih4QMT),
                onTapCard: () => null,
                hideRoleTag: !0,
                lineClamp: 3,
                thumbnailHeight: 197,
                cardWidth: 332,
                descriptionTextVariant: 'text-xs/normal'
            }),
            (0, r.jsx)('img', {
                className: h.questionMark,
                alt: '',
                src: s
            })
        ]
    });
}
function g() {
    return (0, r.jsxs)('div', {
        className: h.learnMoreTipContainer,
        children: [
            (0, r.jsx)(s.CircleInformationIcon, {
                size: 'md',
                color: 'currentColor',
                className: h.infoCircle
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: p.intl.format(p.t.umfZ8v, { learnMoreLink: x.P4 })
            })
        ]
    });
}
function v(e) {
    let { guildId: t } = e;
    return (0, r.jsxs)('div', {
        className: h.previewContentContainer,
        children: [
            (0, r.jsxs)('div', {
                className: h.previewContent,
                children: [
                    (0, r.jsx)(m, {}),
                    (0, r.jsx)(u.Z, {
                        guildId: t,
                        showCTA: !0
                    })
                ]
            }),
            (0, r.jsx)(g, {})
        ]
    });
}
