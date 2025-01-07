n.d(t, {
    Yn: function () {
        return h;
    }
}),
    n(411104),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(283693),
    l = n(481060),
    a = n(816814),
    o = n(200483),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { onError: t, onSuccess: n, PasswordConfirm: l, ...o } = e,
        [u, m] = s.useState('');
    return (0, i.jsx)(l, {
        ...o,
        handleSubmit: (e) => a.Z.enableMFAStart(e),
        onError: (e) => {
            var i;
            if (('object' == typeof (i = e) && null != i && (0, r.nr)(i, 'code') && 'number' == typeof i.code ? i.code : 0) === c.evJ.MFA_INVALID_SECRET) n(u), o.onClose();
            else t(e);
        },
        onPasswordChange: m,
        title: d.intl.string(d.t.cDgKtb),
        actionText: d.intl.string(d.t['3PatS0']),
        skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
    });
}
function m(e, t) {
    return new Promise((s) => {
        (0, l.openModalLazy)(async () => {
            let { default: r } = await Promise.all([n.e('13328'), n.e('23746')]).then(n.bind(n, 837651));
            return (n) =>
                (0, i.jsx)(r, {
                    ...n,
                    password: e,
                    emailToken: t,
                    handleEnableMFASuccess: s
                });
        });
    });
}
function h() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([n.e('76540'), n.e('89533')]).then(n.bind(n, 628908));
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
async function g() {
    let e = await new Promise((e, t) => {
        (0, l.openModalLazy)(async () => {
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
        var t;
        let s = await ((t = e),
        new Promise((e) => {
            (0, l.openModalLazy)(async () => {
                let { default: s } = await n.e('94566').then(n.bind(n, 965072));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        onFormSubmit: async (e) => await a.Z.verifyEmailCode(e),
                        onResend: async () => {
                            await a.Z.resendEmailCode(t);
                        },
                        onSuccess: e,
                        headerText: d.intl.string(d.t.jMGc4O),
                        confirmButtonText: d.intl.string(d.t.PDTjLC)
                    });
            });
        }));
        await m(e, null == s ? void 0 : s.token);
    } else await m(e);
    await h();
}
t.ZP = { enableMFA: g };
