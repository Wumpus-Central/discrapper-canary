n.d(t, { Z: () => u }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(658550),
    s = n(544891),
    a = n(481060),
    o = n(507453),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { mfaChallenge: t, finish: n, setSlide: u, onClose: f, isSlideReady: h, headerAlignStart: g } = e,
        [m, p] = l.useState(!1),
        [b, j] = l.useState(null),
        [x, y] = l.useState(!1),
        [S, v] = l.useState(null),
        [C, O] = l.useState(""),
        Z = l.useRef(null);
    l.useEffect(() => {
        p(!0),
            s.tn
                .post({
                    url: c.ANM.LOGIN_SMS_SEND,
                    body: { ticket: t.ticket },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((e) => {
                    j(e.body.phone);
                })
                .catch((e) => {
                    var t, n;
                    v(null != (n = null == (t = e.body) ? void 0 : t.message) ? n : e.message);
                })
                .finally(() => {
                    p(!1);
                });
    }, [t.ticket]),
        l.useEffect(() => {
            if (h) {
                var e;
                null == (e = Z.current) || e.focus();
            }
        }, [h]);
    let w = null == b ? d.intl.string(d.t.LQdCQE) : d.intl.formatToPlainString(d.t["8r6h7+"], { phoneNumber: b });
    return (0, r.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                y(!0),
                n({
                    mfaType: "sms",
                    data: C,
                })
                    .catch((e) => {
                        var t, n;
                        v(null != (n = e.message) ? n : null == (t = e.body) ? void 0 : t.message);
                    })
                    .finally(() => {
                        y(!1);
                    });
        },
        children: [
            (0, r.jsx)(o.Z.SlideHeader, {
                subtitle: w,
                onClose: f,
                headerAlignStart: g,
            }),
            (0, r.jsxs)(o.Z.SlideContent, {
                children: [
                    (0, r.jsxs)(a.NIo, {
                        children: [
                            (0, r.jsx)(a.oil, {
                                label: d.intl.string(d.t.HZPBOd),
                                inputRef: Z,
                                onChange: O,
                                placeholder: d.intl.string(d.t.tARzgo),
                                maxLength: 10,
                                value: C,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: x,
                            }),
                            (0, r.jsx)(a.Button, {
                                variant: "secondary",
                                text: d.intl.string(d.t.ZF29L6),
                                loading: m,
                                onClick: () => {
                                    s.tn
                                        .post({
                                            url: c.ANM.LOGIN_SMS_SEND,
                                            body: { ticket: t.ticket },
                                            oldFormErrors: !0,
                                            rejectWithError: !1,
                                        })
                                        .then((e) => {
                                            j(e.body.phone);
                                        })
                                        .catch((e) => {
                                            var t;
                                            v(e.message || (null == (t = e.body) ? void 0 : t.message));
                                        });
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.Z.SlideError, { error: S }),
                ],
            }),
            (0, r.jsx)(o.Z.SlideFooter, {
                mfaChallenge: t,
                setSlide: u,
                showConfirm: !0,
                disabled: C.length !== i.Gz,
                submitting: x,
            }),
        ],
    });
}
