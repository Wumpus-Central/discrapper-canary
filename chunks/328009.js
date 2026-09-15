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
    A = n(652215),
    b = n(375708),
    k = n(159986);
function I(t) {
    let { name: e, onNameChange: n } = t,
        { goToNextStep: s } = (0, l.n)();
    return (0, a.jsx)(o.k, {
        value: e,
        "aria-label": b.intl.string(b.t["Jzd+z/"]),
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
            showAccountSettingsButton: B = !1,
            initialStep: j = y.INIT,
        } = t,
        [v, T] = i.useState(b.intl.string(b.t["I/sJtJ"])),
        [f, M] = i.useState(j),
        [w, z] = i.useState(""),
        [L, U] = i.useState(null),
        [K, R] = i.useState(!1),
        D = i.useCallback(async () => {
            (U(null), R(!0));
            let t =
                x.isPlatformEmbedded && C.Ay.supportsFeature(A.BYE.WEBAUTHN) ? C.Ay.webAuthnRegister(P) : (0, N.v)(P);
            try {
                return (z(await t), !0);
            } catch (t) {
                return (m.A.captureException(t), U(b.intl.string(b.t.xSCvBf)), !1);
            } finally {
                R(!1);
            }
        }, [P]),
        F = i.useCallback(async () => {
            try {
                if ((await S.AF(v, o, w), B)) return !0;
                return (await (0, p.sy)(!1), s(), !1);
            } catch (t) {
                return (
                    t instanceof r.oh && t.status >= 400 && t.status < 500 && E.A.signalUnknownCredential(w),
                    U(b.intl.string(b.t.fEptJP)),
                    M(y.INIT),
                    !1
                );
            }
        }, [v, o, w, B, s]),
        J = [
            {
                stepKey: y.INIT,
                modalProps: {
                    title: K ? b.intl.string(b.t.wePEBF) : b.intl.string(b.t.vrOCCk),
                    notice: null != L ? { message: L, type: "critical" } : void 0,
                },
                body: (0, a.jsx)(c.B, {
                    className: k.PM,
                    children: (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        className: k.zH,
                        children: K ? b.intl.string(b.t.aVMiX3) : b.intl.string(b.t.Lh5vTW),
                    }),
                }),
                nextButtonProps: { text: b.intl.string(b.t.oibaQa) },
                onNext: D,
            },
            {
                stepKey: y.NAME,
                modalProps: { title: b.intl.string(b.t["cY/IOu"]) },
                body: (0, a.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 16,
                    className: k.PM,
                    children: [
                        (0, a.jsx)("img", { className: k.Kk, alt: "", src: n(179644) }),
                        (0, a.jsxs)(c.B, {
                            gap: 8,
                            className: k.zH,
                            children: [
                                (0, a.jsx)(u.E, { variant: "text-md/normal", children: b.intl.string(b.t["Jzd+z/"]) }),
                                (0, a.jsx)(I, { name: v, onNameChange: T }),
                            ],
                        }),
                    ],
                }),
                nextButtonProps: { text: b.intl.string(b.t["5dyZ1S"]) },
                nextEnabled: v.length > 0,
                onNext: F,
            },
        ];
    B &&
        J.push({
            stepKey: y.SUCCESS,
            hideBackButton: !0,
            modalProps: {
                title: b.intl.string(b.t.FXC7ZC).replace(/:([^\s:]+):/g, (t, e) => d.Ay.convertNameToSurrogate(e, t)),
            },
            body: (0, a.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 16,
                className: k.PM,
                children: [
                    (0, a.jsx)("img", { className: k.Kk, alt: "", src: n(179644) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        className: k.zH,
                        children: b.intl.string(b.t.e1qv6i),
                    }),
                ],
            }),
            secondaryActionButtonProps: { text: b.intl.string(b.t.i4jeWR), onClick: s },
            nextButtonProps: {
                text: b.intl.string(b.t.MubYG8),
                onClick: () => {
                    (s(), (0, h.openUserSettings)(g.X.ACCOUNT_PANEL));
                },
            },
        });
    let O = i.useCallback((t) => {
        (U(null), M(t));
    }, []);
    return (0, a.jsx)(l.t, { transitionState: e, onClose: s, steps: J, currentStepKey: f, onStepChange: O });
}
