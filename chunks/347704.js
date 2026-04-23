a.d(l, { n: () => p, t: () => m });
var t = a(627968),
    n = a(64700),
    o = a(123292),
    i = a(460890),
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
        { i18n: f } = (0, i.G9)(),
        v = g.onClose,
        [y, _] = n.useState(!1),
        [C, j] = n.useState(null),
        V = a.find((e) => e.stepKey === p);
    if (null == V) throw Error(`Step with key ${p} not found`);
    let k = a.findIndex((e) => e.stepKey === p),
        S = k === a.length - 1,
        w = 0 === k,
        [M, T] = n.useState(!1),
        A = V.nextEnabled ?? !0,
        N = n.useCallback(
            (e) => {
                j(null), h?.(e, p);
            },
            [h, p],
        ),
        E = n.useCallback(async () => {
            await x?.(), T(!0), v();
        }, [x, v]),
        D = n.useCallback(async () => {
            _(!0), j(null);
            try {
                if (null != V.onNext && !(await V.onNext())) return void _(!1);
                S ? await E() : N(a[k + 1].stepKey);
            } catch {
                j(f.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                _(!1);
            }
        }, [N, k, a, S, E, V, f]),
        I = n.useCallback(() => {
            w || N(a[k - 1].stepKey);
        }, [N, k, a, w]),
        L = n.useMemo(
            () => ({ currentStepKey: p, goToStep: N, goToNextStep: D, goToPreviousStep: I, complete: E }),
            [p, N, D, I, E],
        ),
        R = { variant: "secondary", text: f.BACK },
        P = {
            variant: "primary",
            text: S ? f.SUBMIT : f.NEXT,
            disabled: !A,
            loading: y,
            onClick: () => {
                A && !y && D();
            },
        },
        O = { text: f.CANCEL, variant: "secondary", onClick: v },
        B = null != V.secondaryActionButtonProps ? { variant: "secondary", ...V.secondaryActionButtonProps } : null,
        z = V.hideBackButton || w ? void 0 : (0, t.jsx)(o.Q, { ...R, ...V.backButtonProps, onClick: I }),
        F = V.modalProps,
        $ = "graphic" in F ? F : null,
        H = null != m && m.length > 0 && m.includes(p),
        G = H && !M ? m.indexOf(p) + 1 : void 0;
    return (
        H && (l = M ? { percent: 100 } : { stepCount: m.length, stepNumber: G }),
        (0, t.jsx)(b.Provider, {
            value: L,
            children: (0, t.jsxs)(r.d, {
                ...g,
                paddingSize: null != $ ? "lg" : "sm",
                children: [
                    null != $
                        ? (0, t.jsx)(u.V6, { ...$ })
                        : (0, t.jsx)(u.rQ, { title: F.title, subtitle: F.subtitle, progressBarProps: l }),
                    (0, t.jsx)(
                        c.i,
                        {
                            message: C ?? ("notice" in F ? F.notice?.message : void 0),
                            type: null != C ? "critical" : "notice" in F ? F.notice?.type : void 0,
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
                        actionsFullWidth: w,
                        actions: [...(w ? [O] : []), ...(null != B ? [B] : []), { ...P, ...V.nextButtonProps }],
                    }),
                ],
            }),
        })
    );
}
