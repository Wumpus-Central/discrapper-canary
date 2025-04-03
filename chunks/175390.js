r.d(t, { Z: () => m });
var n = r(200651);
r(192379);
var i = r(399606),
    o = r(481060),
    s = r(607070),
    c = r(357352),
    l = r(623488),
    a = r(695346),
    d = r(937615),
    u = r(506071),
    C = r(724598),
    p = r(629481),
    f = r(981631),
    b = r(388032),
    j = r(529135);
function g() {
    let e = a.QK.useSetting(),
        t = (0, u.n)(),
        r = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        o = t && e && !r ? (0, c.b)('server_products/storefront/question-mark.gif') : (0, c.b)('server_products/storefront/question-mark.png');
    return (0, n.jsxs)('div', {
        className: j.previewListingCard,
        children: [
            (0, n.jsx)(l.Z, {
                role: void 0,
                ctaComponent: null,
                imageUrl: (0, c.b)('server_products/storefront/preview-thumbnail.png'),
                name: b.NW.string(b.t.U2hvDg),
                description: b.NW.string(b.t['w/TNGR']),
                formattedPrice: (0, d.T4)(0, f.pKx.USD, {
                    localeMatcher: 'best fit',
                    style: 'currency',
                    maximumSignificantDigits: 1
                }),
                shouldShowFullDescriptionButton: !1,
                productType: b.NW.string(b.t.ih4QMT),
                onTapCard: () => null,
                hideRoleTag: !0,
                lineClamp: 3,
                thumbnailHeight: 197,
                cardWidth: 332,
                descriptionTextVariant: 'text-xs/normal'
            }),
            (0, n.jsx)('img', {
                className: j.questionMark,
                alt: '',
                src: o
            })
        ]
    });
}
function h() {
    return (0, n.jsxs)('div', {
        className: j.learnMoreTipContainer,
        children: [
            (0, n.jsx)(o.d3s, {
                size: 'md',
                color: 'currentColor',
                className: j.infoCircle
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: b.NW.format(b.t.umfZ8v, { learnMoreLink: p.P4 })
            })
        ]
    });
}
function m(e) {
    let { guildId: t } = e;
    return (0, n.jsxs)('div', {
        className: j.previewContentContainer,
        children: [
            (0, n.jsxs)('div', {
                className: j.previewContent,
                children: [
                    (0, n.jsx)(g, {}),
                    (0, n.jsx)(C.Z, {
                        guildId: t,
                        showCTA: !0
                    })
                ]
            }),
            (0, n.jsx)(h, {})
        ]
    });
}
