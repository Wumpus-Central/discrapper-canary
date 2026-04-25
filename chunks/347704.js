a.d(l, { n: () => p, t: () => m });
var t = a(627968),
    n = a(64700),
    i = a(123292),
    o = a(460890),
    r = a(224640),
    s = a(696208),
    d = a(430993),
    u = a(20742),
    c = a(655053);
let b = n.createContext(null);
function p() {
    let e = n.useContext(b);
    if (null == e) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return e;
}
function m(e) {
    let l,
        { steps: a, currentStepKey: p, numberedSteps: m, onStepChange: h, onComplete: x, ...g } = e,
        { i18n: f } = (0, o.G9)(),
        v = g.onClose,
        [y, _] = n.useState(!1),
        [C, j] = n.useState(null),
        V = a.find((e) => e.stepKey === p);
    if (null == V) throw Error(`Step with key ${p} not found`);
    let k = a.findIndex((e) => e.stepKey === p),
        S = k === a.length - 1,
        w = 0 === k,
        [T, M] = n.useState(!1),
        N = V.nextEnabled ?? !0,
        E = n.useCallback(
            (e) => {
                j(null), h?.(e, p);
            },
            [h, p],
        ),
        D = n.useCallback(async () => {
            await x?.(), M(!0), v();
        }, [x, v]),
        I = n.useCallback(async () => {
            _(!0), j(null);
            try {
                if (null != V.onNext && !(await V.onNext())) return void _(!1);
                S ? await D() : E(a[k + 1].stepKey);
            } catch {
                j(f.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                _(!1);
            }
        }, [E, k, a, S, D, V, f]),
        A = n.useCallback(() => {
            w || E(a[k - 1].stepKey);
        }, [E, k, a, w]),
        L = n.useMemo(
            () => ({ currentStepKey: p, goToStep: E, goToNextStep: I, goToPreviousStep: A, complete: D }),
            [p, E, I, A, D],
        ),
        R = { variant: "secondary", text: f.BACK },
        P = {
            variant: "primary",
            text: S ? f.SUBMIT : f.NEXT,
            disabled: !N,
            loading: y,
            onClick: () => {
                N && !y && I();
            },
        },
        O = { text: f.CANCEL, variant: "secondary", onClick: v },
        B = null != V.secondaryActionButtonProps ? { variant: "secondary", ...V.secondaryActionButtonProps } : null,
        F = V.hideBackButton || w ? void 0 : (0, t.jsx)(i.Q, { ...R, ...V.backButtonProps, onClick: A }),
        z = V.modalProps,
        $ = "graphic" in z ? z : null,
        H = null != m && m.length > 0 && m.includes(p),
        G = H && !T ? m.indexOf(p) + 1 : void 0;
    return (
        H && (l = T ? { percent: 100 } : { stepCount: m.length, stepNumber: G }),
        (0, t.jsx)(b.Provider, {
            value: L,
            children: (0, t.jsxs)(r.d, {
                ...g,
                paddingSize: null != $ ? "lg" : "sm",
                children: [
                    null != $
                        ? (0, t.jsx)(u.V6, { ...$ })
                        : (0, t.jsx)(u.rQ, { title: z.title, subtitle: z.subtitle, progressBarProps: l }),
                    (0, t.jsx)(
                        c.i,
                        {
                            message: C ?? ("notice" in z ? z.notice?.message : void 0),
                            type: null != C ? "critical" : "notice" in z ? z.notice?.type : void 0,
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
                        leading: F,
                        actionsFullWidth: w,
                        actions: [...(w ? [O] : []), ...(null != B ? [B] : []), { ...P, ...V.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
