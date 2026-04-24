n.d(e, { a: () => W, t: () => B, MFAModal: () => I });
var s = n(627968),
    a = n(64700),
    i = n(430690),
    r = n(935462),
    l = n(192308),
    o = n(834730),
    c = n(821609),
    u = n(825484),
    d = n(534514),
    h = n(235986),
    g = n(985018),
    m = n(902626);
let p = function (t) {
        let { children: e, scrollbarType: n } = t;
        return (0, s.jsx)(r.$m, { "data-migration-pending": !0, className: m.Qs, scrollbarType: n, children: e });
    },
    f = function (t) {
        let { error: e } = t;
        return null == e
            ? null
            : (0, s.jsx)(o.E, {
                  className: m.z3,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: e,
              });
    },
    x = function (t) {
        let { mfaChallenge: e, setSlide: n, trailingButton: a, showConfirm: i = !1, disabled: l, submitting: o } = t,
            d = e.methods.length > 1;
        return null != a || d || i
            ? (0, s.jsx)(r.jl, {
                  "data-migration-pending": !0,
                  children: (0, s.jsxs)(u.e, {
                      fullWidth: !0,
                      children: [
                          d &&
                              (0, s.jsx)(c.$, {
                                  variant: "secondary",
                                  text: g.intl.string(g.t.Tot4EC),
                                  onClick: () => n("select"),
                              }),
                          i &&
                              (0, s.jsx)(c.$, {
                                  type: "submit",
                                  variant: "primary",
                                  text: g.intl.string(g.t["cY+Oob"]),
                                  disabled: l,
                                  loading: o,
                              }),
                          a,
                      ],
                  }),
              })
            : null;
    },
    b = function (t) {
        let { subtitle: e, onClose: n, headerAlignStart: a } = t;
        return (0, s.jsxs)(r.rQ, {
            "data-migration-pending": !0,
            direction: h.A.Direction.VERTICAL,
            className: m.wx,
            separator: !1,
            align: a ? h.A.Align.START : void 0,
            children: [
                (0, s.jsx)(d.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: g.intl.string(g.t.saHocI),
                }),
                null != e && (0, s.jsx)(d.D, { variant: "heading-lg/semibold", className: m.VA, children: e }),
                (0, s.jsx)(r.s_, { className: m.b, onClick: n }),
            ],
        });
    };
function j(t) {
    let { setSlide: e } = t,
        [n, i] = a.useState(10);
    return (
        a.useEffect(() => {
            if (n > 0) {
                let t = setTimeout(() => {
                    i((t) => t - 1);
                }, 1e3);
                return () => clearTimeout(t);
            }
        }, [n]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(b, { ...t, subtitle: g.intl.string(g.t.c5J7O0) }),
                (0, s.jsxs)(p, {
                    children: [
                        (0, s.jsx)(o.E, { variant: "text-md/normal", children: g.intl.format(g.t.Nixbli, {}) }),
                        (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            children:
                                n > 0 ? g.intl.format(g.t.tsWkAE, { countdown: n }) : g.intl.string(g.t["GK/Qfd"]),
                        }),
                    ],
                }),
                (0, s.jsx)(x, {
                    ...t,
                    trailingButton: (0, s.jsx)(c.$, {
                        variant: "primary",
                        text: g.intl.string(g.t.oyjspn),
                        onClick: () => e("backup_ack"),
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
function C(t) {
    let { mfaChallenge: e, finish: n, setSlide: i, onClose: r, isSlideReady: l, headerAlignStart: o } = t,
        [c, u] = a.useState(!1),
        [d, h] = a.useState(null),
        [m, j] = a.useState(""),
        C = a.useRef(null),
        A = g.intl.string(g.t["C/ZAw/"]),
        k = g.intl.string(g.t.fZSi1D),
        w = a.useCallback(
            (t) => {
                j(t), h(null);
            },
            [j, h],
        );
    return (
        a.useEffect(() => {
            l && C.current?.focus();
        }, [l]),
        (0, s.jsxs)("form", {
            onSubmit: (t) => {
                t.preventDefault(),
                    u(!0),
                    n({ mfaType: "backup", data: m.replace(/-/g, "") })
                        .catch((t) => {
                            h(t.body?.message ?? t.message);
                        })
                        .finally(() => {
                            u(!1);
                        });
            },
            children: [
                (0, s.jsx)(b, { onClose: r, headerAlignStart: o }),
                (0, s.jsxs)(p, {
                    children: [
                        (0, s.jsx)(S.k, {
                            label: A,
                            inputRef: C,
                            onChange: w,
                            placeholder: k,
                            maxLength: y.pu,
                            minLength: y.Zp,
                            value: m,
                            spellCheck: "false",
                            disabled: c,
                        }),
                        (0, s.jsx)(f, { error: d }),
                    ],
                }),
                (0, s.jsx)(x, { mfaChallenge: e, setSlide: i, showConfirm: !0, disabled: m.length < 8, submitting: c }),
            ],
        })
    );
}
function A(t) {
    let { mfaChallenge: e, finish: n, setSlide: i, onClose: r, isSlideReady: l, headerAlignStart: o } = t,
        [c, u] = a.useState(!1),
        [d, h] = a.useState(null),
        [m, j] = a.useState(""),
        y = a.useRef(null);
    return (
        a.useEffect(() => {
            l && y.current?.focus();
        }, [l]),
        (0, s.jsxs)("form", {
            onSubmit: (t) => {
                t.preventDefault(),
                    u(!0),
                    n({ mfaType: "password", data: m })
                        .catch((t) => {
                            h(t.body?.message ?? t.message);
                        })
                        .finally(() => {
                            u(!1);
                        });
            },
            children: [
                (0, s.jsx)(b, { onClose: r, headerAlignStart: o }),
                (0, s.jsxs)(p, {
                    children: [
                        (0, s.jsx)(S.k, {
                            label: g.intl.string(g.t["CIGa+7"]),
                            inputRef: y,
                            onChange: j,
                            value: m,
                            type: "password",
                            autoComplete: "password",
                            spellCheck: "false",
                            disabled: c,
                        }),
                        (0, s.jsx)(f, { error: d }),
                    ],
                }),
                (0, s.jsx)(x, {
                    mfaChallenge: e,
                    setSlide: i,
                    showConfirm: !0,
                    disabled: 0 === m.length,
                    submitting: c,
                }),
            ],
        })
    );
}
var k = n(939249),
    w = n(320448),
    v = n(611248);
function E(t) {
    let { mfaChallenge: e, setSlide: n, onClose: a, headerAlignStart: i } = t;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(b, { subtitle: g.intl.string(g.t["XQaT+8"]), onClose: a, headerAlignStart: i }),
            (0, s.jsx)(p, {
                children: e.methods.map((t) =>
                    (0, s.jsxs)(
                        k.D,
                        {
                            className: m.Ry,
                            onClick: () => {
                                n(t.type);
                            },
                            children: [
                                (0, s.jsx)(o.E, {
                                    className: m.zx,
                                    variant: "text-md/semibold",
                                    children: v.e[t.type],
                                }),
                                (0, s.jsx)(w._, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: m.td,
                                }),
                            ],
                        },
                        t.type,
                    ),
                ),
            }),
        ],
    });
}
var R = n(636537),
    N = n(532446),
    O = n(652215);
function D(t) {
    let { mfaChallenge: e, finish: n, setSlide: i, onClose: r, isSlideReady: l, headerAlignStart: o } = t,
        [u, d] = a.useState(!1),
        [h, m] = a.useState(null),
        [j, C] = a.useState(!1),
        [A, k] = a.useState(null),
        [w, v] = a.useState(""),
        E = a.useRef(null);
    a.useEffect(() => {
        d(!0),
            R.Bo.post({ url: O.Rsh.LOGIN_SMS_SEND, body: { ticket: e.ticket }, oldFormErrors: !0, rejectWithError: !1 })
                .then((t) => {
                    m(t.body.phone);
                })
                .catch((t) => {
                    k(t.body?.message ?? t.message);
                })
                .finally(() => {
                    d(!1);
                });
    }, [e.ticket]),
        a.useEffect(() => {
            l && E.current?.focus();
        }, [l]);
    let D = null == h ? g.intl.string(g.t.LQdCQE) : g.intl.formatToPlainString(g.t["8r6h7+"], { phoneNumber: h });
    return (0, s.jsxs)("form", {
        onSubmit: (t) => {
            t.preventDefault(),
                C(!0),
                n({ mfaType: "sms", data: w })
                    .catch((t) => {
                        k(t.message ?? t.body?.message);
                    })
                    .finally(() => {
                        C(!1);
                    });
        },
        children: [
            (0, s.jsx)(b, { subtitle: D, onClose: r, headerAlignStart: o }),
            (0, s.jsxs)(p, {
                children: [
                    (0, s.jsxs)(N.M, {
                        children: [
                            (0, s.jsx)(S.k, {
                                label: g.intl.string(g.t.HZPBOd),
                                inputRef: E,
                                onChange: v,
                                placeholder: g.intl.string(g.t.tARzgo),
                                maxLength: 10,
                                value: w,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: j,
                            }),
                            (0, s.jsx)(c.$, {
                                variant: "secondary",
                                text: g.intl.string(g.t.ZF29L6),
                                loading: u,
                                onClick: () => {
                                    R.Bo.post({
                                        url: O.Rsh.LOGIN_SMS_SEND,
                                        body: { ticket: e.ticket },
                                        oldFormErrors: !0,
                                        rejectWithError: !1,
                                    })
                                        .then((t) => {
                                            m(t.body.phone);
                                        })
                                        .catch((t) => {
                                            k(t.message || t.body?.message);
                                        });
                                },
                            }),
                        ],
                    }),
                    (0, s.jsx)(f, { error: A }),
                ],
            }),
            (0, s.jsx)(x, {
                mfaChallenge: e,
                setSlide: i,
                showConfirm: !0,
                disabled: w.length !== y.$A,
                submitting: j,
            }),
        ],
    });
}
function T(t) {
    let { mfaChallenge: e, finish: n, setSlide: i, onClose: r, isSlideReady: l, headerAlignStart: o } = t,
        [c, u] = a.useState(!1),
        [d, h] = a.useState(null),
        [m, j] = a.useState(""),
        C = a.useRef(null);
    return (
        a.useEffect(() => {
            l && C.current?.focus();
        }, [l]),
        (0, s.jsxs)("form", {
            onSubmit: (t) => {
                t.preventDefault(),
                    u(!0),
                    h(null),
                    n({ mfaType: "totp", data: m })
                        .catch((t) => {
                            h(t.body?.message ?? t.message);
                        })
                        .finally(() => {
                            u(!1);
                        });
            },
            children: [
                (0, s.jsx)(b, { onClose: r, headerAlignStart: o }),
                (0, s.jsxs)(p, {
                    scrollbarType: "none",
                    children: [
                        (0, s.jsx)(S.k, {
                            label: g.intl.string(g.t.HZPBOd),
                            inputRef: C,
                            onChange: j,
                            placeholder: g.intl.string(g.t.tARzgo),
                            maxLength: y.XZ,
                            minLength: y.XZ,
                            value: m,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: c,
                        }),
                        (0, s.jsx)(f, { error: d }),
                    ],
                }),
                (0, s.jsx)(x, {
                    mfaChallenge: e,
                    setSlide: i,
                    showConfirm: !0,
                    disabled: m.length !== y.XZ,
                    submitting: c,
                }),
            ],
        })
    );
}
var _ = n(84948),
    F = n(293731),
    J = n(464477),
    Z = n(723702),
    K = n(19575);
function L(t) {
    let { mfaChallenge: e, finish: n, setSlide: i, onClose: r, headerAlignStart: l } = t,
        [o, u] = a.useState(!1),
        [d, h] = a.useState(null),
        { challenge: m } = e.methods.find((t) => "webauthn" === t.type),
        j = a.useCallback(async () => {
            u(!0), h(null);
            let t = Z.isPlatformEmbedded && K.Ay.supportsFeature(O.BYE.WEBAUTHN) ? K.Ay.webAuthnAuthenticate : F.J;
            try {
                let e = await t(m);
                try {
                    await n({ mfaType: "webauthn", data: e });
                } catch (t) {
                    t instanceof R.oh
                        ? (t.status >= 400 && t.status < 500 && (await _.A.signalUnknownCredential(e)),
                          h(g.intl.string(g.t.xSCvBf)))
                        : ((0, J.Os)(t, {}), h(t.message));
                }
            } catch (t) {
                (0, J.Os)(t, { extra: { error_type: "webauthn_api_error" } }), h(g.intl.string(g.t.xSCvBf));
            } finally {
                u(!1);
            }
        }, [m, n]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(b, { onClose: r, headerAlignStart: l }),
            null != d && (0, s.jsx)(p, { children: (0, s.jsx)(f, { error: d }) }),
            (0, s.jsx)(x, {
                mfaChallenge: e,
                setSlide: i,
                trailingButton: (0, s.jsx)(c.$, {
                    variant: "primary",
                    text: g.intl.string(g.t.Xr3Eks),
                    loading: o,
                    onClick: j,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function B(t) {
    let { mfaChallenge: e, mfaFinish: n, onEarlyClose: r, onClose: l, headerAlignStart: o, width: c = 440 } = t,
        [u, d] = a.useState(e.methods[0]?.type ?? "select"),
        [h, g] = a.useState(u),
        m = async (t) => {
            let { mfaType: s, data: a } = t;
            await n({ mfaType: s, data: a, ticket: e.ticket }), null != l && l();
        },
        p = { mfaChallenge: e, finish: m, setSlide: d, onClose: r, headerAlignStart: o };
    return (0, s.jsxs)(i.t, {
        activeSlide: u,
        width: c,
        onSlideReady: g,
        children: [
            (0, s.jsx)(i.q, { id: "select", children: (0, s.jsx)(E, { ...p }) }),
            (0, s.jsx)(i.q, { id: "webauthn", children: (0, s.jsx)(L, { ...p }) }),
            (0, s.jsx)(i.q, { id: "totp", children: (0, s.jsx)(T, { ...p, isSlideReady: "totp" === h }) }),
            (0, s.jsx)(i.q, { id: "sms", children: (0, s.jsx)(D, { ...p, isSlideReady: "sms" === h }) }),
            (0, s.jsx)(i.q, { id: "backup", children: (0, s.jsx)(j, { ...p }) }),
            (0, s.jsx)(i.q, { id: "backup_ack", children: (0, s.jsx)(C, { ...p, isSlideReady: "backup_ack" === h }) }),
            (0, s.jsx)(i.q, { id: "password", children: (0, s.jsx)(A, { ...p, isSlideReady: "password" === h }) }),
        ],
    });
}
function I(t) {
    let { mfaChallenge: e, finish: n, transitionState: a, onClose: i } = t;
    return (0, s.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: a,
        size: r.rI.SMALL,
        "aria-label": g.intl.string(g.t.saHocI),
        parentComponent: "MFAModal",
        children: (0, s.jsx)(B, { mfaChallenge: e, mfaFinish: n, onClose: i, onEarlyClose: i }),
    });
}
function W(t, e, n) {
    (0, l.openModal)((n) => (0, s.jsx)(I, { finish: e, mfaChallenge: t, ...n }), {
        onCloseCallback: () => {
            n(Error(g.intl.string(g.t.N2yb9a)));
        },
    });
}
