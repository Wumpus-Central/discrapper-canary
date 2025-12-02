n.d(t, { Z: () => _ });
var a = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    r = n(668757),
    s = n(481060),
    o = n(110478),
    c = n(677106),
    d = n(906605),
    u = n(359119),
    m = n(423932),
    p = n(695346),
    h = n(306052),
    x = n(944486),
    f = n(594174),
    g = n(134612),
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
function _() {
    let e = f.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        l = p.Rt.useSetting();
    return (0, a.jsxs)(s.Ttm, {
        children: [
            (0, a.jsx)("div", {
                className: i()(b.buttonsContainer, v.marginBottom20),
                children: (0, a.jsx)(h.g, { isDevTools: !0 }),
            }),
            (0, a.jsx)("div", {
                className: i()(b.buttonsContainer, v.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch MFA",
                    onClick: j,
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(b.buttonsContainer, v.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Vibing Wumpus",
                    onClick: () => (0, m.Z)(),
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(b.buttonsContainer, v.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Safety Tools Modal",
                    onClick: () =>
                        (() => {
                            let e = x.Z.getChannelId(),
                                t = null != e ? e : "21154681615024128";
                            (0, s.ZDy)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("37031"),
                                        n.e("89650"),
                                        n.e("81865"),
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
                                                    warningType: u.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                },
                                                n,
                                            ),
                                        );
                                },
                                { modalKey: g.X_ },
                            );
                        })(),
                }),
            }),
            t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: i()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Clicker Game",
                                onClick: () => (0, c.Z)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Captcha Test Tool",
                                onClick: () => (0, o.N)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset Hang Status State",
                                onClick: d.YU,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(b.buttonsContainer, v.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Force libdiscore Crash",
                                onClick: r.$R,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(b.buttonsContainer, v.marginBottom20),
                            children: (0, a.jsx)(s.rsf, {
                                label: "Ignore profile speedbump disabled",
                                checked: l,
                                onChange: (e) => p.Rt.updateSetting(e),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
