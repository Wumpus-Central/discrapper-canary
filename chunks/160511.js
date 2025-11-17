n.d(t, { Z: () => c }), n(388685), n(457542);
var l = n(54381),
    r = n(473749),
    i = n(658550),
    s = n(544891),
    a = n(481060),
    o = n(507453),
    d = n(981631),
    u = n(388032);
function c(e) {
    let { mfaChallenge: t, finish: n, setSlide: c, onClose: h, isSlideReady: f, headerAlignStart: g } = e,
        [m, p] = r.useState(!1),
        [b, S] = r.useState(null),
        [x, j] = r.useState(!1),
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
                    S(e.body.phone);
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
    let E = null == b ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t["8r6h7+"], { phoneNumber: b });
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
                subtitle: E,
                onClose: h,
                headerAlignStart: g,
            }),
            (0, l.jsxs)(o.Z.SlideContent, {
                children: [
                    (0, l.jsxs)(a.NIo, {
                        children: [
                            (0, l.jsx)(a.oil, {
                                label: u.intl.string(u.t.HZPBOd),
                                inputRef: w,
                                onChange: Z,
                                placeholder: u.intl.string(u.t.tARzgo),
                                maxLength: 10,
                                value: C,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: x,
                            }),
                            (0, l.jsx)(a.Button, {
                                variant: "secondary",
                                text: u.intl.string(u.t.ZF29L6),
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
                                            S(e.body.phone);
                                        })
                                        .catch((e) => {
                                            var t;
                                            v(e.message || (null == (t = e.body) ? void 0 : t.message));
                                        });
                                },
                            }),
                        ],
                    }),
                    (0, l.jsx)(o.Z.SlideError, { error: y }),
                ],
            }),
            (0, l.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: c,
                showConfirm: !0,
                disabled: C.length !== i.Gz,
                submitting: x,
            }),
        ],
    });
}
