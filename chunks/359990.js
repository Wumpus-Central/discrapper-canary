n.d(t, {
    A: () => A,
    RegisterWebAuthnCredentialModal: () => P,
}),
    n(896048),
    n(457529),
    n(492834);
var r = n(627968),
    i = n(64700),
    s = n(460648),
    a = n(311907),
    l = n(397927),
    c = n(442433),
    o = n(754333),
    d = n(915089),
    u = n(46054),
    p = n(780964),
    g = n(179690),
    j = n(840065),
    f = n(464477),
    b = n(723702),
    h = n(728458),
    x = n(837921),
    m = n(917136),
    O = n(976910),
    y = n(31758),
    S = n(652215),
    v = n(985018),
    C = n(754388);

function w(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function P(e) {
    let {
            transitionState: t,
            onClose: a,
            ticket: c,
            challenge: o,
            showAccountSettingsButton: f = !1,
            initialSlide: O = y.C.INIT,
        } = e,
        w = (0, d.GV)(),
        [E, P] = i.useState(v.intl.string(v.t["I/sJtJ"])),
        [N, A] = i.useState(!1),
        [T, I] = i.useState(O),
        [_, k] = i.useState(""),
        [U, D] = i.useState(null),
        R = async () => {
            let e;
            I(y.C.REGISTER);
            let t =
                b.isPlatformEmbedded && x.Ay.supportsFeature(S.BYE.WEBAUTHN)
                    ? x.Ay.webAuthnRegister(o)
                    : s.vt(JSON.parse(o)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                h.A.captureException(e), D(v.intl.string(v.t.xSCvBf)), I(y.C.INIT);
                return;
            }
            k(e), I(y.C.NAME);
        };
    return (0, r.jsxs)(l.EOs, {
        transitionState: t,
        "aria-labelledby": w,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, r.jsxs)(l.rQ0, {
                className: C.wx,
                separator: !1,
                children: [
                    (0, r.jsxs)(l.Heading, {
                        id: w,
                        variant: "heading-lg/semibold",
                        children: [
                            T === y.C.INIT && v.intl.string(v.t.vrOCCk),
                            T === y.C.REGISTER && v.intl.string(v.t.wePEBF),
                            T === y.C.NAME && v.intl.string(v.t["cY/IOu"]),
                            T === y.C.SUCCESS && u.A.parse(v.intl.string(v.t.FXC7ZC)),
                        ],
                    }),
                    (0, r.jsx)(l.s_y, {
                        onClick: a,
                        className: C.iT,
                    }),
                ],
            }),
            (0, r.jsxs)(l.tN_, {
                activeSlide: T,
                width: 440,
                children: [
                    (0, r.jsxs)(l.q7S, {
                        id: y.C.INIT,
                        children: [
                            (0, r.jsxs)(l.$mQ, {
                                className: C.Qs,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: C.Kk,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(142668),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children:
                                            null != U &&
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-md/normal",
                                                color: "text-feedback-critical",
                                                children: U,
                                            }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: v.intl.string(v.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.jlY, {
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    text: v.intl.string(v.t.oibaQa),
                                    onClick: R,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(l.q7S, {
                        id: y.C.REGISTER,
                        children: [
                            (0, r.jsxs)(l.$mQ, {
                                className: C.Qs,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: C.Kk,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(142668),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: v.intl.string(v.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.jlY, {
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    text: "",
                                    loading: !0,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.q7S, {
                        id: y.C.NAME,
                        children: (0, r.jsxs)("form", {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    m
                                        .AF(E, c, _)
                                        .then(async () => {
                                            f ? I(y.C.SUCCESS) : (await (0, g.sy)(!1), a());
                                        })
                                        .catch(() => {
                                            D(v.intl.string(v.t.fEptJP)), I(y.C.INIT);
                                        });
                            },
                            children: [
                                (0, r.jsxs)(l.$mQ, {
                                    className: C.Qs,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: C.Kk,
                                            children: (0, r.jsx)("img", {
                                                alt: "",
                                                src: n(179644),
                                            }),
                                        }),
                                        (0, r.jsxs)(l.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(l.Text, {
                                                    variant: "text-md/normal",
                                                    children: v.intl.string(v.t["Jzd+z/"]),
                                                }),
                                                (0, r.jsx)(l.ksK, {
                                                    value: E,
                                                    onChange: (e) => {
                                                        P(e), A(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(l.jlY, {
                                    className: C.qr,
                                    children: (0, r.jsxs)(l.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, r.jsx)(l.Button, {
                                                variant: "primary",
                                                text: v.intl.string(v.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: N,
                                            }),
                                            (0, r.jsx)(l.Button, {
                                                variant: "secondary",
                                                text: v.intl.string(v.t["13/7kX"]),
                                                onClick: () => {
                                                    I(y.C.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)(l.q7S, {
                        id: y.C.SUCCESS,
                        children: [
                            (0, r.jsxs)(l.$mQ, {
                                className: C.Qs,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: C.Kk,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(179644),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: v.intl.string(v.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.jlY, {
                                className: C.qr,
                                children: (0, r.jsxs)(l.ButtonGroup, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, r.jsx)(l.Button, {
                                            variant: "primary",
                                            text: v.intl.string(v.t.MubYG8),
                                            onClick: () => {
                                                a(),
                                                    (0, j.openUserSettings)(p.X.ACCOUNT_PANEL, {
                                                        section: S.nc_.ACCOUNT,
                                                    });
                                            },
                                        }),
                                        (0, r.jsx)(l.Button, {
                                            variant: "secondary",
                                            text: v.intl.string(v.t.i4jeWR),
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

function N(e) {
    let { onSelect: t, credential: i } = e;
    return (0, r.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "webauthn-credential-actions",
        onClose: c.Z_,
        "aria-label": v.intl.string(v.t["+nrTbK"]),
        onSelect: t,
        children: [
            (0, r.jsx)(l.Drp, {
                id: "webauthn-edit-credential-".concat(i.id),
                label: v.intl.string(v.t.bt75uw),
                action: () => {
                    (0, l.mMO)(async () => {
                        let { default: e } = await n.e("50267").then(n.bind(n, 428726));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                w(
                                    {
                                        credential: i,
                                    },
                                    t,
                                ),
                            );
                    });
                },
            }),
            (0, r.jsx)(l.Drp, {
                id: "webauthn-delete-credential-".concat(i.id),
                label: v.intl.string(v.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    m.fR(i);
                },
            }),
        ],
    });
}

function A() {
    let {
        credentials: e,
        hasFetchedCredentials: t,
        hasPendingRegisterTrigger: n,
    } = (0, a.cf)([O.A], () => ({
        hasFetchedCredentials: O.A.hasFetchedCredentials(),
        credentials: O.A.getCredentials(),
        hasPendingRegisterTrigger: O.A.hasPendingRegisterTrigger(),
    }));
    i.useEffect(() => {
        t || m.JQ();
    }, [t]),
        i.useEffect(
            () => () => {
                O.A.hasPendingRegisterTrigger() && m.XW();
            },
            [],
        );
    let [s, c] = i.useState(!1),
        o = i.useCallback(() => {
            c(!0),
                m
                    .startRegisterWebAuthnCredential()
                    .then((e) => {
                        let { ticket: t, challenge: n } = e;
                        (0, l.qfG)((e) =>
                            (0, r.jsx)(
                                P,
                                E(w({}, e), {
                                    ticket: t,
                                    challenge: n,
                                }),
                            ),
                        );
                    })
                    .catch((e) => {
                        e.message !== v.intl.string(v.t.N2yb9a) && h.A.captureException(e);
                    })
                    .finally(() => {
                        c(!1);
                    });
        }, []);
    return (
        i.useEffect(() => {
            n && !s && (m.XW(), o());
        }, [n, s, o]),
        (0, r.jsxs)(l.D0$, {
            label: v.intl.string(v.t.y7SXYX),
            description: v.intl.string(v.t.TMukAN),
            children: [
                e.length > 0 &&
                    (0, r.jsx)("div", {
                        className: C.KY,
                        children: e.map(T),
                    }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: v.intl.string(v.t.vrOCCk),
                        onClick: o,
                        loading: s,
                        disabled: !f.d4,
                    }),
                }),
            ],
        })
    );
}

function T(e) {
    return (0, r.jsxs)(
        "div",
        {
            className: C.De,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: e.name,
                }),
                (function (e) {
                    if (null !== e.last_used)
                        return (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: v.intl.format(v.t["7JgxF5"], {
                                lastUsed: (0, o.Y)(e.last_used),
                            }),
                        });
                })(e),
                (0, r.jsx)(l.K0, {
                    icon: {
                        type: "icon",
                        asset: l.FHP,
                    },
                    onClick: (t) => {
                        (0, c.jA)(t, (t) =>
                            (0, r.jsx)(
                                N,
                                E(w({}, t), {
                                    credential: e,
                                }),
                            ),
                        );
                    },
                    "aria-label": v.intl.string(v.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        e.id,
    );
}
