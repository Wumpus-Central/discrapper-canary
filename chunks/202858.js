n.d(t, {
    Yn: function () {
        return g;
    }
}),
    n(411104),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(283693),
    a = n(481060),
    l = n(816814),
    o = n(200483),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { onError: t, onSuccess: n, PasswordConfirm: a, ...o } = e,
        [u, m] = r.useState('');
    return (0, i.jsx)(a, {
        ...o,
        handleSubmit: (e) => l.Z.enableMFAStart(e),
        onError: (e) => {
            var i;
            if (('object' == typeof (i = e) && null != i && (0, s.nr)(i, 'code') && 'number' == typeof i.code ? i.code : 0) === c.evJ.MFA_INVALID_SECRET) n(u), o.onClose();
            else t(e);
        },
        onPasswordChange: m,
        title: d.intl.string(d.t.cDgKtb),
        actionText: d.intl.string(d.t['3PatS0']),
        skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
    });
}
function m(e, t) {
    return new Promise((r) => {
        (0, a.openModalLazy)(async () => {
            let { default: s } = await Promise.all([n.e('57830'), n.e('23746')]).then(n.bind(n, 837651));
            return (n) =>
                (0, i.jsx)(s, {
                    ...n,
                    password: e,
                    emailToken: t,
                    handleEnableMFASuccess: r
                });
        });
    });
}
function g() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([n.e('76540'), n.e('61663')]).then(n.bind(n, 628908));
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
async function h() {
    let e = await new Promise((e, t) => {
        (0, a.openModalLazy)(async () => {
            let { default: r } = await n.e('24642').then(n.bind(n, 279837));
            return (n) =>
                (0, i.jsx)(u, {
                    ...n,
                    onSuccess: e,
                    onError: t,
                    PasswordConfirm: r
                });
        });
    });
    if ((0, o.j)()) {
        var t;
        let r = await ((t = e),
        new Promise((e) => {
            (0, a.openModalLazy)(async () => {
                let { default: r } = await n.e('94566').then(n.bind(n, 965072));
                return (n) =>
                    (0, i.jsx)(r, {
                        ...n,
                        onFormSubmit: async (e) => await l.Z.verifyEmailCode(e),
                        onResend: async () => {
                            await l.Z.resendEmailCode(t);
                        },
                        onSuccess: e,
                        headerText: d.intl.string(d.t.jMGc4O),
                        confirmButtonText: d.intl.string(d.t.PDTjLC)
                    });
            });
        }));
        await m(e, null == r ? void 0 : r.token);
    } else await m(e);
    await g();
}
t.ZP = { enableMFA: h };
