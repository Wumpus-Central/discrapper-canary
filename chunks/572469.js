s.d(t, { a: () => $, t: () => X, MFAModal: () => P });
var n = s(477900),
    l = s(582128),
    i = s(224640),
    a = s(430690),
    r = s(123292),
    o = s(192308),
    c = s(331322),
    d = s(815021),
    u = s(834730),
    h = s(825484),
    m = s(821609),
    x = s(297264),
    f = s(375708),
    g = s(304346);
let j = l.createContext(!1),
    p = function (e) {
        let { children: t } = e,
            s = l.useContext(j);
        return (0, n.jsx)("div", { className: s ? g.m6 : g.Qs, children: t });
    },
    b = function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, n.jsx)(u.E, {
                  className: g.z3,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    y = function (e) {
        let { mfaChallenge: t, setSlide: s, trailingButton: i, showConfirm: a = !1, disabled: r, submitting: o } = e,
            c = l.useContext(j),
            d = t.methods.length > 1;
        if (null == i && !d && !a) return null;
        let u = (0, n.jsxs)(h.e, {
            fullWidth: !0,
            children: [
                d &&
                    (0, n.jsx)(m.$, {
                        variant: "secondary",
                        text: f.intl.string(f.t.Tot4EC),
                        onClick: () => s("select"),
                    }),
                a &&
                    (0, n.jsx)(m.$, {
                        type: "submit",
                        variant: "primary",
                        text: f.intl.string(f.t["cY+Oob"]),
                        disabled: r,
                        loading: o,
                    }),
                i,
            ],
        });
        return (0, n.jsx)("div", { className: c ? g.cZ : g.qr, children: u });
    },
    C = function (e) {
        let { subtitle: t, onClose: s } = e;
        return l.useContext(j)
            ? null
            : (0, n.jsxs)("div", {
                  className: g.wx,
                  children: [
                      (0, n.jsxs)(c.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, n.jsx)(x.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  children: f.intl.string(f.t.saHocI),
                              }),
                              null != t && (0, n.jsx)(x.D, { variant: "heading-lg/semibold", children: t }),
                          ],
                      }),
                      (0, n.jsx)("div", { className: g.b, children: (0, n.jsx)(d.J, { onClick: s }) }),
                  ],
              });
    };
function S(e) {
    let { setSlide: t } = e,
        [s, i] = l.useState(10);
    return (
        l.useEffect(() => {
            if (s > 0) {
                let e = setTimeout(() => {
                    i((e) => e - 1);
                }, 1e3);
                return () => clearTimeout(e);
            }
        }, [s]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(C, { ...e, subtitle: f.intl.string(f.t.c5J7O0) }),
                (0, n.jsxs)(p, {
                    children: [
                        (0, n.jsx)(u.E, { variant: "text-md/normal", children: f.intl.format(f.t.Nixbli, {}) }),
                        (0, n.jsx)(u.E, {
                            variant: "text-md/normal",
                            children:
                                s > 0 ? f.intl.format(f.t.tsWkAE, { countdown: s }) : f.intl.string(f.t["GK/Qfd"]),
                        }),
                    ],
                }),
                (0, n.jsx)(y, {
                    ...e,
                    trailingButton: (0, n.jsx)(m.$, {
                        variant: "primary",
                        text: f.intl.string(f.t.oyjspn),
                        onClick: () => t("backup_ack"),
                        disabled: s > 0,
                        loading: s > 0,
                        fullWidth: !0,
                    }),
                }),
            ],
        })
    );
}
var k = s(533925),
    v = s(95477);
function w(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: a, isSlideReady: r } = e,
        [o, c] = l.useState(!1),
        [d, u] = l.useState(null),
        [h, m] = l.useState(""),
        x = l.useRef(null),
        g = f.intl.string(f.t["C/ZAw/"]),
        j = f.intl.string(f.t.fZSi1D),
        S = l.useCallback(
            (e) => {
                m(e), u(null);
            },
            [m, u],
        );
    return (
        l.useEffect(() => {
            r && x.current?.focus();
        }, [r]),
        (0, n.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    s({ mfaType: "backup", data: h.replace(/-/g, "") })
                        .catch((e) => {
                            u(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, n.jsx)(C, { onClose: a }),
                (0, n.jsxs)(p, {
                    children: [
                        (0, n.jsx)(v.k, {
                            label: g,
                            inputRef: x,
                            onChange: S,
                            placeholder: j,
                            maxLength: k.pu,
                            minLength: k.Zp,
                            value: h,
                            spellCheck: "false",
                            disabled: o,
                        }),
                        (0, n.jsx)(b, { error: d }),
                    ],
                }),
                (0, n.jsx)(y, { mfaChallenge: t, setSlide: i, showConfirm: !0, disabled: h.length < 8, submitting: o }),
            ],
        })
    );
}
function E(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: a, isSlideReady: r } = e,
        [o, c] = l.useState(!1),
        [d, u] = l.useState(null),
        [h, m] = l.useState(""),
        x = l.useRef(null);
    return (
        l.useEffect(() => {
            r && x.current?.focus();
        }, [r]),
        (0, n.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    s({ mfaType: "password", data: h })
                        .catch((e) => {
                            u(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, n.jsx)(C, { onClose: a }),
                (0, n.jsxs)(p, {
                    children: [
                        (0, n.jsx)(v.k, {
                            label: f.intl.string(f.t["CIGa+7"]),
                            inputRef: x,
                            onChange: m,
                            value: h,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: o,
                        }),
                        (0, n.jsx)(b, { error: d }),
                    ],
                }),
                (0, n.jsx)(y, {
                    mfaChallenge: t,
                    setSlide: i,
                    showConfirm: !0,
                    disabled: 0 === h.length,
                    submitting: o,
                }),
            ],
        })
    );
}
var R = s(939249),
    N = s(320448),
    A = s(611248);
function Z(e) {
    let { mfaChallenge: t, setSlide: s, onClose: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(C, { subtitle: f.intl.string(f.t["XQaT+8"]), onClose: l }),
            (0, n.jsx)(p, {
                children: t.methods.map((e) =>
                    (0, n.jsxs)(
                        R.D,
                        {
                            className: g.Ry,
                            onClick: () => {
                                s(e.type);
                            },
                            children: [
                                (0, n.jsx)(u.E, {
                                    className: g.zx,
                                    variant: "text-md/semibold",
                                    children: A.e[e.type],
                                }),
                                (0, n.jsx)(N._, {
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
var _ = s(562465),
    B = s(532446),
    D = s(652215);
function T(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: a, isSlideReady: r } = e,
        [o, c] = l.useState(!1),
        [d, u] = l.useState(null),
        [h, x] = l.useState(!1),
        [g, j] = l.useState(null),
        [S, w] = l.useState(""),
        E = l.useRef(null);
    l.useEffect(() => {
        c(!0),
            _.Bo.post({ url: D.Rsh.LOGIN_SMS_SEND, body: { ticket: t.ticket }, oldFormErrors: !0, rejectWithError: !1 })
                .then((e) => {
                    u(e.body.phone);
                })
                .catch((e) => {
                    j(e.body?.message ?? e.message);
                })
                .finally(() => {
                    c(!1);
                });
    }, [t.ticket]),
        l.useEffect(() => {
            r && E.current?.focus();
        }, [r]);
    let R = null == d ? f.intl.string(f.t.LQdCQE) : f.intl.formatToPlainString(f.t["8r6h7+"], { phoneNumber: d });
    return (0, n.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                x(!0),
                s({ mfaType: "sms", data: S })
                    .catch((e) => {
                        j(e.message ?? e.body?.message);
                    })
                    .finally(() => {
                        x(!1);
                    });
        },
        children: [
            (0, n.jsx)(C, { subtitle: R, onClose: a }),
            (0, n.jsxs)(p, {
                children: [
                    (0, n.jsxs)(B.M, {
                        children: [
                            (0, n.jsx)(v.k, {
                                label: f.intl.string(f.t.HZPBOd),
                                inputRef: E,
                                onChange: w,
                                placeholder: f.intl.string(f.t.tARzgo),
                                maxLength: 10,
                                value: S,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: h,
                            }),
                            (0, n.jsx)(m.$, {
                                variant: "secondary",
                                text: f.intl.string(f.t.ZF29L6),
                                loading: o,
                                onClick: () => {
                                    _.Bo.post({
                                        url: D.Rsh.LOGIN_SMS_SEND,
                                        body: { ticket: t.ticket },
                                        oldFormErrors: !0,
                                        rejectWithError: !1,
                                    })
                                        .then((e) => {
                                            u(e.body.phone);
                                        })
                                        .catch((e) => {
                                            j(e.message || e.body?.message);
                                        });
                                },
                            }),
                        ],
                    }),
                    (0, n.jsx)(b, { error: g }),
                ],
            }),
            (0, n.jsx)(y, {
                mfaChallenge: t,
                setSlide: i,
                showConfirm: !0,
                disabled: S.length !== k.$A,
                submitting: h,
            }),
        ],
    });
}
function F(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: a, isSlideReady: r } = e,
        [o, c] = l.useState(!1),
        [d, u] = l.useState(null),
        [h, m] = l.useState(""),
        x = l.useRef(null);
    return (
        l.useEffect(() => {
            r && x.current?.focus();
        }, [r]),
        (0, n.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    u(null),
                    s({ mfaType: "totp", data: h })
                        .catch((e) => {
                            u(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, n.jsx)(C, { onClose: a }),
                (0, n.jsxs)(p, {
                    children: [
                        (0, n.jsx)(v.k, {
                            label: f.intl.string(f.t.HZPBOd),
                            inputRef: x,
                            onChange: m,
                            placeholder: f.intl.string(f.t.tARzgo),
                            maxLength: k.XZ,
                            minLength: k.XZ,
                            value: h,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: o,
                        }),
                        (0, n.jsx)(b, { error: d }),
                    ],
                }),
                (0, n.jsx)(y, {
                    mfaChallenge: t,
                    setSlide: i,
                    showConfirm: !0,
                    disabled: h.length !== k.XZ,
                    submitting: o,
                }),
            ],
        })
    );
}
var L = s(84948),
    W = s(293731),
    O = s(464477),
    q = s(723702),
    z = s(19575);
function M(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: a } = e,
        [r, o] = l.useState(!1),
        [c, d] = l.useState(null),
        { challenge: u } = t.methods.find((e) => "webauthn" === e.type),
        h = l.useCallback(async () => {
            o(!0), d(null);
            let e = q.isPlatformEmbedded && z.Ay.supportsFeature(D.BYE.WEBAUTHN) ? z.Ay.webAuthnAuthenticate : W.J;
            try {
                let t = await e(u);
                try {
                    await s({ mfaType: "webauthn", data: t });
                } catch (e) {
                    e instanceof _.oh
                        ? (e.status >= 400 && e.status < 500 && (await L.A.signalUnknownCredential(t)),
                          d(f.intl.string(f.t.xSCvBf)))
                        : ((0, O.Os)(e, {}), d(e.message));
                }
            } catch (e) {
                (0, O.Os)(e, { extra: { error_type: "webauthn_api_error" } }), d(f.intl.string(f.t.xSCvBf));
            } finally {
                o(!1);
            }
        }, [u, s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(C, { onClose: a }),
            null != c && (0, n.jsx)(p, { children: (0, n.jsx)(b, { error: c }) }),
            (0, n.jsx)(y, {
                mfaChallenge: t,
                setSlide: i,
                trailingButton: (0, n.jsx)(m.$, {
                    variant: "primary",
                    text: f.intl.string(f.t.Xr3Eks),
                    loading: r,
                    onClick: h,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function X(e) {
    let { mfaChallenge: t, mfaFinish: s, onEarlyClose: i, onClose: o, embedded: c = !1 } = e,
        [d, u] = l.useState(t.methods[0]?.type ?? "select"),
        [h, m] = l.useState(d);
    async function x(e) {
        let { mfaType: n, data: l } = e;
        await s({ mfaType: n, data: l, ticket: t.ticket }), null != o && o();
    }
    let p = { mfaChallenge: t, finish: x, setSlide: u, onClose: i };
    return (0, n.jsxs)(j.Provider, {
        value: c,
        children: [
            (0, n.jsxs)(a.t, {
                activeSlide: d,
                width: "100%",
                onSlideReady: m,
                children: [
                    (0, n.jsx)(a.q, { id: "select", children: (0, n.jsx)(Z, { ...p }) }),
                    (0, n.jsx)(a.q, { id: "webauthn", children: (0, n.jsx)(M, { ...p }) }),
                    (0, n.jsx)(a.q, { id: "totp", children: (0, n.jsx)(F, { ...p, isSlideReady: "totp" === h }) }),
                    (0, n.jsx)(a.q, { id: "sms", children: (0, n.jsx)(T, { ...p, isSlideReady: "sms" === h }) }),
                    (0, n.jsx)(a.q, { id: "backup", children: (0, n.jsx)(S, { ...p }) }),
                    (0, n.jsx)(a.q, {
                        id: "backup_ack",
                        children: (0, n.jsx)(w, { ...p, isSlideReady: "backup_ack" === h }),
                    }),
                    (0, n.jsx)(a.q, {
                        id: "password",
                        children: (0, n.jsx)(E, { ...p, isSlideReady: "password" === h }),
                    }),
                ],
            }),
            c &&
                (0, n.jsx)("div", {
                    className: g.c5,
                    children: (0, n.jsx)(r.Q, {
                        text: f.intl.string(f.t["1MrpWO"]),
                        textVariant: "text-sm/medium",
                        onClick: i,
                    }),
                }),
        ],
    });
}
function P(e) {
    let { mfaChallenge: t, finish: s, transitionState: l, onClose: a } = e;
    return (0, n.jsx)(i.d, {
        transitionState: l,
        onClose: a,
        size: "sm",
        "aria-label": f.intl.string(f.t.saHocI),
        children: (0, n.jsx)(X, { mfaChallenge: t, mfaFinish: s, onClose: a, onEarlyClose: a }),
    });
}
function $(e, t, s) {
    (0, o.openModalLazy)(() => Promise.resolve((s) => (0, n.jsx)(P, { finish: t, mfaChallenge: e, ...s })), {
        onCloseCallback: () => {
            s(Error(f.intl.string(f.t.N2yb9a)));
        },
    });
}
