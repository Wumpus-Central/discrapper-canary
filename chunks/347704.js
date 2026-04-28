n.d(e, { n: () => y, t: () => h });
var l = n(627968),
    i = n(64700),
    s = n(123292),
    o = n(460890),
    a = n(224640),
    r = n(696208),
    u = n(430993),
    c = n(20742),
    d = n(655053);
let p = i.createContext(null);
function y() {
    let t = i.useContext(p);
    if (null == t) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return t;
}
function h(t) {
    let e,
        { steps: n, currentStepKey: y, numberedSteps: h, onStepChange: x, onComplete: C, ...b } = t,
        { i18n: k } = (0, o.G9)(),
        v = b.onClose,
        [g, P] = i.useState(!1),
        [f, m] = i.useState(null),
        E = n.find((t) => t.stepKey === y);
    if (null == E) throw Error(`Step with key ${y} not found`);
    let j = n.findIndex((t) => t.stepKey === y),
        w = j === n.length - 1,
        B = 0 === j,
        [N, S] = i.useState(!1),
        K = E.nextEnabled ?? !0,
        I = i.useCallback(
            (t) => {
                m(null), x?.(t, y);
            },
            [x, y],
        ),
        M = i.useCallback(async () => {
            await C?.(), S(!0), v();
        }, [C, v]),
        _ = i.useCallback(async () => {
            P(!0), m(null);
            try {
                if (null != E.onNext && !(await E.onNext())) return void P(!1);
                w ? await M() : I(n[j + 1].stepKey);
            } catch {
                m(k.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                P(!1);
            }
        }, [I, j, n, w, M, E, k]),
        A = i.useCallback(() => {
            B || I(n[j - 1].stepKey);
        }, [I, j, n, B]),
        R = i.useMemo(
            () => ({ currentStepKey: y, goToStep: I, goToNextStep: _, goToPreviousStep: A, complete: M }),
            [y, I, _, A, M],
        ),
        O = { variant: "secondary", text: k.BACK },
        T = {
            variant: "primary",
            text: w ? k.SUBMIT : k.NEXT,
            disabled: !K,
            loading: g,
            onClick: () => {
                K && !g && _();
            },
        },
        G = { text: k.CANCEL, variant: "secondary", onClick: v },
        L = null != E.secondaryActionButtonProps ? { variant: "secondary", ...E.secondaryActionButtonProps } : null,
        Q = E.hideBackButton || B ? void 0 : (0, l.jsx)(s.Q, { ...O, ...E.backButtonProps, onClick: A }),
        z = E.modalProps,
        F = "graphic" in z ? z : null,
        H = null != h && h.length > 0 && h.includes(y),
        U = H && !N ? h.indexOf(y) + 1 : void 0;
    return (
        H && (e = N ? { percent: 100 } : { stepCount: h.length, stepNumber: U }),
        (0, l.jsx)(p.Provider, {
            value: R,
            children: (0, l.jsxs)(a.d, {
                ...b,
                paddingSize: null != F ? "lg" : "sm",
                children: [
                    null != F
                        ? (0, l.jsx)(c.V6, { ...F })
                        : (0, l.jsx)(c.rQ, { title: z.title, subtitle: z.subtitle, progressBarProps: e }),
                    (0, l.jsx)(
                        d.i,
                        {
                            message: f ?? ("notice" in z ? z.notice?.message : void 0),
                            type: null != f ? "critical" : "notice" in z ? z.notice?.type : void 0,
                        },
                        y,
                    ),
                    n.map((t) => {
                        let e = "graphic" in t.modalProps ? null : t.modalProps;
                        return (
                            (null != t.body || e?.input != null || e?.listProps != null) &&
                            (0, l.jsx)(
                                "div",
                                {
                                    style: { display: t.stepKey === y ? "contents" : "none" },
                                    children: (0, l.jsx)(u.c, {
                                        controls: e?.input,
                                        listProps: e?.listProps,
                                        children: t.body,
                                    }),
                                },
                                t.stepKey,
                            )
                        );
                    }),
                    (0, l.jsx)(r.H, {
                        leading: Q,
                        actionsFullWidth: B,
                        actions: [...(B ? [G] : []), ...(null != L ? [L] : []), { ...T, ...E.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
