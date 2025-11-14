n.d(t, { Z: () => S });
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
    m = n(677106),
    p = n(906605),
    h = n(359119),
    x = n(423932),
    g = n(695346),
    f = n(306052),
    b = n(944486),
    v = n(594174),
    j = n(134612),
    _ = n(517269),
    y = n(197571);
let C = () => {
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
                        { type: "totp" },
                        { type: "sms" },
                        { type: "password" },
                    ],
                },
                console.log,
                console.error,
            );
        });
};
function S() {
    let e = v.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        r = g.Rt.useSetting();
    return (0, a.jsxs)(s.Ttm, {
        children: [
            (0, a.jsx)("div", {
                className: i()(_.buttonsContainer, y.marginBottom20),
                children: (0, a.jsx)(f.g, { isDevTools: !0 }),
            }),
            (0, a.jsx)("div", {
                className: i()(_.buttonsContainer, y.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch MFA",
                    onClick: C,
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(_.buttonsContainer, y.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Vibing Wumpus",
                    onClick: () => (0, x.Z)(),
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(_.buttonsContainer, y.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Safety Tools Modal",
                    onClick: () =>
                        (() => {
                            let e = b.Z.getChannelId(),
                                t = null != e ? e : "21154681615024128";
                            (0, s.ZDy)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("37031"),
                                        n.e("89650"),
                                        n.e("76144"),
                                    ]).then(n.bind(n, 611446));
                                    return (n) =>
                                        (0, a.jsx)(
                                            e,
                                            (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        a = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (a = a.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            }),
                                                        )),
                                                        a.forEach(function (t) {
                                                            var a;
                                                            (a = n[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: a,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[t] = a);
                                                        });
                                                }
                                                return e;
                                            })(
                                                {
                                                    otherUserId: "9876543210",
                                                    channelId: t,
                                                    warningId: "test-warning-id",
                                                    warningType: h.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                },
                                                n,
                                            ),
                                        );
                                },
                                { modalKey: j.X_ },
                            );
                        })(),
                }),
            }),
            t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: i()(_.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Clicker Game",
                                onClick: () => (0, m.Z)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(_.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Captcha Test Tool",
                                onClick: () => (0, u.N)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(_.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Age Verification Test Tool",
                                onClick: () => (0, d.E)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(_.buttonsContainer, y.marginBottom8),
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
                            className: i()(_.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset Hang Status State",
                                onClick: p.YU,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(_.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Force libdiscore Crash",
                                onClick: l.$R,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(_.buttonsContainer, y.marginBottom20),
                            children: (0, a.jsx)(s.rsf, {
                                label: "Ignore profile speedbump disabled",
                                checked: r,
                                onChange: (e) => g.Rt.updateSetting(e),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
