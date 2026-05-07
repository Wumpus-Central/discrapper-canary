l.r(a), l.d(a, { mfaPlaygroundConfig: () => u }), l(321073);
var t = l(627968);
l(64700);
var o = l(331322),
    s = l(834730),
    n = l(821609),
    r = l(192308);
let i = new (l(626584).A)("MFAPlayground"),
    u = {
        collections: [
            {
                id: "mfa",
                name: "MFA",
                groups: [
                    {
                        title: "MFA",
                        stories: [
                            {
                                name: "Challenge Modal",
                                id: "mfa-modal",
                                component: function (e) {
                                    let {
                                            hasPassword: a,
                                            hasTotp: u,
                                            hasSms: p,
                                            hasWebauthn: d,
                                            hasBackup: c,
                                            simulateError: h,
                                        } = e,
                                        b = [];
                                    d &&
                                        b.push({
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
                                        u && b.push({ type: "totp" }),
                                        p && b.push({ type: "sms" }),
                                        c && b.push({ type: "backup" }),
                                        a && b.push({ type: "password" });
                                    let m = b.length > 0 ? b : [{ type: "password" }];
                                    return (0, t.jsxs)(o.B, {
                                        align: "center",
                                        children: [
                                            d &&
                                                (0, t.jsx)(s.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: "Note: WebAuthn UI will appear but will always error",
                                                }),
                                            (0, t.jsx)(n.$, {
                                                variant: "primary",
                                                text: "Open MFA Modal",
                                                onClick: () => {
                                                    let e = {
                                                            ticket: `mock-ticket-${Math.random().toString(36).substring(7)}`,
                                                            methods: m,
                                                        },
                                                        a = (e) =>
                                                            new Promise((a, l) => {
                                                                (i.info(`Type: ${e.mfaType}`),
                                                                i.info(`Data: ${e.data}`),
                                                                i.info(`Ticket: ${e.ticket}`),
                                                                h)
                                                                    ? l(Error("simulated error"))
                                                                    : a();
                                                            });
                                                    (0, r.openModalLazy)(
                                                        async () => {
                                                            let { MFAModal: o } = await Promise.all([
                                                                l.e("17094"),
                                                                l.e("8979"),
                                                                l.e("4736"),
                                                                l.e("90966"),
                                                            ]).then(l.bind(l, 572469));
                                                            return (l) =>
                                                                (0, t.jsx)(o, { ...l, finish: a, mfaChallenge: e });
                                                        },
                                                        { onCloseCallback: () => i.info("Modal closed") },
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
                    },
                ],
            },
        ],
    };
