n.d(t, { A: () => u }), n(896048), n(492834);
var r = n(627968),
    l = n(64700),
    i = n(533925),
    s = n(562465),
    a = n(397927),
    o = n(398450),
    d = n(652215),
    c = n(985018);
function u(e) {
    let { mfaChallenge: t, finish: n, setSlide: u, onClose: f, isSlideReady: h, headerAlignStart: g } = e,
        [p, m] = l.useState(!1),
        [b, j] = l.useState(null),
        [y, S] = l.useState(!1),
        [x, v] = l.useState(null),
        [A, C] = l.useState(""),
        O = l.useRef(null);
    l.useEffect(() => {
        m(!0),
            s.Bo.post({
                url: d.Rsh.LOGIN_SMS_SEND,
                body: { ticket: t.ticket },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then((e) => {
                    j(e.body.phone);
                })
                .catch((e) => {
                    var t, n;
                    v(null != (t = null == (n = e.body) ? void 0 : n.message) ? t : e.message);
                })
                .finally(() => {
                    m(!1);
                });
    }, [t.ticket]),
        l.useEffect(() => {
            if (h) {
                var e;
                null == (e = O.current) || e.focus();
            }
        }, [h]);
    let w = null == b ? c.intl.string(c.t.LQdCQE) : c.intl.formatToPlainString(c.t["8r6h7+"], { phoneNumber: b });
    return (0, r.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                S(!0),
                n({
                    mfaType: "sms",
                    data: A,
                })
                    .catch((e) => {
                        var t, n;
                        v(null != (t = e.message) ? t : null == (n = e.body) ? void 0 : n.message);
                    })
                    .finally(() => {
                        S(!1);
                    });
        },
        children: [
            (0, r.jsx)(o.A.SlideHeader, {
                subtitle: w,
                onClose: f,
                headerAlignStart: g,
            }),
            (0, r.jsxs)(o.A.SlideContent, {
                children: [
                    (0, r.jsxs)(a.M_l, {
                        children: [
                            (0, r.jsx)(a.ksK, {
                                label: c.intl.string(c.t.HZPBOd),
                                inputRef: O,
                                onChange: C,
                                placeholder: c.intl.string(c.t.tARzgo),
                                maxLength: 10,
                                value: A,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: y,
                            }),
                            (0, r.jsx)(a.Button, {
                                variant: "secondary",
                                text: c.intl.string(c.t.ZF29L6),
                                loading: p,
                                onClick: () => {
                                    s.Bo.post({
                                        url: d.Rsh.LOGIN_SMS_SEND,
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
                    (0, r.jsx)(o.A.SlideError, { error: x }),
                ],
            }),
            (0, r.jsx)(o.A.SlideFooter, {
                mfaChallenge: t,
                setSlide: u,
                showConfirm: !0,
                disabled: A.length !== i.$A,
                submitting: y,
            }),
        ],
    });
}
