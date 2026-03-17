n.d(e, { A: () => _, RegisterWebAuthnCredentialModal: () => I });
var s = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(562465),
    l = n(397927),
    c = n(442433),
    d = n(754333),
    o = n(915089),
    u = n(46054),
    h = n(780964),
    x = n(179690),
    g = n(840065),
    m = n(464477),
    p = n(723702),
    S = n(728458),
    C = n(837921),
    j = n(3928),
    f = n(917136),
    v = n(976910),
    A = n(191986),
    b = n(293731),
    N = n(31758),
    y = n(652215),
    E = n(985018),
    T = n(754388);
function I(t) {
    let {
            transitionState: e,
            onClose: a,
            ticket: c,
            challenge: d,
            showAccountSettingsButton: m = !1,
            initialSlide: v = N.C.INIT,
        } = t,
        I = (0, o.GV)(),
        [O, _] = i.useState(E.intl.string(E.t["I/sJtJ"])),
        [w, k] = i.useState(!1),
        [R, U] = i.useState(v),
        [D, J] = i.useState(""),
        [K, M] = i.useState(null),
        { enabled: P } = A.V.useConfig({ location: "settings" }),
        F = i.useCallback(async () => {
            U(N.C.REGISTER);
            let t =
                p.isPlatformEmbedded && C.Ay.supportsFeature(y.BYE.WEBAUTHN) ? C.Ay.webAuthnRegister(d) : (0, b.v)(d);
            try {
                let e = await t;
                J(e), U(N.C.NAME);
            } catch (t) {
                S.A.captureException(t), M(E.intl.string(E.t.xSCvBf)), U(N.C.INIT);
            }
        }, [d]);
    return (0, s.jsxs)(l.EOs, {
        transitionState: e,
        "aria-labelledby": I,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, s.jsxs)(l.rQ0, {
                className: T.wx,
                separator: !1,
                children: [
                    (0, s.jsxs)(l.Heading, {
                        id: I,
                        variant: "heading-lg/semibold",
                        children: [
                            R === N.C.INIT && E.intl.string(E.t.vrOCCk),
                            R === N.C.REGISTER && E.intl.string(E.t.wePEBF),
                            R === N.C.NAME && E.intl.string(E.t["cY/IOu"]),
                            R === N.C.SUCCESS && u.A.parse(E.intl.string(E.t.FXC7ZC)),
                        ],
                    }),
                    (0, s.jsx)(l.s_y, { onClick: a, className: T.iT }),
                ],
            }),
            (0, s.jsxs)(l.tN_, {
                activeSlide: R,
                width: 440,
                children: [
                    (0, s.jsxs)(l.q7S, {
                        id: N.C.INIT,
                        children: [
                            (0, s.jsxs)(l.$mQ, {
                                className: T.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: T.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children:
                                            null != K &&
                                            (0, s.jsx)(l.Text, {
                                                variant: "text-md/normal",
                                                color: "text-feedback-critical",
                                                children: K,
                                            }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: E.intl.string(E.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.jlY, {
                                children: (0, s.jsx)(l.Button, {
                                    variant: "primary",
                                    text: E.intl.string(E.t.oibaQa),
                                    onClick: F,
                                }),
                            }),
                        ],
                    }),
                    (0, s.jsxs)(l.q7S, {
                        id: N.C.REGISTER,
                        children: [
                            (0, s.jsxs)(l.$mQ, {
                                className: T.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: T.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: E.intl.string(E.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.jlY, {
                                children: (0, s.jsx)(l.Button, { variant: "primary", text: "", loading: !0 }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(l.q7S, {
                        id: N.C.NAME,
                        children: (0, s.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(),
                                    f
                                        .AF(O, c, D)
                                        .then(async () => {
                                            m ? U(N.C.SUCCESS) : (await (0, x.sy)(!1), a());
                                        })
                                        .catch((t) => {
                                            P &&
                                                t instanceof r.oh &&
                                                t.status >= 400 &&
                                                t.status < 500 &&
                                                j.A.signalUnknownCredential(D),
                                                M(E.intl.string(E.t.fEptJP)),
                                                U(N.C.INIT);
                                        });
                            },
                            children: [
                                (0, s.jsxs)(l.$mQ, {
                                    className: T.Qs,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: T.Kk,
                                            children: (0, s.jsx)("img", { alt: "", src: n(179644) }),
                                        }),
                                        (0, s.jsxs)(l.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, s.jsx)(l.Text, {
                                                    variant: "text-md/normal",
                                                    children: E.intl.string(E.t["Jzd+z/"]),
                                                }),
                                                (0, s.jsx)(l.ksK, {
                                                    value: O,
                                                    onChange: (t) => {
                                                        _(t), k(0 === t.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(l.jlY, {
                                    className: T.qr,
                                    children: (0, s.jsxs)(l.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, s.jsx)(l.Button, {
                                                variant: "primary",
                                                text: E.intl.string(E.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: w,
                                            }),
                                            (0, s.jsx)(l.Button, {
                                                variant: "secondary",
                                                text: E.intl.string(E.t["13/7kX"]),
                                                onClick: () => {
                                                    U(N.C.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)(l.q7S, {
                        id: N.C.SUCCESS,
                        children: [
                            (0, s.jsxs)(l.$mQ, {
                                className: T.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: T.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(179644) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: E.intl.string(E.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.jlY, {
                                className: T.qr,
                                children: (0, s.jsxs)(l.ButtonGroup, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, s.jsx)(l.Button, {
                                            variant: "primary",
                                            text: E.intl.string(E.t.MubYG8),
                                            onClick: () => {
                                                a(), (0, g.openUserSettings)(h.X.ACCOUNT_PANEL);
                                            },
                                        }),
                                        (0, s.jsx)(l.Button, {
                                            variant: "secondary",
                                            text: E.intl.string(E.t.i4jeWR),
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
function O(t) {
    let { onSelect: e, credential: i } = t;
    return (0, s.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "webauthn-credential-actions",
        onClose: c.Z_,
        "aria-label": E.intl.string(E.t["+nrTbK"]),
        onSelect: e,
        children: [
            (0, s.jsx)(l.Drp, {
                id: `webauthn-edit-credential-${i.id}`,
                label: E.intl.string(E.t.bt75uw),
                action: () => {
                    (0, l.mMO)(async () => {
                        let { default: t } = await n.e("50267").then(n.bind(n, 428726));
                        return (e) => (0, s.jsx)(t, { credential: i, ...e });
                    });
                },
            }),
            (0, s.jsx)(l.Drp, {
                id: `webauthn-delete-credential-${i.id}`,
                label: E.intl.string(E.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    f.fR(i);
                },
            }),
        ],
    });
}
function _() {
    let {
        credentials: t,
        hasFetchedCredentials: e,
        hasPendingRegisterTrigger: n,
    } = (0, a.cf)([v.A], () => ({
        hasFetchedCredentials: v.A.hasFetchedCredentials(),
        credentials: v.A.getCredentials(),
        hasPendingRegisterTrigger: v.A.hasPendingRegisterTrigger(),
    }));
    i.useEffect(() => {
        e || f.JQ();
    }, [e]),
        i.useEffect(
            () => () => {
                v.A.hasPendingRegisterTrigger() && f.XW();
            },
            [],
        );
    let [r, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0),
                f
                    .startRegisterWebAuthnCredential()
                    .then((t) => {
                        let { ticket: e, challenge: n } = t;
                        (0, l.qfG)((t) => (0, s.jsx)(I, { ...t, ticket: e, challenge: n }));
                    })
                    .catch((t) => {
                        t.message !== E.intl.string(E.t.N2yb9a) && S.A.captureException(t);
                    })
                    .finally(() => {
                        c(!1);
                    });
        }, []);
    return (
        i.useEffect(() => {
            n && !r && (f.XW(), d());
        }, [n, r, d]),
        (0, s.jsxs)(l.D0$, {
            label: E.intl.string(E.t.y7SXYX),
            description: E.intl.string(E.t.TMukAN),
            children: [
                t.length > 0 && (0, s.jsx)("div", { className: T.KY, children: t.map(w) }),
                (0, s.jsx)("div", {
                    children: (0, s.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(E.t.vrOCCk),
                        onClick: d,
                        loading: r,
                        disabled: !m.d4,
                    }),
                }),
            ],
        })
    );
}
function w(t) {
    return (0, s.jsxs)(
        "div",
        {
            className: T.De,
            children: [
                (0, s.jsx)(l.Text, { variant: "text-md/semibold", children: t.name }),
                (function (t) {
                    if (null !== t.last_used)
                        return (0, s.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: E.intl.format(E.t["7JgxF5"], { lastUsed: (0, d.Y)(t.last_used) }),
                        });
                })(t),
                (0, s.jsx)(l.K0, {
                    icon: { type: "icon", asset: l.FHP },
                    onClick: (e) => {
                        (0, c.jA)(e, (e) => (0, s.jsx)(O, { ...e, credential: t }));
                    },
                    "aria-label": E.intl.string(E.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        t.id,
    );
}
