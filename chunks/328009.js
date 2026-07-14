n.d(e, { RegisterWebAuthnCredentialModal: () => P }), n(321073);
var s,
    a = n(627968),
    i = n(64700),
    r = n(636537),
    l = n(347704),
    o = n(292666),
    c = n(331322),
    u = n(834730),
    d = n(7584),
    g = n(780964),
    p = n(466034),
    x = n(766075),
    h = n(723702),
    m = n(38405),
    C = n(19575),
    E = n(84948),
    S = n(917136),
    N = n(293731),
    y =
        (((s = {}).MODAL_UPSELL = "MODAL_UPSELL"),
        (s.INIT = "INIT"),
        (s.EDIT = "EDIT"),
        (s.REGISTER = "REGISTER"),
        (s.NAME = "NAME"),
        (s.SUCCESS = "SUCCESS"),
        s),
    k = n(652215),
    A = n(375708),
    b = n(790085);
function I(t) {
    let { name: e, onNameChange: n } = t,
        { goToNextStep: s } = (0, l.n)();
    return (0, a.jsx)(o.k, {
        value: e,
        "aria-label": A.intl.string(A.t["Jzd+z/"]),
        onChange: n,
        onKeyDown: (t) => {
            "Enter" === t.key && e.length > 0 && (t.preventDefault(), s());
        },
        autoFocus: !0,
        minLength: 1,
    });
}
function P(t) {
    let {
            transitionState: e,
            onClose: s,
            ticket: o,
            challenge: P,
            showAccountSettingsButton: j = !1,
            initialStep: B = y.INIT,
        } = t,
        [v, T] = i.useState(A.intl.string(A.t["I/sJtJ"])),
        [f, M] = i.useState(B),
        [z, w] = i.useState(""),
        [L, U] = i.useState(null),
        [K, R] = i.useState(!1),
        D = i.useCallback(async () => {
            U(null), R(!0);
            let t =
                h.isPlatformEmbedded && C.Ay.supportsFeature(k.BYE.WEBAUTHN) ? C.Ay.webAuthnRegister(P) : (0, N.v)(P);
            try {
                return w(await t), !0;
            } catch (t) {
                return m.A.captureException(t), U(A.intl.string(A.t.xSCvBf)), !1;
            } finally {
                R(!1);
            }
        }, [P]),
        F = i.useCallback(async () => {
            try {
                if ((await S.AF(v, o, z), j)) return !0;
                return await (0, p.sy)(!1), s(), !1;
            } catch (t) {
                return (
                    t instanceof r.oh && t.status >= 400 && t.status < 500 && E.A.signalUnknownCredential(z),
                    U(A.intl.string(A.t.fEptJP)),
                    M(y.INIT),
                    !1
                );
            }
        }, [v, o, z, j, s]),
        J = [
            {
                stepKey: y.INIT,
                modalProps: {
                    title: K ? A.intl.string(A.t.wePEBF) : A.intl.string(A.t.vrOCCk),
                    notice: null != L ? { message: L, type: "critical" } : void 0,
                },
                body: (0, a.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 16,
                    className: b.PM,
                    children: [
                        (0, a.jsx)("img", { className: b.Kk, alt: "", src: n(142668) }),
                        (0, a.jsx)(u.E, {
                            variant: "text-md/normal",
                            className: b.zH,
                            children: K ? A.intl.string(A.t.aVMiX3) : A.intl.string(A.t.Lh5vTW),
                        }),
                    ],
                }),
                nextButtonProps: { text: A.intl.string(A.t.oibaQa) },
                onNext: D,
            },
            {
                stepKey: y.NAME,
                modalProps: { title: A.intl.string(A.t["cY/IOu"]) },
                body: (0, a.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 16,
                    className: b.PM,
                    children: [
                        (0, a.jsx)("img", { className: b.Kk, alt: "", src: n(179644) }),
                        (0, a.jsxs)(c.B, {
                            gap: 8,
                            className: b.zH,
                            children: [
                                (0, a.jsx)(u.E, { variant: "text-md/normal", children: A.intl.string(A.t["Jzd+z/"]) }),
                                (0, a.jsx)(I, { name: v, onNameChange: T }),
                            ],
                        }),
                    ],
                }),
                nextButtonProps: { text: A.intl.string(A.t["5dyZ1S"]) },
                nextEnabled: v.length > 0,
                onNext: F,
            },
        ];
    j &&
        J.push({
            stepKey: y.SUCCESS,
            hideBackButton: !0,
            modalProps: {
                title: A.intl.string(A.t.FXC7ZC).replace(/:([^\s:]+):/g, (t, e) => d.Ay.convertNameToSurrogate(e, t)),
            },
            body: (0, a.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 16,
                className: b.PM,
                children: [
                    (0, a.jsx)("img", { className: b.Kk, alt: "", src: n(179644) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        className: b.zH,
                        children: A.intl.string(A.t.e1qv6i),
                    }),
                ],
            }),
            secondaryActionButtonProps: { text: A.intl.string(A.t.i4jeWR), onClick: s },
            nextButtonProps: {
                text: A.intl.string(A.t.MubYG8),
                onClick: () => {
                    s(), (0, x.openUserSettings)(g.X.ACCOUNT_PANEL);
                },
            },
        });
    let O = i.useCallback((t) => {
        U(null), M(t);
    }, []);
    return (0, a.jsx)(l.t, { transitionState: e, onClose: s, steps: J, currentStepKey: f, onStepChange: O });
}
