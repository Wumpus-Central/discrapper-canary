s.d(e, { RegisterWebAuthnCredentialModal: () => F, A: () => G });
var i,
    n = s(627968),
    a = s(64700),
    r = s(17928),
    l = s(636537),
    d = s(935462),
    c = s(534514),
    o = s(430690),
    x = s(834730),
    h = s(821609),
    u = s(331322),
    m = s(292666),
    g = s(825484),
    j = s(192308),
    S = s(452027),
    E = s(408278),
    p = s(530005),
    C = s(442433),
    v = s(390310),
    f = s(915089),
    N = s(46054),
    A = s(780964),
    I = s(466034),
    T = s(766075),
    _ = s(464477),
    b = s(723702),
    k = s(38405),
    y = s(19575),
    U = s(84948),
    O = s(917136),
    R = s(976910),
    w = s(293731),
    L =
        (((i = {}).MODAL_UPSELL = "MODAL_UPSELL"),
        (i.INIT = "INIT"),
        (i.EDIT = "EDIT"),
        (i.REGISTER = "REGISTER"),
        (i.NAME = "NAME"),
        (i.SUCCESS = "SUCCESS"),
        i),
    M = s(652215),
    $ = s(375708),
    D = s(790085);
function F(t) {
    let {
            transitionState: e,
            onClose: i,
            ticket: r,
            challenge: j,
            showAccountSettingsButton: S = !1,
            initialSlide: E = L.INIT,
        } = t,
        p = (0, f.GV)(),
        [C, v] = a.useState($.intl.string($.t["I/sJtJ"])),
        [_, R] = a.useState(!1),
        [F, G] = a.useState(E),
        [P, X] = a.useState(""),
        [z, W] = a.useState(null),
        q = a.useCallback(async () => {
            G(L.REGISTER);
            let t =
                b.isPlatformEmbedded && y.Ay.supportsFeature(M.BYE.WEBAUTHN) ? y.Ay.webAuthnRegister(j) : (0, w.v)(j);
            try {
                let e = await t;
                X(e), G(L.NAME);
            } catch (t) {
                k.A.captureException(t), W($.intl.string($.t.xSCvBf)), G(L.INIT);
            }
        }, [j]);
    return (0, n.jsxs)(d.EO, {
        transitionState: e,
        "aria-labelledby": p,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, n.jsxs)(d.rQ, {
                className: D.wx,
                separator: !1,
                children: [
                    (0, n.jsxs)(c.D, {
                        id: p,
                        variant: "heading-lg/semibold",
                        children: [
                            F === L.INIT && $.intl.string($.t.vrOCCk),
                            F === L.REGISTER && $.intl.string($.t.wePEBF),
                            F === L.NAME && $.intl.string($.t["cY/IOu"]),
                            F === L.SUCCESS && N.A.parse($.intl.string($.t.FXC7ZC)),
                        ],
                    }),
                    (0, n.jsx)(d.s_, { onClick: i, className: D.iT }),
                ],
            }),
            (0, n.jsxs)(o.t, {
                activeSlide: F,
                width: 440,
                children: [
                    (0, n.jsxs)(o.q, {
                        id: L.INIT,
                        children: [
                            (0, n.jsxs)(d.$m, {
                                className: D.Qs,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: D.Kk,
                                        children: (0, n.jsx)("img", { alt: "", src: s(142668) }),
                                    }),
                                    (0, n.jsx)("div", {
                                        children:
                                            null != z &&
                                            (0, n.jsx)(x.E, {
                                                variant: "text-md/normal",
                                                color: "text-feedback-critical",
                                                children: z,
                                            }),
                                    }),
                                    (0, n.jsx)("div", {
                                        children: (0, n.jsx)(x.E, {
                                            variant: "text-md/normal",
                                            children: $.intl.string($.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(d.jl, {
                                children: (0, n.jsx)(h.$, {
                                    variant: "primary",
                                    text: $.intl.string($.t.oibaQa),
                                    onClick: q,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)(o.q, {
                        id: L.REGISTER,
                        children: [
                            (0, n.jsxs)(d.$m, {
                                className: D.Qs,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: D.Kk,
                                        children: (0, n.jsx)("img", { alt: "", src: s(142668) }),
                                    }),
                                    (0, n.jsx)("div", {
                                        children: (0, n.jsx)(x.E, {
                                            variant: "text-md/normal",
                                            children: $.intl.string($.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(d.jl, {
                                children: (0, n.jsx)(h.$, { variant: "primary", text: "", loading: !0 }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(o.q, {
                        id: L.NAME,
                        children: (0, n.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(),
                                    O.AF(C, r, P)
                                        .then(async () => {
                                            S ? G(L.SUCCESS) : (await (0, I.sy)(!1), i());
                                        })
                                        .catch((t) => {
                                            t instanceof l.oh &&
                                                t.status >= 400 &&
                                                t.status < 500 &&
                                                U.A.signalUnknownCredential(P),
                                                W($.intl.string($.t.fEptJP)),
                                                G(L.INIT);
                                        });
                            },
                            children: [
                                (0, n.jsxs)(d.$m, {
                                    className: D.Qs,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: D.Kk,
                                            children: (0, n.jsx)("img", { alt: "", src: s(179644) }),
                                        }),
                                        (0, n.jsxs)(u.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(x.E, {
                                                    variant: "text-md/normal",
                                                    children: $.intl.string($.t["Jzd+z/"]),
                                                }),
                                                (0, n.jsx)(m.k, {
                                                    value: C,
                                                    "aria-label": $.intl.string($.t["Jzd+z/"]),
                                                    onChange: (t) => {
                                                        v(t), R(0 === t.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(d.jl, {
                                    className: D.qr,
                                    children: (0, n.jsxs)(g.e, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, n.jsx)(h.$, {
                                                variant: "primary",
                                                text: $.intl.string($.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: _,
                                            }),
                                            (0, n.jsx)(h.$, {
                                                variant: "secondary",
                                                text: $.intl.string($.t["13/7kX"]),
                                                onClick: () => {
                                                    G(L.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, n.jsxs)(o.q, {
                        id: L.SUCCESS,
                        children: [
                            (0, n.jsxs)(d.$m, {
                                className: D.Qs,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: D.Kk,
                                        children: (0, n.jsx)("img", { alt: "", src: s(179644) }),
                                    }),
                                    (0, n.jsx)("div", {
                                        children: (0, n.jsx)(x.E, {
                                            variant: "text-md/normal",
                                            children: $.intl.string($.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(d.jl, {
                                className: D.qr,
                                children: (0, n.jsxs)(g.e, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, n.jsx)(h.$, {
                                            variant: "primary",
                                            text: $.intl.string($.t.MubYG8),
                                            onClick: () => {
                                                i(), (0, T.openUserSettings)(A.X.ACCOUNT_PANEL);
                                            },
                                        }),
                                        (0, n.jsx)(h.$, {
                                            variant: "secondary",
                                            text: $.intl.string($.t.i4jeWR),
                                            onClick: i,
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
function G() {
    let {
        credentials: t,
        hasFetchedCredentials: e,
        hasPendingRegisterTrigger: s,
    } = (0, r.cf)([R.A], () => ({
        hasFetchedCredentials: R.A.hasFetchedCredentials(),
        credentials: R.A.getCredentials(),
        hasPendingRegisterTrigger: R.A.hasPendingRegisterTrigger(),
    }));
    a.useEffect(() => {
        e || O.JQ();
    }, [e]),
        a.useEffect(
            () => () => {
                R.A.hasPendingRegisterTrigger() && O.XW();
            },
            [],
        );
    let [i, l] = a.useState(!1),
        d = a.useCallback(() => {
            l(!0),
                O.startRegisterWebAuthnCredential()
                    .then((t) => {
                        let { ticket: e, challenge: s } = t;
                        (0, j.openModal)((t) => (0, n.jsx)(F, { ...t, ticket: e, challenge: s }));
                    })
                    .catch((t) => {
                        t.message !== $.intl.string($.t.N2yb9a) && k.A.captureException(t);
                    })
                    .finally(() => {
                        l(!1);
                    });
        }, []);
    return (
        a.useEffect(() => {
            s && !i && (O.XW(), d());
        }, [s, i, d]),
        (0, n.jsxs)(S.D, {
            label: $.intl.string($.t.y7SXYX),
            description: $.intl.string($.t.TMukAN),
            children: [
                t.length > 0 && (0, n.jsx)("div", { className: D.KY, children: t.map(P) }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: $.intl.string($.t.vrOCCk),
                        onClick: d,
                        loading: i,
                        disabled: !_.d4,
                    }),
                }),
            ],
        })
    );
}
function P(t) {
    return (0, n.jsxs)(
        "div",
        {
            className: D.De,
            children: [
                (0, n.jsx)(x.E, { variant: "text-md/semibold", children: t.name }),
                (function (t) {
                    if (null !== t.last_used)
                        return (0, n.jsx)(x.E, {
                            variant: "text-sm/normal",
                            children: $.intl.format($.t["7JgxF5"], { lastUsed: (0, v.Y)(t.last_used) }),
                        });
                })(t),
                (0, n.jsx)(E.K, {
                    icon: { type: "icon", asset: p.F },
                    onClick: (e) => {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await s.e("32529").then(s.bind(s, 41e3));
                            return (s) => (0, n.jsx)(e, { ...s, credential: t });
                        });
                    },
                    "aria-label": $.intl.string($.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        t.id,
    );
}
