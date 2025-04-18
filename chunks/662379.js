n.d(t, { Z: () => m }), n(953529);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(293810),
    l = n(388032),
    a = n(14920),
    o = n(961618),
    c = n(217684),
    d = n(174618);
function u(e) {
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
            imageSrc: d,
            description: l.NW.string(l.t.lT0ZNT)
        },
        {
            imageSrc: o,
            description: l.NW.string(l.t.ihN2WV)
        },
        {
            imageSrc: c,
            description: l.NW.string(l.t.c8krDQ)
        }
    ];
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(i.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: l.NW.string(l.t.R9rNIi)
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)('div', {
                className: a.howItWorksContainer,
                children: e.map((e) =>
                    (0, r.jsx)(
                        u,
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
                children: l.NW.format(l.t.oxW30N, { creatorPortalUrl: s.C5 })
            })
        ]
    });
}
