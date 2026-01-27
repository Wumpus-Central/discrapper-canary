n.d(t, {
    t: () => y,
}),
    n(65821),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(123292),
    o = n(460890),
    s = n(224640),
    l = n(696208),
    c = n(430993),
    u = n(20742),
    d = n(655053);

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

function h(e, t) {
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

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let E = i.createContext(null);

function y(e) {
    var t, n, f;
    let { steps: _, currentStepKey: g, numberedSteps: y, onStepChange: b, onComplete: O } = e,
        v = m(e, ["steps", "currentStepKey", "numberedSteps", "onStepChange", "onComplete"]),
        { i18n: A } = (0, o.G9)(),
        I = v.onClose,
        [S, T] = i.useState(!1),
        [C, N] = i.useState(null),
        w = _.find((e) => e.stepKey === g);
    if (null == w) throw Error("Step with key ".concat(g, " not found"));
    let R = _.findIndex((e) => e.stepKey === g),
        P = R === _.length - 1,
        D = 0 === R,
        L = null == (t = w.nextEnabled) || t,
        x = i.useCallback(
            (e) => {
                N(null), null == b || b(e, g);
            },
            [b, g],
        ),
        M = i.useCallback(async () => {
            await (null == O ? void 0 : O()), I();
        }, [O, I]),
        j = i.useCallback(async () => {
            T(!0), N(null);
            try {
                if (null != w.onNext && !(await w.onNext())) return void T(!1);
                P ? await M() : x(_[R + 1].stepKey);
            } catch (e) {
                N(A.INLINE_NOTICE_GENERIC_ERROR);
            } finally {
                T(!1);
            }
        }, [x, R, _, P, M, w, A]),
        k = i.useCallback(() => {
            D || x(_[R - 1].stepKey);
        }, [x, R, _, D]),
        U = i.useMemo(
            () => ({
                currentStepKey: g,
                goToStep: x,
                goToNextStep: j,
                goToPreviousStep: k,
                complete: M,
            }),
            [g, x, j, k, M],
        ),
        G = {
            variant: "secondary",
            text: A.BACK,
        },
        F = {
            variant: "primary",
            text: P ? A.SUBMIT : A.NEXT,
            disabled: !L,
            loading: S,
            onClick: () => {
                L && !S && j();
            },
        },
        V = {
            text: A.CANCEL,
            variant: "secondary",
            onClick: I,
        },
        B =
            w.hideBackButton || D
                ? void 0
                : (0, r.jsx)(
                      a.Q,
                      h(p({}, G, w.backButtonProps), {
                          onClick: k,
                      }),
                  ),
        H = w.modalProps,
        Y = "graphic" in H ? H : null;
    return (0, r.jsx)(E.Provider, {
        value: U,
        children: (0, r.jsxs)(
            s.d,
            h(p({}, v), {
                paddingSize: null != Y ? "lg" : "sm",
                children: [
                    null != Y
                        ? (0, r.jsx)(u.V6, p({}, Y))
                        : (0, r.jsx)(u.rQ, {
                              title: H.title,
                              subtitle: H.subtitle,
                              stepNumber: (null == y ? void 0 : y.includes(g)) ? y.indexOf(g) + 1 : void 0,
                              stepCount: null == y ? void 0 : y.length,
                          }),
                    (0, r.jsx)(
                        d.i,
                        {
                            message:
                                null != C ? C : "notice" in H ? (null == (n = H.notice) ? void 0 : n.message) : void 0,
                            type:
                                null != C
                                    ? "critical"
                                    : "notice" in H
                                      ? null == (f = H.notice)
                                          ? void 0
                                          : f.type
                                      : void 0,
                        },
                        g,
                    ),
                    _.map((e) => {
                        let t = "graphic" in e.modalProps ? null : e.modalProps;
                        return (
                            (null != e.body ||
                                (null == t ? void 0 : t.input) != null ||
                                (null == t ? void 0 : t.listProps) != null) &&
                            (0, r.jsx)(
                                "div",
                                {
                                    style: {
                                        display: e.stepKey === g ? void 0 : "none",
                                    },
                                    children: (0, r.jsx)(c.c, {
                                        controls: null == t ? void 0 : t.input,
                                        listProps: null == t ? void 0 : t.listProps,
                                        children: e.body,
                                    }),
                                },
                                e.stepKey,
                            )
                        );
                    }),
                    (0, r.jsx)(l.H, {
                        leading: B,
                        actionsFullWidth: D,
                        actions: [...(D ? [V] : []), p({}, F, w.nextButtonProps)],
                    }),
                ],
            }),
        ),
    });
}
