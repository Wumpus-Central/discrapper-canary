n.d(t, { Z: () => v });
var a = n(951288);
n(647438);
var r = n(120356),
    i = n.n(r),
    l = n(668757),
    s = n(481060),
    o = n(168107),
    c = n(480916),
    d = n(963886),
    u = n(110478),
    m = n(423932),
    p = n(695346),
    h = n(306052),
    x = n(594174),
    f = n(103088),
    b = n(10198);
let g = () => {
    Promise.all([n.e("52030"), n.e("91403")])
        .then(n.bind(n, 24031))
        .then((e) => {
            let { openMFAModal: t } = e;
            t(
                {
                    ticket: "ticket",
                    methods: [
                        {
                            type: "webauthn",
                            challenge: "{}",
                        },
                        {
                            type: "totp",
                            backup_codes_allowed: !0,
                        },
                        { type: "sms" },
                        { type: "password" },
                    ],
                },
                console.log,
                console.error,
            );
        });
};
function v() {
    let e = x.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        n = p.Rt.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: i()(f.buttonsContainer, b.marginBottom20),
                children: (0, a.jsx)(h.g, { isDevTools: !0 }),
            }),
            (0, a.jsx)("div", {
                className: i()(f.buttonsContainer, b.marginBottom20),
                children: (0, a.jsx)(s.zxk, {
                    variant: "primary",
                    text: "Launch MFA",
                    onClick: g,
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(f.buttonsContainer, b.marginBottom20),
                children: (0, a.jsx)(s.zxk, {
                    variant: "primary",
                    text: "Launch Vibing Wumpus",
                    onClick: () => (0, m.Z)(),
                }),
            }),
            t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: i()(f.buttonsContainer, b.marginBottom20),
                            children: (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Launch Captcha Test Tool",
                                onClick: () => (0, u.N)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(f.buttonsContainer, b.marginBottom20),
                            children: (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Launch Age Verification Test Tool",
                                onClick: () => (0, d.E)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(f.buttonsContainer, b.marginBottom20),
                            children: (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Launch Age Verification Modal",
                                onClick: () =>
                                    o.Z.showAgeVerificationGetStartedModal({
                                        entryPoint: c.cU.DEV_TOOLS_QUICK_ACTIONS,
                                    }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(f.buttonsContainer, b.marginBottom20),
                            children: (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Force libdiscore Crash",
                                onClick: l.$R,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(f.buttonsContainer, b.marginBottom20),
                            children: (0, a.jsx)(s.j7V, {
                                value: n,
                                onChange: (e) => p.Rt.updateSetting(e),
                                hideBorder: !0,
                                children: "Ignore profile speedbump disabled",
                            }),
                        }),
                    ],
                }),
        ],
    });
}
