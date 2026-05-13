l.d(t, { n: () => C, t: () => y });
var n = l(627968),
    a = l(64700),
    i = l(123292),
    s = l(460890),
    o = l(224640),
    r = l(696208),
    u = l(430993),
    c = l(20742),
    d = l(655053);
let p = a.createContext(null);
function C() {
    let e = a.useContext(p);
    if (null == e) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return e;
}
function y(e) {
    let t,
        { steps: l, currentStepKey: C, numberedSteps: y, onStepChange: x, onComplete: h, ...b } = e,
        { i18n: E } = (0, s.G9)(),
        P = b.onClose,
        [v, k] = a.useState(!1),
        [g, N] = a.useState(null),
        f = l.find((e) => e.stepKey === C);
    if (null == f) throw Error(`Step with key ${C} not found`);
    let m = l.findIndex((e) => e.stepKey === C),
        T = m === l.length - 1,
        I = 0 === m,
        [S, j] = a.useState(!1),
        w = f.nextEnabled ?? !0,
        B = a.useCallback(
            (e) => {
                N(null), x?.(e, C);
            },
            [x, C],
        ),
        _ = a.useCallback(async () => {
            await h?.(), j(!0), P();
        }, [h, P]),
        M = a.useCallback(async () => {
            k(!0), N(null);
            try {
                if (null != f.onNext && !(await f.onNext())) return void k(!1);
                T ? await _() : B(l[m + 1].stepKey);
            } catch {
                N(E.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                k(!1);
            }
        }, [B, m, l, T, _, f, E]),
        R = a.useCallback(() => {
            I || B(l[m - 1].stepKey);
        }, [B, m, l, I]),
        K = a.useMemo(
            () => ({ currentStepKey: C, goToStep: B, goToNextStep: M, goToPreviousStep: R, complete: _ }),
            [C, B, M, R, _],
        ),
        O = { variant: "secondary", text: E.BACK },
        A = {
            variant: "primary",
            text: T ? E.SUBMIT : E.NEXT,
            disabled: !w,
            loading: v,
            onClick: () => {
                w && !v && M();
            },
        },
        L = { text: E.CANCEL, variant: "secondary", onClick: P },
        D = null != f.secondaryActionButtonProps ? { variant: "secondary", ...f.secondaryActionButtonProps } : null,
        G = f.hideBackButton || I ? void 0 : (0, n.jsx)(i.Q, { ...O, ...f.backButtonProps, onClick: R }),
        Q = f.modalProps,
        V = "graphic" in Q ? Q : null,
        z = null != y && y.length > 0 && y.includes(C),
        F = z && !S ? y.indexOf(C) + 1 : void 0;
    if (z) {
        let e = y.length;
        t = S
            ? { value: 100, "aria-label": E.PERCENT_COMPLETE(100), valueLabel: E.PERCENT_COMPLETE(100) }
            : { value: F, maxValue: e + 1, "aria-label": E.STEP_INDICATOR(F, e), valueLabel: E.STEP_INDICATOR(F, e) };
    }
    return (0, n.jsx)(p.Provider, {
        value: K,
        children: (0, n.jsxs)(o.d, {
            ...b,
            "aria-label": b["aria-label"] ?? Q.title,
            paddingSize: null != V ? "lg" : "sm",
            children: [
                null != V
                    ? (0, n.jsx)(c.V6, { ...V })
                    : (0, n.jsx)(c.rQ, { title: Q.title, subtitle: Q.subtitle, progressBarProps: t }),
                (0, n.jsx)(
                    d.i,
                    {
                        message: g ?? ("notice" in Q ? Q.notice?.message : void 0),
                        type: null != g ? "critical" : "notice" in Q ? Q.notice?.type : void 0,
                    },
                    C,
                ),
                l.map((e) => {
                    let t = "graphic" in e.modalProps ? null : e.modalProps;
                    return (
                        (null != e.body || t?.input != null || t?.listProps != null) &&
                        (0, n.jsx)(
                            "div",
                            {
                                style: { display: e.stepKey === C ? "contents" : "none" },
                                children: (0, n.jsx)(u.c, {
                                    controls: t?.input,
                                    listProps: t?.listProps,
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
