a.d(l, { n: () => p, t: () => m });
var t = a(627968),
    o = a(64700),
    n = a(123292),
    i = a(460890),
    r = a(224640),
    s = a(696208),
    d = a(430993),
    u = a(20742),
    c = a(655053);
let b = o.createContext(null);
function p() {
    let e = o.useContext(b);
    if (null == e) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return e;
}
function m(e) {
    let l,
        { steps: a, currentStepKey: p, numberedSteps: m, onStepChange: h, onComplete: x, ...v } = e,
        { i18n: f } = (0, i.G9)(),
        g = v.onClose,
        [y, C] = o.useState(!1),
        [j, V] = o.useState(null),
        k = a.find((e) => e.stepKey === p);
    if (null == k) throw Error(`Step with key ${p} not found`);
    let S = a.findIndex((e) => e.stepKey === p),
        w = S === a.length - 1,
        _ = 0 === S,
        [T, M] = o.useState(!1),
        D = k.nextEnabled ?? !0,
        E = o.useCallback(
            (e) => {
                V(null), h?.(e, p);
            },
            [h, p],
        ),
        N = o.useCallback(async () => {
            await x?.(), M(!0), g();
        }, [x, g]),
        A = o.useCallback(async () => {
            C(!0), V(null);
            try {
                if (null != k.onNext && !(await k.onNext())) return void C(!1);
                w ? await N() : E(a[S + 1].stepKey);
            } catch {
                V(f.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                C(!1);
            }
        }, [E, S, a, w, N, k, f]),
        I = o.useCallback(() => {
            _ || E(a[S - 1].stepKey);
        }, [E, S, a, _]),
        L = o.useMemo(
            () => ({ currentStepKey: p, goToStep: E, goToNextStep: A, goToPreviousStep: I, complete: N }),
            [p, E, A, I, N],
        ),
        P = { variant: "secondary", text: f.BACK },
        O = {
            variant: "primary",
            text: w ? f.SUBMIT : f.NEXT,
            disabled: !D,
            loading: y,
            onClick: () => {
                D && !y && A();
            },
        },
        R = { text: f.CANCEL, variant: "secondary", onClick: g },
        B = null != k.secondaryActionButtonProps ? { variant: "secondary", ...k.secondaryActionButtonProps } : null,
        z = k.hideBackButton || _ ? void 0 : (0, t.jsx)(n.Q, { ...P, ...k.backButtonProps, onClick: I }),
        F = k.modalProps,
        $ = "graphic" in F ? F : null,
        G = null != m && m.length > 0 && m.includes(p),
        H = G && !T ? m.indexOf(p) + 1 : void 0;
    return (
        G && (l = T ? { percent: 100 } : { stepCount: m.length, stepNumber: H }),
        (0, t.jsx)(b.Provider, {
            value: L,
            children: (0, t.jsxs)(r.d, {
                ...v,
                paddingSize: null != $ ? "lg" : "sm",
                children: [
                    null != $
                        ? (0, t.jsx)(u.V6, { ...$ })
                        : (0, t.jsx)(u.rQ, { title: F.title, subtitle: F.subtitle, progressBarProps: l }),
                    (0, t.jsx)(
                        c.i,
                        {
                            message: j ?? ("notice" in F ? F.notice?.message : void 0),
                            type: null != j ? "critical" : "notice" in F ? F.notice?.type : void 0,
                        },
                        p,
                    ),
                    a.map((e) => {
                        let l = "graphic" in e.modalProps ? null : e.modalProps;
                        return (
                            (null != e.body || l?.input != null || l?.listProps != null) &&
                            (0, t.jsx)(
                                "div",
                                {
                                    style: { display: e.stepKey === p ? "contents" : "none" },
                                    children: (0, t.jsx)(d.c, {
                                        controls: l?.input,
                                        listProps: l?.listProps,
                                        children: e.body,
                                    }),
                                },
                                e.stepKey,
                            )
                        );
                    }),
                    (0, t.jsx)(s.H, {
                        leading: z,
                        actionsFullWidth: _,
                        actions: [...(_ ? [R] : []), ...(null != B ? [B] : []), { ...O, ...k.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
