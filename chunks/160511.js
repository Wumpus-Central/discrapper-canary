n.d(t, { Z: () => f }), n(388685), n(457542);
var r = n(200651),
    l = n(192379),
    i = n(658550),
    s = n(544891),
    o = n(481060),
    a = n(507453),
    c = n(981631),
    u = n(388032),
    d = n(895453);
function f(e) {
    let { mfaChallenge: t, finish: n, setSlide: f, onClose: h, isSlideReady: m } = e,
        [p, g] = l.useState(!1),
        [b, j] = l.useState(null),
        [y, x] = l.useState(!1),
        [S, v] = l.useState(null),
        [O, C] = l.useState(''),
        w = l.useRef(null);
    l.useEffect(() => {
        g(!0),
            s.tn
                .post({
                    url: c.ANM.LOGIN_SMS_SEND,
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
                    g(!1);
                });
    }, [t.ticket]),
        l.useEffect(() => {
            if (m) {
                var e;
                null == (e = w.current) || e.focus();
            }
        }, [m]);
    let Z = null == b ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t['8r6h7+'], { phoneNumber: b });
    return (0, r.jsxs)('form', {
        onSubmit: (e) => {
            e.preventDefault(),
                x(!0),
                n({
                    mfaType: 'sms',
                    data: O
                })
                    .catch((e) => {
                        var t, n;
                        v(null != (n = e.message) ? n : null == (t = e.body) ? void 0 : t.message);
                    })
                    .finally(() => {
                        x(!1);
                    });
        },
        children: [
            (0, r.jsx)(a.Z.SlideHeader, {
                subtitle: Z,
                onClose: h
            }),
            (0, r.jsx)(a.Z.SlideContent, {
                children: (0, r.jsxs)(o.xJW, {
                    title: u.intl.string(u.t.HZPBOT),
                    children: [
                        (0, r.jsxs)('div', {
                            className: d.smsInputContainer,
                            children: [
                                (0, r.jsx)(o.oil, {
                                    className: d.smsInput,
                                    inputRef: w,
                                    onChange: C,
                                    placeholder: u.intl.string(u.t.tARzgo),
                                    maxLength: 10,
                                    value: O,
                                    autoComplete: 'one-time-code',
                                    spellCheck: 'false',
                                    disabled: y
                                }),
                                (0, r.jsx)(o.zxk, {
                                    size: o.zxk.Sizes.MEDIUM,
                                    submitting: p,
                                    onClick: () => {
                                        s.tn
                                            .post({
                                                url: c.ANM.LOGIN_SMS_SEND,
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
                                    },
                                    children: u.intl.string(u.t.ZF29Ly)
                                })
                            ]
                        }),
                        (0, r.jsx)(a.Z.SlideError, { error: S })
                    ]
                })
            }),
            (0, r.jsx)(a.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: f,
                showConfirm: !0,
                disabled: O.length !== i.Gz,
                submitting: y
            })
        ]
    });
}
