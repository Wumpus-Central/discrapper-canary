n.d(t, { Z: () => x });
var o = n(200651);
n(192379);
var i = n(481060),
    r = n(726542),
    s = n(198993),
    a = n(63063),
    l = n(376340),
    c = n(981631),
    d = n(927923),
    u = n(388032),
    p = n(961324),
    f = n(629582);
function b() {
    return (0, o.jsxs)('div', {
        className: p.getXboxApp,
        children: [
            (0, o.jsxs)('div', {
                className: p.getXboxAppBody,
                children: [
                    (0, o.jsxs)(i.X6q, {
                        className: p.getXboxAppHeading,
                        variant: 'text-lg/semibold',
                        children: [
                            (0, o.jsx)('div', {
                                className: p.xboxLogoBox,
                                children: (0, o.jsx)('img', {
                                    src: r.Z.get(c.ABu.XBOX).icon.whiteSVG,
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
                        children: (0, o.jsx)(i.eee, {
                            href: a.Z.getArticleURL(c.BhN.XBOX_CONNECTION),
                            children: u.intl.string(u.t.hvVgAQ)
                        })
                    })
                ]
            }),
            (0, o.jsx)(s.ZP, {
                className: p.getXboxAppQR,
                text: d.X3,
                size: 90
            })
        ]
    });
}
function x(e) {
    let { onClose: t } = e;
    return (0, o.jsx)(l.L, {
        img: (0, o.jsx)('img', {
            src: f.Z,
            width: '124',
            height: '160',
            alt: ''
        }),
        title: u.intl.string(u.t['7QsHmp']),
        body: u.intl.string(u.t.byYNPT),
        content: (0, o.jsx)(b, {}),
        onClose: t
    });
}
