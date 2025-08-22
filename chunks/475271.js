n.r(t), n.d(t, { default: () => c }), n(415506);
var r = n(951288);
n(647438);
var a = n(481060),
    o = n(429142),
    l = n(353250),
    s = n(234888);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let c = {
    showCaptcha: function (e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: c, captchaService: d, options: u } = e;
        (0, a.ZDy)(
            async () => {
                let { default: e } = await n.e("12192").then(n.bind(n, 718742));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        i(
                            {
                                onCaptchaVerify: (e, n) =>
                                    t({
                                        captcha_key: e,
                                        captcha_rqtoken: n,
                                    }),
                                captchaService: d,
                                sitekey: c,
                            },
                            l,
                            u,
                            n,
                        ),
                    );
            },
            {
                Layer: o.ZP,
                modalKey: s.A,
            },
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: c, captchaService: d, captchaSessionId: u, options: p } = e;
        return new Promise((e, m) => {
            (0, a.ZDy)(
                async () => {
                    let { default: a } = await n.e("12192").then(n.bind(n, 718742));
                    return (n) =>
                        (0, r.jsx)(
                            a,
                            i(
                                {
                                    onCaptchaVerify: (t, n) =>
                                        e({
                                            captcha_key: t,
                                            captcha_rqtoken: n,
                                            captcha_session_id: u,
                                        }),
                                    captchaService: d,
                                    sitekey: c,
                                    onReject: (e) => {
                                        e === l.CaptchaError.CANCEL
                                            ? m(new l.CaptchaCancelError())
                                            : m(Error("cancel captcha"));
                                    },
                                },
                                t,
                                p,
                                n,
                            ),
                        );
                },
                {
                    Layer: o.ZP,
                    modalKey: s.A,
                },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, a.s9z)((e) => (0, a.DEQ)(e, s.A));
    },
};
