n.r(t), n.d(t, { default: () => o }), n(65821);
var r = n(627968);
n(64700);
var a = n(397927),
    i = n(80556),
    s = n(577015),
    c = n(320028);
function l(e) {
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
let o = {
    showCaptcha: function (e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: o, captchaService: d, options: u } = e;
        (0, a.mMO)(
            async () => {
                let { default: e } = await n.e("39522").then(n.bind(n, 252345));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(
                            {
                                onCaptchaVerify: (e, n) =>
                                    t({
                                        captcha_key: e,
                                        captcha_rqtoken: n,
                                    }),
                                captchaService: d,
                                sitekey: o,
                            },
                            s,
                            u,
                            n,
                        ),
                    );
            },
            {
                Layer: i.Ay,
                modalKey: c.f,
            },
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: o, captchaService: d, captchaSessionId: u, options: f } = e;
        return new Promise((e, m) => {
            (0, a.mMO)(
                async () => {
                    let { default: a } = await n.e("39522").then(n.bind(n, 252345));
                    return (n) =>
                        (0, r.jsx)(
                            a,
                            l(
                                {
                                    onCaptchaVerify: (t, n) =>
                                        e({
                                            captcha_key: t,
                                            captcha_rqtoken: n,
                                            captcha_session_id: u,
                                        }),
                                    captchaService: d,
                                    sitekey: o,
                                    onReject: (e) => {
                                        e === s.CaptchaError.CANCEL
                                            ? m(new s.CaptchaCancelError())
                                            : m(Error("cancel captcha"));
                                    },
                                },
                                t,
                                f,
                                n,
                            ),
                        );
                },
                {
                    Layer: i.Ay,
                    modalKey: c.f,
                },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, a.red)((e) => (0, a.fDT)(e, c.f));
    },
};
