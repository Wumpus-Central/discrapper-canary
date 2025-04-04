n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(668757),
    o = n(481060),
    s = n(168107),
    c = n(480916),
    d = n(963886),
    u = n(110478),
    m = n(423932),
    x = n(695346),
    h = n(601948),
    p = n(594174),
    b = n(994331),
    f = n(20493);
let _ = () => {
    Promise.all([n.e('52030'), n.e('58717')])
        .then(n.bind(n, 24031))
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
function g() {
    let e = p.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        n = x.Rt.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(b.buttonsContainer, f.marginBottom20),
                children: (0, r.jsx)(h.S, { isDevTools: !0 })
            }),
            (0, r.jsx)('div', {
                className: l()(b.buttonsContainer, f.marginBottom20),
                children: (0, r.jsx)(o.zxk, {
                    onClick: _,
                    children: 'Launch MFA'
                })
            }),
            (0, r.jsx)('div', {
                className: l()(b.buttonsContainer, f.marginBottom20),
                children: (0, r.jsx)(o.zxk, {
                    onClick: () => (0, m.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, r.jsx)(o.zxk, {
                                onClick: () => (0, u.N)(),
                                children: 'Launch Captcha Test Tool'
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, r.jsx)(o.zxk, {
                                onClick: () => (0, d.E)(),
                                children: 'Launch Age Verification Test Tool'
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, r.jsx)(o.zxk, {
                                onClick: () => s.Z.showAgeVerificationGetStartedModal(c.cU.DEV_TOOLS_QUICK_ACTIONS),
                                children: 'Launch Age Verification Modal'
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, r.jsx)(o.zxk, {
                                onClick: i.$R,
                                children: 'Force libdiscore Crash'
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, r.jsx)(o.j7V, {
                                value: n,
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
