t.r(e), t.d(e, { default: () => h });
var c = t(627968);
t(64700);
var n = t(192308),
    o = t(80556),
    r = t(577015),
    p = t(320028);
let h = {
    showCaptcha: function (a, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: h, captchaService: s, options: i } = a;
        (0, n.openModalLazy)(
            async () => {
                let { default: a } = await t.e("39522").then(t.bind(t, 252345));
                return (t) =>
                    (0, c.jsx)(a, {
                        onCaptchaVerify: (a, t) => e({ captcha_key: a, captcha_rqtoken: t }),
                        captchaService: s,
                        sitekey: h,
                        ...r,
                        ...i,
                        ...t,
                    });
            },
            { Layer: o.Ay, modalKey: p.f },
        );
    },
    showCaptchaAsync: function (a) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: h, captchaService: s, captchaSessionId: i, options: d } = a;
        return new Promise((a, l) => {
            (0, n.openModalLazy)(
                async () => {
                    let { default: n } = await t.e("39522").then(t.bind(t, 252345));
                    return (t) =>
                        (0, c.jsx)(n, {
                            onCaptchaVerify: (e, t) => a({ captcha_key: e, captcha_rqtoken: t, captcha_session_id: i }),
                            captchaService: s,
                            sitekey: h,
                            onReject: (a) => {
                                a === r.CaptchaError.CANCEL
                                    ? l(new r.CaptchaCancelError())
                                    : l(Error("cancel captcha"));
                            },
                            ...e,
                            ...d,
                            ...t,
                        });
                },
                { Layer: o.Ay, modalKey: p.f },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, n.useModalsStore)((a) => (0, n.hasModalOpenSelector)(a, p.f));
    },
};
