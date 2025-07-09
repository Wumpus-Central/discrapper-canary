a.d(t, { Z: () => j });
var n = a(255367);
a(73800);
var r = a(120356),
    l = a.n(r),
    i = a(668757),
    s = a(481060),
    o = a(168107),
    c = a(480916),
    d = a(963886),
    u = a(110478),
    m = a(423932),
    x = a(695346),
    p = a(306052),
    h = a(594174),
    b = a(994331),
    f = a(20493);
let v = () => {
    Promise.all([a.e('52030'), a.e('58717')])
        .then(a.bind(a, 24031))
        .then((e) => {
            let { openMFAModal: t } = e;
            t(
                {
                    ticket: 'ticket',
                    methods: [
                        {
                            type: 'webauthn',
                            challenge: '{}'
                        },
                        {
                            type: 'totp',
                            backup_codes_allowed: !0
                        },
                        { type: 'sms' },
                        { type: 'password' }
                    ]
                },
                console.log,
                console.error
            );
        });
};
function j() {
    let e = h.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        a = x.Rt.useSetting();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: l()(b.buttonsContainer, f.marginBottom20),
                children: (0, n.jsx)(p.g, { isDevTools: !0 })
            }),
            (0, n.jsx)('div', {
                className: l()(b.buttonsContainer, f.marginBottom20),
                children: (0, n.jsx)(s.zxk, {
                    variant: 'primary',
                    text: 'Launch MFA',
                    onClick: v
                })
            }),
            (0, n.jsx)('div', {
                className: l()(b.buttonsContainer, f.marginBottom20),
                children: (0, n.jsx)(s.zxk, {
                    variant: 'primary',
                    text: 'Launch Vibing Wumpus',
                    onClick: () => (0, m.Z)()
                })
            }),
            t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, n.jsx)(s.zxk, {
                                variant: 'primary',
                                text: 'Launch Captcha Test Tool',
                                onClick: () => (0, u.N)()
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, n.jsx)(s.zxk, {
                                variant: 'primary',
                                text: 'Launch Age Verification Test Tool',
                                onClick: () => (0, d.E)()
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, n.jsx)(s.zxk, {
                                variant: 'primary',
                                text: 'Launch Age Verification Modal',
                                onClick: () => o.Z.showAgeVerificationGetStartedModal(c.cU.DEV_TOOLS_QUICK_ACTIONS)
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, n.jsx)(s.zxk, {
                                variant: 'primary',
                                text: 'Force libdiscore Crash',
                                onClick: i.$R
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, n.jsx)(s.j7V, {
                                value: a,
                                onChange: (e) => x.Rt.updateSetting(e),
                                hideBorder: !0,
                                children: 'Ignore profile speedbump disabled'
                            })
                        })
                    ]
                })
        ]
    });
}
