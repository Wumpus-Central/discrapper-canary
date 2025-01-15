n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(388032),
    o = n(773115),
    c = n(303164),
    d = n(834300);
function u(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'heading-md/bold',
                children: l.intl.string(l.t['KzCF//'])
            }),
            (0, i.jsx)(a.Spacer, { size: 4 }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                className: o.sectionDescription,
                children: l.intl.string(l.t['3D7qCg'])
            }),
            (0, i.jsx)(a.Spacer, { size: 24 }),
            (0, i.jsxs)('div', {
                className: s()(c.guildBoostingSubscriptionRow, o.card),
                children: [
                    (0, i.jsx)('img', {
                        src: d,
                        alt: '',
                        className: o.handImage
                    }),
                    (0, i.jsxs)('div', {
                        className: o.textContainer,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'heading-xl/semibold',
                                className: o.header,
                                children: l.intl.string(l.t['KzCF//'])
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                className: o.description,
                                children: l.intl.format(l.t['m+pcOD'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.CUSTOM,
                        size: a.Button.Sizes.SMALL,
                        className: o.manageSubscriptionsButton,
                        onClick: t,
                        children: l.intl.string(l.t['3a8Xxs'])
                    })
                ]
            })
        ]
    });
}
