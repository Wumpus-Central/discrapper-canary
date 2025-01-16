n.d(t, {
    i: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(14945);
function s(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: l, containerStyles: s, headerStyles: o, children: c } = e;
    return (0, i.jsxs)('div', {
        className: a.spamBanner,
        children: [
            (0, i.jsxs)('div', {
                className: r()(a.bannerTextContainer, s),
                children: [
                    'string' == typeof t
                        ? (0, i.jsx)('img', {
                              src: t,
                              alt: '',
                              className: a.bannerIcon
                          })
                        : t,
                    (0, i.jsxs)('div', {
                        className: a.bannerText,
                        children: [
                            (0, i.jsx)('div', {
                                className: r()(a.bannerHeader, o),
                                children: n
                            }),
                            (0, i.jsx)('div', {
                                className: a.bannerSubtext,
                                children: l
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: a.actionButtons,
                children: c
            })
        ]
    });
}
