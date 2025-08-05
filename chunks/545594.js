n.d(t, { i: () => s });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(469285);
function s(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: i, textStyles: s, headerStyles: l, containerStyles: c, children: u } = e;
    return (0, r.jsxs)('div', {
        className: a()(o.spamBanner, c),
        children: [
            (0, r.jsxs)('div', {
                className: a()(o.bannerTextContainer, s),
                children: [
                    null != t &&
                        ('string' == typeof t
                            ? (0, r.jsx)('img', {
                                  src: t,
                                  alt: '',
                                  className: o.bannerIcon
                              })
                            : t),
                    (0, r.jsxs)('div', {
                        className: o.bannerText,
                        children: [
                            (0, r.jsx)('div', {
                                className: a()(o.bannerHeader, l),
                                children: n
                            }),
                            null != i &&
                                (0, r.jsx)('div', {
                                    className: o.bannerSubtext,
                                    children: i
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: o.actionButtons,
                children: u
            })
        ]
    });
}
