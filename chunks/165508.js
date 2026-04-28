t.r(a), t.d(a, { default: () => p });
var c = t(627968);
t(64700);
var n = t(192308),
    o = t(80556),
    r = t(888548),
    s = t(320028);
let p = {
    showCaptcha: function (e, a) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: p, captchaService: h, options: i } = e;
        (0, n.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    t.e("56228"),
                    t.e("65658"),
                    t.e("26775"),
                    t.e("27774"),
                    t.e("3213"),
                ]).then(t.bind(t, 645320));
                return (t) =>
                    (0, c.jsx)(e, {
                        onCaptchaVerify: (e, t) => a({ captcha_key: e, captcha_rqtoken: t }),
                        captchaService: h,
                        sitekey: p,
                        ...r,
                        ...i,
                        ...t,
                    });
            },
            { Layer: o.Ay, modalKey: s.f },
        );
    },
    showCaptchaAsync: function (e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: p, captchaService: h, captchaSessionId: i, options: l } = e;
        return new Promise((e, d) => {
            (0, n.openModalLazy)(
                async () => {
                    let { default: n } = await Promise.all([
                        t.e("56228"),
                        t.e("65658"),
                        t.e("26775"),
                        t.e("27774"),
                        t.e("3213"),
                    ]).then(t.bind(t, 645320));
                    return (t) =>
                        (0, c.jsx)(n, {
                            onCaptchaVerify: (a, t) => e({ captcha_key: a, captcha_rqtoken: t, captcha_session_id: i }),
                            captchaService: h,
                            sitekey: p,
                            onReject: (e) => {
                                e === r.CaptchaError.CANCEL
                                    ? d(new r.CaptchaCancelError())
                                    : d(Error("cancel captcha"));
                            },
                            ...a,
                            ...l,
                            ...t,
                        });
                },
                { Layer: o.Ay, modalKey: s.f },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, n.useModalsStore)((e) => (0, n.hasModalOpenSelector)(e, s.f));
    },
};
