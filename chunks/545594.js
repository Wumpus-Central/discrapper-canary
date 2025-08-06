n.d(t, { i: () => s });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(469285);
function s(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: i, textStyles: s, headerStyles: l, containerStyles: c, children: u } = e;
    return (0, r.jsxs)('div', {
        className: o()(a.spamBanner, c),
        children: [
            (0, r.jsxs)('div', {
                className: o()(a.bannerTextContainer, s),
                children: [
                    null != t &&
                        ('string' == typeof t
                            ? (0, r.jsx)('img', {
                                  src: t,
                                  alt: '',
                                  className: a.bannerIcon
                              })
                            : t),
                    (0, r.jsxs)('div', {
                        className: a.bannerText,
                        children: [
                            (0, r.jsx)('div', {
                                className: o()(a.bannerHeader, l),
                                children: n
                            }),
                            null != i &&
                                (0, r.jsx)('div', {
                                    className: a.bannerSubtext,
                                    children: i
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a.actionButtons,
                children: u
            })
        ]
    });
}
