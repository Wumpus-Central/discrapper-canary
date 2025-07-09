(n.d(t, { Z: () => p }), n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(987997),
    c = n(388032),
    d = n(88538),
    u = n(772526),
    m = n(845904);
function p(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-md/bold',
                children: c.intl.string(c.t['48ywCg'])
            }),
            (0, i.jsx)(l.LZC, { size: 4 }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: d.sectionDescription,
                children: c.intl.string(c.t.VWxmSk)
            }),
            (0, i.jsx)(l.LZC, { size: 24 }),
            (0, i.jsxs)('div', {
                className: s()(u.guildBoostingSubscriptionRow, d.card),
                children: [
                    (0, i.jsx)('img', {
                        src: m,
                        alt: '',
                        className: d.bannerImage
                    }),
                    (0, i.jsxs)('div', {
                        className: d.textContainer,
                        children: [
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-xl/semibold',
                                className: d.header,
                                children: c.intl.string(c.t['48ywCg'])
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: d.description,
                                children: c.intl.format(c.t['/esXLi'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Z, {
                        color: a.zx.Colors.BRAND,
                        onClick: t,
                        children: c.intl.string(c.t.z5YcJy)
                    })
                ]
            })
        ]
    });
}
