n.d(t, { A: () => g });
var a = n(627968),
    r = n(64700),
    i = n(533925),
    s = n(562465),
    l = n(532446),
    o = n(292666),
    d = n(821609),
    c = n(398450),
    u = n(652215),
    h = n(985018);
function g(e) {
    let { mfaChallenge: t, finish: n, setSlide: g, onClose: m, isSlideReady: p, headerAlignStart: f } = e,
        [x, S] = r.useState(!1),
        [b, A] = r.useState(null),
        [j, y] = r.useState(!1),
        [C, v] = r.useState(null),
        [k, w] = r.useState(""),
        E = r.useRef(null);
    r.useEffect(() => {
        S(!0),
            s.Bo.post({ url: u.Rsh.LOGIN_SMS_SEND, body: { ticket: t.ticket }, oldFormErrors: !0, rejectWithError: !1 })
                .then((e) => {
                    A(e.body.phone);
                })
                .catch((e) => {
                    v(e.body?.message ?? e.message);
                })
                .finally(() => {
                    S(!1);
                });
    }, [t.ticket]),
        r.useEffect(() => {
            p && E.current?.focus();
        }, [p]);
    let R = null == b ? h.intl.string(h.t.LQdCQE) : h.intl.formatToPlainString(h.t["8r6h7+"], { phoneNumber: b });
    return (0, a.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                y(!0),
                n({ mfaType: "sms", data: k })
                    .catch((e) => {
                        v(e.message ?? e.body?.message);
                    })
                    .finally(() => {
                        y(!1);
                    });
        },
        children: [
            (0, a.jsx)(c.A.SlideHeader, { subtitle: R, onClose: m, headerAlignStart: f }),
            (0, a.jsxs)(c.A.SlideContent, {
                children: [
                    (0, a.jsxs)(l.M, {
                        children: [
                            (0, a.jsx)(o.k, {
                                label: h.intl.string(h.t.HZPBOd),
                                inputRef: E,
                                onChange: w,
                                placeholder: h.intl.string(h.t.tARzgo),
                                maxLength: 10,
                                value: k,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: j,
                            }),
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                text: h.intl.string(h.t.ZF29L6),
                                loading: x,
                                onClick: () => {
                                    s.Bo.post({
                                        url: u.Rsh.LOGIN_SMS_SEND,
                                        body: { ticket: t.ticket },
                                        oldFormErrors: !0,
                                        rejectWithError: !1,
                                    })
                                        .then((e) => {
                                            A(e.body.phone);
                                        })
                                        .catch((e) => {
                                            v(e.message || e.body?.message);
                                        });
                                },
                            }),
                        ],
                    }),
                    (0, a.jsx)(c.A.SlideError, { error: C }),
                ],
            }),
            (0, a.jsx)(c.A.SlideFooter, {
                mfaChallenge: t,
                setSlide: g,
                showConfirm: !0,
                disabled: k.length !== i.$A,
                submitting: j,
            }),
        ],
    });
}
