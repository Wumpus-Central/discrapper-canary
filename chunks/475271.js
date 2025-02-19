r.r(t), r.d(t, { default: () => l }), r(411104);
var n = r(200651);
r(192379);
var a = r(481060),
    o = r(429142),
    s = r(234888);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let l = {
    showCaptcha: function (e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: c, captchaService: d, options: u } = e;
        (0, a.ZDy)(
            async () => {
                let { default: e } = await r.e('12192').then(r.bind(r, 718742));
                return (r) =>
                    (0, n.jsx)(
                        e,
                        i(
                            {
                                onCaptchaVerify: (e, r) =>
                                    t({
                                        captcha_key: e,
                                        captcha_rqtoken: r
                                    }),
                                captchaService: d,
                                sitekey: c
                            },
                            l,
                            u,
                            r
                        )
                    );
            },
            {
                Layer: o.ZP,
                modalKey: s.A
            }
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: l, captchaService: c, options: d } = e;
        return new Promise((e, u) => {
            (0, a.ZDy)(
                async () => {
                    let { default: a } = await r.e('12192').then(r.bind(r, 718742));
                    return (r) =>
                        (0, n.jsx)(
                            a,
                            i(
                                {
                                    onCaptchaVerify: (t, r) =>
                                        e({
                                            captcha_key: t,
                                            captcha_rqtoken: r
                                        }),
                                    captchaService: c,
                                    sitekey: l,
                                    onReject: () => u(Error('cancel captcha'))
                                },
                                t,
                                d,
                                r
                            )
                        );
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
