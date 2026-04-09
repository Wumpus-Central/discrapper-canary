"use strict";
n.d(t, { n: () => f, t: () => p });
var r = n(627968),
    i = n(64700),
    s = n(123292),
    a = n(460890),
    o = n(224640),
    l = n(696208),
    u = n(430993),
    c = n(20742),
    d = n(655053);
let _ = i.createContext(null);
function f() {
    let e = i.useContext(_);
    if (null == e) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return e;
}
function p(e) {
    let t,
        { steps: n, currentStepKey: f, numberedSteps: p, onStepChange: h, onComplete: m, ...E } = e,
        { i18n: g } = (0, a.G9)(),
        A = E.onClose,
        [I, T] = i.useState(!1),
        [S, y] = i.useState(null),
        v = n.find((e) => e.stepKey === f);
    if (null == v) throw Error(`Step with key ${f} not found`);
    let N = n.findIndex((e) => e.stepKey === f),
        C = N === n.length - 1,
        R = 0 === N,
        [O, b] = i.useState(!1),
        D = v.nextEnabled ?? !0,
        L = i.useCallback(
            (e) => {
                y(null), h?.(e, f);
            },
            [h, f],
        ),
        w = i.useCallback(async () => {
            await m?.(), b(!0), A();
        }, [m, A]),
        M = i.useCallback(async () => {
            T(!0), y(null);
            try {
                if (null != v.onNext && !(await v.onNext())) return void T(!1);
                C ? await w() : L(n[N + 1].stepKey);
            } catch {
                y(g.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                T(!1);
            }
        }, [L, N, n, C, w, v, g]),
        x = i.useCallback(() => {
            R || L(n[N - 1].stepKey);
        }, [L, N, n, R]),
        P = i.useMemo(
            () => ({ currentStepKey: f, goToStep: L, goToNextStep: M, goToPreviousStep: x, complete: w }),
            [f, L, M, x, w],
        ),
        k = { variant: "secondary", text: g.BACK },
        U = {
            variant: "primary",
            text: C ? g.SUBMIT : g.NEXT,
            disabled: !D,
            loading: I,
            onClick: () => {
                D && !I && M();
            },
        },
        G = { text: g.CANCEL, variant: "secondary", onClick: A },
        F = v.hideBackButton || R ? void 0 : (0, r.jsx)(s.Q, { ...k, ...v.backButtonProps, onClick: x }),
        V = v.modalProps,
        B = "graphic" in V ? V : null,
        H = null != p && p.length > 0 && p.includes(f),
        j = H && !O ? p.indexOf(f) + 1 : void 0;
    return (
        H && (t = O ? { percent: 100 } : { stepCount: p.length, stepNumber: j }),
        (0, r.jsx)(_.Provider, {
            value: P,
            children: (0, r.jsxs)(o.d, {
                ...E,
                paddingSize: null != B ? "lg" : "sm",
                children: [
                    null != B
                        ? (0, r.jsx)(c.V6, { ...B })
                        : (0, r.jsx)(c.rQ, { title: V.title, subtitle: V.subtitle, progressBarProps: t }),
                    (0, r.jsx)(
                        d.i,
                        {
                            message: S ?? ("notice" in V ? V.notice?.message : void 0),
                            type: null != S ? "critical" : "notice" in V ? V.notice?.type : void 0,
                        },
                        f,
                    ),
                    n.map((e) => {
                        let t = "graphic" in e.modalProps ? null : e.modalProps;
                        return (
                            (null != e.body || t?.input != null || t?.listProps != null) &&
                            (0, r.jsx)(
                                "div",
                                {
                                    style: { display: e.stepKey === f ? void 0 : "none" },
                                    children: (0, r.jsx)(u.c, {
                                        controls: t?.input,
                                        listProps: t?.listProps,
                                        children: e.body,
                                    }),
                                },
                                e.stepKey,
                            )
                        );
                    }),
                    (0, r.jsx)(l.H, {
                        leading: F,
                        actionsFullWidth: R,
                        actions: [...(R ? [G] : []), { ...U, ...v.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
