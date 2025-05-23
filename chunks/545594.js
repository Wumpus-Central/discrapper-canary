n.d(t, { i: () => o });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(469285);
function o(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: i, textStyles: o, headerStyles: s, containerStyles: c, children: u } = e;
    return (0, r.jsxs)('div', {
        className: l()(a.spamBanner, c),
        children: [
            (0, r.jsxs)('div', {
                className: l()(a.bannerTextContainer, o),
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
                                className: l()(a.bannerHeader, s),
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
