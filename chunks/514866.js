n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(963886),
    s = n(110478),
    c = n(423932),
    d = n(695346),
    u = n(601948),
    h = n(594174),
    m = n(173183),
    x = n(232186);
let f = () => {
    Promise.all([n.e('52030'), n.e('66411')])
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
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(m.buttonsContainer, x.marginBottom20),
                children: (0, r.jsx)(u.S, { isDevTools: !0 })
            }),
            (0, r.jsx)('div', {
                className: l()(m.buttonsContainer, x.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                    onClick: f,
                    children: 'Launch MFA'
                })
            }),
            (0, r.jsx)('div', {
                className: l()(m.buttonsContainer, x.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                    onClick: () => (0, c.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(m.buttonsContainer, x.marginBottom20),
                    children: (0, r.jsx)(i.Button, {
                        onClick: () => (0, s.N)(),
                        children: 'Launch Captcha Test Tool'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(m.buttonsContainer, x.marginBottom20),
                    children: (0, r.jsx)(i.Button, {
                        onClick: () => (0, o.E)(),
                        children: 'Launch Age Verification Test Tool'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(m.buttonsContainer, x.marginBottom20),
                    children: (0, r.jsx)(i.FormSwitch, {
                        value: n,
                        onChange: (e) => d.Rt.updateSetting(e),
                        hideBorder: !0,
                        children: 'Ignore profile speedbump disabled'
                    })
                })
        ]
    });
}
