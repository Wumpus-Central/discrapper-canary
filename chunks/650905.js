n.d(t, { F: () => u }), n(539854), n(49124), n(415506);
var r = n(54381);
n(473749);
var i = n(481060);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = new (n(710845).Z)("MFAPlayground"),
    u = {
        title: "MFA",
        stories: [
            {
                name: "Challenge Modal",
                id: "mfa-modal",
                component: function (e) {
                    let { hasPassword: t, hasTotp: o, hasSms: s, hasWebauthn: u, hasBackup: d, simulateError: f } = e,
                        p = [];
                    u &&
                        p.push({
                            type: "webauthn",
                            challenge: JSON.stringify({
                                publicKey: {
                                    challenge: "bW9jay1jaGFsbGVuZ2U=",
                                    timeout: 60000,
                                    rpId: "discord.com",
                                    allowCredentials: [],
                                    userVerification: "preferred",
                                },
                            }),
                        }),
                        o && p.push({ type: "totp" }),
                        s && p.push({ type: "sms" }),
                        d && p.push({ type: "backup" }),
                        t && p.push({ type: "password" });
                    let _ = p.length > 0 ? p : [{ type: "password" }];
                    return (0, r.jsxs)(i.Kqy, {
                        align: "center",
                        children: [
                            u &&
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "Note: WebAuthn UI will appear but will always error",
                                }),
                            (0, r.jsx)(i.Button, {
                                variant: "primary",
                                text: "Open MFA Modal",
                                onClick: () => {
                                    let e = {
                                            ticket: "mock-ticket-".concat(Math.random().toString(36).substring(7)),
                                            methods: _,
                                        },
                                        t = (e) =>
                                            new Promise((t, n) => {
                                                if (
                                                    (c.info("Type: ".concat(e.mfaType)),
                                                    c.info("Data: ".concat(e.data)),
                                                    c.info("Ticket: ".concat(e.ticket)),
                                                    f)
                                                )
                                                    return void n(Error("simulated error"));
                                                t();
                                            });
                                    (0, i.ZDy)(
                                        async () => {
                                            let { MFAModal: i } = await Promise.all([n.e("52030"), n.e("45353")]).then(
                                                n.bind(n, 124860),
                                            );
                                            return (n) =>
                                                (0, r.jsx)(
                                                    i,
                                                    l(a({}, n), {
                                                        finish: t,
                                                        mfaChallenge: e,
                                                    }),
                                                );
                                        },
                                        { onCloseCallback: () => c.info("Modal closed") },
                                    );
                                },
                            }),
                        ],
                    });
                },
                controls: {
                    hasPassword: {
                        label: "Password",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    hasTotp: {
                        label: "TOTP",
                        type: "boolean",
                        defaultValue: !0,
                    },
                    hasSms: {
                        label: "SMS",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    hasWebauthn: {
                        label: "WebAuthn",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    hasBackup: {
                        label: "Backup Codes",
                        type: "boolean",
                        defaultValue: !0,
                    },
                    simulateError: {
                        label: "Challenge Outcome",
                        type: "select",
                        defaultValue: !1,
                        options: [
                            {
                                label: "Success",
                                value: !1,
                            },
                            {
                                label: "Error",
                                value: !0,
                            },
                        ],
                    },
                },
            },
        ],
    };
