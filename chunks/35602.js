"use strict";
n.d(t, { I: () => s }), n(321073);
var r = n(627968);
n(64700);
var i = n(397927);
let a = new (n(626584).A)("MFAPlayground"),
    s = {
        title: "MFA",
        stories: [
            {
                name: "Challenge Modal",
                id: "mfa-modal",
                component: function (e) {
                    let { hasPassword: t, hasTotp: s, hasSms: o, hasWebauthn: l, hasBackup: u, simulateError: c } = e,
                        d = [];
                    l &&
                        d.push({
                            type: "webauthn",
                            challenge: JSON.stringify({
                                publicKey: {
                                    challenge: "bW9jay1jaGFsbGVuZ2U=",
                                    timeout: 6e4,
                                    rpId: "discord.com",
                                    allowCredentials: [],
                                    userVerification: "preferred",
                                },
                            }),
                        }),
                        s && d.push({ type: "totp" }),
                        o && d.push({ type: "sms" }),
                        u && d.push({ type: "backup" }),
                        t && d.push({ type: "password" });
                    let _ = d.length > 0 ? d : [{ type: "password" }];
                    return (0, r.jsxs)(i.BJc, {
                        align: "center",
                        children: [
                            l &&
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
                                            ticket: `mock-ticket-${Math.random().toString(36).substring(7)}`,
                                            methods: _,
                                        },
                                        t = (e) =>
                                            new Promise((t, n) => {
                                                (a.info(`Type: ${e.mfaType}`),
                                                a.info(`Data: ${e.data}`),
                                                a.info(`Ticket: ${e.ticket}`),
                                                c)
                                                    ? n(Error("simulated error"))
                                                    : t();
                                            });
                                    (0, i.mMO)(
                                        async () => {
                                            let { MFAModal: i } = await Promise.all([n.e("88890"), n.e("62564")]).then(
                                                n.bind(n, 720353),
                                            );
                                            return (n) => (0, r.jsx)(i, { ...n, finish: t, mfaChallenge: e });
                                        },
                                        { onCloseCallback: () => a.info("Modal closed") },
                                    );
                                },
                            }),
                        ],
                    });
                },
                controls: {
                    hasPassword: { label: "Password", type: "boolean", defaultValue: !1 },
                    hasTotp: { label: "TOTP", type: "boolean", defaultValue: !0 },
                    hasSms: { label: "SMS", type: "boolean", defaultValue: !1 },
                    hasWebauthn: { label: "WebAuthn", type: "boolean", defaultValue: !1 },
                    hasBackup: { label: "Backup Codes", type: "boolean", defaultValue: !0 },
                    simulateError: {
                        label: "Challenge Outcome",
                        type: "select",
                        defaultValue: !1,
                        options: [
                            { label: "Success", value: !1 },
                            { label: "Error", value: !0 },
                        ],
                    },
                },
            },
        ],
    };
