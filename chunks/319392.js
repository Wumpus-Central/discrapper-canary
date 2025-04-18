n.d(t, { Z: () => x });
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(726542),
    s = n(198993),
    a = n(63063),
    c = n(376340),
    l = n(981631),
    d = n(927923),
    u = n(388032),
    f = n(544200),
    p = n(629582);
function b() {
    return (0, o.jsxs)('div', {
        className: f.getXboxApp,
        children: [
            (0, o.jsxs)('div', {
                className: f.getXboxAppBody,
                children: [
                    (0, o.jsxs)(r.X6q, {
                        className: f.getXboxAppHeading,
                        variant: 'text-lg/semibold',
                        children: [
                            (0, o.jsx)('div', {
                                className: f.xboxLogoBox,
                                children: (0, o.jsx)('img', {
                                    src: i.Z.get(l.ABu.XBOX).icon.whiteSVG,
                                    alt: ''
                                })
                            }),
                            u.NW.string(u.t['12Kx2t'])
                        ]
                    }),
                    (0, o.jsx)(r.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u.NW.string(u.t.M5yEcX)
                    }),
                    (0, o.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: (0, o.jsx)(r.eee, {
                            href: a.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
                            children: u.NW.string(u.t.hvVgAQ)
                        })
                    })
                ]
            }),
            (0, o.jsx)(s.ZP, {
                className: f.getXboxAppQR,
                text: d.X3,
                size: 90
            })
        ]
    });
}
function x(e) {
    let { onClose: t } = e;
    return (0, o.jsx)(c.L, {
        img: (0, o.jsx)('img', {
            src: p.Z,
            width: '124',
            height: '160',
            alt: ''
        }),
        title: u.NW.string(u.t['7QsHmp']),
        body: u.NW.string(u.t.byYNPT),
        content: (0, o.jsx)(b, {}),
        onClose: t
    });
}
