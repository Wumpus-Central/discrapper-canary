n.r(t), n.d(t, { default: () => l });
var a = n(627968);
n(64700);
var s = n(192308),
    r = n(80556),
    o = n(888548),
    i = n(320028);
let l = {
    showCaptcha: function (e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: l, captchaService: d, options: c } = e;
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await n.e("80568").then(n.bind(n, 91967));
                return (n) =>
                    (0, a.jsx)(e, {
                        onCaptchaVerify: (e, n) => t({ captcha_key: e, captcha_rqtoken: n }),
                        captchaService: d,
                        sitekey: l,
                        ...o,
                        ...c,
                        ...n,
                    });
            },
            { Layer: r.Ay, modalKey: i.f },
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: l, captchaService: d, captchaSessionId: c, options: u } = e;
        return new Promise((e, C) => {
            (0, s.openModalLazy)(
                async () => {
                    let { default: s } = await n.e("80568").then(n.bind(n, 91967));
                    return (n) =>
                        (0, a.jsx)(s, {
                            onCaptchaVerify: (t, n) => e({ captcha_key: t, captcha_rqtoken: n, captcha_session_id: c }),
                            captchaService: d,
                            sitekey: l,
                            onReject: (e) => {
                                e === o.CaptchaError.CANCEL
                                    ? C(new o.CaptchaCancelError())
                                    : C(Error("cancel captcha"));
                            },
                            ...t,
                            ...u,
                            ...n,
                        });
                },
                { Layer: r.Ay, modalKey: i.f },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, s.useModalsStore)((e) => (0, s.hasModalOpenSelector)(e, i.f));
    },
};
