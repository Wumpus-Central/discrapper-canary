n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(693789),
    s = n(481060),
    a = n(37234),
    l = n(703656),
    o = n(52647),
    c = n(450272),
    d = n(981631);
let u = function () {
    let { resetOnboardingAnnouncementModal: e, resetQuestStatus: t } = (0, o.Z)();
    return (0, r.jsxs)(c.$0, {
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Virtual Currency Configuration'
            }),
            (0, r.jsxs)(c.E_, {
                label: 'Reset Onboarding State',
                direction: 'vertical',
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        style: { marginBottom: '8px' },
                        children: 'Click the button below to reset your onboarding state for Virtual Currency.'
                    }),
                    (0, r.jsx)(i.zx, {
                        onClick: () => {
                            e(), t(), (0, a.xf)(), (0, l.uL)(d.Z5c.APP);
                        },
                        children: 'Reset Onboarding State'
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        children: 'Your may have to refresh your client after being redirected to the main application in order to see these changes.'
                    })
                ]
            })
        ]
    });
};
