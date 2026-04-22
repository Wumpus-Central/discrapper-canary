n.d(e, { A: () => M, RegisterWebAuthnCredentialModal: () => L });
var s = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(562465),
    l = n(935462),
    c = n(534514),
    d = n(430690),
    o = n(834730),
    u = n(821609),
    h = n(331322),
    x = n(292666),
    g = n(825484),
    p = n(192308),
    m = n(452027),
    C = n(408278),
    S = n(530005),
    j = n(442433),
    f = n(754333),
    E = n(915089),
    v = n(46054),
    A = n(780964),
    N = n(407186),
    y = n(858897),
    b = n(464477),
    I = n(723702),
    O = n(728458),
    T = n(837921),
    _ = n(3928),
    k = n(917136),
    R = n(976910),
    w = n(293731),
    U = n(31758),
    D = n(652215),
    J = n(985018),
    K = n(88389);
function L(t) {
    let {
            transitionState: e,
            onClose: a,
            ticket: p,
            challenge: m,
            showAccountSettingsButton: C = !1,
            initialSlide: S = U.C.INIT,
        } = t,
        j = (0, E.GV)(),
        [f, b] = i.useState(J.intl.string(J.t["I/sJtJ"])),
        [R, L] = i.useState(!1),
        [M, P] = i.useState(S),
        [F, $] = i.useState(""),
        [G, W] = i.useState(null),
        X = i.useCallback(async () => {
            P(U.C.REGISTER);
            let t =
                I.isPlatformEmbedded && T.Ay.supportsFeature(D.BYE.WEBAUTHN) ? T.Ay.webAuthnRegister(m) : (0, w.v)(m);
            try {
                let e = await t;
                $(e), P(U.C.NAME);
            } catch (t) {
                O.A.captureException(t), W(J.intl.string(J.t.xSCvBf)), P(U.C.INIT);
            }
        }, [m]);
    return (0, s.jsxs)(l.EO, {
        transitionState: e,
        "aria-labelledby": j,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, s.jsxs)(l.rQ, {
                className: K.wx,
                separator: !1,
                children: [
                    (0, s.jsxs)(c.D, {
                        id: j,
                        variant: "heading-lg/semibold",
                        children: [
                            M === U.C.INIT && J.intl.string(J.t.vrOCCk),
                            M === U.C.REGISTER && J.intl.string(J.t.wePEBF),
                            M === U.C.NAME && J.intl.string(J.t["cY/IOu"]),
                            M === U.C.SUCCESS && v.A.parse(J.intl.string(J.t.FXC7ZC)),
                        ],
                    }),
                    (0, s.jsx)(l.s_, { onClick: a, className: K.iT }),
                ],
            }),
            (0, s.jsxs)(d.t, {
                activeSlide: M,
                width: 440,
                children: [
                    (0, s.jsxs)(d.q, {
                        id: U.C.INIT,
                        children: [
                            (0, s.jsxs)(l.$m, {
                                className: K.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: K.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children:
                                            null != G &&
                                            (0, s.jsx)(o.E, {
                                                variant: "text-md/normal",
                                                color: "text-feedback-critical",
                                                children: G,
                                            }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            children: J.intl.string(J.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.jl, {
                                children: (0, s.jsx)(u.$, {
                                    variant: "primary",
                                    text: J.intl.string(J.t.oibaQa),
                                    onClick: X,
                                }),
                            }),
                        ],
                    }),
                    (0, s.jsxs)(d.q, {
                        id: U.C.REGISTER,
                        children: [
                            (0, s.jsxs)(l.$m, {
                                className: K.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: K.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            children: J.intl.string(J.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.jl, {
                                children: (0, s.jsx)(u.$, { variant: "primary", text: "", loading: !0 }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(d.q, {
                        id: U.C.NAME,
                        children: (0, s.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(),
                                    k
                                        .AF(f, p, F)
                                        .then(async () => {
                                            C ? P(U.C.SUCCESS) : (await (0, N.sy)(!1), a());
                                        })
                                        .catch((t) => {
                                            t instanceof r.oh &&
                                                t.status >= 400 &&
                                                t.status < 500 &&
                                                _.A.signalUnknownCredential(F),
                                                W(J.intl.string(J.t.fEptJP)),
                                                P(U.C.INIT);
                                        });
                            },
                            children: [
                                (0, s.jsxs)(l.$m, {
                                    className: K.Qs,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: K.Kk,
                                            children: (0, s.jsx)("img", { alt: "", src: n(179644) }),
                                        }),
                                        (0, s.jsxs)(h.B, {
                                            gap: 8,
                                            children: [
                                                (0, s.jsx)(o.E, {
                                                    variant: "text-md/normal",
                                                    children: J.intl.string(J.t["Jzd+z/"]),
                                                }),
                                                (0, s.jsx)(x.k, {
                                                    value: f,
                                                    onChange: (t) => {
                                                        b(t), L(0 === t.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(l.jl, {
                                    className: K.qr,
                                    children: (0, s.jsxs)(g.e, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, s.jsx)(u.$, {
                                                variant: "primary",
                                                text: J.intl.string(J.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: R,
                                            }),
                                            (0, s.jsx)(u.$, {
                                                variant: "secondary",
                                                text: J.intl.string(J.t["13/7kX"]),
                                                onClick: () => {
                                                    P(U.C.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)(d.q, {
                        id: U.C.SUCCESS,
                        children: [
                            (0, s.jsxs)(l.$m, {
                                className: K.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: K.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(179644) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(o.E, {
                                            variant: "text-md/normal",
                                            children: J.intl.string(J.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.jl, {
                                className: K.qr,
                                children: (0, s.jsxs)(g.e, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, s.jsx)(u.$, {
                                            variant: "primary",
                                            text: J.intl.string(J.t.MubYG8),
                                            onClick: () => {
                                                a(), (0, y.openUserSettings)(A.X.ACCOUNT_PANEL);
                                            },
                                        }),
                                        (0, s.jsx)(u.$, {
                                            variant: "secondary",
                                            text: J.intl.string(J.t.i4jeWR),
                                            onClick: a,
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
function M() {
    let {
        credentials: t,
        hasFetchedCredentials: e,
        hasPendingRegisterTrigger: n,
    } = (0, a.cf)([R.A], () => ({
        hasFetchedCredentials: R.A.hasFetchedCredentials(),
        credentials: R.A.getCredentials(),
        hasPendingRegisterTrigger: R.A.hasPendingRegisterTrigger(),
    }));
    i.useEffect(() => {
        e || k.JQ();
    }, [e]),
        i.useEffect(
            () => () => {
                R.A.hasPendingRegisterTrigger() && k.XW();
            },
            [],
        );
    let [r, l] = i.useState(!1),
        c = i.useCallback(() => {
            l(!0),
                k
                    .startRegisterWebAuthnCredential()
                    .then((t) => {
                        let { ticket: e, challenge: n } = t;
                        (0, p.openModal)((t) => (0, s.jsx)(L, { ...t, ticket: e, challenge: n }));
                    })
                    .catch((t) => {
                        t.message !== J.intl.string(J.t.N2yb9a) && O.A.captureException(t);
                    })
                    .finally(() => {
                        l(!1);
                    });
        }, []);
    return (
        i.useEffect(() => {
            n && !r && (k.XW(), c());
        }, [n, r, c]),
        (0, s.jsxs)(m.D, {
            label: J.intl.string(J.t.y7SXYX),
            description: J.intl.string(J.t.TMukAN),
            children: [
                t.length > 0 && (0, s.jsx)("div", { className: K.KY, children: t.map(P) }),
                (0, s.jsx)("div", {
                    children: (0, s.jsx)(u.$, {
                        variant: "primary",
                        size: "sm",
                        text: J.intl.string(J.t.vrOCCk),
                        onClick: c,
                        loading: r,
                        disabled: !b.d4,
                    }),
                }),
            ],
        })
    );
}
function P(t) {
    return (0, s.jsxs)(
        "div",
        {
            className: K.De,
            children: [
                (0, s.jsx)(o.E, { variant: "text-md/semibold", children: t.name }),
                (function (t) {
                    if (null !== t.last_used)
                        return (0, s.jsx)(o.E, {
                            variant: "text-sm/normal",
                            children: J.intl.format(J.t["7JgxF5"], { lastUsed: (0, f.Y)(t.last_used) }),
                        });
                })(t),
                (0, s.jsx)(C.K, {
                    icon: { type: "icon", asset: S.F },
                    onClick: (e) => {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                            return (n) => (0, s.jsx)(e, { ...n, credential: t });
                        });
                    },
                    "aria-label": J.intl.string(J.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        t.id,
    );
}
