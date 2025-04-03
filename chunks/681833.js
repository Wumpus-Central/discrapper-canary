n.d(t, { Z: () => m }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(987997),
    o = n(388032),
    c = n(88538),
    d = n(772526),
    u = n(845904);
function m(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-md/bold',
                children: o.NW.string(o.t['48ywCg'])
            }),
            (0, r.jsx)(a.LZC, { size: 4 }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                className: c.sectionDescription,
                children: o.NW.string(o.t.VWxmSk)
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsxs)('div', {
                className: s()(d.guildBoostingSubscriptionRow, c.card),
                children: [
                    (0, r.jsx)('img', {
                        src: u,
                        alt: '',
                        className: c.bannerImage
                    }),
                    (0, r.jsxs)('div', {
                        className: c.textContainer,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'heading-xl/semibold',
                                className: c.header,
                                children: o.NW.string(o.t['48ywCg'])
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                className: c.description,
                                children: o.NW.format(o.t['/esXLi'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Z, {
                        color: a.zxk.Colors.BRAND,
                        onClick: t,
                        children: o.NW.string(o.t.z5YcJy)
                    })
                ]
            })
        ]
    });
}
