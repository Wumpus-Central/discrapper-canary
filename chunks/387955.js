n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(63063),
    o = n(773446),
    u = n(572264),
    d = n(981631),
    c = n(388032),
    m = n(983928),
    g = n(849399);
function E(e) {
    let { user: t } = e;
    return (0, i.jsxs)('div', {
        className: m.infoContainer,
        children: [
            (0, i.jsx)('img', {
                className: m.infoPicture,
                alt: '',
                src: g
            }),
            (0, i.jsx)(l.X6q, {
                className: m.title,
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: c.intl.format(c.t['au+lPj'], { n: t.tag })
            }),
            (0, i.jsx)(l.Text, {
                className: m.subtitleInfo,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: c.intl.format(c.t['5fwX5+'], {})
            }),
            (0, i.jsx)(l.Text, {
                className: m.prompt,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: c.intl.format(c.t['i2vB8/'], { helpdeskArticle: r.Z.getArticleURL(d.BhN.POMELO_FAQ) })
            }),
            (0, i.jsxs)('div', {
                className: a()([m.infoItem, m.infoItemSpacing]),
                children: [
                    (0, i.jsx)('div', {
                        className: m.infoIcon,
                        children: (0, i.jsx)(l.iFz, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.intl.format(c.t.SzUaZ2, {})
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: a()([m.infoItem, m.infoItemSpacing]),
                children: [
                    (0, i.jsx)('div', {
                        className: m.infoIcon,
                        children: (0, i.jsx)(o.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.intl.format(c.t['UwPc+P'], {})
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: m.infoItem,
                children: [
                    (0, i.jsx)('div', {
                        className: m.infoIcon,
                        children: (0, i.jsx)(u.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.intl.format(c.t.okLjjo, { username: t.tag })
                    })
                ]
            })
        ]
    });
}
