n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(293810),
    a = n(388032),
    s = n(685123),
    o = n(961618),
    c = n(217684),
    d = n(174618);
function u(e) {
    let { imageSrc: t, description: n } = e;
    return (0, i.jsxs)('div', {
        className: s.howItWorksCard,
        children: [
            (0, i.jsx)('div', {
                className: s.howItWorksImageContainer,
                children: (0, i.jsx)('img', {
                    className: s.howItWorksImage,
                    src: t,
                    alt: ''
                })
            }),
            (0, i.jsx)('div', {
                className: s.howItWorksDescription,
                children: (0, i.jsx)(r.Text, {
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
            description: a.intl.string(a.t.lT0ZNT)
        },
        {
            imageSrc: o,
            description: a.intl.string(a.t.ihN2WV)
        },
        {
            imageSrc: c,
            description: a.intl.string(a.t.c8krDQ)
        }
    ];
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(r.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: a.intl.string(a.t.R9rNIi)
            }),
            (0, i.jsx)(r.Spacer, { size: 24 }),
            (0, i.jsx)('div', {
                className: s.howItWorksContainer,
                children: e.map((e) =>
                    (0, i.jsx)(
                        u,
                        {
                            imageSrc: e.imageSrc,
                            description: e.description
                        },
                        e.imageSrc
                    )
                )
            }),
            (0, i.jsx)(r.Spacer, { size: 24 }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.intl.format(a.t.oxW30N, { creatorPortalUrl: l.C5 })
            })
        ]
    });
}
