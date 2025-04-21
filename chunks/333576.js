n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(693789),
    s = n(481060),
    l = n(37234),
    a = n(703656),
    o = n(52647),
    c = n(450272),
    d = n(981631);
let u = function () {
    let { resetOnboardingAnnouncementModal: e, resetQuestStatus: t } = (0, o.Z)();
    return (0, i.jsxs)(c.$0, {
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Virtual Currency Configuration'
            }),
            (0, i.jsxs)(c.E_, {
                label: 'Reset Onboarding State',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        style: { marginBottom: '8px' },
                        children: 'Click the button below to reset your onboarding state for Virtual Currency.'
                    }),
                    (0, i.jsx)(r.zx, {
                        onClick: () => {
                            e(), t(), (0, l.xf)(), (0, a.uL)(d.Z5c.APP);
                        },
                        children: 'Reset Onboarding State'
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        children: 'Your may have to refresh your client after being redirected to the main application in order to see these changes.'
                    })
                ]
            })
        ]
    });
};
