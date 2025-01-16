n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(565138),
    a = n(695346),
    s = n(506071),
    o = n(353254),
    c = n(33827);
function d(e) {
    let { coverImageAsset: t, title: n, guild: d, description: u, children: h } = e,
        m = a.QK.useSetting(),
        p = (0, s.n)(),
        [g, f] = (0, o.Z)(t, p && m);
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)('div', {
                ref: g,
                className: c.coverImageContainer,
                children:
                    null != f &&
                    (0, i.jsx)('img', {
                        src: f,
                        alt: '',
                        className: c.coverImage
                    })
            }),
            (0, i.jsx)('div', {
                className: c.guildIconContainer,
                children: (0, i.jsx)(l.Z, {
                    guild: d,
                    size: l.Z.Sizes.XLARGE
                })
            }),
            (0, i.jsx)(r.Heading, {
                variant: 'heading-xl/semibold',
                className: c.ctaTitle,
                children: n
            }),
            (0, i.jsx)(r.Text, {
                className: c.ctaSubtitle,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: u
            }),
            h
        ]
    });
}
