n.d(t, { Z: () => u }), n(953529);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(388032),
    o = n(810918),
    c = n(772526),
    d = n(834300);
function u(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-md/bold',
                children: a.intl.string(a.t['KzCF//'])
            }),
            (0, i.jsx)(l.LZC, { size: 4 }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: o.sectionDescription,
                children: a.intl.string(a.t['3D7qCg'])
            }),
            (0, i.jsx)(l.LZC, { size: 24 }),
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
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-xl/semibold',
                                className: o.header,
                                children: a.intl.string(a.t['KzCF//'])
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: o.description,
                                children: a.intl.format(a.t['m+pcOD'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.CUSTOM,
                        size: l.zxk.Sizes.SMALL,
                        className: o.manageSubscriptionsButton,
                        onClick: t,
                        children: a.intl.string(a.t['3a8Xxs'])
                    })
                ]
            })
        ]
    });
}
