(n.d(t, { Z: () => f }), n(388685), n(457542));
var l = n(255367),
    r = n(73800),
    s = n(658550),
    i = n(544891),
    a = n(755721),
    o = n(481060),
    d = n(507453),
    c = n(981631),
    u = n(388032),
    h = n(895453);
function f(e) {
    let { mfaChallenge: t, finish: n, setSlide: f, onClose: m, isSlideReady: g } = e,
        [x, p] = r.useState(!1),
        [j, b] = r.useState(null),
        [y, S] = r.useState(!1),
        [v, C] = r.useState(null),
        [Z, w] = r.useState(''),
        k = r.useRef(null);
    (r.useEffect(() => {
        (p(!0),
            i.tn
                .post({
                    url: c.ANM.LOGIN_SMS_SEND,
                    body: { ticket: t.ticket },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    b(e.body.phone);
                })
                .catch((e) => {
                    var t, n;
                    C(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                })
                .finally(() => {
                    p(!1);
                }));
    }, [t.ticket]),
        r.useEffect(() => {
            if (g) {
                var e;
                null == (e = k.current) || e.focus();
            }
        }, [g]));
    let E = null == j ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t['8r6h7+'], { phoneNumber: j });
    return (0, l.jsxs)('form', {
        onSubmit: (e) => {
            (e.preventDefault(),
                S(!0),
                n({
                    mfaType: 'sms',
                    data: Z
                })
                    .catch((e) => {
                        var t, n;
                        C(null != (n = e.message) ? n : null == (t = e.body) ? void 0 : t.message);
                    })
                    .finally(() => {
                        S(!1);
                    }));
        },
        children: [
            (0, l.jsx)(d.Z.SlideHeader, {
                subtitle: E,
                onClose: m
            }),
            (0, l.jsx)(d.Z.SlideContent, {
                children: (0, l.jsxs)(o.xJW, {
                    title: u.intl.string(u.t.HZPBOT),
                    children: [
                        (0, l.jsxs)('div', {
                            className: h.smsInputContainer,
                            children: [
                                (0, l.jsx)(a.Is, {
                                    className: h.smsInput,
                                    inputRef: k,
                                    onChange: w,
                                    placeholder: u.intl.string(u.t.tARzgo),
                                    maxLength: 10,
                                    value: Z,
                                    autoComplete: 'one-time-code',
                                    spellCheck: 'false',
                                    disabled: y
                                }),
                                (0, l.jsx)(o.zxk, {
                                    variant: 'secondary',
                                    text: u.intl.string(u.t.ZF29Ly),
                                    loading: x,
                                    onClick: () => {
                                        i.tn
                                            .post({
                                                url: c.ANM.LOGIN_SMS_SEND,
                                                body: { ticket: t.ticket },
                                                oldFormErrors: !0,
                                                rejectWithError: !1
                                            })
                                            .then((e) => {
                                                b(e.body.phone);
                                            })
                                            .catch((e) => {
                                                var t;
                                                C(e.message || (null == (t = e.body) ? void 0 : t.message));
                                            });
                                    }
                                })
                            ]
                        }),
                        (0, l.jsx)(d.Z.SlideError, { error: v })
                    ]
                })
            }),
            (0, l.jsx)(d.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: f,
                showConfirm: !0,
                disabled: Z.length !== s.Gz,
                submitting: y
            })
        ]
    });
}
