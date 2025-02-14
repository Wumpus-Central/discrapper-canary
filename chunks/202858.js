i.d(t, {
    Yn: () => _,
    ZP: () => u
}),
    i(411104),
    i(47120);
var n = i(200651),
    r = i(192379),
    l = i(283693),
    o = i(481060),
    a = i(816814),
    s = i(981631),
    c = i(388032);
function d(e) {
    let { onError: t, onSuccess: i, PasswordConfirm: o, ...d } = e,
        [_, u] = r.useState('');
    return (0, n.jsx)(o, {
        ...d,
        handleSubmit: (e) => a.Z.enableMFAStart(e),
        onError: (e) => {
            ('object' == typeof e && null != e && (0, l.nr)(e, 'code') && 'number' == typeof e.code ? e.code : 0) === s.evJ.MFA_INVALID_SECRET ? (i(_), d.onClose()) : t(e);
        },
        onPasswordChange: u,
        title: c.intl.string(c.t.cDgKtb),
        actionText: c.intl.string(c.t['3PatS0']),
        skipErrorMsgAbortCode: s.evJ.MFA_INVALID_SECRET
    });
}
function _() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, o.ZDy)(
            async () => {
                let { default: t } = await Promise.all([i.e('76540'), i.e('18298')]).then(i.bind(i, 628908));
                return (i) =>
                    (0, n.jsx)(t, {
                        ...i,
                        isTotp: e
                    });
            },
            {
                onCloseCallback: t,
                onCloseRequest: s.VqG
            }
        );
    });
}
let u = {
    enableMFA: async function () {
        let e = await new Promise((e, t) => {
            (0, o.ZDy)(async () => {
                let { default: r } = await i.e('24642').then(i.bind(i, 279837));
                return (i) =>
                    (0, n.jsx)(d, {
                        ...i,
                        onSuccess: e,
                        onError: t,
                        PasswordConfirm: r
                    });
            });
        });
        await new Promise((t) => {
            (0, o.ZDy)(async () => {
                let { default: r } = await Promise.all([i.e('62729'), i.e('23746')]).then(i.bind(i, 837651));
                return (i) =>
                    (0, n.jsx)(r, {
                        ...i,
                        password: e,
                        handleEnableMFASuccess: t
                    });
            });
        }),
            await _();
    }
};
