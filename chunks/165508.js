a.r(t);
var c = a(477900);
a(582128);
var n = a(319400),
    r = a(192308),
    o = a(231723),
    i = a(80556),
    s = a(267102),
    p = a(295562),
    h = a(320028);
function l(e) {
    if (e !== n.MS.HCAPTCHA) return;
    let t = (0, s.zd)();
    if (null != t) return (0, r.TI)(t);
    let a = (0, s.g5)();
    return null != a ? (0, r.TI)(a.appContext) : o.SY;
}
a.d(
    t,
    {},
    {
        default: {
            showCaptcha: function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { sitekey: o, captchaService: s, options: p } = e;
                (0, r.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            a.e(202976),
                            a.e(531279),
                            a.e(458790),
                            a.e(504917),
                            a.e(454048),
                            a.e(639416),
                            a.e(846522),
                        ]).then(a.bind(a, 198725));
                        return (a) =>
                            (0, c.jsx)(e, {
                                onCaptchaVerify: (e, a) => t({ captcha_key: e, captcha_rqtoken: a }),
                                captchaService: s,
                                sitekey: o,
                                ...n,
                                ...p,
                                ...a,
                            });
                    },
                    { Layer: i.Ay, modalKey: h.f, contextKey: l(s) },
                );
            },
            showCaptchaAsync: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { sitekey: n, captchaService: o, captchaSessionId: s, options: u } = e;
                return new Promise((e, y) => {
                    (0, r.mM)(
                        async () => {
                            let { default: r } = await Promise.all([
                                a.e(202976),
                                a.e(531279),
                                a.e(458790),
                                a.e(504917),
                                a.e(454048),
                                a.e(639416),
                                a.e(846522),
                            ]).then(a.bind(a, 198725));
                            return (a) =>
                                (0, c.jsx)(r, {
                                    onCaptchaVerify: (t, a) =>
                                        e({ captcha_key: t, captcha_rqtoken: a, captcha_session_id: s }),
                                    captchaService: o,
                                    sitekey: n,
                                    onReject: (e) => {
                                        e === p.CaptchaError.CANCEL
                                            ? y(new p.CaptchaCancelError())
                                            : y(Error("cancel captcha"));
                                    },
                                    ...t,
                                    ...u,
                                    ...a,
                                });
                        },
                        { Layer: i.Ay, modalKey: h.f, contextKey: l(o) },
                    );
                });
            },
            useIsCaptchaModalOpen: function () {
                return (0, r.re)((e) => Object.keys(e).some((t) => (0, r.fD)(e, h.f, t)));
            },
        },
    },
);
