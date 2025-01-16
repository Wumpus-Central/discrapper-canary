n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120),
    n(773603);
var l = n(200651),
    i = n(192379),
    r = n(658550),
    s = n(544891),
    o = n(481060),
    a = n(507453),
    d = n(981631),
    u = n(388032),
    c = n(452091);
function h(e) {
    let { mfaChallenge: t, finish: n, setSlide: h, onClose: f, isSlideReady: m } = e,
        [g, S] = i.useState(!1),
        [x, p] = i.useState(null),
        [v, j] = i.useState(!1),
        [C, b] = i.useState(null),
        [y, Z] = i.useState(''),
        E = i.useRef(null);
    i.useEffect(() => {
        S(!0),
            s.tn
                .post({
                    url: d.ANM.LOGIN_SMS_SEND,
                    body: { ticket: t.ticket },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => {
                    p(e.body.phone);
                })
                .catch((e) => {
                    var t, n;
                    b(null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : e.message);
                })
                .finally(() => {
                    S(!1);
                });
    }, [t.ticket]),
        i.useEffect(() => {
            if (m) {
                var e;
                null === (e = E.current) || void 0 === e || e.focus();
            }
        }, [m]);
    let w = null == x ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t['8r6h7+'], { phoneNumber: x });
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
                        b(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message);
                    })
                    .finally(() => {
                        j(!1);
                    });
        },
        children: [
            (0, l.jsx)(a.Z.SlideHeader, {
                subtitle: w,
                onClose: f
            }),
            (0, l.jsx)(a.Z.SlideContent, {
                children: (0, l.jsxs)(o.FormItem, {
                    title: u.intl.string(u.t.HZPBOT),
                    children: [
                        (0, l.jsxs)('div', {
                            className: c.smsInputContainer,
                            children: [
                                (0, l.jsx)(o.TextInput, {
                                    className: c.smsInput,
                                    inputRef: E,
                                    onChange: Z,
                                    placeholder: u.intl.string(u.t.tARzgo),
                                    maxLength: 10,
                                    value: y,
                                    autoComplete: 'one-time-code',
                                    spellCheck: 'false',
                                    disabled: v
                                }),
                                (0, l.jsx)(o.Button, {
                                    size: o.Button.Sizes.MEDIUM,
                                    submitting: g,
                                    onClick: () => {
                                        s.tn
                                            .post({
                                                url: d.ANM.LOGIN_SMS_SEND,
                                                body: { ticket: t.ticket },
                                                oldFormErrors: !0,
                                                rejectWithError: !1
                                            })
                                            .then((e) => {
                                                p(e.body.phone);
                                            })
                                            .catch((e) => {
                                                var t;
                                                b(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message));
                                            });
                                    },
                                    children: u.intl.string(u.t.ZF29Ly)
                                })
                            ]
                        }),
                        (0, l.jsx)(a.Z.SlideError, { error: C })
                    ]
                })
            }),
            (0, l.jsx)(a.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: h,
                showConfirm: !0,
                disabled: y.length !== r.Gz,
                submitting: v
            })
        ]
    });
}
