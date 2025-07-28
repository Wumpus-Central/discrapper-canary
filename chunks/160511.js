(n.d(t, { Z: () => f }), n(388685), n(457542));
var l = n(255367),
    r = n(73800),
    i = n(658550),
    s = n(544891),
    a = n(755721),
    o = n(481060),
    d = n(507453),
    c = n(981631),
    u = n(388032),
    h = n(895453);
function f(e) {
    let { mfaChallenge: t, finish: n, setSlide: f, onClose: m, isSlideReady: g, headerAlignStart: x } = e,
        [p, S] = r.useState(!1),
        [j, b] = r.useState(null),
        [y, v] = r.useState(!1),
        [C, Z] = r.useState(null),
        [w, k] = r.useState(''),
        E = r.useRef(null);
    (r.useEffect(() => {
        (S(!0),
            s.tn
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
                    Z(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                })
                .finally(() => {
                    S(!1);
                }));
    }, [t.ticket]),
        r.useEffect(() => {
            if (g) {
                var e;
                null == (e = E.current) || e.focus();
            }
        }, [g]));
    let O = null == j ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t['8r6h7+'], { phoneNumber: j });
    return (0, l.jsxs)('form', {
        onSubmit: (e) => {
            (e.preventDefault(),
                v(!0),
                n({
                    mfaType: 'sms',
                    data: w
                })
                    .catch((e) => {
                        var t, n;
                        Z(null != (n = e.message) ? n : null == (t = e.body) ? void 0 : t.message);
                    })
                    .finally(() => {
                        v(!1);
                    }));
        },
        children: [
            (0, l.jsx)(d.Z.SlideHeader, {
                subtitle: O,
                onClose: m,
                headerAlignStart: x
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
                                    inputRef: E,
                                    onChange: k,
                                    placeholder: u.intl.string(u.t.tARzgo),
                                    maxLength: 10,
                                    value: w,
                                    autoComplete: 'one-time-code',
                                    spellCheck: 'false',
                                    disabled: y
                                }),
                                (0, l.jsx)(o.zxk, {
                                    variant: 'secondary',
                                    text: u.intl.string(u.t.ZF29Ly),
                                    loading: p,
                                    onClick: () => {
                                        s.tn
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
                                                Z(e.message || (null == (t = e.body) ? void 0 : t.message));
                                            });
                                    }
                                })
                            ]
                        }),
                        (0, l.jsx)(d.Z.SlideError, { error: C })
                    ]
                })
            }),
            (0, l.jsx)(d.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: f,
                showConfirm: !0,
                disabled: w.length !== i.Gz,
                submitting: y
            })
        ]
    });
}
