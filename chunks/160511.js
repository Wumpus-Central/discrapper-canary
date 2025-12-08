n.d(t, { Z: () => d }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(658550),
    s = n(544891),
    a = n(481060),
    o = n(507453),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: f, isSlideReady: h, headerAlignStart: g } = e,
        [m, b] = l.useState(!1),
        [p, j] = l.useState(null),
        [y, x] = l.useState(!1),
        [S, v] = l.useState(null),
        [C, Z] = l.useState(""),
        O = l.useRef(null);
    l.useEffect(() => {
        b(!0),
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
                    b(!1);
                });
    }, [t.ticket]),
        l.useEffect(() => {
            if (h) {
                var e;
                null == (e = O.current) || e.focus();
            }
        }, [h]);
    let w = null == p ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t["8r6h7+"], { phoneNumber: p });
    return (0, r.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                x(!0),
                n({
                    mfaType: "sms",
                    data: C,
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
                                label: u.intl.string(u.t.HZPBOd),
                                inputRef: O,
                                onChange: Z,
                                placeholder: u.intl.string(u.t.tARzgo),
                                maxLength: 10,
                                value: C,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: y,
                            }),
                            (0, r.jsx)(a.Button, {
                                variant: "secondary",
                                text: u.intl.string(u.t.ZF29L6),
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
                setSlide: d,
                showConfirm: !0,
                disabled: C.length !== i.Gz,
                submitting: y,
            }),
        ],
    });
}
