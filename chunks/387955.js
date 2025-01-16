n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(63063),
    o = n(773446),
    u = n(572264),
    c = n(981631),
    d = n(388032),
    m = n(579532),
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
            (0, i.jsx)(a.Heading, {
                className: m.title,
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: d.intl.format(d.t['au+lPj'], { n: t.tag })
            }),
            (0, i.jsx)(a.Text, {
                className: m.subtitleInfo,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: d.intl.format(d.t['5fwX5+'], {})
            }),
            (0, i.jsx)(a.Text, {
                className: m.prompt,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: d.intl.format(d.t['i2vB8/'], { helpdeskArticle: l.Z.getArticleURL(c.BhN.POMELO_FAQ) })
            }),
            (0, i.jsxs)('div', {
                className: r()([m.infoItem, m.infoItemSpacing]),
                children: [
                    (0, i.jsx)('div', {
                        className: m.infoIcon,
                        children: (0, i.jsx)(a.FriendsIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t.SzUaZ2, {})
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()([m.infoItem, m.infoItemSpacing]),
                children: [
                    (0, i.jsx)('div', {
                        className: m.infoIcon,
                        children: (0, i.jsx)(o.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t['UwPc+P'], {})
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
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: d.intl.format(d.t.okLjjo, { username: t.tag })
                    })
                ]
            })
        ]
    });
}
