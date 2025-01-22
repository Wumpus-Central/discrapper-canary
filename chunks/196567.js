r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(747642);
function u(e) {
    let { className: n, copy: r, bannerImage: a, textColor: u = 'always-white', hideGiftIcon: c = !1 } = e;
    return (0, i.jsxs)('div', {
        className: o()(l.bannerContainer, n),
        children: [
            null == a
                ? null
                : (0, i.jsx)('img', {
                      alt: '',
                      className: l.banner,
                      src: a
                  }),
            (0, i.jsxs)('div', {
                className: l.textContainer,
                children: [
                    !1 === c &&
                        (0, i.jsx)(s.GiftIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: l.giftIcon
                        }),
                    (0, i.jsx)(s.Heading, {
                        className: o()(l.textHeader, { [l.textHeaderWithGiftIcon]: !c }),
                        color: u,
                        variant: 'eyebrow',
                        children: r
                    })
                ]
            })
        ]
    });
}
