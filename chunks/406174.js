n.d(t, { Z: () => u }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(388032),
    o = n(810918),
    c = n(772526),
    d = n(834300);
function u(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-md/bold',
                children: l.NW.string(l.t['KzCF//'])
            }),
            (0, r.jsx)(a.LZC, { size: 4 }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                className: o.sectionDescription,
                children: l.NW.string(l.t['3D7qCg'])
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsxs)('div', {
                className: s()(c.guildBoostingSubscriptionRow, o.card),
                children: [
                    (0, r.jsx)('img', {
                        src: d,
                        alt: '',
                        className: o.handImage
                    }),
                    (0, r.jsxs)('div', {
                        className: o.textContainer,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'heading-xl/semibold',
                                className: o.header,
                                children: l.NW.string(l.t['KzCF//'])
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                className: o.description,
                                children: l.NW.format(l.t['m+pcOD'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, r.jsx)(a.zxk, {
                        color: a.zxk.Colors.CUSTOM,
                        size: a.zxk.Sizes.SMALL,
                        className: o.manageSubscriptionsButton,
                        onClick: t,
                        children: l.NW.string(l.t['3a8Xxs'])
                    })
                ]
            })
        ]
    });
}
