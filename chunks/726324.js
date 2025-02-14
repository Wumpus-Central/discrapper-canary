n.d(t, { Z: () => c }), n(47120);
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(565138),
    a = n(695346),
    s = n(506071),
    o = n(353254),
    d = n(770570);
function c(e) {
    let { coverImageAsset: t, title: n, guild: c, description: u, children: h } = e,
        m = a.QK.useSetting(),
        p = (0, s.n)(),
        [g, _] = (0, o.Z)(t, p && m);
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)('div', {
                ref: g,
                className: d.coverImageContainer,
                children:
                    null != _ &&
                    (0, i.jsx)('img', {
                        src: _,
                        alt: '',
                        className: d.coverImage
                    })
            }),
            (0, i.jsx)('div', {
                className: d.guildIconContainer,
                children: (0, i.jsx)(r.Z, {
                    guild: c,
                    size: r.Z.Sizes.XLARGE
                })
            }),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                className: d.ctaTitle,
                children: n
            }),
            (0, i.jsx)(l.Text, {
                className: d.ctaSubtitle,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: u
            }),
            h
        ]
    });
}
