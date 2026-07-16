n.d(t, { a: () => z, t: () => $, MFAModal: () => q });
var s = n(627968),
    l = n(64700),
    a = n(430690),
    i = n(123292),
    r = n(935462),
    o = n(192308),
    d = n(834730),
    c = n(825484),
    u = n(821609),
    h = n(297264),
    m = n(235986),
    g = n(375708),
    x = n(902626);
let f = l.createContext(!1),
    p = function (e) {
        let { children: t, scrollbarType: n } = e,
            a = l.useContext(f);
        return (0, s.jsx)(r.$m, {
            "data-migration-pending": !0,
            className: a ? x.m6 : x.Qs,
            scrollbarType: n,
            children: t,
        });
    },
    j = function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, s.jsx)(d.E, {
                  className: x.z3,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    b = function (e) {
        let { mfaChallenge: t, setSlide: n, trailingButton: a, showConfirm: i = !1, disabled: o, submitting: d } = e,
            h = l.useContext(f),
            m = t.methods.length > 1;
        if (null == a && !m && !i) return null;
        let p = (0, s.jsxs)(c.e, {
            fullWidth: !0,
            children: [
                m &&
                    (0, s.jsx)(u.$, {
                        variant: "secondary",
                        text: g.intl.string(g.t.Tot4EC),
                        onClick: () => n("select"),
                    }),
                i &&
                    (0, s.jsx)(u.$, {
                        type: "submit",
                        variant: "primary",
                        text: g.intl.string(g.t["cY+Oob"]),
                        disabled: o,
                        loading: d,
                    }),
                a,
            ],
        });
        return h
            ? (0, s.jsx)("div", { className: x.cZ, children: p })
            : (0, s.jsx)(r.jl, { "data-migration-pending": !0, children: p });
    },
    y = function (e) {
        let { subtitle: t, onClose: n, headerAlignStart: a } = e;
        return l.useContext(f)
            ? null
            : (0, s.jsxs)(r.rQ, {
                  "data-migration-pending": !0,
                  direction: m.A.Direction.VERTICAL,
                  className: x.wx,
                  separator: !1,
                  align: a ? m.A.Align.START : void 0,
                  children: [
                      (0, s.jsx)(h.D, {
                          variant: "heading-xl/semibold",
                          color: "text-strong",
                          children: g.intl.string(g.t.saHocI),
                      }),
                      null != t && (0, s.jsx)(h.D, { variant: "heading-lg/semibold", className: x.VA, children: t }),
                      (0, s.jsx)(r.s_, { className: x.b, onClick: n }),
                  ],
              });
    };
function C(e) {
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
                (0, s.jsx)(y, { ...e, subtitle: g.intl.string(g.t.c5J7O0) }),
                (0, s.jsxs)(p, {
                    children: [
                        (0, s.jsx)(d.E, { variant: "text-md/normal", children: g.intl.format(g.t.Nixbli, {}) }),
                        (0, s.jsx)(d.E, {
                            variant: "text-md/normal",
                            children:
                                n > 0 ? g.intl.format(g.t.tsWkAE, { countdown: n }) : g.intl.string(g.t["GK/Qfd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(b, {
                    ...e,
                    trailingButton: (0, s.jsx)(u.$, {
                        variant: "primary",
                        text: g.intl.string(g.t.oyjspn),
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
var S = n(533925),
    k = n(292666);
function v(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, isSlideReady: r, headerAlignStart: o } = e,
        [d, c] = l.useState(!1),
        [u, h] = l.useState(null),
        [m, x] = l.useState(""),
        f = l.useRef(null),
        C = g.intl.string(g.t["C/ZAw/"]),
        v = g.intl.string(g.t.fZSi1D),
        w = l.useCallback(
            (e) => {
                x(e), h(null);
            },
            [x, h],
        );
    return (
        l.useEffect(() => {
            r && f.current?.focus();
        }, [r]),
        (0, s.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    n({ mfaType: "backup", data: m.replace(/-/g, "") })
                        .catch((e) => {
                            h(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, s.jsx)(y, { onClose: i, headerAlignStart: o }),
                (0, s.jsxs)(p, {
                    children: [
                        (0, s.jsx)(k.k, {
                            label: C,
                            inputRef: f,
                            onChange: w,
                            placeholder: v,
                            maxLength: S.pu,
                            minLength: S.Zp,
                            value: m,
                            spellCheck: "false",
                            disabled: d,
                        }),
                        (0, s.jsx)(j, { error: u }),
                    ],
                }),
                (0, s.jsx)(b, { mfaChallenge: t, setSlide: a, showConfirm: !0, disabled: m.length < 8, submitting: d }),
            ],
        })
    );
}
function w(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, isSlideReady: r, headerAlignStart: o } = e,
        [d, c] = l.useState(!1),
        [u, h] = l.useState(null),
        [m, x] = l.useState(""),
        f = l.useRef(null);
    return (
        l.useEffect(() => {
            r && f.current?.focus();
        }, [r]),
        (0, s.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    n({ mfaType: "password", data: m })
                        .catch((e) => {
                            h(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, s.jsx)(y, { onClose: i, headerAlignStart: o }),
                (0, s.jsxs)(p, {
                    children: [
                        (0, s.jsx)(k.k, {
                            label: g.intl.string(g.t["CIGa+7"]),
                            inputRef: f,
                            onChange: x,
                            value: m,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: d,
                        }),
                        (0, s.jsx)(j, { error: u }),
                    ],
                }),
                (0, s.jsx)(b, {
                    mfaChallenge: t,
                    setSlide: a,
                    showConfirm: !0,
                    disabled: 0 === m.length,
                    submitting: d,
                }),
            ],
        })
    );
}
var E = n(939249),
    A = n(320448),
    R = n(611248);
function N(e) {
    let { mfaChallenge: t, setSlide: n, onClose: l, headerAlignStart: a } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(y, { subtitle: g.intl.string(g.t["XQaT+8"]), onClose: l, headerAlignStart: a }),
            (0, s.jsx)(p, {
                children: t.methods.map((e) =>
                    (0, s.jsxs)(
                        E.D,
                        {
                            className: x.Ry,
                            onClick: () => {
                                n(e.type);
                            },
                            children: [
                                (0, s.jsx)(d.E, {
                                    className: x.zx,
                                    variant: "text-md/semibold",
                                    children: R.e[e.type],
                                }),
                                (0, s.jsx)(A._, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: x.td,
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
var T = n(636537),
    _ = n(532446),
    Z = n(652215);
function D(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, isSlideReady: r, headerAlignStart: o } = e,
        [d, c] = l.useState(!1),
        [h, m] = l.useState(null),
        [x, f] = l.useState(!1),
        [C, v] = l.useState(null),
        [w, E] = l.useState(""),
        A = l.useRef(null);
    l.useEffect(() => {
        c(!0),
            T.Bo.post({ url: Z.Rsh.LOGIN_SMS_SEND, body: { ticket: t.ticket }, oldFormErrors: !0, rejectWithError: !1 })
                .then((e) => {
                    m(e.body.phone);
                })
                .catch((e) => {
                    v(e.body?.message ?? e.message);
                })
                .finally(() => {
                    c(!1);
                });
    }, [t.ticket]),
        l.useEffect(() => {
            r && A.current?.focus();
        }, [r]);
    let R = null == h ? g.intl.string(g.t.LQdCQE) : g.intl.formatToPlainString(g.t["8r6h7+"], { phoneNumber: h });
    return (0, s.jsxs)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                f(!0),
                n({ mfaType: "sms", data: w })
                    .catch((e) => {
                        v(e.message ?? e.body?.message);
                    })
                    .finally(() => {
                        f(!1);
                    });
        },
        children: [
            (0, s.jsx)(y, { subtitle: R, onClose: i, headerAlignStart: o }),
            (0, s.jsxs)(p, {
                children: [
                    (0, s.jsxs)(_.M, {
                        children: [
                            (0, s.jsx)(k.k, {
                                label: g.intl.string(g.t.HZPBOd),
                                inputRef: A,
                                onChange: E,
                                placeholder: g.intl.string(g.t.tARzgo),
                                maxLength: 10,
                                value: w,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: x,
                            }),
                            (0, s.jsx)(u.$, {
                                variant: "secondary",
                                text: g.intl.string(g.t.ZF29L6),
                                loading: d,
                                onClick: () => {
                                    T.Bo.post({
                                        url: Z.Rsh.LOGIN_SMS_SEND,
                                        body: { ticket: t.ticket },
                                        oldFormErrors: !0,
                                        rejectWithError: !1,
                                    })
                                        .then((e) => {
                                            m(e.body.phone);
                                        })
                                        .catch((e) => {
                                            v(e.message || e.body?.message);
                                        });
                                },
                            }),
                        ],
                    }),
                    (0, s.jsx)(j, { error: C }),
                ],
            }),
            (0, s.jsx)(b, {
                mfaChallenge: t,
                setSlide: a,
                showConfirm: !0,
                disabled: w.length !== S.$A,
                submitting: x,
            }),
        ],
    });
}
function F(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, isSlideReady: r, headerAlignStart: o } = e,
        [d, c] = l.useState(!1),
        [u, h] = l.useState(null),
        [m, x] = l.useState(""),
        f = l.useRef(null);
    return (
        l.useEffect(() => {
            r && f.current?.focus();
        }, [r]),
        (0, s.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(),
                    c(!0),
                    h(null),
                    n({ mfaType: "totp", data: m })
                        .catch((e) => {
                            h(e.body?.message ?? e.message);
                        })
                        .finally(() => {
                            c(!1);
                        });
            },
            children: [
                (0, s.jsx)(y, { onClose: i, headerAlignStart: o }),
                (0, s.jsxs)(p, {
                    scrollbarType: "none",
                    children: [
                        (0, s.jsx)(k.k, {
                            label: g.intl.string(g.t.HZPBOd),
                            inputRef: f,
                            onChange: x,
                            placeholder: g.intl.string(g.t.tARzgo),
                            maxLength: S.XZ,
                            minLength: S.XZ,
                            value: m,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: d,
                        }),
                        (0, s.jsx)(j, { error: u }),
                    ],
                }),
                (0, s.jsx)(b, {
                    mfaChallenge: t,
                    setSlide: a,
                    showConfirm: !0,
                    disabled: m.length !== S.XZ,
                    submitting: d,
                }),
            ],
        })
    );
}
var L = n(84948),
    B = n(293731),
    M = n(464477),
    O = n(723702),
    W = n(19575);
function X(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: i, headerAlignStart: r } = e,
        [o, d] = l.useState(!1),
        [c, h] = l.useState(null),
        { challenge: m } = t.methods.find((e) => "webauthn" === e.type),
        x = l.useCallback(async () => {
            d(!0), h(null);
            let e = O.isPlatformEmbedded && W.Ay.supportsFeature(Z.BYE.WEBAUTHN) ? W.Ay.webAuthnAuthenticate : B.J;
            try {
                let t = await e(m);
                try {
                    await n({ mfaType: "webauthn", data: t });
                } catch (e) {
                    e instanceof T.oh
                        ? (e.status >= 400 && e.status < 500 && (await L.A.signalUnknownCredential(t)),
                          h(g.intl.string(g.t.xSCvBf)))
                        : ((0, M.Os)(e, {}), h(e.message));
                }
            } catch (e) {
                (0, M.Os)(e, { extra: { error_type: "webauthn_api_error" } }), h(g.intl.string(g.t.xSCvBf));
            } finally {
                d(!1);
            }
        }, [m, n]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(y, { onClose: i, headerAlignStart: r }),
            null != c && (0, s.jsx)(p, { children: (0, s.jsx)(j, { error: c }) }),
            (0, s.jsx)(b, {
                mfaChallenge: t,
                setSlide: a,
                trailingButton: (0, s.jsx)(u.$, {
                    variant: "primary",
                    text: g.intl.string(g.t.Xr3Eks),
                    loading: o,
                    onClick: x,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function $(e) {
    let {
            mfaChallenge: t,
            mfaFinish: n,
            onEarlyClose: r,
            onClose: o,
            headerAlignStart: d,
            width: c = 440,
            embedded: u = !1,
        } = e,
        [h, m] = l.useState(t.methods[0]?.type ?? "select"),
        [p, j] = l.useState(h),
        b = async (e) => {
            let { mfaType: s, data: l } = e;
            await n({ mfaType: s, data: l, ticket: t.ticket }), null != o && o();
        },
        y = { mfaChallenge: t, finish: b, setSlide: m, onClose: r, headerAlignStart: d };
    return (0, s.jsxs)(f.Provider, {
        value: u,
        children: [
            (0, s.jsxs)(a.t, {
                activeSlide: h,
                width: c,
                onSlideReady: j,
                children: [
                    (0, s.jsx)(a.q, { id: "select", children: (0, s.jsx)(N, { ...y }) }),
                    (0, s.jsx)(a.q, { id: "webauthn", children: (0, s.jsx)(X, { ...y }) }),
                    (0, s.jsx)(a.q, { id: "totp", children: (0, s.jsx)(F, { ...y, isSlideReady: "totp" === p }) }),
                    (0, s.jsx)(a.q, { id: "sms", children: (0, s.jsx)(D, { ...y, isSlideReady: "sms" === p }) }),
                    (0, s.jsx)(a.q, { id: "backup", children: (0, s.jsx)(C, { ...y }) }),
                    (0, s.jsx)(a.q, {
                        id: "backup_ack",
                        children: (0, s.jsx)(v, { ...y, isSlideReady: "backup_ack" === p }),
                    }),
                    (0, s.jsx)(a.q, {
                        id: "password",
                        children: (0, s.jsx)(w, { ...y, isSlideReady: "password" === p }),
                    }),
                ],
            }),
            u &&
                (0, s.jsx)("div", {
                    className: x.c5,
                    children: (0, s.jsx)(i.Q, {
                        text: g.intl.string(g.t["1MrpWO"]),
                        textVariant: "text-sm/medium",
                        onClick: r,
                    }),
                }),
        ],
    });
}
function q(e) {
    let { mfaChallenge: t, finish: n, transitionState: l, onClose: a } = e;
    return (0, s.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: l,
        size: r.rI.SMALL,
        "aria-label": g.intl.string(g.t.saHocI),
        parentComponent: "MFAModal",
        children: (0, s.jsx)($, { mfaChallenge: t, mfaFinish: n, onClose: a, onEarlyClose: a }),
    });
}
function z(e, t, n) {
    (0, o.openModal)((n) => (0, s.jsx)(q, { finish: t, mfaChallenge: e, ...n }), {
        onCloseCallback: () => {
            n(Error(g.intl.string(g.t.N2yb9a)));
        },
    });
}
