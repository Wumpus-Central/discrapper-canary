n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(481060),
    l = n(63063),
    a = n(773446),
    c = n(572264),
    u = n(981631),
    d = n(388032),
    g = n(927687),
    m = n(849399);
function f(e) {
    let { user: t } = e;
    return (0, r.jsxs)('div', {
        className: g.infoContainer,
        children: [
            (0, r.jsx)('img', {
                className: g.infoPicture,
                alt: '',
                src: m
            }),
            (0, r.jsx)(o.X6q, {
                className: g.title,
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: d.intl.format(d.t['au+lPj'], { n: t.tag })
            }),
            (0, r.jsx)(o.Text, {
                className: g.subtitleInfo,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: d.intl.format(d.t['5fwX5+'], {})
            }),
            (0, r.jsx)(o.Text, {
                className: g.prompt,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: d.intl.format(d.t['i2vB8/'], { helpdeskArticle: l.Z.getArticleURL(u.BhN.POMELO_FAQ) })
            }),
            (0, r.jsxs)('div', {
                className: s()([g.infoItem, g.infoItemSpacing]),
                children: [
                    (0, r.jsx)('div', {
                        className: g.infoIcon,
                        children: (0, r.jsx)(o.iFz, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t.SzUaZ2, {})
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: s()([g.infoItem, g.infoItemSpacing]),
                children: [
                    (0, r.jsx)('div', {
                        className: g.infoIcon,
                        children: (0, r.jsx)(a.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t['UwPc+P'], {})
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: g.infoItem,
                children: [
                    (0, r.jsx)('div', {
                        className: g.infoIcon,
                        children: (0, r.jsx)(c.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t.okLjjo, { username: t.tag })
                    })
                ]
            })
        ]
    });
}
