n.d(t, { i: () => a });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(469285);
function a(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: i, containerStyles: a, headerStyles: s, children: c } = e;
    return (0, r.jsxs)('div', {
        className: o.spamBanner,
        children: [
            (0, r.jsxs)('div', {
                className: l()(o.bannerTextContainer, a),
                children: [
                    'string' == typeof t
                        ? (0, r.jsx)('img', {
                              src: t,
                              alt: '',
                              className: o.bannerIcon
                          })
                        : t,
                    (0, r.jsxs)('div', {
                        className: o.bannerText,
                        children: [
                            (0, r.jsx)('div', {
                                className: l()(o.bannerHeader, s),
                                children: n
                            }),
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
                children: c
            })
        ]
    });
}
