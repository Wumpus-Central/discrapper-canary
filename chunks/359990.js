n.d(e, { A: () => T, RegisterWebAuthnCredentialModal: () => y });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    r = n(397927),
    l = n(442433),
    c = n(754333),
    o = n(915089),
    d = n(46054),
    u = n(780964),
    h = n(179690),
    x = n(840065),
    g = n(464477),
    p = n(723702),
    m = n(728458),
    C = n(837921),
    S = n(917136),
    j = n(976910),
    f = n(293731),
    v = n(31758),
    A = n(652215),
    N = n(985018),
    b = n(754388);
function y(t) {
    let {
            transitionState: e,
            onClose: a,
            ticket: l,
            challenge: c,
            showAccountSettingsButton: g = !1,
            initialSlide: j = v.C.INIT,
        } = t,
        y = (0, o.GV)(),
        [E, T] = s.useState(N.intl.string(N.t["I/sJtJ"])),
        [I, w] = s.useState(!1),
        [_, O] = s.useState(j),
        [R, U] = s.useState(""),
        [k, D] = s.useState(null),
        K = async () => {
            let t;
            O(v.C.REGISTER);
            let e =
                p.isPlatformEmbedded && C.Ay.supportsFeature(A.BYE.WEBAUTHN) ? C.Ay.webAuthnRegister(c) : (0, f.v)(c);
            try {
                t = await e;
            } catch (t) {
                m.A.captureException(t), D(N.intl.string(N.t.xSCvBf)), O(v.C.INIT);
                return;
            }
            U(t), O(v.C.NAME);
        };
    return (0, i.jsxs)(r.EOs, {
        transitionState: e,
        "aria-labelledby": y,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, i.jsxs)(r.rQ0, {
                className: b.wx,
                separator: !1,
                children: [
                    (0, i.jsxs)(r.Heading, {
                        id: y,
                        variant: "heading-lg/semibold",
                        children: [
                            _ === v.C.INIT && N.intl.string(N.t.vrOCCk),
                            _ === v.C.REGISTER && N.intl.string(N.t.wePEBF),
                            _ === v.C.NAME && N.intl.string(N.t["cY/IOu"]),
                            _ === v.C.SUCCESS && d.A.parse(N.intl.string(N.t.FXC7ZC)),
                        ],
                    }),
                    (0, i.jsx)(r.s_y, { onClick: a, className: b.iT }),
                ],
            }),
            (0, i.jsxs)(r.tN_, {
                activeSlide: _,
                width: 440,
                children: [
                    (0, i.jsxs)(r.q7S, {
                        id: v.C.INIT,
                        children: [
                            (0, i.jsxs)(r.$mQ, {
                                className: b.Qs,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: b.Kk,
                                        children: (0, i.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, i.jsx)("div", {
                                        children:
                                            null != k &&
                                            (0, i.jsx)(r.Text, {
                                                variant: "text-md/normal",
                                                color: "text-feedback-critical",
                                                children: k,
                                            }),
                                    }),
                                    (0, i.jsx)("div", {
                                        children: (0, i.jsx)(r.Text, {
                                            variant: "text-md/normal",
                                            children: N.intl.string(N.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.jlY, {
                                children: (0, i.jsx)(r.Button, {
                                    variant: "primary",
                                    text: N.intl.string(N.t.oibaQa),
                                    onClick: K,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(r.q7S, {
                        id: v.C.REGISTER,
                        children: [
                            (0, i.jsxs)(r.$mQ, {
                                className: b.Qs,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: b.Kk,
                                        children: (0, i.jsx)("img", { alt: "", src: n(142668) }),
                                    }),
                                    (0, i.jsx)("div", {
                                        children: (0, i.jsx)(r.Text, {
                                            variant: "text-md/normal",
                                            children: N.intl.string(N.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.jlY, {
                                children: (0, i.jsx)(r.Button, { variant: "primary", text: "", loading: !0 }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(r.q7S, {
                        id: v.C.NAME,
                        children: (0, i.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(),
                                    S.AF(E, l, R)
                                        .then(async () => {
                                            g ? O(v.C.SUCCESS) : (await (0, h.sy)(!1), a());
                                        })
                                        .catch(() => {
                                            D(N.intl.string(N.t.fEptJP)), O(v.C.INIT);
                                        });
                            },
                            children: [
                                (0, i.jsxs)(r.$mQ, {
                                    className: b.Qs,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: b.Kk,
                                            children: (0, i.jsx)("img", { alt: "", src: n(179644) }),
                                        }),
                                        (0, i.jsxs)(r.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: "text-md/normal",
                                                    children: N.intl.string(N.t["Jzd+z/"]),
                                                }),
                                                (0, i.jsx)(r.ksK, {
                                                    value: E,
                                                    onChange: (t) => {
                                                        T(t), w(0 === t.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(r.jlY, {
                                    className: b.qr,
                                    children: (0, i.jsxs)(r.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, i.jsx)(r.Button, {
                                                variant: "primary",
                                                text: N.intl.string(N.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: I,
                                            }),
                                            (0, i.jsx)(r.Button, {
                                                variant: "secondary",
                                                text: N.intl.string(N.t["13/7kX"]),
                                                onClick: () => {
                                                    O(v.C.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)(r.q7S, {
                        id: v.C.SUCCESS,
                        children: [
                            (0, i.jsxs)(r.$mQ, {
                                className: b.Qs,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: b.Kk,
                                        children: (0, i.jsx)("img", { alt: "", src: n(179644) }),
                                    }),
                                    (0, i.jsx)("div", {
                                        children: (0, i.jsx)(r.Text, {
                                            variant: "text-md/normal",
                                            children: N.intl.string(N.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.jlY, {
                                className: b.qr,
                                children: (0, i.jsxs)(r.ButtonGroup, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, i.jsx)(r.Button, {
                                            variant: "primary",
                                            text: N.intl.string(N.t.MubYG8),
                                            onClick: () => {
                                                a(),
                                                    (0, x.openUserSettings)(u.X.ACCOUNT_PANEL, {
                                                        section: A.nc_.ACCOUNT,
                                                    });
                                            },
                                        }),
                                        (0, i.jsx)(r.Button, {
                                            variant: "secondary",
                                            text: N.intl.string(N.t.i4jeWR),
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
function E(t) {
    let { onSelect: e, credential: s } = t;
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "webauthn-credential-actions",
        onClose: l.Z_,
        "aria-label": N.intl.string(N.t["+nrTbK"]),
        onSelect: e,
        children: [
            (0, i.jsx)(r.Drp, {
                id: `webauthn-edit-credential-${s.id}`,
                label: N.intl.string(N.t.bt75uw),
                action: () => {
                    (0, r.mMO)(async () => {
                        let { default: t } = await n.e("50267").then(n.bind(n, 428726));
                        return (e) => (0, i.jsx)(t, { credential: s, ...e });
                    });
                },
            }),
            (0, i.jsx)(r.Drp, {
                id: `webauthn-delete-credential-${s.id}`,
                label: N.intl.string(N.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    S.fR(s);
                },
            }),
        ],
    });
}
function T() {
    let {
        credentials: t,
        hasFetchedCredentials: e,
        hasPendingRegisterTrigger: n,
    } = (0, a.cf)([j.A], () => ({
        hasFetchedCredentials: j.A.hasFetchedCredentials(),
        credentials: j.A.getCredentials(),
        hasPendingRegisterTrigger: j.A.hasPendingRegisterTrigger(),
    }));
    s.useEffect(() => {
        e || S.JQ();
    }, [e]),
        s.useEffect(
            () => () => {
                j.A.hasPendingRegisterTrigger() && S.XW();
            },
            [],
        );
    let [l, c] = s.useState(!1),
        o = s.useCallback(() => {
            c(!0),
                S.startRegisterWebAuthnCredential()
                    .then((t) => {
                        let { ticket: e, challenge: n } = t;
                        (0, r.qfG)((t) => (0, i.jsx)(y, { ...t, ticket: e, challenge: n }));
                    })
                    .catch((t) => {
                        t.message !== N.intl.string(N.t.N2yb9a) && m.A.captureException(t);
                    })
                    .finally(() => {
                        c(!1);
                    });
        }, []);
    return (
        s.useEffect(() => {
            n && !l && (S.XW(), o());
        }, [n, l, o]),
        (0, i.jsxs)(r.D0$, {
            label: N.intl.string(N.t.y7SXYX),
            description: N.intl.string(N.t.TMukAN),
            children: [
                t.length > 0 && (0, i.jsx)("div", { className: b.KY, children: t.map(I) }),
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.Button, {
                        variant: "primary",
                        size: "sm",
                        text: N.intl.string(N.t.vrOCCk),
                        onClick: o,
                        loading: l,
                        disabled: !g.d4,
                    }),
                }),
            ],
        })
    );
}
function I(t) {
    return (0, i.jsxs)(
        "div",
        {
            className: b.De,
            children: [
                (0, i.jsx)(r.Text, { variant: "text-md/semibold", children: t.name }),
                (function (t) {
                    if (null !== t.last_used)
                        return (0, i.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: N.intl.format(N.t["7JgxF5"], { lastUsed: (0, c.Y)(t.last_used) }),
                        });
                })(t),
                (0, i.jsx)(r.K0, {
                    icon: { type: "icon", asset: r.FHP },
                    onClick: (e) => {
                        (0, l.jA)(e, (e) => (0, i.jsx)(E, { ...e, credential: t }));
                    },
                    "aria-label": N.intl.string(N.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        t.id,
    );
}
