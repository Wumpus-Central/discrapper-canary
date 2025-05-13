n.d(t, { i: () => a });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(469285);
function a(e) {
    let { bannerIcon: t, bannerHeader: n, bannerSubtext: i, textStyles: a, headerStyles: s, containerStyles: c, children: u } = e;
    return (0, r.jsxs)('div', {
        className: l()(o.spamBanner, c),
        children: [
            (0, r.jsxs)('div', {
                className: l()(o.bannerTextContainer, a),
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
                                className: l()(o.bannerHeader, s),
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
