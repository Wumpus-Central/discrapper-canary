"use strict";
n.d(t, { t: () => f });
var r = n(627968),
    i = n(64700),
    a = n(123292),
    s = n(460890),
    o = n(224640),
    l = n(696208),
    u = n(430993),
    c = n(20742),
    d = n(655053);
let _ = i.createContext(null);
function f(e) {
    let t,
        { steps: n, currentStepKey: f, numberedSteps: p, onStepChange: h, onComplete: m, ...g } = e,
        { i18n: E } = (0, s.G9)(),
        A = g.onClose,
        [I, T] = i.useState(!1),
        [y, S] = i.useState(null),
        v = n.find((e) => e.stepKey === f);
    if (null == v) throw Error(`Step with key ${f} not found`);
    let C = n.findIndex((e) => e.stepKey === f),
        b = C === n.length - 1,
        N = 0 === C,
        [R, O] = i.useState(!1),
        D = v.nextEnabled ?? !0,
        L = i.useCallback(
            (e) => {
                S(null), h?.(e, f);
            },
            [h, f],
        ),
        w = i.useCallback(async () => {
            await m?.(), O(!0), A();
        }, [m, A]),
        x = i.useCallback(async () => {
            T(!0), S(null);
            try {
                if (null != v.onNext && !(await v.onNext())) return void T(!1);
                b ? await w() : L(n[C + 1].stepKey);
            } catch {
                S(E.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                T(!1);
            }
        }, [L, C, n, b, w, v, E]),
        P = i.useCallback(() => {
            N || L(n[C - 1].stepKey);
        }, [L, C, n, N]),
        M = i.useMemo(
            () => ({ currentStepKey: f, goToStep: L, goToNextStep: x, goToPreviousStep: P, complete: w }),
            [f, L, x, P, w],
        ),
        k = { variant: "secondary", text: E.BACK },
        U = {
            variant: "primary",
            text: b ? E.SUBMIT : E.NEXT,
            disabled: !D,
            loading: I,
            onClick: () => {
                D && !I && x();
            },
        },
        G = { text: E.CANCEL, variant: "secondary", onClick: A },
        V = v.hideBackButton || N ? void 0 : (0, r.jsx)(a.Q, { ...k, ...v.backButtonProps, onClick: P }),
        F = v.modalProps,
        B = "graphic" in F ? F : null,
        j = null != p && p.length > 0 && p.includes(f),
        H = j && !R ? p.indexOf(f) + 1 : void 0;
    return (
        j && (t = R ? { percent: 100 } : { stepCount: p.length, stepNumber: H }),
        (0, r.jsx)(_.Provider, {
            value: M,
            children: (0, r.jsxs)(o.d, {
                ...g,
                paddingSize: null != B ? "lg" : "sm",
                children: [
                    null != B
                        ? (0, r.jsx)(c.V6, { ...B })
                        : (0, r.jsx)(c.rQ, { title: F.title, subtitle: F.subtitle, progressBarProps: t }),
                    (0, r.jsx)(
                        d.i,
                        {
                            message: y ?? ("notice" in F ? F.notice?.message : void 0),
                            type: null != y ? "critical" : "notice" in F ? F.notice?.type : void 0,
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
                        leading: V,
                        actionsFullWidth: N,
                        actions: [...(N ? [G] : []), { ...U, ...v.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
