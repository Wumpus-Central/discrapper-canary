n.d(t, { Z: () => v });
var a = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    i = n(668757),
    s = n(481060),
    o = n(168107),
    c = n(480916),
    d = n(963886),
    u = n(110478),
    m = n(423932),
    h = n(695346),
    p = n(306052),
    x = n(594174),
    b = n(517269),
    f = n(197571);
let g = () => {
    Promise.all([n.e("52030"), n.e("1286")])
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
        n = h.Rt.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: l()(b.buttonsContainer, f.marginBottom20),
                children: (0, a.jsx)(p.g, { isDevTools: !0 }),
            }),
            (0, a.jsx)("div", {
                className: l()(b.buttonsContainer, f.marginBottom20),
                children: (0, a.jsx)(s.zxk, {
                    variant: "primary",
                    text: "Launch MFA",
                    onClick: g,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(b.buttonsContainer, f.marginBottom20),
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
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Launch Captcha Test Tool",
                                onClick: () => (0, u.N)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Launch Age Verification Test Tool",
                                onClick: () => (0, d.E)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, f.marginBottom20),
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
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Force libdiscore Crash",
                                onClick: i.$R,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, f.marginBottom20),
                            children: (0, a.jsx)(s.j7V, {
                                value: n,
                                onChange: (e) => h.Rt.updateSetting(e),
                                hideBorder: !0,
                                children: "Ignore profile speedbump disabled",
                            }),
                        }),
                    ],
                }),
        ],
    });
}
