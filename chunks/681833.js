n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    a = n(987997),
    o = n(388032),
    c = n(790675),
    d = n(904636),
    u = n(845904);
function h(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-md/bold',
                children: o.intl.string(o.t['48ywCg'])
            }),
            (0, i.jsx)(r.LZC, { size: 4 }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                className: c.sectionDescription,
                children: o.intl.string(o.t.VWxmSk)
            }),
            (0, i.jsx)(r.LZC, { size: 24 }),
            (0, i.jsxs)('div', {
                className: l()(d.guildBoostingSubscriptionRow, c.card),
                children: [
                    (0, i.jsx)('img', {
                        src: u,
                        alt: '',
                        className: c.bannerImage
                    }),
                    (0, i.jsxs)('div', {
                        className: c.textContainer,
                        children: [
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-xl/semibold',
                                className: c.header,
                                children: o.intl.string(o.t['48ywCg'])
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                className: c.description,
                                children: o.intl.format(o.t['/esXLi'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.Z, {
                        color: r.zxk.Colors.BRAND,
                        onClick: t,
                        children: o.intl.string(o.t.z5YcJy)
                    })
                ]
            })
        ]
    });
}
