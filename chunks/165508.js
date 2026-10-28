(a.r(t), a.d(t, { default: () => d }));
var n = a(477900);
a(582128);
var o = a(319400),
    c = a(192308),
    r = a(231723),
    p = a(80556),
    l = a(267102),
    s = a(888548),
    i = a(320028);
function h(e) {
    if (e !== o.MS.HCAPTCHA) return;
    let t = (0, l.zd)();
    if (null != t) return (0, c.modalContextFromAppContext)(t);
    let a = (0, l.g5)();
    return null != a ? (0, c.modalContextFromAppContext)(a.appContext) : r.SY;
}
let d = {
    showCaptcha: function (e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: r, captchaService: l, options: s } = e;
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("202976"),
                    a.e("531279"),
                    a.e("458790"),
                    a.e("323895"),
                    a.e("454048"),
                    a.e("327774"),
                    a.e("203213"),
                ]).then(a.bind(a, 645320));
                return (a) =>
                    (0, n.jsx)(e, {
                        onCaptchaVerify: (e, a) => t({ captcha_key: e, captcha_rqtoken: a }),
                        captchaService: l,
                        sitekey: r,
                        ...o,
                        ...s,
                        ...a,
                    });
            },
            { Layer: p.Ay, modalKey: i.f, contextKey: h(l) },
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: o, captchaService: r, captchaSessionId: l, options: d } = e;
        return new Promise((e, u) => {
            (0, c.openModalLazy)(
                async () => {
                    let { default: c } = await Promise.all([
                        a.e("202976"),
                        a.e("531279"),
                        a.e("458790"),
                        a.e("323895"),
                        a.e("454048"),
                        a.e("327774"),
                        a.e("203213"),
                    ]).then(a.bind(a, 645320));
                    return (a) =>
                        (0, n.jsx)(c, {
                            onCaptchaVerify: (t, a) => e({ captcha_key: t, captcha_rqtoken: a, captcha_session_id: l }),
                            captchaService: r,
                            sitekey: o,
                            onReject: (e) => {
                                e === s.CaptchaError.CANCEL
                                    ? u(new s.CaptchaCancelError())
                                    : u(Error("cancel captcha"));
                            },
                            ...t,
                            ...d,
                            ...a,
                        });
                },
                { Layer: p.Ay, modalKey: i.f, contextKey: h(r) },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, c.useModalsStore)((e) => Object.keys(e).some((t) => (0, c.hasModalOpenSelector)(e, i.f, t)));
    },
};
