n.d(t, { A: () => _ });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(306173),
    s = n(397927),
    o = n(787880),
    c = n(796104),
    d = n(146104),
    u = n(69555),
    m = n(349435),
    p = n(674272),
    h = n(253932),
    f = n(559248),
    x = n(309010),
    b = n(287809),
    g = n(327337),
    v = n(431804),
    j = n(229988),
    y = n(473169);
function _() {
    let e = b.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff(),
        l = h.j0.useSetting();
    return (0, a.jsxs)(s.HOs, {
        children: [
            (0, a.jsx)("div", {
                className: i()(j.N, y.SX),
                children: (0, a.jsx)(f.M, {}),
            }),
            (0, a.jsx)("div", {
                className: i()(j.N, y.QB),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Vibing Wumpus",
                    onClick: () => (0, p.A)({ source: v.y.KEYBIND }),
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(j.N, y.QB),
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Launch Safety Tools Modal",
                    onClick: () => {
                        let e, t;
                        return (
                            (t = null != (e = x.A.getChannelId()) ? e : "21154681615024128"),
                            void (0, s.mMO)(
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("45033"),
                                        n.e("46717"),
                                        n.e("54105"),
                                    ]).then(n.bind(n, 788099));
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
                                                    warningType: m._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                },
                                                n,
                                            ),
                                        );
                                },
                                { modalKey: g.V },
                            )
                        );
                    },
                }),
            }),
            t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: i()(j.N, y.QB),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Clicker Game",
                                onClick: () => (0, d.A)("devtools"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.N, y.QB),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Launch Captcha Test Tool",
                                onClick: () => (0, o.g)(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.N, y.QB),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset Hang Status State",
                                onClick: u.B7,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.N, y.QB),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Force libdiscore Crash",
                                onClick: r.Oy,
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.N, y.QB),
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset to fake checkpoint",
                                onClick: () => (0, c.nX)(!0),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: i()(j.N, y.SX),
                            children: (0, a.jsx)(s.dOG, {
                                label: "Ignore profile speedbump disabled",
                                checked: l,
                                onChange: (e) => h.j0.updateSetting(e),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
