var i = r(200651);
r(192379);
var a = r(399606),
    s = r(481060),
    o = r(607070),
    l = r(388032),
    u = r(389940),
    c = r(567949),
    d = r(552781),
    f = r(952567),
    _ = r(807159);
function h(e) {
    let { description: n, heading: r, imgSrc: a } = e;
    return (0, i.jsxs)('div', {
        className: u.topPerksCard,
        children: [
            (0, i.jsx)('img', {
                className: u.topPerksCardImage,
                src: a,
                alt: ''
            }),
            (0, i.jsx)(s.Heading, {
                className: u.topPerksCardHeading,
                variant: 'heading-lg/extrabold',
                children: r
            }),
            (0, i.jsx)(s.Text, {
                className: u.topPerksCardDescription,
                variant: 'text-sm/normal',
                children: n
            })
        ]
    });
}
function p() {
    let e = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: u.wrapper,
        children: [
            (0, i.jsx)(s.Heading, {
                className: u.heading,
                variant: 'heading-xxl/extrabold',
                children: l.intl.string(l.t.aGdB3N)
            }),
            (0, i.jsxs)('div', {
                className: u.topPerksCards,
                children: [
                    (0, i.jsx)(h, {
                        description: l.intl.string(l.t.HTvLGh),
                        heading: l.intl.string(l.t.IpRQw8),
                        imgSrc: f
                    }),
                    (0, i.jsx)(h, {
                        description: l.intl.string(l.t.wOYbTk),
                        heading: l.intl.string(l.t.G6jZo6),
                        imgSrc: e ? d : c
                    }),
                    (0, i.jsx)(h, {
                        description: l.intl.string(l.t.yCjoUF),
                        heading: l.intl.string(l.t['/bX4Ji']),
                        imgSrc: _
                    })
                ]
            })
        ]
    });
}
n.Z = p;
