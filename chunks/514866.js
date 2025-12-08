n.d(t, { Z: () => _ });
var a = n(54381);
n(473749);
var l = n(120356),
    r = n.n(l),
    i = n(668757),
    s = n(481060),
    o = n(110478),
    c = n(515970),
    d = n(840767),
    u = n(906605),
    m = n(359119),
    p = n(423932),
    h = n(695346),
    x = n(306052),
    f = n(944486),
    g = n(594174),
    b = n(134612),
    v = n(517269),
    j = n(197571);
function _() {
    let e = g.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        l = h.Rt.useSetting();
    return (0, a.jsxs)(s.Ttm, {
        children: [
            (0, a.jsx)("div", {
                className: r()(v.buttonsContainer, j.marginBottom20),
                children: (0, a.jsx)(x.g, { isDevTools: !0 }),
            }),
            (0, a.jsx)("div", {
                className: r()(v.buttonsContainer, j.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Vibing Wumpus",
                    onClick: () => (0, p.Z)(),
                }),
            }),
            (0, a.jsx)("div", {
                className: r()(v.buttonsContainer, j.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Safety Tools Modal",
                    onClick: () =>
                        (() => {
                            let e = f.Z.getChannelId(),
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
                                                    warningType: m.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                },
                                                n,
                                            ),
                                        );
                                },
                                { modalKey: b.X_ },
                            );
                        })(),
                }),
            }),
            t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: r()(v.buttonsContainer, j.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Clicker Game",
                                onClick: () => (0, d.Z)("devtools"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(v.buttonsContainer, j.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Captcha Test Tool",
                                onClick: () => (0, o.N)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(v.buttonsContainer, j.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset Hang Status State",
                                onClick: u.YU,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(v.buttonsContainer, j.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Force libdiscore Crash",
                                onClick: i.$R,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(v.buttonsContainer, j.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset to fake checkpoint",
                                onClick: () => (0, c.pg)(!0),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: r()(v.buttonsContainer, j.marginBottom20),
                            children: (0, a.jsx)(s.rsf, {
                                label: "Ignore profile speedbump disabled",
                                checked: l,
                                onChange: (e) => h.Rt.updateSetting(e),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
