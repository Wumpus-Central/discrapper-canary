r.d(t, { Z: () => f }), r(47120), r(773603);
var n = r(200651),
    l = r(192379),
    i = r(658550),
    s = r(544891),
    o = r(481060),
    a = r(507453),
    c = r(981631),
    d = r(388032),
    u = r(595165);
function f(e) {
    let { mfaChallenge: t, finish: r, setSlide: f, onClose: h, isSlideReady: m } = e,
        [p, g] = l.useState(!1),
        [b, j] = l.useState(null),
        [y, x] = l.useState(!1),
        [v, S] = l.useState(null),
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
                    var t, r;
                    S(null !== (r = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== r ? r : e.message);
                })
                .finally(() => {
                    g(!1);
                });
    }, [t.ticket]),
        l.useEffect(() => {
            if (m) {
                var e;
                null === (e = w.current) || void 0 === e || e.focus();
            }
        }, [m]);
    let Z = null == b ? d.NW.string(d.t.LQdCQE) : d.NW.formatToPlainString(d.t['8r6h7+'], { phoneNumber: b });
    return (0, n.jsxs)('form', {
        onSubmit: (e) => {
            e.preventDefault(),
                x(!0),
                r({
                    mfaType: 'sms',
                    data: O
                })
                    .catch((e) => {
                        var t, r;
                        S(null !== (r = e.message) && void 0 !== r ? r : null === (t = e.body) || void 0 === t ? void 0 : t.message);
                    })
                    .finally(() => {
                        x(!1);
                    });
        },
        children: [
            (0, n.jsx)(a.Z.SlideHeader, {
                subtitle: Z,
                onClose: h
            }),
            (0, n.jsx)(a.Z.SlideContent, {
                children: (0, n.jsxs)(o.xJW, {
                    title: d.NW.string(d.t.HZPBOT),
                    children: [
                        (0, n.jsxs)('div', {
                            className: u.smsInputContainer,
                            children: [
                                (0, n.jsx)(o.oil, {
                                    className: u.smsInput,
                                    inputRef: w,
                                    onChange: C,
                                    placeholder: d.NW.string(d.t.tARzgo),
                                    maxLength: 10,
                                    value: O,
                                    autoComplete: 'one-time-code',
                                    spellCheck: 'false',
                                    disabled: y
                                }),
                                (0, n.jsx)(o.zxk, {
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
                                                S(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message));
                                            });
                                    },
                                    children: d.NW.string(d.t.ZF29Ly)
                                })
                            ]
                        }),
                        (0, n.jsx)(a.Z.SlideError, { error: v })
                    ]
                })
            }),
            (0, n.jsx)(a.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: f,
                showConfirm: !0,
                disabled: O.length !== i.Gz,
                submitting: y
            })
        ]
    });
}
