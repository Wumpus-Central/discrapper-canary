n.d(t, {
    A: () => P,
    RegisterWebAuthnCredentialModal: () => R,
}),
    n(896048),
    n(457529),
    n(492834);
var r = n(627968),
    i = n(64700),
    a = n(460648),
    s = n(311907),
    o = n(397927),
    l = n(442433),
    c = n(754333),
    u = n(915089),
    d = n(46054),
    f = n(780964),
    p = n(179690),
    _ = n(840065),
    h = n(464477),
    m = n(723702),
    g = n(728458),
    E = n(837921),
    y = n(917136),
    b = n(976910),
    O = n(31758),
    v = n(652215),
    A = n(985018),
    I = n(754388);

function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}

function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function R(e) {
    let {
            transitionState: t,
            onClose: s,
            ticket: l,
            challenge: c,
            showAccountSettingsButton: h = !1,
            initialSlide: b = O.C.INIT,
        } = e,
        S = (0, u.GV)(),
        [T, C] = i.useState(A.intl.string(A.t["I/sJtJ"])),
        [N, R] = i.useState(!1),
        [w, P] = i.useState(b),
        [D, x] = i.useState(""),
        [L, j] = i.useState(null),
        M = async () => {
            let e;
            P(O.C.REGISTER);
            let t =
                m.isPlatformEmbedded && E.Ay.supportsFeature(v.BYE.WEBAUTHN)
                    ? E.Ay.webAuthnRegister(c)
                    : a.vt(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                g.A.captureException(e), j(A.intl.string(A.t.xSCvBf)), P(O.C.INIT);
                return;
            }
            x(e), P(O.C.NAME);
        };
    return (0, r.jsxs)(o.EOs, {
        transitionState: t,
        "aria-labelledby": S,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, r.jsxs)(o.rQ0, {
                className: I.wx,
                separator: !1,
                children: [
                    (0, r.jsxs)(o.Heading, {
                        id: S,
                        variant: "heading-lg/semibold",
                        children: [
                            w === O.C.INIT && A.intl.string(A.t.vrOCCk),
                            w === O.C.REGISTER && A.intl.string(A.t.wePEBF),
                            w === O.C.NAME && A.intl.string(A.t["cY/IOu"]),
                            w === O.C.SUCCESS && d.A.parse(A.intl.string(A.t.FXC7ZC)),
                        ],
                    }),
                    (0, r.jsx)(o.s_y, {
                        onClick: s,
                        className: I.iT,
                    }),
                ],
            }),
            (0, r.jsxs)(o.tN_, {
                activeSlide: w,
                width: 440,
                children: [
                    (0, r.jsxs)(o.q7S, {
                        id: O.C.INIT,
                        children: [
                            (0, r.jsxs)(o.$mQ, {
                                className: I.Qs,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.Kk,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(142668),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children:
                                            null != L &&
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-md/normal",
                                                color: "text-feedback-critical",
                                                children: L,
                                            }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: A.intl.string(A.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.jlY, {
                                children: (0, r.jsx)(o.Button, {
                                    variant: "primary",
                                    text: A.intl.string(A.t.oibaQa),
                                    onClick: M,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(o.q7S, {
                        id: O.C.REGISTER,
                        children: [
                            (0, r.jsxs)(o.$mQ, {
                                className: I.Qs,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.Kk,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(142668),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: A.intl.string(A.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.jlY, {
                                children: (0, r.jsx)(o.Button, {
                                    variant: "primary",
                                    text: "",
                                    loading: !0,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.q7S, {
                        id: O.C.NAME,
                        children: (0, r.jsxs)("form", {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    y
                                        .AF(T, l, D)
                                        .then(async () => {
                                            h ? P(O.C.SUCCESS) : (await (0, p.sy)(!1), s());
                                        })
                                        .catch(() => {
                                            j(A.intl.string(A.t.fEptJP)), P(O.C.INIT);
                                        });
                            },
                            children: [
                                (0, r.jsxs)(o.$mQ, {
                                    className: I.Qs,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: I.Kk,
                                            children: (0, r.jsx)("img", {
                                                alt: "",
                                                src: n(179644),
                                            }),
                                        }),
                                        (0, r.jsxs)(o.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/normal",
                                                    children: A.intl.string(A.t["Jzd+z/"]),
                                                }),
                                                (0, r.jsx)(o.ksK, {
                                                    value: T,
                                                    onChange: (e) => {
                                                        C(e), R(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(o.jlY, {
                                    className: I.qr,
                                    children: (0, r.jsxs)(o.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, r.jsx)(o.Button, {
                                                variant: "primary",
                                                text: A.intl.string(A.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: N,
                                            }),
                                            (0, r.jsx)(o.Button, {
                                                variant: "secondary",
                                                text: A.intl.string(A.t["13/7kX"]),
                                                onClick: () => {
                                                    P(O.C.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)(o.q7S, {
                        id: O.C.SUCCESS,
                        children: [
                            (0, r.jsxs)(o.$mQ, {
                                className: I.Qs,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.Kk,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(179644),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: A.intl.string(A.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.jlY, {
                                className: I.qr,
                                children: (0, r.jsxs)(o.ButtonGroup, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, r.jsx)(o.Button, {
                                            variant: "primary",
                                            text: A.intl.string(A.t.MubYG8),
                                            onClick: () => {
                                                s(),
                                                    (0, _.openUserSettings)(f.X.ACCOUNT_PANEL, {
                                                        section: v.nc_.ACCOUNT,
                                                    });
                                            },
                                        }),
                                        (0, r.jsx)(o.Button, {
                                            variant: "secondary",
                                            text: A.intl.string(A.t.i4jeWR),
                                            onClick: s,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

function w(e) {
    let { onSelect: t, credential: i } = e;
    return (0, r.jsxs)(o.W1t, {
        "data-menu-migration-ready": !0,
        navId: "webauthn-credential-actions",
        onClose: l.Z_,
        "aria-label": A.intl.string(A.t["+nrTbK"]),
        onSelect: t,
        children: [
            (0, r.jsx)(o.Drp, {
                id: "webauthn-edit-credential-".concat(i.id),
                label: A.intl.string(A.t.bt75uw),
                action: () => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await n.e("50267").then(n.bind(n, 428726));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                T(
                                    {
                                        credential: i,
                                    },
                                    t,
                                ),
                            );
                    });
                },
            }),
            (0, r.jsx)(o.Drp, {
                id: "webauthn-delete-credential-".concat(i.id),
                label: A.intl.string(A.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    y.fR(i);
                },
            }),
        ],
    });
}

function P() {
    let {
        credentials: e,
        hasFetchedCredentials: t,
        hasPendingRegisterTrigger: n,
    } = (0, s.cf)([b.A], () => ({
        hasFetchedCredentials: b.A.hasFetchedCredentials(),
        credentials: b.A.getCredentials(),
        hasPendingRegisterTrigger: b.A.hasPendingRegisterTrigger(),
    }));
    i.useEffect(() => {
        t || y.JQ();
    }, [t]),
        i.useEffect(
            () => () => {
                b.A.hasPendingRegisterTrigger() && y.XW();
            },
            [],
        );
    let [a, l] = i.useState(!1),
        c = i.useCallback(() => {
            l(!0),
                y
                    .startRegisterWebAuthnCredential()
                    .then((e) => {
                        let { ticket: t, challenge: n } = e;
                        (0, o.qfG)((e) =>
                            (0, r.jsx)(
                                R,
                                N(T({}, e), {
                                    ticket: t,
                                    challenge: n,
                                }),
                            ),
                        );
                    })
                    .catch((e) => {
                        e.message !== A.intl.string(A.t.N2yb9a) && g.A.captureException(e);
                    })
                    .finally(() => {
                        l(!1);
                    });
        }, []);
    return (
        i.useEffect(() => {
            n && !a && (y.XW(), c());
        }, [n, a, c]),
        (0, r.jsxs)(o.D0$, {
            label: A.intl.string(A.t.y7SXYX),
            description: A.intl.string(A.t.TMukAN),
            children: [
                e.length > 0 &&
                    (0, r.jsx)("div", {
                        className: I.KY,
                        children: e.map(x),
                    }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.Button, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(A.t.vrOCCk),
                        onClick: c,
                        loading: a,
                        disabled: !h.d4,
                    }),
                }),
            ],
        })
    );
}

function D(e) {
    if (null !== e.last_used)
        return (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: A.intl.format(A.t["7JgxF5"], {
                lastUsed: (0, c.Y)(e.last_used),
            }),
        });
}

function x(e) {
    return (0, r.jsxs)(
        "div",
        {
            className: I.De,
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: e.name,
                }),
                D(e),
                (0, r.jsx)(o.K0, {
                    icon: {
                        type: "icon",
                        asset: o.FHP,
                    },
                    onClick: (t) => {
                        (0, l.jA)(t, (t) =>
                            (0, r.jsx)(
                                w,
                                N(T({}, t), {
                                    credential: e,
                                }),
                            ),
                        );
                    },
                    "aria-label": A.intl.string(A.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        e.id,
    );
}
