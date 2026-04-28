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
    let S = a.findIndex((e) => e.stepKey === p),
        k = S === a.length - 1,
        w = 0 === S,
        [E, M] = n.useState(!1),
        T = V.nextEnabled ?? !0,
        I = n.useCallback(
            (e) => {
                j(null), h?.(e, p);
            },
            [h, p],
        ),
        N = n.useCallback(async () => {
            await x?.(), M(!0), v();
        }, [x, v]),
        D = n.useCallback(async () => {
            _(!0), j(null);
            try {
                if (null != V.onNext && !(await V.onNext())) return void _(!1);
                k ? await N() : I(a[S + 1].stepKey);
            } catch {
                j(f.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                _(!1);
            }
        }, [I, S, a, k, N, V, f]),
        A = n.useCallback(() => {
            w || I(a[S - 1].stepKey);
        }, [I, S, a, w]),
        R = n.useMemo(
            () => ({ currentStepKey: p, goToStep: I, goToNextStep: D, goToPreviousStep: A, complete: N }),
            [p, I, D, A, N],
        ),
        L = { variant: "secondary", text: f.BACK },
        O = {
            variant: "primary",
            text: k ? f.SUBMIT : f.NEXT,
            disabled: !T,
            loading: y,
            onClick: () => {
                T && !y && D();
            },
        },
        P = { text: f.CANCEL, variant: "secondary", onClick: v },
        B = null != V.secondaryActionButtonProps ? { variant: "secondary", ...V.secondaryActionButtonProps } : null,
        F = V.hideBackButton || w ? void 0 : (0, t.jsx)(i.Q, { ...L, ...V.backButtonProps, onClick: A }),
        z = V.modalProps,
        H = "graphic" in z ? z : null,
        $ = null != m && m.length > 0 && m.includes(p),
        G = $ && !E ? m.indexOf(p) + 1 : void 0;
    return (
        $ && (l = E ? { percent: 100 } : { stepCount: m.length, stepNumber: G }),
        (0, t.jsx)(b.Provider, {
            value: R,
            children: (0, t.jsxs)(r.d, {
                ...g,
                paddingSize: null != H ? "lg" : "sm",
                children: [
                    null != H
                        ? (0, t.jsx)(u.V6, { ...H })
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
                        actions: [...(w ? [P] : []), ...(null != B ? [B] : []), { ...O, ...V.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
