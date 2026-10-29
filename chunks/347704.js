t.d(l, { n: () => C, t: () => y });
var n = t(477900),
    a = t(582128),
    i = t(123292),
    o = t(460890),
    s = t(224640),
    r = t(696208),
    u = t(430993),
    c = t(20742),
    d = t(655053);
let p = a.createContext(null);
function C() {
    let e = a.useContext(p);
    if (null == e) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return e;
}
function y(e) {
    let l,
        { steps: t, currentStepKey: C, numberedSteps: y, onStepChange: x, onComplete: h, ...b } = e,
        { i18n: E } = (0, o.G9)(),
        v = b.onClose,
        [P, k] = a.useState(!1),
        [g, N] = a.useState(null),
        f = t.find((e) => e.stepKey === C);
    if (null == f) throw Error(`Step with key ${C} not found`);
    let m = t.findIndex((e) => e.stepKey === C),
        T = m === t.length - 1,
        I = 0 === m,
        [S, j] = a.useState(!1),
        w = f.nextEnabled ?? !0,
        B = a.useCallback(
            (e) => {
                (N(null), x?.(e, C));
            },
            [x, C],
        ),
        _ = a.useCallback(async () => {
            (await h?.(), j(!0), v());
        }, [h, v]),
        M = a.useCallback(async () => {
            (k(!0), N(null));
            try {
                if (null != f.onNext && !(await f.onNext())) return void k(!1);
                T ? await _() : B(t[m + 1].stepKey);
            } catch {
                N(E.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                k(!1);
            }
        }, [B, m, t, T, _, f, E]),
        R = a.useCallback(() => {
            I || B(t[m - 1].stepKey);
        }, [B, m, t, I]),
        K = a.useMemo(
            () => ({ currentStepKey: C, goToStep: B, goToNextStep: M, goToPreviousStep: R, complete: _ }),
            [C, B, M, R, _],
        ),
        O = { variant: "secondary", text: E.BACK },
        A = {
            variant: "primary",
            text: T ? E.SUBMIT : E.NEXT,
            disabled: !w,
            loading: P,
            onClick: () => {
                w && !P && M();
            },
        },
        L = { text: E.CANCEL, variant: "secondary", onClick: v },
        D = null != f.secondaryActionButtonProps ? { variant: "secondary", ...f.secondaryActionButtonProps } : null,
        G = f.hideBackButton || I ? void 0 : (0, n.jsx)(i.Q, { ...O, ...f.backButtonProps, onClick: R }),
        Q = f.modalProps,
        V = "graphic" in Q ? Q : null,
        z = null != y && y.length > 0 && y.includes(C),
        F = z && !S ? y.indexOf(C) + 1 : void 0;
    if (z) {
        let e = y.length;
        l = S
            ? { value: 100, "aria-label": E.PERCENT_COMPLETE(100), valueLabel: E.PERCENT_COMPLETE(100) }
            : { value: F, maxValue: e + 1, "aria-label": E.STEP_INDICATOR(F, e), valueLabel: E.STEP_INDICATOR(F, e) };
    }
    return (0, n.jsx)(p.Provider, {
        value: K,
        children: (0, n.jsxs)(s.d, {
            ...b,
            "aria-label": b["aria-label"] ?? Q.title,
            paddingSize: null != V ? "lg" : "sm",
            children: [
                null != V
                    ? (0, n.jsx)(c.V6, { ...V })
                    : (0, n.jsx)(c.rQ, { title: Q.title, subtitle: Q.subtitle, progressBarProps: l }),
                (0, n.jsx)(
                    d.i,
                    {
                        message: g ?? ("notice" in Q ? Q.notice?.message : void 0),
                        type: null != g ? "critical" : "notice" in Q ? Q.notice?.type : void 0,
                        role: null != g ? "alert" : "notice" in Q ? Q.notice?.role : void 0,
                    },
                    C,
                ),
                t.map((e) => {
                    let l = "graphic" in e.modalProps ? null : e.modalProps;
                    return (
                        (null != e.body || l?.input != null || l?.listProps != null) &&
                        (0, n.jsx)(
                            "div",
                            {
                                style: { display: e.stepKey === C ? "contents" : "none" },
                                children: (0, n.jsx)(u.c, {
                                    controls: l?.input,
                                    listProps: l?.listProps,
                                    children: e.body,
                                }),
                            },
                            e.stepKey,
                        )
                    );
                }),
                (0, n.jsx)(r.H, {
                    leading: G,
                    actionsFullWidth: I,
                    actions: [...(I ? [L] : []), ...(null != D ? [D] : []), { ...A, ...f.nextButtonProps }],
                }),
            ],
        }),
    });
}
