n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(168107),
    s = n(480916),
    c = n(963886),
    d = n(110478),
    u = n(423932),
    m = n(695346),
    x = n(601948),
    h = n(594174),
    p = n(994331),
    b = n(20493);
let f = () => {
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
function _() {
    let e = h.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        n = m.Rt.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(p.buttonsContainer, b.marginBottom20),
                children: (0, r.jsx)(x.S, { isDevTools: !0 })
            }),
            (0, r.jsx)('div', {
                className: l()(p.buttonsContainer, b.marginBottom20),
                children: (0, r.jsx)(i.zxk, {
                    onClick: f,
                    children: 'Launch MFA'
                })
            }),
            (0, r.jsx)('div', {
                className: l()(p.buttonsContainer, b.marginBottom20),
                children: (0, r.jsx)(i.zxk, {
                    onClick: () => (0, u.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(p.buttonsContainer, b.marginBottom20),
                    children: (0, r.jsx)(i.zxk, {
                        onClick: () => (0, d.N)(),
                        children: 'Launch Captcha Test Tool'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(p.buttonsContainer, b.marginBottom20),
                    children: (0, r.jsx)(i.zxk, {
                        onClick: () => (0, c.E)(),
                        children: 'Launch Age Verification Test Tool'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(p.buttonsContainer, b.marginBottom20),
                    children: (0, r.jsx)(i.zxk, {
                        onClick: () => o.Z.showAgeVerificationGetStartedModal(s.cU.DEV_TOOLS_QUICK_ACTIONS),
                        children: 'Launch Age Verification Modal'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(p.buttonsContainer, b.marginBottom20),
                    children: (0, r.jsx)(i.j7V, {
                        value: n,
                        onChange: (e) => m.Rt.updateSetting(e),
                        hideBorder: !0,
                        children: 'Ignore profile speedbump disabled'
                    })
                })
        ]
    });
}
