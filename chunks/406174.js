(n.d(t, { Z: () => m }), n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(388032),
    c = n(810918),
    d = n(772526),
    u = n(834300);
function m(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-md/bold',
                children: o.intl.string(o.t['KzCF//'])
            }),
            (0, i.jsx)(l.LZC, { size: 4 }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: c.sectionDescription,
                children: o.intl.string(o.t['3D7qCg'])
            }),
            (0, i.jsx)(l.LZC, { size: 24 }),
            (0, i.jsxs)('div', {
                className: s()(d.guildBoostingSubscriptionRow, c.card),
                children: [
                    (0, i.jsx)('img', {
                        src: u,
                        alt: '',
                        className: c.handImage
                    }),
                    (0, i.jsxs)('div', {
                        className: c.textContainer,
                        children: [
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-xl/semibold',
                                className: c.header,
                                children: o.intl.string(o.t['KzCF//'])
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: c.description,
                                children: o.intl.format(o.t['m+pcOD'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.zx, {
                        color: a.zx.Colors.CUSTOM,
                        size: a.zx.Sizes.SMALL,
                        className: c.manageSubscriptionsButton,
                        onClick: t,
                        children: o.intl.string(o.t['3a8Xxs'])
                    })
                ]
            })
        ]
    });
}
