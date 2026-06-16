n.d(t, { a: () => $, t: () => W, MFAModal: () => X });
var s = n(627968),
    l = n(64700),
    a = n(430690),
    i = n(935462),
    r = n(192308),
    o = n(834730),
    d = n(821609),
    c = n(825484),
    u = n(534514),
    h = n(235986),
    m = n(375708),
    g = n(902626);
let f = function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, s.jsx)(i.$m, { "data-migration-pending": !0, className: g.Qs, scrollbarType: n, children: t });
    },
    x = function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, s.jsx)(o.E, {
                  className: g.z3,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    p = function (e) {
        let { mfaChallenge: t, setSlide: n, trailingButton: l, showConfirm: a = !1, disabled: r, submitting: o } = e,
            u = t.methods.length > 1;
        return null != l || u || a
            ? (0, s.jsx)(i.jl, {
                  "data-migration-pending": !0,
                  children: (0, s.jsxs)(c.e, {
                      fullWidth: !0,
                      children: [
                          u &&
                              (0, s.jsx)(d.$, {
                                  variant: "secondary",
                                  text: m.intl.string(m.t.Tot4EC),
                                  onClick: () => n("select"),
                              }),
                          a &&
                              (0, s.jsx)(d.$, {
                                  type: "submit",
                                  variant: "primary",
                                  text: m.intl.string(m.t["cY+Oob"]),
                                  disabled: r,
                                  loading: o,
                              }),
                          l,
                      ],
                  }),
              })
            : null;
    },
    j = function (e) {
        let { subtitle: t, onClose: n, headerAlignStart: l } = e;
        return (0, s.jsxs)(i.rQ, {
            "data-migration-pending": !0,
            direction: h.A.Direction.VERTICAL,
            className: g.wx,
            separator: !1,
            align: l ? h.A.Align.START : void 0,
            children: [
                (0, s.jsx)(u.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: m.intl.string(m.t.saHocI),
                }),
                null != t && (0, s.jsx)(u.D, { variant: "heading-lg/semibold", className: g.VA, children: t }),
                (0, s.jsx)(i.s_, { className: g.b, onClick: n }),
            ],
        });
    };
function b(e) {
    let { setSlide: t } = e,
        [n, a] = l.useState(10);
    return (
        l.useEffect(() => {
            if (n > 0) {
                let e = setTimeout(() => {
                    a((e) => e - 1);
                }, 1e3);
                return () => clearTimeout(e);
            }
        }, [n]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(j, { ...e, subtitle: m.intl.string(m.t.c5J7O0) }),
                (0, s.jsxs)(f, {
                    children: [
                        (0, s.jsx)(o.E, { variant: "text-md/normal", children: m.intl.format(m.t.Nixbli, {}) }),
                        (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            children:
                                n > 0 ? m.intl.format(m.t.tsWkAE, { countdown: n }) : m.intl.string(m.t["GK/Qfd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(p, {
                    ...e,
                    trailingButton: (0, s.jsx)(d.$, {
                        variant: "primary",
                        text: m.intl.string(m.t.oyjspn),
                        onClick: () => t("backup_ack"),
                        disabled: n > 0,
                        loading: n > 0,
                        fullWidth: !0,
                    }),
                }),
            ],
        })
    );
}
var y = n(533925),
    S = n(292666);
function C(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, isSlideReady: r, headerAlignStart: o } = e,
        [d, c] = l.useState(!1),
        [u, h] = l.useState(null),
        [g, b] = l.useState(""),
        C = l.useRef(null),
        k = m.intl.string(m.t["C/ZAw/"]),
        w = m.intl.string(m.t.fZSi1D),
        v = l.useCallback(
            (e) => {
                b(e), h(null);
            },
            [b, h],
        );
    return (
        l.useEffect(() => {
            r && C.current?.focus();
        }, [r]),
        (0, s.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    n({ mfaType: "backup", data: g.replace(/-/g, "") })
                        .catch((e) => {
                            h(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, s.jsx)(j, { onClose: i, headerAlignStart: o }),
                (0, s.jsxs)(f, {
                    children: [
                        (0, s.jsx)(S.k, {
                            label: k,
                            inputRef: C,
                            onChange: v,
                            placeholder: w,
                            maxLength: y.pu,
                            minLength: y.Zp,
                            value: g,
                            spellCheck: "false",
                            disabled: d,
                        }),
                        (0, s.jsx)(x, { error: u }),
                    ],
                }),
                (0, s.jsx)(p, { mfaChallenge: t, setSlide: a, showConfirm: !0, disabled: g.length < 8, submitting: d }),
            ],
        })
    );
}
function k(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, isSlideReady: r, headerAlignStart: o } = e,
        [d, c] = l.useState(!1),
        [u, h] = l.useState(null),
        [g, b] = l.useState(""),
        y = l.useRef(null);
    return (
        l.useEffect(() => {
            r && y.current?.focus();
        }, [r]),
        (0, s.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    n({ mfaType: "password", data: g })
                        .catch((e) => {
                            h(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, s.jsx)(j, { onClose: i, headerAlignStart: o }),
                (0, s.jsxs)(f, {
                    children: [
                        (0, s.jsx)(S.k, {
                            label: m.intl.string(m.t["CIGa+7"]),
                            inputRef: y,
                            onChange: b,
                            value: g,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: d,
                        }),
                        (0, s.jsx)(x, { error: u }),
                    ],
                }),
                (0, s.jsx)(p, {
                    mfaChallenge: t,
                    setSlide: a,
                    showConfirm: !0,
                    disabled: 0 === g.length,
                    submitting: d,
                }),
            ],
        })
    );
}
var w = n(939249),
    v = n(320448),
    E = n(611248);
function A(e) {
    let { mfaChallenge: t, setSlide: n, onClose: l, headerAlignStart: a } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(j, { subtitle: m.intl.string(m.t["XQaT+8"]), onClose: l, headerAlignStart: a }),
            (0, s.jsx)(f, {
                children: t.methods.map((e) =>
                    (0, s.jsxs)(
                        w.D,
                        {
                            className: g.Ry,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, s.jsx)(o.E, {
                                    className: g.zx,
                                    variant: "text-md/semibold",
                                    children: E.e[e.type],
                                }),
                                (0, s.jsx)(v._, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: g.td,
                                }),
                            ],
                        },
                        e.type,
                    ),
                ),
            }),
        ],
    });
}
var R = n(636537),
    T = n(532446),
    N = n(652215);
function _(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, isSlideReady: r, headerAlignStart: o } = e,
        [c, u] = l.useState(!1),
        [h, g] = l.useState(null),
        [b, C] = l.useState(!1),
        [k, w] = l.useState(null),
        [v, E] = l.useState(""),
        A = l.useRef(null);
    l.useEffect(() => {
        u(!0),
            R.Bo.post({ url: N.Rsh.LOGIN_SMS_SEND, body: { ticket: t.ticket }, oldFormErrors: !0, rejectWithError: !1 })
                .then((e) => {
                    g(e.body.phone);
                })
                .catch((e) => {
                    w(e.body?.message ?? e.message);
                })
                .finally(() => {
                    u(!1);
                });
    }, [t.ticket]),
        l.useEffect(() => {
            r && A.current?.focus();
        }, [r]);
    let _ = null == h ? m.intl.string(m.t.LQdCQE) : m.intl.formatToPlainString(m.t["8r6h7+"], { phoneNumber: h });
    return (0, s.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                C(!0),
                n({ mfaType: "sms", data: v })
                    .catch((e) => {
                        w(e.message ?? e.body?.message);
                    })
                    .finally(() => {
                        C(!1);
                    });
        },
        children: [
            (0, s.jsx)(j, { subtitle: _, onClose: i, headerAlignStart: o }),
            (0, s.jsxs)(f, {
                children: [
                    (0, s.jsxs)(T.M, {
                        children: [
                            (0, s.jsx)(S.k, {
                                label: m.intl.string(m.t.HZPBOd),
                                inputRef: A,
                                onChange: E,
                                placeholder: m.intl.string(m.t.tARzgo),
                                maxLength: 10,
                                value: v,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: b,
                            }),
                            (0, s.jsx)(d.$, {
                                variant: "secondary",
                                text: m.intl.string(m.t.ZF29L6),
                                loading: c,
                                onClick: () => {
                                    R.Bo.post({
                                        url: N.Rsh.LOGIN_SMS_SEND,
                                        body: { ticket: t.ticket },
                                        oldFormErrors: !0,
                                        rejectWithError: !1,
                                    })
                                        .then((e) => {
                                            g(e.body.phone);
                                        })
                                        .catch((e) => {
                                            w(e.message || e.body?.message);
                                        });
                                },
                            }),
                        ],
                    }),
                    (0, s.jsx)(x, { error: k }),
                ],
            }),
            (0, s.jsx)(p, {
                mfaChallenge: t,
                setSlide: a,
                showConfirm: !0,
                disabled: v.length !== y.$A,
                submitting: b,
            }),
        ],
    });
}
function D(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, isSlideReady: r, headerAlignStart: o } = e,
        [d, c] = l.useState(!1),
        [u, h] = l.useState(null),
        [g, b] = l.useState(""),
        C = l.useRef(null);
    return (
        l.useEffect(() => {
            r && C.current?.focus();
        }, [r]),
        (0, s.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    h(null),
                    n({ mfaType: "totp", data: g })
                        .catch((e) => {
                            h(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, s.jsx)(j, { onClose: i, headerAlignStart: o }),
                (0, s.jsxs)(f, {
                    scrollbarType: "none",
                    children: [
                        (0, s.jsx)(S.k, {
                            label: m.intl.string(m.t.HZPBOd),
                            inputRef: C,
                            onChange: b,
                            placeholder: m.intl.string(m.t.tARzgo),
                            maxLength: y.XZ,
                            minLength: y.XZ,
                            value: g,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: d,
                        }),
                        (0, s.jsx)(x, { error: u }),
                    ],
                }),
                (0, s.jsx)(p, {
                    mfaChallenge: t,
                    setSlide: a,
                    showConfirm: !0,
                    disabled: g.length !== y.XZ,
                    submitting: d,
                }),
            ],
        })
    );
}
var Z = n(84948),
    F = n(293731),
    L = n(464477),
    B = n(723702),
    M = n(19575);
function O(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, headerAlignStart: r } = e,
        [o, c] = l.useState(!1),
        [u, h] = l.useState(null),
        { challenge: g } = t.methods.find((e) => "webauthn" === e.type),
        b = l.useCallback(async () => {
            c(!0), h(null);
            let e = B.isPlatformEmbedded && M.Ay.supportsFeature(N.BYE.WEBAUTHN) ? M.Ay.webAuthnAuthenticate : F.J;
            try {
                let t = await e(g);
                try {
                    await n({ mfaType: "webauthn", data: t });
                } catch (e) {
                    e instanceof R.oh
                        ? (e.status >= 400 && e.status < 500 && (await Z.A.signalUnknownCredential(t)),
                          h(m.intl.string(m.t.xSCvBf)))
                        : ((0, L.Os)(e, {}), h(e.message));
                }
            } catch (e) {
                (0, L.Os)(e, { extra: { error_type: "webauthn_api_error" } }), h(m.intl.string(m.t.xSCvBf));
            } finally {
                c(!1);
            }
        }, [g, n]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(j, { onClose: i, headerAlignStart: r }),
            null != u && (0, s.jsx)(f, { children: (0, s.jsx)(x, { error: u }) }),
            (0, s.jsx)(p, {
                mfaChallenge: t,
                setSlide: a,
                trailingButton: (0, s.jsx)(d.$, {
                    variant: "primary",
                    text: m.intl.string(m.t.Xr3Eks),
                    loading: o,
                    onClick: b,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function W(e) {
    let { mfaChallenge: t, mfaFinish: n, onEarlyClose: i, onClose: r, headerAlignStart: o, width: d = 440 } = e,
        [c, u] = l.useState(t.methods[0]?.type ?? "select"),
        [h, m] = l.useState(c),
        g = async (e) => {
            let { mfaType: s, data: l } = e;
            await n({ mfaType: s, data: l, ticket: t.ticket }), null != r && r();
        },
        f = { mfaChallenge: t, finish: g, setSlide: u, onClose: i, headerAlignStart: o };
    return (0, s.jsxs)(a.t, {
        activeSlide: c,
        width: d,
        onSlideReady: m,
        children: [
            (0, s.jsx)(a.q, { id: "select", children: (0, s.jsx)(A, { ...f }) }),
            (0, s.jsx)(a.q, { id: "webauthn", children: (0, s.jsx)(O, { ...f }) }),
            (0, s.jsx)(a.q, { id: "totp", children: (0, s.jsx)(D, { ...f, isSlideReady: "totp" === h }) }),
            (0, s.jsx)(a.q, { id: "sms", children: (0, s.jsx)(_, { ...f, isSlideReady: "sms" === h }) }),
            (0, s.jsx)(a.q, { id: "backup", children: (0, s.jsx)(b, { ...f }) }),
            (0, s.jsx)(a.q, { id: "backup_ack", children: (0, s.jsx)(C, { ...f, isSlideReady: "backup_ack" === h }) }),
            (0, s.jsx)(a.q, { id: "password", children: (0, s.jsx)(k, { ...f, isSlideReady: "password" === h }) }),
        ],
    });
}
function X(e) {
    let { mfaChallenge: t, finish: n, transitionState: l, onClose: a } = e;
    return (0, s.jsx)(i.EO, {
        "data-migration-pending": !0,
        transitionState: l,
        size: i.rI.SMALL,
        "aria-label": m.intl.string(m.t.saHocI),
        parentComponent: "MFAModal",
        children: (0, s.jsx)(W, { mfaChallenge: t, mfaFinish: n, onClose: a, onEarlyClose: a }),
    });
}
function $(e, t, n) {
    (0, r.openModal)((n) => (0, s.jsx)(X, { finish: t, mfaChallenge: e, ...n }), {
        onCloseCallback: () => {
            n(Error(m.intl.string(m.t.N2yb9a)));
        },
    });
}
