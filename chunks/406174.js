n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    a = n(388032),
    o = n(971204),
    c = n(49474),
    d = n(834300);
function u(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-md/bold',
                children: a.intl.string(a.t['KzCF//'])
            }),
            (0, i.jsx)(r.LZC, { size: 4 }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                className: o.sectionDescription,
                children: a.intl.string(a.t['3D7qCg'])
            }),
            (0, i.jsx)(r.LZC, { size: 24 }),
            (0, i.jsxs)('div', {
                className: l()(c.guildBoostingSubscriptionRow, o.card),
                children: [
                    (0, i.jsx)('img', {
                        src: d,
                        alt: '',
                        className: o.handImage
                    }),
                    (0, i.jsxs)('div', {
                        className: o.textContainer,
                        children: [
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-xl/semibold',
                                className: o.header,
                                children: a.intl.string(a.t['KzCF//'])
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                className: o.description,
                                children: a.intl.format(a.t['m+pcOD'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, i.jsx)(r.zxk, {
                        color: r.zxk.Colors.CUSTOM,
                        size: r.zxk.Sizes.SMALL,
                        className: o.manageSubscriptionsButton,
                        onClick: t,
                        children: a.intl.string(a.t['3a8Xxs'])
                    })
                ]
            })
        ]
    });
}
