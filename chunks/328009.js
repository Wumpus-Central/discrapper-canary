(n.d(e, { RegisterWebAuthnCredentialModal: () => P }), n(321073));
var s,
    a = n(477900),
    i = n(582128),
    r = n(636537),
    l = n(347704),
    o = n(95477),
    c = n(331322),
    u = n(834730),
    d = n(7584),
    g = n(780964),
    p = n(466034),
    h = n(766075),
    x = n(723702),
    m = n(38405),
    C = n(19575),
    N = n(84948),
    y = n(917136),
    S = n(293731),
    E = (((s = {}).INIT = "INIT"), (s.NAME = "NAME"), (s.SUCCESS = "SUCCESS"), s),
    b = n(652215),
    k = n(375708),
    A = n(159986);
function B(t) {
    let { name: e, onNameChange: n } = t,
        { goToNextStep: s } = (0, l.n)();
    return (0, a.jsx)(o.k, {
        value: e,
        "aria-label": k.intl.string(k.t["Jzd+z/"]),
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
            initialStep: v = E.INIT,
        } = t,
        [I, f] = i.useState(k.intl.string(k.t["I/sJtJ"])),
        [w, z] = i.useState(v),
        [M, T] = i.useState(""),
        [K, U] = i.useState(null),
        [F, J] = i.useState(!1),
        H = i.useCallback(async () => {
            (U(null), J(!0));
            let t =
                x.isPlatformEmbedded && C.Ay.supportsFeature(b.BYE.WEBAUTHN) ? C.Ay.webAuthnRegister(P) : (0, S.v)(P);
            try {
                return (T(await t), !0);
            } catch (t) {
                return (m.A.captureException(t), U(k.intl.string(k.t.xSCvBf)), !1);
            } finally {
                J(!1);
            }
        }, [P]),
        W = i.useCallback(async () => {
            try {
                if ((await y.AF(I, o, M), j)) return !0;
                return (await (0, p.sy)(!1), s(), !1);
            } catch (t) {
                return (
                    t instanceof r.oh && t.status >= 400 && t.status < 500 && N.A.signalUnknownCredential(M),
                    U(k.intl.string(k.t.fEptJP)),
                    z(E.INIT),
                    !1
                );
            }
        }, [I, o, M, j, s]),
        L = [
            {
                stepKey: E.INIT,
                modalProps: {
                    title: F ? k.intl.string(k.t.wePEBF) : k.intl.string(k.t.vrOCCk),
                    notice: null != K ? { message: K, type: "critical" } : void 0,
                },
                body: (0, a.jsx)(c.B, {
                    className: A.PM,
                    children: (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        className: A.zH,
                        children: F ? k.intl.string(k.t.aVMiX3) : k.intl.string(k.t.Lh5vTW),
                    }),
                }),
                nextButtonProps: { text: k.intl.string(k.t.oibaQa) },
                onNext: H,
            },
            {
                stepKey: E.NAME,
                modalProps: { title: k.intl.string(k.t["cY/IOu"]) },
                body: (0, a.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 16,
                    className: A.PM,
                    children: [
                        (0, a.jsx)("img", { className: A.Kk, alt: "", src: n(179644) }),
                        (0, a.jsxs)(c.B, {
                            gap: 8,
                            className: A.zH,
                            children: [
                                (0, a.jsx)(u.E, { variant: "text-md/normal", children: k.intl.string(k.t["Jzd+z/"]) }),
                                (0, a.jsx)(B, { name: I, onNameChange: f }),
                            ],
                        }),
                    ],
                }),
                nextButtonProps: { text: k.intl.string(k.t["5dyZ1S"]) },
                nextEnabled: I.length > 0,
                onNext: W,
            },
        ];
    j &&
        L.push({
            stepKey: E.SUCCESS,
            hideBackButton: !0,
            modalProps: {
                title: k.intl.string(k.t.FXC7ZC).replace(/:([^\s:]+):/g, (t, e) => d.Ay.convertNameToSurrogate(e, t)),
            },
            body: (0, a.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 16,
                className: A.PM,
                children: [
                    (0, a.jsx)("img", { className: A.Kk, alt: "", src: n(179644) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        className: A.zH,
                        children: k.intl.string(k.t.e1qv6i),
                    }),
                ],
            }),
            secondaryActionButtonProps: { text: k.intl.string(k.t.i4jeWR), onClick: s },
            nextButtonProps: {
                text: k.intl.string(k.t.MubYG8),
                onClick: () => {
                    (s(), (0, h.openUserSettings)(g.X.ACCOUNT_PANEL));
                },
            },
        });
    let O = i.useCallback((t) => {
        (U(null), z(t));
    }, []);
    return (0, a.jsx)(l.t, { transitionState: e, onClose: s, steps: L, currentStepKey: w, onStepChange: O });
}
