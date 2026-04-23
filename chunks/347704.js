"use strict";
n.d(t, { n: () => h, t: () => p });
var i = n(627968),
    s = n(64700),
    l = n(123292),
    r = n(460890),
    a = n(224640),
    o = n(696208),
    d = n(430993),
    c = n(20742),
    u = n(655053);
let _ = s.createContext(null);
function h() {
    let e = s.useContext(_);
    if (null == e) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return e;
}
function p(e) {
    let t,
        { steps: n, currentStepKey: h, numberedSteps: p, onStepChange: m, onComplete: g, ...x } = e,
        { i18n: f } = (0, r.G9)(),
        A = x.onClose,
        [E, I] = s.useState(!1),
        [v, j] = s.useState(null),
        C = n.find((e) => e.stepKey === h);
    if (null == C) throw Error(`Step with key ${h} not found`);
    let N = n.findIndex((e) => e.stepKey === h),
        T = N === n.length - 1,
        S = 0 === N,
        [y, b] = s.useState(!1),
        O = C.nextEnabled ?? !0,
        R = s.useCallback(
            (e) => {
                j(null), m?.(e, h);
            },
            [m, h],
        ),
        L = s.useCallback(async () => {
            await g?.(), b(!0), A();
        }, [g, A]),
        D = s.useCallback(async () => {
            I(!0), j(null);
            try {
                if (null != C.onNext && !(await C.onNext())) return void I(!1);
                T ? await L() : R(n[N + 1].stepKey);
            } catch {
                j(f.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                I(!1);
            }
        }, [R, N, n, T, L, C, f]),
        G = s.useCallback(() => {
            S || R(n[N - 1].stepKey);
        }, [R, N, n, S]),
        k = s.useMemo(
            () => ({ currentStepKey: h, goToStep: R, goToNextStep: D, goToPreviousStep: G, complete: L }),
            [h, R, D, G, L],
        ),
        P = { variant: "secondary", text: f.BACK },
        B = {
            variant: "primary",
            text: T ? f.SUBMIT : f.NEXT,
            disabled: !O,
            loading: E,
            onClick: () => {
                O && !E && D();
            },
        },
        V = { text: f.CANCEL, variant: "secondary", onClick: A },
        w = null != C.secondaryActionButtonProps ? { variant: "secondary", ...C.secondaryActionButtonProps } : null,
        M = C.hideBackButton || S ? void 0 : (0, i.jsx)(l.Q, { ...P, ...C.backButtonProps, onClick: G }),
        U = C.modalProps,
        F = "graphic" in U ? U : null,
        W = null != p && p.length > 0 && p.includes(h),
        H = W && !y ? p.indexOf(h) + 1 : void 0;
    return (
        W && (t = y ? { percent: 100 } : { stepCount: p.length, stepNumber: H }),
        (0, i.jsx)(_.Provider, {
            value: k,
            children: (0, i.jsxs)(a.d, {
                ...x,
                paddingSize: null != F ? "lg" : "sm",
                children: [
                    null != F
                        ? (0, i.jsx)(c.V6, { ...F })
                        : (0, i.jsx)(c.rQ, { title: U.title, subtitle: U.subtitle, progressBarProps: t }),
                    (0, i.jsx)(
                        u.i,
                        {
                            message: v ?? ("notice" in U ? U.notice?.message : void 0),
                            type: null != v ? "critical" : "notice" in U ? U.notice?.type : void 0,
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
                                    children: (0, i.jsx)(d.c, {
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
                        actionsFullWidth: S,
                        actions: [...(S ? [V] : []), ...(null != w ? [w] : []), { ...B, ...C.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
