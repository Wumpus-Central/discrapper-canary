n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(314943);
function l(e) {
    let { className: t, copy: n, bannerImage: i, textColor: l = 'always-white', hideGiftIcon: c = !1 } = e;
    return (0, r.jsxs)('div', {
        className: o()(s.bannerContainer, t),
        children: [
            null == i
                ? null
                : (0, r.jsx)('img', {
                      alt: '',
                      className: s.banner,
                      src: i
                  }),
            (0, r.jsxs)('div', {
                className: s.textContainer,
                children: [
                    !1 === c &&
                        (0, r.jsx)(a.OgN, {
                            size: 'md',
                            color: 'currentColor',
                            className: s.giftIcon
                        }),
                    (0, r.jsx)(a.X6q, {
                        className: o()(s.textHeader, { [s.textHeaderWithGiftIcon]: !c }),
                        color: l,
                        variant: 'eyebrow',
                        children: n
                    })
                ]
            })
        ]
    });
}
