l.d(a, { I: () => n }), l(321073);
var t = l(627968);
l(64700);
var o = l(397927);
let s = new (l(626584).A)("MFAPlayground"),
    n = {
        title: "MFA",
        stories: [
            {
                name: "Challenge Modal",
                id: "mfa-modal",
                component: function (e) {
                    let { hasPassword: a, hasTotp: n, hasSms: r, hasWebauthn: i, hasBackup: u, simulateError: p } = e,
                        d = [];
                    i &&
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
                        n && d.push({ type: "totp" }),
                        r && d.push({ type: "sms" }),
                        u && d.push({ type: "backup" }),
                        a && d.push({ type: "password" });
                    let c = d.length > 0 ? d : [{ type: "password" }];
                    return (0, t.jsxs)(o.BJc, {
                        align: "center",
                        children: [
                            i &&
                                (0, t.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "Note: WebAuthn UI will appear but will always error",
                                }),
                            (0, t.jsx)(o.Button, {
                                variant: "primary",
                                text: "Open MFA Modal",
                                onClick: () => {
                                    let e = {
                                            ticket: `mock-ticket-${Math.random().toString(36).substring(7)}`,
                                            methods: c,
                                        },
                                        a = (e) =>
                                            new Promise((a, l) => {
                                                (s.info(`Type: ${e.mfaType}`),
                                                s.info(`Data: ${e.data}`),
                                                s.info(`Ticket: ${e.ticket}`),
                                                p)
                                                    ? l(Error("simulated error"))
                                                    : a();
                                            });
                                    (0, o.mMO)(
                                        async () => {
                                            let { MFAModal: o } = await Promise.all([l.e("88890"), l.e("21714")]).then(
                                                l.bind(l, 720353),
                                            );
                                            return (l) => (0, t.jsx)(o, { ...l, finish: a, mfaChallenge: e });
                                        },
                                        { onCloseCallback: () => s.info("Modal closed") },
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
