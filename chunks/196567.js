n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(361405);
function l(e) {
    let { className: t, copy: n, bannerImage: r, textColor: l = 'always-white', hideGiftIcon: u = !1 } = e;
    return (0, i.jsxs)('div', {
        className: a()(o.bannerContainer, t),
        children: [
            null == r
                ? null
                : (0, i.jsx)('img', {
                      alt: '',
                      className: o.banner,
                      src: r
                  }),
            (0, i.jsxs)('div', {
                className: o.textContainer,
                children: [
                    !1 === u &&
                        (0, i.jsx)(s.OgN, {
                            size: 'md',
                            color: 'currentColor',
                            className: o.giftIcon
                        }),
                    (0, i.jsx)(s.X6q, {
                        className: a()(o.textHeader, { [o.textHeaderWithGiftIcon]: !u }),
                        color: l,
                        variant: 'eyebrow',
                        children: n
                    })
                ]
            })
        ]
    });
}
