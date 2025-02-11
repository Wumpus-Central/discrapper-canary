n.d(t, { Z: () => _ }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(704215),
    r = n(693789),
    a = n(481060),
    o = n(37234),
    c = n(804501),
    d = n(113434),
    u = n(703656),
    h = n(581883),
    m = n(450272),
    g = n(981631),
    x = n(642145);
let _ = function () {
    var e;
    let t =
            null !==
                (e = (0, s.e7)([h.Z], () => {
                    var e;
                    return null === (e = h.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
                })) && void 0 !== e
                ? e
                : new Uint8Array(),
        n = (0, c.x)(l.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, t),
        { handleResetStatusClick: _ } = (0, d.kJ)(x.V);
    return (0, i.jsxs)(m.$0, {
        children: [
            (0, i.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Virtual Currency Configuration'
            }),
            (0, i.jsxs)(m.E_, {
                label: 'Reset Onboarding State',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        style: { marginBottom: '8px' },
                        children: 'Click the button below to reset your onboarding state for Virtual Currency.'
                    }),
                    (0, i.jsx)(r.zx, {
                        onClick: () => {
                            (0, o.xf)(), n.isDismissed && n.handleToggleDismissState(), _(), (0, u.uL)(g.Z5c.APP);
                        },
                        children: 'Reset Onboarding State'
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        children: 'Your may have to refresh your client after being redirected to the main application in order to see these changes.'
                    })
                ]
            })
        ]
    });
};
