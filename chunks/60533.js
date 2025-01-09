n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(90815),
    a = n(594174),
    o = n(720111);
function c(e) {
    let { guild: t } = e,
        n = (0, r.e7)([a.default], () => {
            let e = a.default.getCurrentUser();
            return null != e && (null == t ? void 0 : t.isOwner(e)) === !0;
        }),
        c = () => {
            (0, s.q)(t.id, { demonetized: !0 });
        };
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: 'Monetization Temporarily Disabled'
            }),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: "This server is overdue for accepting our new terms of service so we've had to temporarily suspend monetization. Don't worry, existing subscribers can still access their benefits and renew their subscription. However, new subscriptions cannot be made until the owner accepts our new terms of service."
            }),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsx)(l.Tooltip, {
                text: 'Only the server owner can accept new terms',
                shouldShow: !n,
                children: (e) =>
                    (0, i.jsx)(l.Button, {
                        disabled: !n,
                        ...e,
                        onClick: c,
                        children: 'Accept New Terms'
                    })
            })
        ]
    });
}
