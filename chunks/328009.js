n.d(e, { RegisterWebAuthnCredentialModal: () => M, A: () => P });
var s,
    i = n(627968),
    a = n(64700),
    r = n(17928),
    l = n(636537),
    c = n(935462),
    d = n(534514),
    o = n(430690),
    u = n(834730),
    h = n(821609),
    x = n(331322),
    g = n(292666),
    p = n(825484),
    m = n(192308),
    S = n(452027),
    j = n(408278),
    C = n(530005),
    f = n(442433),
    E = n(390310),
    v = n(915089),
    A = n(46054),
    N = n(780964),
    y = n(407186),
    b = n(858897),
    I = n(464477),
    O = n(723702),
    T = n(38405),
    _ = n(19575),
    k = n(84948),
    R = n(917136),
    w = n(976910),
    U = n(293731),
    D =
        (((s = {}).MODAL_UPSELL = "MODAL_UPSELL"),
        (s.INIT = "INIT"),
        (s.EDIT = "EDIT"),
        (s.REGISTER = "REGISTER"),
        (s.NAME = "NAME"),
        (s.SUCCESS = "SUCCESS"),
        s),
    J = n(652215),
    K = n(985018),
    L = n(790085);
function M(t) {
    let {
            transitionState: e,
            onClose: s,
            ticket: r,
            challenge: m,
            showAccountSettingsButton: S = !1,
            initialSlide: j = D.INIT,
        } = t,
        C = (0, v.GV)(),
        [f, E] = a.useState(K.intl.string(K.t["I/sJtJ"])),
        [I, w] = a.useState(!1),
        [M, P] = a.useState(j),
        [F, $] = a.useState(""),
        [G, W] = a.useState(null),
        X = a.useCallback(async () => {
            P(D.REGISTER);
            let t =
                O.isPlatformEmbedded && _.Ay.supportsFeature(J.BYE.WEBAUTHN) ? _.Ay.webAuthnRegister(m) : (0, U.v)(m);
            try {
                let e = await t;
                $(e), P(D.NAME);
            } catch (t) {
                T.A.captureException(t), W(K.intl.string(K.t.xSCvBf)), P(D.INIT);
            }
        }, [m]);
    return (0, i.jsxs)(c.EO, {
        transitionState: e,
        "aria-labelledby": C,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, i.jsxs)(c.rQ, {
                className: L.wx,
                separator: !1,
                children: [
                    (0, i.jsxs)(d.D, {
                        id: C,
                        variant: "heading-lg/semibold",
                        children: [
                            M === D.INIT && K.intl.string(K.t.vrOCCk),
                            M === D.REGISTER && K.intl.string(K.t.wePEBF),
                            M === D.NAME && K.intl.string(K.t["cY/IOu"]),
                            M === D.SUCCESS && A.A.parse(K.intl.string(K.t.FXC7ZC)),
                        ],
                    }),
                    (0, i.jsx)(c.s_, { onClick: s, className: L.iT }),
                ],
            }),
            (0, i.jsxs)(o.t, {
                activeSlide: M,
                width: 440,
                children: [
                    (0, i.jsxs)(o.q, {
                        id: D.INIT,
                        children: [
                            (0, i.jsxs)(c.$m, {
                                className: L.Qs,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: L.Kk,
                                        children: (0, i.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, i.jsx)("div", {
                                        children:
                                            null != G &&
                                            (0, i.jsx)(u.E, {
                                                variant: "text-md/normal",
                                                color: "text-feedback-critical",
                                                children: G,
                                            }),
                                    }),
                                    (0, i.jsx)("div", {
                                        children: (0, i.jsx)(u.E, {
                                            variant: "text-md/normal",
                                            children: K.intl.string(K.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.jl, {
                                children: (0, i.jsx)(h.$, {
                                    variant: "primary",
                                    text: K.intl.string(K.t.oibaQa),
                                    onClick: X,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(o.q, {
                        id: D.REGISTER,
                        children: [
                            (0, i.jsxs)(c.$m, {
                                className: L.Qs,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: L.Kk,
                                        children: (0, i.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, i.jsx)("div", {
                                        children: (0, i.jsx)(u.E, {
                                            variant: "text-md/normal",
                                            children: K.intl.string(K.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.jl, {
                                children: (0, i.jsx)(h.$, { variant: "primary", text: "", loading: !0 }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.q, {
                        id: D.NAME,
                        children: (0, i.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(),
                                    R.AF(f, r, F)
                                        .then(async () => {
                                            S ? P(D.SUCCESS) : (await (0, y.sy)(!1), s());
                                        })
                                        .catch((t) => {
                                            t instanceof l.oh &&
                                                t.status >= 400 &&
                                                t.status < 500 &&
                                                k.A.signalUnknownCredential(F),
                                                W(K.intl.string(K.t.fEptJP)),
                                                P(D.INIT);
                                        });
                            },
                            children: [
                                (0, i.jsxs)(c.$m, {
                                    className: L.Qs,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: L.Kk,
                                            children: (0, i.jsx)("img", { alt: "", src: n(179644) }),
                                        }),
                                        (0, i.jsxs)(x.B, {
                                            gap: 8,
                                            children: [
                                                (0, i.jsx)(u.E, {
                                                    variant: "text-md/normal",
                                                    children: K.intl.string(K.t["Jzd+z/"]),
                                                }),
                                                (0, i.jsx)(g.k, {
                                                    value: f,
                                                    "aria-label": K.intl.string(K.t["Jzd+z/"]),
                                                    onChange: (t) => {
                                                        E(t), w(0 === t.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(c.jl, {
                                    className: L.qr,
                                    children: (0, i.jsxs)(p.e, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "primary",
                                                text: K.intl.string(K.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: I,
                                            }),
                                            (0, i.jsx)(h.$, {
                                                variant: "secondary",
                                                text: K.intl.string(K.t["13/7kX"]),
                                                onClick: () => {
                                                    P(D.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)(o.q, {
                        id: D.SUCCESS,
                        children: [
                            (0, i.jsxs)(c.$m, {
                                className: L.Qs,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: L.Kk,
                                        children: (0, i.jsx)("img", { alt: "", src: n(179644) }),
                                    }),
                                    (0, i.jsx)("div", {
                                        children: (0, i.jsx)(u.E, {
                                            variant: "text-md/normal",
                                            children: K.intl.string(K.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.jl, {
                                className: L.qr,
                                children: (0, i.jsxs)(p.e, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, i.jsx)(h.$, {
                                            variant: "primary",
                                            text: K.intl.string(K.t.MubYG8),
                                            onClick: () => {
                                                s(), (0, b.openUserSettings)(N.X.ACCOUNT_PANEL);
                                            },
                                        }),
                                        (0, i.jsx)(h.$, {
                                            variant: "secondary",
                                            text: K.intl.string(K.t.i4jeWR),
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
function P() {
    let {
        credentials: t,
        hasFetchedCredentials: e,
        hasPendingRegisterTrigger: n,
    } = (0, r.cf)([w.A], () => ({
        hasFetchedCredentials: w.A.hasFetchedCredentials(),
        credentials: w.A.getCredentials(),
        hasPendingRegisterTrigger: w.A.hasPendingRegisterTrigger(),
    }));
    a.useEffect(() => {
        e || R.JQ();
    }, [e]),
        a.useEffect(
            () => () => {
                w.A.hasPendingRegisterTrigger() && R.XW();
            },
            [],
        );
    let [s, l] = a.useState(!1),
        c = a.useCallback(() => {
            l(!0),
                R.startRegisterWebAuthnCredential()
                    .then((t) => {
                        let { ticket: e, challenge: n } = t;
                        (0, m.openModal)((t) => (0, i.jsx)(M, { ...t, ticket: e, challenge: n }));
                    })
                    .catch((t) => {
                        t.message !== K.intl.string(K.t.N2yb9a) && T.A.captureException(t);
                    })
                    .finally(() => {
                        l(!1);
                    });
        }, []);
    return (
        a.useEffect(() => {
            n && !s && (R.XW(), c());
        }, [n, s, c]),
        (0, i.jsxs)(S.D, {
            label: K.intl.string(K.t.y7SXYX),
            description: K.intl.string(K.t.TMukAN),
            children: [
                t.length > 0 && (0, i.jsx)("div", { className: L.KY, children: t.map(F) }),
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: K.intl.string(K.t.vrOCCk),
                        onClick: c,
                        loading: s,
                        disabled: !I.d4,
                    }),
                }),
            ],
        })
    );
}
function F(t) {
    return (0, i.jsxs)(
        "div",
        {
            className: L.De,
            children: [
                (0, i.jsx)(u.E, { variant: "text-md/semibold", children: t.name }),
                (function (t) {
                    if (null !== t.last_used)
                        return (0, i.jsx)(u.E, {
                            variant: "text-sm/normal",
                            children: K.intl.format(K.t["7JgxF5"], { lastUsed: (0, E.Y)(t.last_used) }),
                        });
                })(t),
                (0, i.jsx)(j.K, {
                    icon: { type: "icon", asset: C.F },
                    onClick: (e) => {
                        (0, f.L3)(e, async () => {
                            let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                            return (n) => (0, i.jsx)(e, { ...n, credential: t });
                        });
                    },
                    "aria-label": K.intl.string(K.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        t.id,
    );
}
