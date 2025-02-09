a.r(t), a.d(t, { default: () => o }), a(411104);
var c = a(200651);
a(192379);
var n = a(481060),
    i = a(429142),
    r = a(234888);
let o = {
    showCaptcha: function (e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: h, captchaService: p, options: s } = e;
        (0, n.ZDy)(
            async () => {
                let { default: e } = await a.e('12192').then(a.bind(a, 718742));
                return (a) =>
                    (0, c.jsx)(e, {
                        onCaptchaVerify: (e, a) =>
                            t({
                                captcha_key: e,
                                captcha_rqtoken: a
                            }),
                        captchaService: p,
                        sitekey: h,
                        ...o,
                        ...s,
                        ...a
                    });
            },
            {
                Layer: i.ZP,
                modalKey: r.A
            }
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: o, captchaService: h, options: p } = e;
        return new Promise((e, s) => {
            (0, n.ZDy)(
                async () => {
                    let { default: n } = await a.e('12192').then(a.bind(a, 718742));
                    return (a) =>
                        (0, c.jsx)(n, {
                            onCaptchaVerify: (t, a) =>
                                e({
                                    captcha_key: t,
                                    captcha_rqtoken: a
                                }),
                            captchaService: h,
                            sitekey: o,
                            onReject: () => s(Error('cancel captcha')),
                            ...t,
                            ...p,
                            ...a
                        });
                },
                {
                    Layer: i.ZP,
                    modalKey: r.A
                }
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, n.s9z)((e) => (0, n.DEQ)(e, r.A));
    }
};
