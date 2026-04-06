n.d(e, { A: () => O, RegisterWebAuthnCredentialModal: () => T });
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
    x = n(407186),
    g = n(858897),
    m = n(464477),
    p = n(723702),
    S = n(728458),
    C = n(837921),
    j = n(3928),
    f = n(917136),
    v = n(976910),
    A = n(293731),
    b = n(31758),
    N = n(652215),
    y = n(985018),
    E = n(667445);
function T(t) {
    let {
            transitionState: e,
            onClose: a,
            ticket: c,
            challenge: d,
            showAccountSettingsButton: m = !1,
            initialSlide: v = b.C.INIT,
        } = t,
        T = (0, o.GV)(),
        [I, O] = i.useState(y.intl.string(y.t["I/sJtJ"])),
        [_, w] = i.useState(!1),
        [k, R] = i.useState(v),
        [U, D] = i.useState(""),
        [J, K] = i.useState(null),
        M = i.useCallback(async () => {
            R(b.C.REGISTER);
            let t =
                p.isPlatformEmbedded && C.Ay.supportsFeature(N.BYE.WEBAUTHN) ? C.Ay.webAuthnRegister(d) : (0, A.v)(d);
            try {
                let e = await t;
                D(e), R(b.C.NAME);
            } catch (t) {
                S.A.captureException(t), K(y.intl.string(y.t.xSCvBf)), R(b.C.INIT);
            }
        }, [d]);
    return (0, s.jsxs)(l.EOs, {
        transitionState: e,
        "aria-labelledby": T,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, s.jsxs)(l.rQ0, {
                className: E.wx,
                separator: !1,
                children: [
                    (0, s.jsxs)(l.Heading, {
                        id: T,
                        variant: "heading-lg/semibold",
                        children: [
                            k === b.C.INIT && y.intl.string(y.t.vrOCCk),
                            k === b.C.REGISTER && y.intl.string(y.t.wePEBF),
                            k === b.C.NAME && y.intl.string(y.t["cY/IOu"]),
                            k === b.C.SUCCESS && u.A.parse(y.intl.string(y.t.FXC7ZC)),
                        ],
                    }),
                    (0, s.jsx)(l.s_y, { onClick: a, className: E.iT }),
                ],
            }),
            (0, s.jsxs)(l.tN_, {
                activeSlide: k,
                width: 440,
                children: [
                    (0, s.jsxs)(l.q7S, {
                        id: b.C.INIT,
                        children: [
                            (0, s.jsxs)(l.$mQ, {
                                className: E.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: E.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children:
                                            null != J &&
                                            (0, s.jsx)(l.Text, {
                                                variant: "text-md/normal",
                                                color: "text-feedback-critical",
                                                children: J,
                                            }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: y.intl.string(y.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.jlY, {
                                children: (0, s.jsx)(l.Button, {
                                    variant: "primary",
                                    text: y.intl.string(y.t.oibaQa),
                                    onClick: M,
                                }),
                            }),
                        ],
                    }),
                    (0, s.jsxs)(l.q7S, {
                        id: b.C.REGISTER,
                        children: [
                            (0, s.jsxs)(l.$mQ, {
                                className: E.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: E.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: y.intl.string(y.t.aVMiX3),
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
                        id: b.C.NAME,
                        children: (0, s.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(),
                                    f
                                        .AF(I, c, U)
                                        .then(async () => {
                                            m ? R(b.C.SUCCESS) : (await (0, x.sy)(!1), a());
                                        })
                                        .catch((t) => {
                                            t instanceof r.oh &&
                                                t.status >= 400 &&
                                                t.status < 500 &&
                                                j.A.signalUnknownCredential(U),
                                                K(y.intl.string(y.t.fEptJP)),
                                                R(b.C.INIT);
                                        });
                            },
                            children: [
                                (0, s.jsxs)(l.$mQ, {
                                    className: E.Qs,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: E.Kk,
                                            children: (0, s.jsx)("img", { alt: "", src: n(179644) }),
                                        }),
                                        (0, s.jsxs)(l.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, s.jsx)(l.Text, {
                                                    variant: "text-md/normal",
                                                    children: y.intl.string(y.t["Jzd+z/"]),
                                                }),
                                                (0, s.jsx)(l.ksK, {
                                                    value: I,
                                                    onChange: (t) => {
                                                        O(t), w(0 === t.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(l.jlY, {
                                    className: E.qr,
                                    children: (0, s.jsxs)(l.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, s.jsx)(l.Button, {
                                                variant: "primary",
                                                text: y.intl.string(y.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: _,
                                            }),
                                            (0, s.jsx)(l.Button, {
                                                variant: "secondary",
                                                text: y.intl.string(y.t["13/7kX"]),
                                                onClick: () => {
                                                    R(b.C.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)(l.q7S, {
                        id: b.C.SUCCESS,
                        children: [
                            (0, s.jsxs)(l.$mQ, {
                                className: E.Qs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: E.Kk,
                                        children: (0, s.jsx)("img", { alt: "", src: n(179644) }),
                                    }),
                                    (0, s.jsx)("div", {
                                        children: (0, s.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: y.intl.string(y.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(l.jlY, {
                                className: E.qr,
                                children: (0, s.jsxs)(l.ButtonGroup, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, s.jsx)(l.Button, {
                                            variant: "primary",
                                            text: y.intl.string(y.t.MubYG8),
                                            onClick: () => {
                                                a(), (0, g.openUserSettings)(h.X.ACCOUNT_PANEL);
                                            },
                                        }),
                                        (0, s.jsx)(l.Button, {
                                            variant: "secondary",
                                            text: y.intl.string(y.t.i4jeWR),
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
function I(t) {
    let { onSelect: e, credential: i } = t;
    return (0, s.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "webauthn-credential-actions",
        onClose: c.Z_,
        "aria-label": y.intl.string(y.t["+nrTbK"]),
        onSelect: e,
        children: [
            (0, s.jsx)(l.Drp, {
                id: `webauthn-edit-credential-${i.id}`,
                label: y.intl.string(y.t.bt75uw),
                action: () => {
                    (0, l.mMO)(async () => {
                        let { default: t } = await n.e("50267").then(n.bind(n, 428726));
                        return (e) => (0, s.jsx)(t, { credential: i, ...e });
                    });
                },
            }),
            (0, s.jsx)(l.Drp, {
                id: `webauthn-delete-credential-${i.id}`,
                label: y.intl.string(y.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    f.fR(i);
                },
            }),
        ],
    });
}
function O() {
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
                        (0, l.qfG)((t) => (0, s.jsx)(T, { ...t, ticket: e, challenge: n }));
                    })
                    .catch((t) => {
                        t.message !== y.intl.string(y.t.N2yb9a) && S.A.captureException(t);
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
            label: y.intl.string(y.t.y7SXYX),
            description: y.intl.string(y.t.TMukAN),
            children: [
                t.length > 0 && (0, s.jsx)("div", { className: E.KY, children: t.map(_) }),
                (0, s.jsx)("div", {
                    children: (0, s.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: y.intl.string(y.t.vrOCCk),
                        onClick: d,
                        loading: r,
                        disabled: !m.d4,
                    }),
                }),
            ],
        })
    );
}
function _(t) {
    return (0, s.jsxs)(
        "div",
        {
            className: E.De,
            children: [
                (0, s.jsx)(l.Text, { variant: "text-md/semibold", children: t.name }),
                (function (t) {
                    if (null !== t.last_used)
                        return (0, s.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: y.intl.format(y.t["7JgxF5"], { lastUsed: (0, d.Y)(t.last_used) }),
                        });
                })(t),
                (0, s.jsx)(l.K0, {
                    icon: { type: "icon", asset: l.FHP },
                    onClick: (e) => {
                        (0, c.jA)(e, (e) => (0, s.jsx)(I, { ...e, credential: t }));
                    },
                    "aria-label": y.intl.string(y.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        t.id,
    );
}
