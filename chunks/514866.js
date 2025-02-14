n.d(t, { Z: () => f });
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    o = n(191237),
    s = n(963886),
    c = n(110478),
    d = n(423932),
    u = n(695346),
    h = n(601948),
    m = n(594174),
    x = n(404876),
    _ = n(483938);
let p = () => {
    Promise.all([n.e('52030'), n.e('11874')])
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
function f() {
    let e = m.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        n = u.Rt.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: l()(x.buttonsContainer, _.marginBottom20),
                children: (0, a.jsx)(h.S, { isDevTools: !0 })
            }),
            (0, a.jsx)('div', {
                className: l()(x.buttonsContainer, _.marginBottom20),
                children: (0, a.jsx)(i.zxk, {
                    onClick: p,
                    children: 'Launch MFA'
                })
            }),
            (0, a.jsx)('div', {
                className: l()(x.buttonsContainer, _.marginBottom20),
                children: (0, a.jsx)(i.zxk, {
                    onClick: () => (0, d.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            t &&
                (0, a.jsx)('div', {
                    className: l()(x.buttonsContainer, _.marginBottom20),
                    children: (0, a.jsx)(i.zxk, {
                        onClick: () => (0, c.N)(),
                        children: 'Launch Captcha Test Tool'
                    })
                }),
            t &&
                (0, a.jsx)('div', {
                    className: l()(x.buttonsContainer, _.marginBottom20),
                    children: (0, a.jsx)(i.zxk, {
                        onClick: () => (0, s.E)(),
                        children: 'Launch Age Verification Test Tool'
                    })
                }),
            t &&
                (0, a.jsx)('div', {
                    className: l()(x.buttonsContainer, _.marginBottom20),
                    children: (0, a.jsx)(i.zxk, {
                        onClick: () => o.Z.showAgeVerificationModal(),
                        children: 'Launch Age Verification Modal'
                    })
                }),
            t &&
                (0, a.jsx)('div', {
                    className: l()(x.buttonsContainer, _.marginBottom20),
                    children: (0, a.jsx)(i.j7V, {
                        value: n,
                        onChange: (e) => u.Rt.updateSetting(e),
                        hideBorder: !0,
                        children: 'Ignore profile speedbump disabled'
                    })
                })
        ]
    });
}
