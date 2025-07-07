(r.r(t), r.d(t, { default: () => c }), r(415506));
var n = r(255367);
r(73800);
var o = r(481060),
    a = r(429142),
    s = r(353250),
    i = r(234888);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
let c = {
    showCaptcha: function (e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: c, captchaService: d, options: u } = e;
        (0, o.ZDy)(
            async () => {
                let { default: e } = await r.e('12192').then(r.bind(r, 718742));
                return (r) =>
                    (0, n.jsx)(
                        e,
                        l(
                            {
                                onCaptchaVerify: (e, r) =>
                                    t({
                                        captcha_key: e,
                                        captcha_rqtoken: r
                                    }),
                                captchaService: d,
                                sitekey: c
                            },
                            s,
                            u,
                            r
                        )
                    );
            },
            {
                Layer: a.ZP,
                modalKey: i.A
            }
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: c, captchaService: d, captchaSessionId: u, options: p } = e;
        return new Promise((e, _) => {
            (0, o.ZDy)(
                async () => {
                    let { default: o } = await r.e('12192').then(r.bind(r, 718742));
                    return (r) =>
                        (0, n.jsx)(
                            o,
                            l(
                                {
                                    onCaptchaVerify: (t, r) =>
                                        e({
                                            captcha_key: t,
                                            captcha_rqtoken: r,
                                            captcha_session_id: u
                                        }),
                                    captchaService: d,
                                    sitekey: c,
                                    onReject: (e) => {
                                        e === s.CaptchaError.CANCEL ? _(new s.CaptchaCancelError()) : _(Error('cancel captcha'));
                                    }
                                },
                                t,
                                p,
                                r
                            )
                        );
                },
                {
                    Layer: a.ZP,
                    modalKey: i.A
                }
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, o.s9z)((e) => (0, o.DEQ)(e, i.A));
    }
};
