n.d(t, { Z: () => p });
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    o = n(963886),
    s = n(110478),
    c = n(423932),
    d = n(695346),
    u = n(601948),
    h = n(594174),
    m = n(822392),
    x = n(814632);
let _ = () => {
    Promise.all([n.e('52030'), n.e('76452')])
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
function p() {
    let e = h.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        n = d.Rt.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: l()(m.buttonsContainer, x.marginBottom20),
                children: (0, a.jsx)(u.S, { isDevTools: !0 })
            }),
            (0, a.jsx)('div', {
                className: l()(m.buttonsContainer, x.marginBottom20),
                children: (0, a.jsx)(i.zxk, {
                    onClick: _,
                    children: 'Launch MFA'
                })
            }),
            (0, a.jsx)('div', {
                className: l()(m.buttonsContainer, x.marginBottom20),
                children: (0, a.jsx)(i.zxk, {
                    onClick: () => (0, c.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            t &&
                (0, a.jsx)('div', {
                    className: l()(m.buttonsContainer, x.marginBottom20),
                    children: (0, a.jsx)(i.zxk, {
                        onClick: () => (0, s.N)(),
                        children: 'Launch Captcha Test Tool'
                    })
                }),
            t &&
                (0, a.jsx)('div', {
                    className: l()(m.buttonsContainer, x.marginBottom20),
                    children: (0, a.jsx)(i.zxk, {
                        onClick: () => (0, o.E)(),
                        children: 'Launch Age Verification Test Tool'
                    })
                }),
            t &&
                (0, a.jsx)('div', {
                    className: l()(m.buttonsContainer, x.marginBottom20),
                    children: (0, a.jsx)(i.j7V, {
                        value: n,
                        onChange: (e) => d.Rt.updateSetting(e),
                        hideBorder: !0,
                        children: 'Ignore profile speedbump disabled'
                    })
                })
        ]
    });
}
