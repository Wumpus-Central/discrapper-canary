n.d(t, {
    d: () => y,
    v: () => b,
}),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(293706),
    o = n(402453),
    s = n(987153),
    l = n(144771),
    c = n(166935),
    u = n(575118),
    d = n(880521);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = i.createContext(null);
function b() {
    let e = i.useContext(E);
    if (null == e) throw Error("useMultiStepModalContext must be used within a MultiStepModal");
    return e;
}
function y(e) {
    var t,
        n,
        { steps: f, currentStepKey: _, onStepChange: g, onComplete: b, stepCount: y } = e,
        O = h(e, ["steps", "currentStepKey", "onStepChange", "onComplete", "stepCount"]);
    let { i18n: v } = (0, o.ZF)(),
        S = O.onClose,
        I = f.find((e) => e.stepKey === _);
    if (null == I) throw Error("Step with key ".concat(_, " not found"));
    let T = f.findIndex((e) => e.stepKey === _),
        A = T === f.length - 1,
        C = 0 === T,
        [N, P] = i.useState(!1),
        [R, D] = i.useState(_);
    R !== _ && (P(!1), D(_));
    let w = i.useCallback(
            (e) => {
                null == g || g(e);
            },
            [g],
        ),
        x = i.useCallback(async () => {
            await (null == b ? void 0 : b()), S();
        }, [b, S]),
        L = i.useCallback(async () => {
            A ? await x() : g(f[T + 1].stepKey);
        }, [g, T, f, A, x]),
        j = i.useCallback(() => {
            C || g(f[T - 1].stepKey);
        }, [g, T, f, C]),
        M = i.useMemo(
            () => ({
                currentStepKey: _,
                setNextEnabled: P,
                goToStep: w,
                goToNextStep: L,
                goToPreviousStep: j,
                complete: x,
            }),
            [_, P, w, L, j, x],
        ),
        k = {
            variant: "secondary",
            text: v.BACK,
        },
        U = {
            variant: "primary",
            text: v.NEXT,
            disabled: !N,
            onClick: () => {
                N && L();
            },
        },
        G = I.hideBackButton || C ? void 0 : (0, r.jsx)(a.A, m(p({}, k, I.backButtonProps), { onClick: j }));
    return (0, r.jsx)(E.Provider, {
        value: M,
        children: (0, r.jsxs)(
            s.I,
            m(p({}, O), {
                children: [
                    (0, r.jsx)(u.x, {
                        title: I.title,
                        subtitle: I.subtitle,
                        stepNumber: I.stepNumber,
                        stepCount: y,
                    }),
                    (0, r.jsx)(d.Y, {
                        message: null == (t = I.notice) ? void 0 : t.message,
                        type: null == (n = I.notice) ? void 0 : n.type,
                    }),
                    (0, r.jsx)(c.f, {
                        controls: I.input,
                        listProps: I.listProps,
                        children: I.body,
                    }),
                    (0, r.jsx)(l.G, {
                        leading: G,
                        actionsFullWidth: C,
                        actions: [
                            {
                                text: v.CANCEL,
                                variant: "secondary",
                                onClick: () => {
                                    S();
                                },
                            },
                            p({}, U, I.nextButtonProps),
                        ],
                    }),
                ],
            }),
        ),
    });
}
