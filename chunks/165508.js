"use strict";
i.r(t), i.d(t, { default: () => o });
var n = i(627968);
i(64700);
var r = i(192308),
    a = i(80556),
    l = i(577015),
    s = i(320028);
let o = {
    showCaptcha: function (e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { sitekey: o, captchaService: c, options: d } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await i.e("39522").then(i.bind(i, 252345));
                return (i) =>
                    (0, n.jsx)(e, {
                        onCaptchaVerify: (e, i) => t({ captcha_key: e, captcha_rqtoken: i }),
                        captchaService: c,
                        sitekey: o,
                        ...l,
                        ...d,
                        ...i,
                    });
            },
            { Layer: a.Ay, modalKey: s.f },
        );
    },
    showCaptchaAsync: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { sitekey: o, captchaService: c, captchaSessionId: d, options: u } = e;
        return new Promise((e, _) => {
            (0, r.openModalLazy)(
                async () => {
                    let { default: r } = await i.e("39522").then(i.bind(i, 252345));
                    return (i) =>
                        (0, n.jsx)(r, {
                            onCaptchaVerify: (t, i) => e({ captcha_key: t, captcha_rqtoken: i, captcha_session_id: d }),
                            captchaService: c,
                            sitekey: o,
                            onReject: (e) => {
                                e === l.CaptchaError.CANCEL
                                    ? _(new l.CaptchaCancelError())
                                    : _(Error("cancel captcha"));
                            },
                            ...t,
                            ...u,
                            ...i,
                        });
                },
                { Layer: a.Ay, modalKey: s.f },
            );
        });
    },
    useIsCaptchaModalOpen: function () {
        return (0, r.useModalsStore)((e) => (0, r.hasModalOpenSelector)(e, s.f));
    },
};
