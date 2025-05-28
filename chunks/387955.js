r.d(t, { Z: () => f });
var n = r(255367);
r(73800);
var i = r(120356),
    o = r.n(i),
    s = r(481060),
    l = r(63063),
    a = r(773446),
    c = r(572264),
    u = r(981631),
    d = r(388032),
    g = r(927687),
    m = r(849399);
function f(e) {
    let { user: t } = e;
    return (0, n.jsxs)('div', {
        className: g.infoContainer,
        children: [
            (0, n.jsx)('img', {
                className: g.infoPicture,
                alt: '',
                src: m
            }),
            (0, n.jsx)(s.X6q, {
                className: g.title,
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: d.intl.format(d.t['au+lPj'], { n: t.tag })
            }),
            (0, n.jsx)(s.Text, {
                className: g.subtitleInfo,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: d.intl.format(d.t['5fwX5+'], {})
            }),
            (0, n.jsx)(s.Text, {
                className: g.prompt,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: d.intl.format(d.t['i2vB8/'], { helpdeskArticle: l.Z.getArticleURL(u.BhN.POMELO_FAQ) })
            }),
            (0, n.jsxs)('div', {
                className: o()([g.infoItem, g.infoItemSpacing]),
                children: [
                    (0, n.jsx)('div', {
                        className: g.infoIcon,
                        children: (0, n.jsx)(s.iFz, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, n.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t.SzUaZ2, {})
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: o()([g.infoItem, g.infoItemSpacing]),
                children: [
                    (0, n.jsx)('div', {
                        className: g.infoIcon,
                        children: (0, n.jsx)(a.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, n.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t['UwPc+P'], {})
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: g.infoItem,
                children: [
                    (0, n.jsx)('div', {
                        className: g.infoIcon,
                        children: (0, n.jsx)(c.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, n.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t.okLjjo, { username: t.tag })
                    })
                ]
            })
        ]
    });
}
