n.r(t), n.d(t, { default: () => l });
var s = n(627968);
n(64700);
var a = n(397927),
    i = n(80556),
    r = n(577015),
    o = n(320028);
let l = {
    showCaptcha: function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: l, captchaService: d, options: c } = e;
        (0, a.mMO)(
            async () => {
                let { default: e } = await n.e("39522").then(n.bind(n, 252345));
                return (n) =>
                    (0, s.jsx)(e, {
                        onCaptchaVerify: (e, n) => t({ captcha_key: e, captcha_rqtoken: n }),
                        captchaService: d,
                        sitekey: l,
                        ...r,
                        ...c,
                        ...n,
                    });
            },
            { Layer: i.Ay, modalKey: o.f },
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: l, captchaService: d, captchaSessionId: c, options: u } = e;
        return new Promise((e, m) => {
            (0, a.mMO)(
                async () => {
                    let { default: a } = await n.e("39522").then(n.bind(n, 252345));
                    return (n) =>
                        (0, s.jsx)(a, {
                            onCaptchaVerify: (t, n) => e({ captcha_key: t, captcha_rqtoken: n, captcha_session_id: c }),
                            captchaService: d,
                            sitekey: l,
                            onReject: (e) => {
                                e === r.CaptchaError.CANCEL
                                    ? m(new r.CaptchaCancelError())
                                    : m(Error("cancel captcha"));
                            },
                            ...t,
                            ...u,
                            ...n,
                        });
                },
                { Layer: i.Ay, modalKey: o.f },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, a.red)((e) => (0, a.fDT)(e, o.f));
    },
};
