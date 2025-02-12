r.r(t), r.d(t, { default: () => i }), r(411104);
var n = r(200651);
r(192379);
var a = r(481060),
    o = r(429142),
    s = r(234888);
let i = {
    showCaptcha: function (e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: l, captchaService: d, options: c } = e;
        (0, a.ZDy)(
            async () => {
                let { default: e } = await r.e('12192').then(r.bind(r, 718742));
                return (r) =>
                    (0, n.jsx)(e, {
                        onCaptchaVerify: (e, r) =>
                            t({
                                captcha_key: e,
                                captcha_rqtoken: r
                            }),
                        captchaService: d,
                        sitekey: l,
                        ...i,
                        ...c,
                        ...r
                    });
            },
            {
                Layer: o.ZP,
                modalKey: s.A
            }
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: i, captchaService: l, options: d } = e;
        return new Promise((e, c) => {
            (0, a.ZDy)(
                async () => {
                    let { default: a } = await r.e('12192').then(r.bind(r, 718742));
                    return (r) =>
                        (0, n.jsx)(a, {
                            onCaptchaVerify: (t, r) =>
                                e({
                                    captcha_key: t,
                                    captcha_rqtoken: r
                                }),
                            captchaService: l,
                            sitekey: i,
                            onReject: () => c(Error('cancel captcha')),
                            ...t,
                            ...d,
                            ...r
                        });
                },
                {
                    Layer: o.ZP,
                    modalKey: s.A
                }
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, a.s9z)((e) => (0, a.DEQ)(e, s.A));
    }
};
