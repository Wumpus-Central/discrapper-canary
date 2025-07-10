(n.d(t, { Z: () => h }), n(388685), n(457542));
var l = n(255367),
    r = n(73800),
    i = n(658550),
    s = n(544891),
    a = n(481060),
    o = n(507453),
    d = n(981631),
    c = n(388032),
    u = n(895453);
function h(e) {
    let { mfaChallenge: t, finish: n, setSlide: h, onClose: f, isSlideReady: m } = e,
        [g, x] = r.useState(!1),
        [p, j] = r.useState(null),
        [b, y] = r.useState(!1),
        [S, v] = r.useState(null),
        [C, Z] = r.useState(''),
        w = r.useRef(null);
    (r.useEffect(() => {
        (x(!0),
            s.tn
                .post({
                    url: d.ANM.LOGIN_SMS_SEND,
                    body: { ticket: t.ticket },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    j(e.body.phone);
                })
                .catch((e) => {
                    var t, n;
                    v(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                })
                .finally(() => {
                    x(!1);
                }));
    }, [t.ticket]),
        r.useEffect(() => {
            if (m) {
                var e;
                null == (e = w.current) || e.focus();
            }
        }, [m]));
    let k = null == p ? c.intl.string(c.t.LQdCQE) : c.intl.formatToPlainString(c.t['8r6h7+'], { phoneNumber: p });
    return (0, l.jsxs)('form', {
        onSubmit: (e) => {
            (e.preventDefault(),
                y(!0),
                n({
                    mfaType: 'sms',
                    data: C
                })
                    .catch((e) => {
                        var t, n;
                        v(null != (n = e.message) ? n : null == (t = e.body) ? void 0 : t.message);
                    })
                    .finally(() => {
                        y(!1);
                    }));
        },
        children: [
            (0, l.jsx)(o.Z.SlideHeader, {
                subtitle: k,
                onClose: f
            }),
            (0, l.jsx)(o.Z.SlideContent, {
                children: (0, l.jsxs)(a.xJW, {
                    title: c.intl.string(c.t.HZPBOT),
                    children: [
                        (0, l.jsxs)('div', {
                            className: u.smsInputContainer,
                            children: [
                                (0, l.jsx)(a.oil, {
                                    className: u.smsInput,
                                    inputRef: w,
                                    onChange: Z,
                                    placeholder: c.intl.string(c.t.tARzgo),
                                    maxLength: 10,
                                    value: C,
                                    autoComplete: 'one-time-code',
                                    spellCheck: 'false',
                                    disabled: b
                                }),
                                (0, l.jsx)(a.zxk, {
                                    variant: 'secondary',
                                    text: c.intl.string(c.t.ZF29Ly),
                                    loading: g,
                                    onClick: () => {
                                        s.tn
                                            .post({
                                                url: d.ANM.LOGIN_SMS_SEND,
                                                body: { ticket: t.ticket },
                                                oldFormErrors: !0,
                                                rejectWithError: !1
                                            })
                                            .then((e) => {
                                                j(e.body.phone);
                                            })
                                            .catch((e) => {
                                                var t;
                                                v(e.message || (null == (t = e.body) ? void 0 : t.message));
                                            });
                                    }
                                })
                            ]
                        }),
                        (0, l.jsx)(o.Z.SlideError, { error: S })
                    ]
                })
            }),
            (0, l.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: h,
                showConfirm: !0,
                disabled: C.length !== i.Gz,
                submitting: b
            })
        ]
    });
}
