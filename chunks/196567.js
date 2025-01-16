t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(481060),
    a = t(747642);
function c(e) {
    let { className: n, copy: t, bannerImage: l, textColor: c = 'always-white', hideGiftIcon: o = !1 } = e;
    return (0, i.jsxs)('div', {
        className: r()(a.bannerContainer, n),
        children: [
            null == l
                ? null
                : (0, i.jsx)('img', {
                      alt: '',
                      className: a.banner,
                      src: l
                  }),
            (0, i.jsxs)('div', {
                className: a.textContainer,
                children: [
                    !1 === o &&
                        (0, i.jsx)(s.GiftIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: a.giftIcon
                        }),
                    (0, i.jsx)(s.Heading, {
                        className: r()(a.textHeader, { [a.textHeaderWithGiftIcon]: !o }),
                        color: c,
                        variant: 'eyebrow',
                        children: t
                    })
                ]
            })
        ]
    });
}
