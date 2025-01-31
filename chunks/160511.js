n.d(t, { Z: () => h }), n(47120), n(773603);
var l = n(200651),
    i = n(192379),
    s = n(658550),
    r = n(544891),
    o = n(481060),
    a = n(507453),
    d = n(981631),
    u = n(388032),
    c = n(452091);
function h(e) {
    let { mfaChallenge: t, finish: n, setSlide: h, onClose: m, isSlideReady: f } = e,
        [x, g] = i.useState(!1),
        [S, v] = i.useState(null),
        [p, j] = i.useState(!1),
        [b, C] = i.useState(null),
        [y, Z] = i.useState(''),
        k = i.useRef(null);
    i.useEffect(() => {
        g(!0),
            r.tn
                .post({
                    url: d.ANM.LOGIN_SMS_SEND,
                    body: { ticket: t.ticket },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    v(e.body.phone);
                })
                .catch((e) => {
                    var t, n;
                    C(null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : e.message);
                })
                .finally(() => {
                    g(!1);
                });
    }, [t.ticket]),
        i.useEffect(() => {
            if (f) {
                var e;
                null === (e = k.current) || void 0 === e || e.focus();
            }
        }, [f]);
    let E = null == S ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t['8r6h7+'], { phoneNumber: S });
    return (0, l.jsxs)('form', {
        onSubmit: (e) => {
            e.preventDefault(),
                j(!0),
                n({
                    mfaType: 'sms',
                    data: y
                })
                    .catch((e) => {
                        var t, n;
                        C(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message);
                    })
                    .finally(() => {
                        j(!1);
                    });
        },
        children: [
            (0, l.jsx)(a.Z.SlideHeader, {
                subtitle: E,
                onClose: m
            }),
            (0, l.jsx)(a.Z.SlideContent, {
                children: (0, l.jsxs)(o.xJW, {
                    title: u.intl.string(u.t.HZPBOT),
                    children: [
                        (0, l.jsxs)('div', {
                            className: c.smsInputContainer,
                            children: [
                                (0, l.jsx)(o.oil, {
                                    className: c.smsInput,
                                    inputRef: k,
                                    onChange: Z,
                                    placeholder: u.intl.string(u.t.tARzgo),
                                    maxLength: 10,
                                    value: y,
                                    autoComplete: 'one-time-code',
                                    spellCheck: 'false',
                                    disabled: p
                                }),
                                (0, l.jsx)(o.zxk, {
                                    size: o.zxk.Sizes.MEDIUM,
                                    submitting: x,
                                    onClick: () => {
                                        r.tn
                                            .post({
                                                url: d.ANM.LOGIN_SMS_SEND,
                                                body: { ticket: t.ticket },
                                                oldFormErrors: !0,
                                                rejectWithError: !1
                                            })
                                            .then((e) => {
                                                v(e.body.phone);
                                            })
                                            .catch((e) => {
                                                var t;
                                                C(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message));
                                            });
                                    },
                                    children: u.intl.string(u.t.ZF29Ly)
                                })
                            ]
                        }),
                        (0, l.jsx)(a.Z.SlideError, { error: b })
                    ]
                })
            }),
            (0, l.jsx)(a.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: h,
                showConfirm: !0,
                disabled: y.length !== s.Gz,
                submitting: p
            })
        ]
    });
}
