t.d(n, {
    Z: function () {
        return C;
    }
});
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(726542),
    c = t(198993),
    s = t(63063),
    a = t(376340),
    l = t(981631),
    d = t(927923),
    u = t(388032),
    f = t(961324),
    p = t(629582);
function x() {
    return (0, o.jsxs)('div', {
        className: f.getXboxApp,
        children: [
            (0, o.jsxs)('div', {
                className: f.getXboxAppBody,
                children: [
                    (0, o.jsxs)(i.Heading, {
                        className: f.getXboxAppHeading,
                        variant: 'text-lg/semibold',
                        children: [
                            (0, o.jsx)('div', {
                                className: f.xboxLogoBox,
                                children: (0, o.jsx)('img', {
                                    src: r.Z.get(l.ABu.XBOX).icon.whiteSVG,
                                    alt: ''
                                })
                            }),
                            u.intl.string(u.t['12Kx2t'])
                        ]
                    }),
                    (0, o.jsx)(i.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u.intl.string(u.t.M5yEcX)
                    }),
                    (0, o.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: (0, o.jsx)(i.Anchor, {
                            href: s.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
                            children: u.intl.string(u.t.hvVgAQ)
                        })
                    })
                ]
            }),
            (0, o.jsx)(c.ZP, {
                className: f.getXboxAppQR,
                text: d.X3,
                size: 90
            })
        ]
    });
}
function C(e) {
    let { onClose: n } = e;
    return (0, o.jsx)(a.L, {
        img: (0, o.jsx)('img', {
            src: p.Z,
            width: '124',
            height: '160',
            alt: ''
        }),
        title: u.intl.string(u.t['7QsHmp']),
        body: u.intl.string(u.t.byYNPT),
        content: (0, o.jsx)(x, {}),
        onClose: n
    });
}
