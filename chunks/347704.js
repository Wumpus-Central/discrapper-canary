"use strict";
n.d(t, { n: () => h, t: () => p });
var i = n(627968),
    s = n(64700),
    l = n(123292),
    r = n(460890),
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
function p(e) {
    let t,
        { steps: n, currentStepKey: h, numberedSteps: p, onStepChange: m, onComplete: g, ...A } = e,
        { i18n: f } = (0, r.G9)(),
        E = A.onClose,
        [x, I] = s.useState(!1),
        [v, N] = s.useState(null),
        C = n.find((e) => e.stepKey === h);
    if (null == C) throw Error(`Step with key ${h} not found`);
    let S = n.findIndex((e) => e.stepKey === h),
        j = S === n.length - 1,
        b = 0 === S,
        [T, y] = s.useState(!1),
        O = C.nextEnabled ?? !0,
        R = s.useCallback(
            (e) => {
                N(null), m?.(e, h);
            },
            [m, h],
        ),
        L = s.useCallback(async () => {
            await g?.(), y(!0), E();
        }, [g, E]),
        D = s.useCallback(async () => {
            I(!0), N(null);
            try {
                if (null != C.onNext && !(await C.onNext())) return void I(!1);
                j ? await L() : R(n[S + 1].stepKey);
            } catch {
                N(f.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                I(!1);
            }
        }, [R, S, n, j, L, C, f]),
        P = s.useCallback(() => {
            b || R(n[S - 1].stepKey);
        }, [R, S, n, b]),
        k = s.useMemo(
            () => ({ currentStepKey: h, goToStep: R, goToNextStep: D, goToPreviousStep: P, complete: L }),
            [h, R, D, P, L],
        ),
        G = { variant: "secondary", text: f.BACK },
        w = {
            variant: "primary",
            text: j ? f.SUBMIT : f.NEXT,
            disabled: !O,
            loading: x,
            onClick: () => {
                O && !x && D();
            },
        },
        B = { text: f.CANCEL, variant: "secondary", onClick: E },
        U = null != C.secondaryActionButtonProps ? { variant: "secondary", ...C.secondaryActionButtonProps } : null,
        M = C.hideBackButton || b ? void 0 : (0, i.jsx)(l.Q, { ...G, ...C.backButtonProps, onClick: P }),
        V = C.modalProps,
        F = "graphic" in V ? V : null,
        W = null != p && p.length > 0 && p.includes(h),
        H = W && !T ? p.indexOf(h) + 1 : void 0;
    return (
        W && (t = T ? { percent: 100 } : { stepCount: p.length, stepNumber: H }),
        (0, i.jsx)(_.Provider, {
            value: k,
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
                        actions: [...(b ? [B] : []), ...(null != U ? [U] : []), { ...w, ...C.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
