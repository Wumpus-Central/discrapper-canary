a.r(e), a.d(e, { default: () => i }), a(411104);
var c = a(200651);
a(192379);
var n = a(481060),
    r = a(429142);
let i = {
    showCaptcha: function (t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: h, captchaService: o, options: p } = t;
        (0, n.ZDy)(
            async () => {
                let { default: t } = await a.e('12192').then(a.bind(a, 718742));
                return (a) =>
                    (0, c.jsx)(t, {
                        onCaptchaVerify: (t, a) =>
                            e({
                                captcha_key: t,
                                captcha_rqtoken: a
                            }),
                        captchaService: o,
                        sitekey: h,
                        ...i,
                        ...p,
                        ...a
                    });
            },
            { Layer: r.ZP }
        );
    },
    showCaptchaAsync: function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: i, captchaService: h, options: o } = t;
        return new Promise((t, p) => {
            (0, n.ZDy)(
                async () => {
                    let { default: n } = await a.e('12192').then(a.bind(a, 718742));
                    return (a) =>
                        (0, c.jsx)(n, {
                            onCaptchaVerify: (e, a) =>
                                t({
                                    captcha_key: e,
                                    captcha_rqtoken: a
                                }),
                            captchaService: h,
                            sitekey: i,
                            onReject: () => p(Error('cancel captcha')),
                            ...e,
                            ...o,
                            ...a
                        });
                },
                { Layer: r.ZP }
            );
        });
    }
};
