n.d(t, { Z: () => u }), n(388685), n(457542);
var l = n(951288),
    r = n(647438),
    i = n(658550),
    s = n(544891),
    a = n(481060),
    o = n(507453),
    d = n(981631),
    c = n(388032);
function u(e) {
    let { mfaChallenge: t, finish: n, setSlide: u, onClose: h, isSlideReady: f, headerAlignStart: g } = e,
        [m, p] = r.useState(!1),
        [x, b] = r.useState(null),
        [S, j] = r.useState(!1),
        [y, v] = r.useState(null),
        [C, Z] = r.useState(""),
        w = r.useRef(null);
    r.useEffect(() => {
        p(!0),
            s.tn
                .post({
                    url: d.ANM.LOGIN_SMS_SEND,
                    body: { ticket: t.ticket },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((e) => {
                    b(e.body.phone);
                })
                .catch((e) => {
                    var t, n;
                    v(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                })
                .finally(() => {
                    p(!1);
                });
    }, [t.ticket]),
        r.useEffect(() => {
            if (f) {
                var e;
                null == (e = w.current) || e.focus();
            }
        }, [f]);
    let k = null == x ? c.intl.string(c.t.LQdCQE) : c.intl.formatToPlainString(c.t["8r6h7+"], { phoneNumber: x });
    return (0, l.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                j(!0),
                n({
                    mfaType: "sms",
                    data: C,
                })
                    .catch((e) => {
                        var t, n;
                        v(null != (n = e.message) ? n : null == (t = e.body) ? void 0 : t.message);
                    })
                    .finally(() => {
                        j(!1);
                    });
        },
        children: [
            (0, l.jsx)(o.Z.SlideHeader, {
                subtitle: k,
                onClose: h,
                headerAlignStart: g,
            }),
            (0, l.jsx)(o.Z.SlideContent, {
                children: (0, l.jsxs)(a.NIo, {
                    children: [
                        (0, l.jsx)(a.oil, {
                            label: c.intl.string(c.t.HZPBOT),
                            inputRef: w,
                            onChange: Z,
                            placeholder: c.intl.string(c.t.tARzgo),
                            maxLength: 10,
                            value: C,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: S,
                            error: y,
                        }),
                        (0, l.jsx)(a.zxk, {
                            variant: "secondary",
                            text: c.intl.string(c.t.ZF29Ly),
                            loading: m,
                            onClick: () => {
                                s.tn
                                    .post({
                                        url: d.ANM.LOGIN_SMS_SEND,
                                        body: { ticket: t.ticket },
                                        oldFormErrors: !0,
                                        rejectWithError: !1,
                                    })
                                    .then((e) => {
                                        b(e.body.phone);
                                    })
                                    .catch((e) => {
                                        var t;
                                        v(e.message || (null == (t = e.body) ? void 0 : t.message));
                                    });
                            },
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: u,
                showConfirm: !0,
                disabled: C.length !== i.Gz,
                submitting: S,
            }),
        ],
    });
}
