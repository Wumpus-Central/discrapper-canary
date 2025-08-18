r.r(t), r.d(t, { default: () => s }), r(415506);
var c = r(951288);
r(647438);
var a = r(481060),
    n = r(429142),
    o = r(353250),
    i = r(234888);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            c.forEach(function (t) {
                var c;
                (c = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = c);
            });
    }
    return e;
}
let s = {
    showCaptcha: function (e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: s, captchaService: u, options: l } = e;
        (0, a.ZDy)(
            async () => {
                let { default: e } = await r.e("12192").then(r.bind(r, 718742));
                return (r) =>
                    (0, c.jsx)(
                        e,
                        p(
                            {
                                onCaptchaVerify: (e, r) =>
                                    t({
                                        captcha_key: e,
                                        captcha_rqtoken: r,
                                    }),
                                captchaService: u,
                                sitekey: s,
                            },
                            o,
                            l,
                            r,
                        ),
                    );
            },
            {
                Layer: n.ZP,
                modalKey: i.A,
            },
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: s, captchaService: u, captchaSessionId: l, options: h } = e;
        return new Promise((e, f) => {
            (0, a.ZDy)(
                async () => {
                    let { default: a } = await r.e("12192").then(r.bind(r, 718742));
                    return (r) =>
                        (0, c.jsx)(
                            a,
                            p(
                                {
                                    onCaptchaVerify: (t, r) =>
                                        e({
                                            captcha_key: t,
                                            captcha_rqtoken: r,
                                            captcha_session_id: l,
                                        }),
                                    captchaService: u,
                                    sitekey: s,
                                    onReject: (e) => {
                                        e === o.CaptchaError.CANCEL
                                            ? f(new o.CaptchaCancelError())
                                            : f(Error("cancel captcha"));
                                    },
                                },
                                t,
                                h,
                                r,
                            ),
                        );
                },
                {
                    Layer: n.ZP,
                    modalKey: i.A,
                },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, a.s9z)((e) => (0, a.DEQ)(e, i.A));
    },
};
