n.d(t, { i: () => s });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(14945);
function s(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: l, containerStyles: s, headerStyles: o, children: c } = e;
    return (0, i.jsxs)('div', {
        className: r.spamBanner,
        children: [
            (0, i.jsxs)('div', {
                className: a()(r.bannerTextContainer, s),
                children: [
                    'string' == typeof t
                        ? (0, i.jsx)('img', {
                              src: t,
                              alt: '',
                              className: r.bannerIcon
                          })
                        : t,
                    (0, i.jsxs)('div', {
                        className: r.bannerText,
                        children: [
                            (0, i.jsx)('div', {
                                className: a()(r.bannerHeader, o),
                                children: n
                            }),
                            (0, i.jsx)('div', {
                                className: r.bannerSubtext,
                                children: l
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: r.actionButtons,
                children: c
            })
        ]
    });
}
