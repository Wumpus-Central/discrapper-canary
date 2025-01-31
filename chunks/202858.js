i.d(t, {
    Yn: () => E,
    ZP: () => h
}),
    i(411104),
    i(47120);
var n = i(200651),
    r = i(192379),
    l = i(283693),
    o = i(481060),
    a = i(816814),
    s = i(200483),
    c = i(981631),
    d = i(388032);
function _(e) {
    let { onError: t, onSuccess: i, PasswordConfirm: o, ...s } = e,
        [_, u] = r.useState('');
    return (0, n.jsx)(o, {
        ...s,
        handleSubmit: (e) => a.Z.enableMFAStart(e),
        onError: (e) => {
            ('object' == typeof e && null != e && (0, l.nr)(e, 'code') && 'number' == typeof e.code ? e.code : 0) === c.evJ.MFA_INVALID_SECRET ? (i(_), s.onClose()) : t(e);
        },
        onPasswordChange: u,
        title: d.intl.string(d.t.cDgKtb),
        actionText: d.intl.string(d.t['3PatS0']),
        skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
    });
}
function u(e, t) {
    return new Promise((r) => {
        (0, o.ZDy)(async () => {
            let { default: l } = await Promise.all([i.e('62729'), i.e('23746')]).then(i.bind(i, 837651));
            return (i) =>
                (0, n.jsx)(l, {
                    ...i,
                    password: e,
                    emailToken: t,
                    handleEnableMFASuccess: r
                });
        });
    });
}
function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, o.ZDy)(
            async () => {
                let { default: t } = await Promise.all([i.e('76540'), i.e('30463')]).then(i.bind(i, 628908));
                return (i) =>
                    (0, n.jsx)(t, {
                        ...i,
                        isTotp: e
                    });
            },
            {
                onCloseCallback: t,
                onCloseRequest: c.VqG
            }
        );
    });
}
let h = {
    enableMFA: async function () {
        let e = await new Promise((e, t) => {
            (0, o.ZDy)(async () => {
                let { default: r } = await i.e('24642').then(i.bind(i, 279837));
                return (i) =>
                    (0, n.jsx)(_, {
                        ...i,
                        onSuccess: e,
                        onError: t,
                        PasswordConfirm: r
                    });
            });
        });
        if ((0, s.j)()) {
            let t = await new Promise((t) => {
                (0, o.ZDy)(async () => {
                    let { default: r } = await i.e('94566').then(i.bind(i, 965072));
                    return (i) =>
                        (0, n.jsx)(r, {
                            ...i,
                            onFormSubmit: async (e) => await a.Z.verifyEmailCode(e),
                            onResend: async () => {
                                await a.Z.resendEmailCode(e);
                            },
                            onSuccess: t,
                            headerText: d.intl.string(d.t.jMGc4O),
                            confirmButtonText: d.intl.string(d.t.PDTjLC)
                        });
                });
            });
            await u(e, null == t ? void 0 : t.token);
        } else await u(e);
        await E();
    }
};
