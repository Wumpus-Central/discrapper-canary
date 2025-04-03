r.d(t, { Z: () => f }), r(47120), r(773603);
var n = r(200651),
    l = r(192379),
    s = r(658550),
    i = r(544891),
    o = r(481060),
    a = r(507453),
    c = r(981631),
    u = r(388032),
    d = r(895453);
function f(e) {
    let { mfaChallenge: t, finish: r, setSlide: f, onClose: h, isSlideReady: m } = e,
        [p, g] = l.useState(!1),
        [b, j] = l.useState(null),
        [y, x] = l.useState(!1),
        [S, v] = l.useState(null),
        [O, C] = l.useState(''),
        w = l.useRef(null);
    l.useEffect(() => {
        g(!0),
            i.tn
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
                    v(null != (r = null == (t = e.body) ? void 0 : t.message) ? r : e.message);
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
    let Z = null == b ? u.NW.string(u.t.LQdCQE) : u.NW.formatToPlainString(u.t['8r6h7+'], { phoneNumber: b });
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
                        v(null != (r = e.message) ? r : null == (t = e.body) ? void 0 : t.message);
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
                    title: u.NW.string(u.t.HZPBOT),
                    children: [
                        (0, n.jsxs)('div', {
                            className: d.smsInputContainer,
                            children: [
                                (0, n.jsx)(o.oil, {
                                    className: d.smsInput,
                                    inputRef: w,
                                    onChange: C,
                                    placeholder: u.NW.string(u.t.tARzgo),
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
                                        i.tn
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
                                    children: u.NW.string(u.t.ZF29Ly)
                                })
                            ]
                        }),
                        (0, n.jsx)(a.Z.SlideError, { error: S })
                    ]
                })
            }),
            (0, n.jsx)(a.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: f,
                showConfirm: !0,
                disabled: O.length !== s.Gz,
                submitting: y
            })
        ]
    });
}
