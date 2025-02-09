n.d(t, {
    Yn: () => m,
    ZP: () => g
}),
    n(411104),
    n(47120);
var i = n(200651),
    s = n(192379),
    l = n(283693),
    r = n(481060),
    a = n(816814),
    o = n(200483),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { onError: t, onSuccess: n, PasswordConfirm: r, ...o } = e,
        [u, h] = s.useState('');
    return (0, i.jsx)(r, {
        ...o,
        handleSubmit: (e) => a.Z.enableMFAStart(e),
        onError: (e) => {
            ('object' == typeof e && null != e && (0, l.nr)(e, 'code') && 'number' == typeof e.code ? e.code : 0) === c.evJ.MFA_INVALID_SECRET ? (n(u), o.onClose()) : t(e);
        },
        onPasswordChange: h,
        title: d.intl.string(d.t.cDgKtb),
        actionText: d.intl.string(d.t['3PatS0']),
        skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
    });
}
function h(e, t) {
    return new Promise((s) => {
        (0, r.ZDy)(async () => {
            let { default: l } = await Promise.all([n.e('62729'), n.e('23746')]).then(n.bind(n, 837651));
            return (n) =>
                (0, i.jsx)(l, {
                    ...n,
                    password: e,
                    emailToken: t,
                    handleEnableMFASuccess: s
                });
        });
    });
}
function m() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, r.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e('76540'), n.e('69861')]).then(n.bind(n, 628908));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
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
let g = {
    enableMFA: async function () {
        let e = await new Promise((e, t) => {
            (0, r.ZDy)(async () => {
                let { default: s } = await n.e('24642').then(n.bind(n, 279837));
                return (n) =>
                    (0, i.jsx)(u, {
                        ...n,
                        onSuccess: e,
                        onError: t,
                        PasswordConfirm: s
                    });
            });
        });
        if ((0, o.j)()) {
            let t = await new Promise((t) => {
                (0, r.ZDy)(async () => {
                    let { default: s } = await n.e('94566').then(n.bind(n, 965072));
                    return (n) =>
                        (0, i.jsx)(s, {
                            ...n,
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
            await h(e, null == t ? void 0 : t.token);
        } else await h(e);
        await m();
    }
};
