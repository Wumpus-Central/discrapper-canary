n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    o = n(191237),
    s = n(963886),
    c = n(110478),
    d = n(423932),
    u = n(695346),
    h = n(601948),
    m = n(594174),
    x = n(148817),
    p = n(455812);
let f = () => {
    Promise.all([n.e('52030'), n.e('62250')])
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
function b() {
    let e = m.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        n = u.Rt.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: i()(x.buttonsContainer, p.marginBottom20),
                children: (0, r.jsx)(h.S, { isDevTools: !0 })
            }),
            (0, r.jsx)('div', {
                className: i()(x.buttonsContainer, p.marginBottom20),
                children: (0, r.jsx)(l.zxk, {
                    onClick: f,
                    children: 'Launch MFA'
                })
            }),
            (0, r.jsx)('div', {
                className: i()(x.buttonsContainer, p.marginBottom20),
                children: (0, r.jsx)(l.zxk, {
                    onClick: () => (0, d.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            t &&
                (0, r.jsx)('div', {
                    className: i()(x.buttonsContainer, p.marginBottom20),
                    children: (0, r.jsx)(l.zxk, {
                        onClick: () => (0, c.N)(),
                        children: 'Launch Captcha Test Tool'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: i()(x.buttonsContainer, p.marginBottom20),
                    children: (0, r.jsx)(l.zxk, {
                        onClick: () => (0, s.E)(),
                        children: 'Launch Age Verification Test Tool'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: i()(x.buttonsContainer, p.marginBottom20),
                    children: (0, r.jsx)(l.zxk, {
                        onClick: () => o.Z.showAgeVerificationGetStartedModal(),
                        children: 'Launch Age Verification Modal'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: i()(x.buttonsContainer, p.marginBottom20),
                    children: (0, r.jsx)(l.j7V, {
                        value: n,
                        onChange: (e) => u.Rt.updateSetting(e),
                        hideBorder: !0,
                        children: 'Ignore profile speedbump disabled'
                    })
                })
        ]
    });
}
