"use strict";
n.d(t, { n: () => h, t: () => m });
var i = n(627968),
    s = n(64700),
    r = n(123292),
    l = n(460890),
    a = n(224640),
    o = n(696208),
    c = n(430993),
    d = n(20742),
    u = n(655053);
let _ = s.createContext(null);
function h() {
    let e = s.useContext(_);
    if (null == e) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return e;
}
function m(e) {
    let t,
        { steps: n, currentStepKey: h, numberedSteps: m, onStepChange: g, onComplete: p, ...A } = e,
        { i18n: f } = (0, l.G9)(),
        x = A.onClose,
        [E, I] = s.useState(!1),
        [v, N] = s.useState(null),
        j = n.find((e) => e.stepKey === h);
    if (null == j) throw Error(`Step with key ${h} not found`);
    let C = n.findIndex((e) => e.stepKey === h),
        T = C === n.length - 1,
        b = 0 === C,
        [y, S] = s.useState(!1),
        R = j.nextEnabled ?? !0,
        w = s.useCallback(
            (e) => {
                N(null), g?.(e, h);
            },
            [g, h],
        ),
        O = s.useCallback(async () => {
            await p?.(), S(!0), x();
        }, [p, x]),
        L = s.useCallback(async () => {
            I(!0), N(null);
            try {
                if (null != j.onNext && !(await j.onNext())) return void I(!1);
                T ? await O() : w(n[C + 1].stepKey);
            } catch {
                N(f.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                I(!1);
            }
        }, [w, C, n, T, O, j, f]),
        k = s.useCallback(() => {
            b || w(n[C - 1].stepKey);
        }, [w, C, n, b]),
        G = s.useMemo(
            () => ({ currentStepKey: h, goToStep: w, goToNextStep: L, goToPreviousStep: k, complete: O }),
            [h, w, L, k, O],
        ),
        U = { variant: "secondary", text: f.BACK },
        P = {
            variant: "primary",
            text: T ? f.SUBMIT : f.NEXT,
            disabled: !R,
            loading: E,
            onClick: () => {
                R && !E && L();
            },
        },
        D = { text: f.CANCEL, variant: "secondary", onClick: x },
        B = null != j.secondaryActionButtonProps ? { variant: "secondary", ...j.secondaryActionButtonProps } : null,
        M = j.hideBackButton || b ? void 0 : (0, i.jsx)(r.Q, { ...U, ...j.backButtonProps, onClick: k }),
        V = j.modalProps,
        F = "graphic" in V ? V : null,
        W = null != m && m.length > 0 && m.includes(h),
        H = W && !y ? m.indexOf(h) + 1 : void 0;
    return (
        W && (t = y ? { percent: 100 } : { stepCount: m.length, stepNumber: H }),
        (0, i.jsx)(_.Provider, {
            value: G,
            children: (0, i.jsxs)(a.d, {
                ...A,
                paddingSize: null != F ? "lg" : "sm",
                children: [
                    null != F
                        ? (0, i.jsx)(d.V6, { ...F })
                        : (0, i.jsx)(d.rQ, { title: V.title, subtitle: V.subtitle, progressBarProps: t }),
                    (0, i.jsx)(
                        u.i,
                        {
                            message: v ?? ("notice" in V ? V.notice?.message : void 0),
                            type: null != v ? "critical" : "notice" in V ? V.notice?.type : void 0,
                        },
                        h,
                    ),
                    n.map((e) => {
                        let t = "graphic" in e.modalProps ? null : e.modalProps;
                        return (
                            (null != e.body || t?.input != null || t?.listProps != null) &&
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { display: e.stepKey === h ? "contents" : "none" },
                                    children: (0, i.jsx)(c.c, {
                                        controls: t?.input,
                                        listProps: t?.listProps,
                                        children: e.body,
                                    }),
                                },
                                e.stepKey,
                            )
                        );
                    }),
                    (0, i.jsx)(o.H, {
                        leading: M,
                        actionsFullWidth: b,
                        actions: [...(b ? [D] : []), ...(null != B ? [B] : []), { ...P, ...j.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
