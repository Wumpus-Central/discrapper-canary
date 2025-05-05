n.d(t, { Z: () => m }), n(953529);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(293810),
    s = n(388032),
    a = n(14920),
    o = n(961618),
    c = n(217684),
    u = n(174618);
function d(e) {
    let { imageSrc: t, description: n } = e;
    return (0, r.jsxs)('div', {
        className: a.howItWorksCard,
        children: [
            (0, r.jsx)('div', {
                className: a.howItWorksImageContainer,
                children: (0, r.jsx)('img', {
                    className: a.howItWorksImage,
                    src: t,
                    alt: ''
                })
            }),
            (0, r.jsx)('div', {
                className: a.howItWorksDescription,
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: n
                })
            })
        ]
    });
}
function m() {
    let e = [
        {
            imageSrc: u,
            description: s.intl.string(s.t.lT0ZNT)
        },
        {
            imageSrc: o,
            description: s.intl.string(s.t.ihN2WV)
        },
        {
            imageSrc: c,
            description: s.intl.string(s.t.c8krDQ)
        }
    ];
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(i.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: s.intl.string(s.t.R9rNIi)
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)('div', {
                className: a.howItWorksContainer,
                children: e.map((e) =>
                    (0, r.jsx)(
                        d,
                        {
                            imageSrc: e.imageSrc,
                            description: e.description
                        },
                        e.imageSrc
                    )
                )
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: s.intl.format(s.t.oxW30N, { creatorPortalUrl: l.C5 })
            })
        ]
    });
}
