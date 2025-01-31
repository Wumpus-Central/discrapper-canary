n.d(t, { Z: () => d }), n(47120);
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(565138),
    a = n(695346),
    s = n(506071),
    o = n(353254),
    c = n(33827);
function d(e) {
    let { coverImageAsset: t, title: n, guild: d, description: u, children: h } = e,
        m = a.QK.useSetting(),
        p = (0, s.n)(),
        [g, _] = (0, o.Z)(t, p && m);
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)('div', {
                ref: g,
                className: c.coverImageContainer,
                children:
                    null != _ &&
                    (0, i.jsx)('img', {
                        src: _,
                        alt: '',
                        className: c.coverImage
                    })
            }),
            (0, i.jsx)('div', {
                className: c.guildIconContainer,
                children: (0, i.jsx)(r.Z, {
                    guild: d,
                    size: r.Z.Sizes.XLARGE
                })
            }),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                className: c.ctaTitle,
                children: n
            }),
            (0, i.jsx)(l.Text, {
                className: c.ctaSubtitle,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: u
            }),
            h
        ]
    });
}
