n.d(t, { Z: () => C });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(668757),
    s = n(481060),
    o = n(110478),
    c = n(515970),
    d = n(840767),
    u = n(906605),
    m = n(359119),
    p = n(423932),
    h = n(695346),
    f = n(306052),
    b = n(944486),
    x = n(594174),
    g = n(134612),
    v = n(407383),
    j = n(293717),
    y = n(478411);
function C() {
    let e = x.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        r = h.Rt.useSetting();
    return (0, a.jsxs)(s.Ttm, {
        children: [
            (0, a.jsx)("div", {
                className: i()(j.buttonsContainer, y.marginBottom20),
                children: (0, a.jsx)(f.g, {}),
            }),
            (0, a.jsx)("div", {
                className: i()(j.buttonsContainer, y.marginBottom8),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Vibing Wumpus",
                    onClick: () => (0, p.Z)({ source: v.I.KEYBIND }),
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(j.buttonsContainer, y.marginBottom8),
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
                                        n.e("98932"),
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
                                { modalKey: g.X_ },
                            );
                        })(),
                }),
            }),
            t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: i()(j.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Clicker Game",
                                onClick: () => (0, d.Z)("devtools"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Captcha Test Tool",
                                onClick: () => (0, o.N)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset Hang Status State",
                                onClick: u.YU,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Force libdiscore Crash",
                                onClick: l.$R,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.buttonsContainer, y.marginBottom8),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset to fake checkpoint",
                                onClick: () => (0, c.pg)(!0),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.buttonsContainer, y.marginBottom20),
                            children: (0, a.jsx)(s.rsf, {
                                label: "Ignore profile speedbump disabled",
                                checked: r,
                                onChange: (e) => h.Rt.updateSetting(e),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
