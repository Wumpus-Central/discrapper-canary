s.d(t, { MFAModal: () => z, t: () => Z, a: () => P });
var n = s(477900),
    l = s(582128),
    i = s(224640),
    r = s(430690),
    a = s(123292),
    o = s(192308),
    d = s(331322),
    c = s(815021),
    u = s(834730),
    h = s(825484),
    m = s(821609),
    f = s(534514),
    x = s(792996),
    g = s(469179);
let j = l.createContext(!1),
    b = function (e) {
        let { children: t } = e,
            s = l.useContext(j);
        return (0, n.jsx)("div", { className: s ? g.m6 : g.Qs, children: t });
    },
    p = function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, n.jsx)(u.E, {
                  className: g.z3,
                  variant: "body-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    y = function (e) {
        let { mfaChallenge: t, setSlide: s, trailingButton: i, showConfirm: r = !1, disabled: a, submitting: o } = e,
            d = l.useContext(j),
            c = t.methods.length > 1;
        if (null == i && !c && !r) return null;
        let u = (0, n.jsxs)(h.e, {
            fullWidth: !0,
            children: [
                c &&
                    (0, n.jsx)(m.$, {
                        variant: "secondary",
                        text: x.intl.string(x.t.Tot4EC),
                        onClick: () => s("select"),
                    }),
                r &&
                    (0, n.jsx)(m.$, {
                        type: "submit",
                        variant: "primary",
                        text: x.intl.string(x.t["cY+Oob"]),
                        disabled: a,
                        loading: o,
                    }),
                i,
            ],
        });
        return (0, n.jsx)("div", { className: d ? g.cZ : g.qr, children: u });
    },
    C = function (e) {
        let { subtitle: t, onClose: s } = e;
        return l.useContext(j)
            ? null
            : (0, n.jsxs)("div", {
                  className: g.wx,
                  children: [
                      (0, n.jsxs)(d.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, n.jsx)(f.D, {
                                  variant: "heading-xl/semibold",
                                  color: "text-strong",
                                  children: x.intl.string(x.t.saHocI),
                              }),
                              null != t && (0, n.jsx)(f.D, { variant: "heading-lg/semibold", children: t }),
                          ],
                      }),
                      (0, n.jsx)("div", { className: g.b, children: (0, n.jsx)(c.J, { onClick: s }) }),
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
                (0, n.jsx)(C, { ...e, subtitle: x.intl.string(x.t.c5J7O0) }),
                (0, n.jsxs)(b, {
                    children: [
                        (0, n.jsx)(u.E, { variant: "body-md/normal", children: x.intl.format(x.t.Nixbli, {}) }),
                        (0, n.jsx)(u.E, {
                            variant: "body-md/normal",
                            children:
                                s > 0 ? x.intl.format(x.t.tsWkAE, { countdown: s }) : x.intl.string(x.t["GK/Qfd"]),
                        }),
                    ],
                }),
                (0, n.jsx)(y, {
                    ...e,
                    trailingButton: (0, n.jsx)(m.$, {
                        variant: "primary",
                        text: x.intl.string(x.t.oyjspn),
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
s(533925);
var v = s(95477);
function k(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: r, isSlideReady: a } = e,
        [o, d] = l.useState(!1),
        [c, u] = l.useState(null),
        [h, m] = l.useState(""),
        f = l.useRef(null),
        g = x.intl.string(x.t["C/ZAw/"]),
        j = x.intl.string(x.t.fZSi1D),
        S = l.useCallback(
            (e) => {
                (m(e), u(null));
            },
            [m, u],
        );
    return (
        l.useEffect(() => {
            a && f.current?.focus();
        }, [a]),
        (0, n.jsxs)("form", {
            onSubmit: (e) => {
                (e.preventDefault(),
                    d(!0),
                    s({ mfaType: "backup", data: h.replace(/-/g, "") })
                        .catch((e) => {
                            u(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            d(!1);
                        }));
            },
            children: [
                (0, n.jsx)(C, { onClose: r }),
                (0, n.jsxs)(b, {
                    children: [
                        (0, n.jsx)(v.k, {
                            label: g,
                            inputRef: f,
                            onChange: S,
                            placeholder: j,
                            maxLength: 11,
                            minLength: 8,
                            value: h,
                            spellCheck: "false",
                            disabled: o,
                        }),
                        (0, n.jsx)(p, { error: c }),
                    ],
                }),
                (0, n.jsx)(y, { mfaChallenge: t, setSlide: i, showConfirm: !0, disabled: h.length < 8, submitting: o }),
            ],
        })
    );
}
function w(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: r, isSlideReady: a } = e,
        [o, d] = l.useState(!1),
        [c, u] = l.useState(null),
        [h, m] = l.useState(""),
        f = l.useRef(null);
    return (
        l.useEffect(() => {
            a && f.current?.focus();
        }, [a]),
        (0, n.jsxs)("form", {
            onSubmit: (e) => {
                (e.preventDefault(),
                    d(!0),
                    s({ mfaType: "password", data: h })
                        .catch((e) => {
                            u(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            d(!1);
                        }));
            },
            children: [
                (0, n.jsx)(C, { onClose: r }),
                (0, n.jsxs)(b, {
                    children: [
                        (0, n.jsx)(v.k, {
                            label: x.intl.string(x.t["CIGa+7"]),
                            inputRef: f,
                            onChange: m,
                            value: h,
                            type: "password",
                            revealable: !0,
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: o,
                        }),
                        (0, n.jsx)(p, { error: c }),
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
var E = s(939249),
    R = s(320448),
    N = s(611248);
function _(e) {
    let { mfaChallenge: t, setSlide: s, onClose: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(C, { subtitle: x.intl.string(x.t["XQaT+8"]), onClose: l }),
            (0, n.jsx)(b, {
                children: t.methods.map((e) =>
                    (0, n.jsxs)(
                        E.D,
                        {
                            className: g.Ry,
                            onClick: () => {
                                s(e.type);
                            },
                            children: [
                                (0, n.jsx)(u.E, {
                                    className: g.zx,
                                    variant: "body-md/semibold",
                                    children: N.e[e.type],
                                }),
                                (0, n.jsx)(R.ChevronSmallRightIcon, {
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
var A = s(620632),
    B = s(532446),
    D = s(652215);
function T(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: r, isSlideReady: a } = e,
        [o, d] = l.useState(!1),
        [c, u] = l.useState(null),
        [h, f] = l.useState(!1),
        [g, j] = l.useState(null),
        [S, k] = l.useState(""),
        w = l.useRef(null);
    (l.useEffect(() => {
        (d(!0),
            A.Bo.post({ url: D.Rsh.LOGIN_SMS_SEND, body: { ticket: t.ticket }, oldFormErrors: !0, rejectWithError: !1 })
                .then((e) => {
                    u(e.body.phone);
                })
                .catch((e) => {
                    j(e.body?.message ?? e.message);
                })
                .finally(() => {
                    d(!1);
                }));
    }, [t.ticket]),
        l.useEffect(() => {
            a && w.current?.focus();
        }, [a]));
    let E = null == c ? x.intl.string(x.t.LQdCQE) : x.intl.formatToPlainString(x.t["8r6h7+"], { phoneNumber: c });
    return (0, n.jsxs)("form", {
        onSubmit: (e) => {
            (e.preventDefault(),
                f(!0),
                s({ mfaType: "sms", data: S })
                    .catch((e) => {
                        j(e.message ?? e.body?.message);
                    })
                    .finally(() => {
                        f(!1);
                    }));
        },
        children: [
            (0, n.jsx)(C, { subtitle: E, onClose: r }),
            (0, n.jsxs)(b, {
                children: [
                    (0, n.jsxs)(B.M, {
                        children: [
                            (0, n.jsx)(v.k, {
                                label: x.intl.string(x.t.HZPBOd),
                                inputRef: w,
                                onChange: k,
                                placeholder: x.intl.string(x.t.tARzgo),
                                maxLength: 10,
                                value: S,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: h,
                            }),
                            (0, n.jsx)(m.$, {
                                variant: "secondary",
                                text: x.intl.string(x.t.ZF29L6),
                                loading: o,
                                onClick: () => {
                                    A.Bo.post({
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
                    (0, n.jsx)(p, { error: g }),
                ],
            }),
            (0, n.jsx)(y, { mfaChallenge: t, setSlide: i, showConfirm: !0, disabled: 6 !== S.length, submitting: h }),
        ],
    });
}
function F(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: r, isSlideReady: a } = e,
        [o, d] = l.useState(!1),
        [c, u] = l.useState(null),
        [h, m] = l.useState(""),
        f = l.useRef(null);
    return (
        l.useEffect(() => {
            a && f.current?.focus();
        }, [a]),
        (0, n.jsxs)("form", {
            onSubmit: (e) => {
                (e.preventDefault(),
                    d(!0),
                    u(null),
                    s({ mfaType: "totp", data: h })
                        .catch((e) => {
                            u(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            d(!1);
                        }));
            },
            children: [
                (0, n.jsx)(C, { onClose: r }),
                (0, n.jsxs)(b, {
                    children: [
                        (0, n.jsx)(v.k, {
                            label: x.intl.string(x.t.HZPBOd),
                            inputRef: f,
                            onChange: m,
                            placeholder: x.intl.string(x.t.tARzgo),
                            maxLength: 6,
                            minLength: 6,
                            value: h,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: o,
                        }),
                        (0, n.jsx)(p, { error: c }),
                    ],
                }),
                (0, n.jsx)(y, {
                    mfaChallenge: t,
                    setSlide: i,
                    showConfirm: !0,
                    disabled: 6 !== h.length,
                    submitting: o,
                }),
            ],
        })
    );
}
var O = s(293731),
    W = s(464477),
    L = s(723702),
    q = s(253400);
function M(e) {
    let { mfaChallenge: t, finish: s, setSlide: i, onClose: r } = e,
        [a, o] = l.useState(!1),
        [d, c] = l.useState(null),
        { challenge: u } = t.methods.find((e) => "webauthn" === e.type),
        h = l.useCallback(async () => {
            (o(!0), c(null));
            let e = L.isPlatformEmbedded && q.Ay.supportsFeature(D.BYE.WEBAUTHN) ? q.Ay.webAuthnAuthenticate : O.J;
            try {
                let t = await e(u);
                try {
                    await s({ mfaType: "webauthn", data: t });
                } catch (e) {
                    e instanceof A.oh
                        ? ((0, W.Os)(e, {
                              extra: { error_type: "webauthn_mfa_rejected", status: e.status, code: e.body?.code },
                          }),
                          c(x.intl.string(x.t.xSCvBf)))
                        : ((0, W.Os)(e, {}), c(e.message));
                }
            } catch (e) {
                ((0, W.Os)(e, { extra: { error_type: "webauthn_api_error" } }), c(x.intl.string(x.t.xSCvBf)));
            } finally {
                o(!1);
            }
        }, [u, s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(C, { onClose: r }),
            null != d && (0, n.jsx)(b, { children: (0, n.jsx)(p, { error: d }) }),
            (0, n.jsx)(y, {
                mfaChallenge: t,
                setSlide: i,
                trailingButton: (0, n.jsx)(m.$, {
                    variant: "primary",
                    text: x.intl.string(x.t.Xr3Eks),
                    loading: a,
                    onClick: h,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function Z(e) {
    let { mfaChallenge: t, mfaFinish: s, onEarlyClose: i, onClose: o, embedded: d = !1 } = e,
        [c, u] = l.useState(t.methods[0]?.type ?? "select"),
        [h, m] = l.useState(c),
        f = {
            mfaChallenge: t,
            finish: async function (e) {
                let { mfaType: n, data: l } = e;
                (await s({ mfaType: n, data: l, ticket: t.ticket }), null != o && o());
            },
            setSlide: u,
            onClose: i,
        };
    return (0, n.jsxs)(j.Provider, {
        value: d,
        children: [
            (0, n.jsxs)(r.t, {
                activeSlide: c,
                width: "100%",
                onSlideReady: m,
                children: [
                    (0, n.jsx)(r.q, { id: "select", children: (0, n.jsx)(_, { ...f }) }),
                    (0, n.jsx)(r.q, { id: "webauthn", children: (0, n.jsx)(M, { ...f }) }),
                    (0, n.jsx)(r.q, { id: "totp", children: (0, n.jsx)(F, { ...f, isSlideReady: "totp" === h }) }),
                    (0, n.jsx)(r.q, { id: "sms", children: (0, n.jsx)(T, { ...f, isSlideReady: "sms" === h }) }),
                    (0, n.jsx)(r.q, { id: "backup", children: (0, n.jsx)(S, { ...f }) }),
                    (0, n.jsx)(r.q, {
                        id: "backup_ack",
                        children: (0, n.jsx)(k, { ...f, isSlideReady: "backup_ack" === h }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: "password",
                        children: (0, n.jsx)(w, { ...f, isSlideReady: "password" === h }),
                    }),
                ],
            }),
            d &&
                (0, n.jsx)("div", {
                    className: g.c5,
                    children: (0, n.jsx)(a.Q, {
                        text: x.intl.string(x.t["1MrpWO"]),
                        textVariant: "body-sm/medium",
                        onClick: i,
                    }),
                }),
        ],
    });
}
function z(e) {
    let { mfaChallenge: t, finish: s, transitionState: l, onClose: r } = e;
    return (0, n.jsx)(i.d, {
        transitionState: l,
        onClose: r,
        size: "sm",
        "aria-label": x.intl.string(x.t.saHocI),
        children: (0, n.jsx)(Z, { mfaChallenge: t, mfaFinish: s, onClose: r, onEarlyClose: r }),
    });
}
function P(e, t, s) {
    (0, o.mM)(() => Promise.resolve((s) => (0, n.jsx)(z, { finish: t, mfaChallenge: e, ...s })), {
        onCloseCallback: () => {
            s(Error(x.intl.string(x.t.N2yb9a)));
        },
    });
}
