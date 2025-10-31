n.d(t, { Z: () => _ });
var a = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    r = n(668757),
    s = n(481060),
    o = n(168107),
    c = n(480916),
    d = n(963886),
    u = n(110478),
    m = n(677106),
    p = n(906605),
    h = n(423932),
    x = n(695346),
    g = n(306052),
    f = n(594174),
    b = n(517269),
    v = n(197571);
let j = () => {
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
function _() {
    let e = f.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        n = x.Rt.useSetting();
    return (0, a.jsxs)(s.Ttm, {
        children: [
            (0, a.jsx)("div", {
                className: l()(b.buttonsContainer, v.marginBottom20),
                children: (0, a.jsx)(g.g, { isDevTools: !0 }),
            }),
            (0, a.jsx)("div", {
                className: l()(b.buttonsContainer, v.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch MFA",
                    onClick: j,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(b.buttonsContainer, v.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Vibing Wumpus",
                    onClick: () => (0, h.Z)(),
                }),
            }),
            t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Clicker Game",
                                onClick: () => (0, m.Z)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Captcha Test Tool",
                                onClick: () => (0, u.N)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Age Verification Test Tool",
                                onClick: () => (0, d.E)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Age Verification Modal",
                                onClick: () =>
                                    o.Z.showAgeVerificationGetStartedModal({
                                        entryPoint: c.cU.DEV_TOOLS_QUICK_ACTIONS,
                                    }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset Hang Status State",
                                onClick: p.YU,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Force libdiscore Crash",
                                onClick: r.$R,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: l()(b.buttonsContainer, v.marginBottom20),
                            children: (0, a.jsx)(s.rsf, {
                                label: "Ignore profile speedbump disabled",
                                checked: n,
                                onChange: (e) => x.Rt.updateSetting(e),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
