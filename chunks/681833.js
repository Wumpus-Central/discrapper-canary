n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(987997),
    o = n(388032),
    c = n(222971),
    d = n(49474),
    u = n(845904);
function m(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-md/bold',
                children: o.intl.string(o.t['48ywCg'])
            }),
            (0, i.jsx)(l.LZC, { size: 4 }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: c.sectionDescription,
                children: o.intl.string(o.t.VWxmSk)
            }),
            (0, i.jsx)(l.LZC, { size: 24 }),
            (0, i.jsxs)('div', {
                className: r()(d.guildBoostingSubscriptionRow, c.card),
                children: [
                    (0, i.jsx)('img', {
                        src: u,
                        alt: '',
                        className: c.bannerImage
                    }),
                    (0, i.jsxs)('div', {
                        className: c.textContainer,
                        children: [
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-xl/semibold',
                                className: c.header,
                                children: o.intl.string(o.t['48ywCg'])
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: c.description,
                                children: o.intl.format(o.t['/esXLi'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.Z, {
                        color: l.zxk.Colors.BRAND,
                        onClick: t,
                        children: o.intl.string(o.t.z5YcJy)
                    })
                ]
            })
        ]
    });
}
