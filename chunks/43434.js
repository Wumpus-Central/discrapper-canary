n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(526156),
    a = n(229269),
    l = n(450272),
    o = n(726985),
    c = n(981631);
function d() {
    return (0, i.jsx)(s.Z, {
        parentSetting: o.s6.REVENUE_STORYBOOK,
        settingsSection: c.oAB.REVENUE_STORYBOOK_PAGE,
        tabs: [
            {
                title: 'Payment Components',
                component: () => (0, i.jsx)(a.f, {}),
                setting: o.s6.PAYMENT_COMPONENTS
            },
            {
                title: 'Orb Components',
                component: () =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                color: 'info-help-text',
                                children: 'Add Orb components here.'
                            }),
                            (0, i.jsx)(l.$0, { children: 'Orb Components' })
                        ]
                    }),
                setting: o.s6.ORB_COMPONENTS
            }
        ]
    });
}
