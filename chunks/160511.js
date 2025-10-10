n.d(t, { Z: () => h }), n(388685), n(457542);
var l = n(951288),
    r = n(647438),
    i = n(658550),
    s = n(544891),
    a = n(481060),
    o = n(507453),
    d = n(981631),
    c = n(388032),
    u = n(357507);
function h(e) {
    let { mfaChallenge: t, finish: n, setSlide: h, onClose: f, isSlideReady: g, headerAlignStart: m } = e,
        [p, x] = r.useState(!1),
        [S, b] = r.useState(null),
        [j, y] = r.useState(!1),
        [v, C] = r.useState(null),
        [Z, w] = r.useState(""),
        k = r.useRef(null);
    r.useEffect(() => {
        x(!0),
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
                    C(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                })
                .finally(() => {
                    x(!1);
                });
    }, [t.ticket]),
        r.useEffect(() => {
            if (g) {
                var e;
                null == (e = k.current) || e.focus();
            }
        }, [g]);
    let E = null == S ? c.intl.string(c.t.LQdCQE) : c.intl.formatToPlainString(c.t["8r6h7+"], { phoneNumber: S });
    return (0, l.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                y(!0),
                n({
                    mfaType: "sms",
                    data: Z,
                })
                    .catch((e) => {
                        var t, n;
                        C(null != (n = e.message) ? n : null == (t = e.body) ? void 0 : t.message);
                    })
                    .finally(() => {
                        y(!1);
                    });
        },
        children: [
            (0, l.jsx)(o.Z.SlideHeader, {
                subtitle: E,
                onClose: f,
                headerAlignStart: m,
            }),
            (0, l.jsx)(o.Z.SlideContent, {
                children: (0, l.jsxs)(a.xJW, {
                    title: c.intl.string(c.t.HZPBOT),
                    children: [
                        (0, l.jsxs)("div", {
                            className: u.smsInputContainer,
                            children: [
                                (0, l.jsx)(a.oil, {
                                    inputRef: k,
                                    onChange: w,
                                    placeholder: c.intl.string(c.t.tARzgo),
                                    maxLength: 10,
                                    value: Z,
                                    autoComplete: "one-time-code",
                                    spellCheck: "false",
                                    disabled: j,
                                }),
                                (0, l.jsx)(a.zxk, {
                                    variant: "secondary",
                                    text: c.intl.string(c.t.ZF29Ly),
                                    loading: p,
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
                                                C(e.message || (null == (t = e.body) ? void 0 : t.message));
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, l.jsx)(o.Z.SlideError, { error: v }),
                    ],
                }),
            }),
            (0, l.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: h,
                showConfirm: !0,
                disabled: Z.length !== i.Gz,
                submitting: j,
            }),
        ],
    });
}
