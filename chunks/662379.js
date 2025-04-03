n.d(t, { Z: () => m }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(293810),
    a = n(388032),
    l = n(14920),
    o = n(961618),
    c = n(217684),
    d = n(174618);
function u(e) {
    let { imageSrc: t, description: n } = e;
    return (0, r.jsxs)('div', {
        className: l.howItWorksCard,
        children: [
            (0, r.jsx)('div', {
                className: l.howItWorksImageContainer,
                children: (0, r.jsx)('img', {
                    className: l.howItWorksImage,
                    src: t,
                    alt: ''
                })
            }),
            (0, r.jsx)('div', {
                className: l.howItWorksDescription,
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
            description: a.NW.string(a.t.lT0ZNT)
        },
        {
            imageSrc: o,
            description: a.NW.string(a.t.ihN2WV)
        },
        {
            imageSrc: c,
            description: a.NW.string(a.t.c8krDQ)
        }
    ];
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(i.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: a.NW.string(a.t.R9rNIi)
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)('div', {
                className: l.howItWorksContainer,
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
                children: a.NW.format(a.t.oxW30N, { creatorPortalUrl: s.C5 })
            })
        ]
    });
}
