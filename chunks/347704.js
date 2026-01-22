n.d(t, {
    t: () => b,
}),
    n(65821),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(123292),
    s = n(460890),
    o = n(224640),
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

function b(e) {
    var t, n, f;
    let { steps: _, currentStepKey: g, numberedSteps: b, onStepChange: y, onComplete: O } = e,
        A = m(e, ["steps", "currentStepKey", "numberedSteps", "onStepChange", "onComplete"]),
        { i18n: v } = (0, s.G9)(),
        S = A.onClose,
        I = _.find((e) => e.stepKey === g);
    if (null == I) throw Error("Step with key ".concat(g, " not found"));
    let T = _.findIndex((e) => e.stepKey === g),
        C = T === _.length - 1,
        N = 0 === T,
        R = null == (t = I.nextEnabled) || t,
        w = i.useCallback(
            (e) => {
                null == y || y(e, g);
            },
            [y, g],
        ),
        P = i.useCallback(async () => {
            await (null == O ? void 0 : O()), S();
        }, [O, S]),
        D = i.useCallback(async () => {
            (null == I.onNext || (await I.onNext())) && (C ? await P() : w(_[T + 1].stepKey));
        }, [w, T, _, C, P, I]),
        x = i.useCallback(() => {
            N || w(_[T - 1].stepKey);
        }, [w, T, _, N]),
        L = i.useMemo(
            () => ({
                currentStepKey: g,
                goToStep: w,
                goToNextStep: D,
                goToPreviousStep: x,
                complete: P,
            }),
            [g, w, D, x, P],
        ),
        j = {
            variant: "secondary",
            text: v.BACK,
        },
        M = {
            variant: "primary",
            text: v.NEXT,
            disabled: !R,
            onClick: () => {
                R && D();
            },
        },
        k = {
            text: v.CANCEL,
            variant: "secondary",
            onClick: S,
        },
        U =
            I.hideBackButton || N
                ? void 0
                : (0, r.jsx)(
                      a.Q,
                      h(p({}, j, I.backButtonProps), {
                          onClick: x,
                      }),
                  ),
        G = I.modalProps,
        V = "graphic" in G ? G : null;
    return (0, r.jsx)(E.Provider, {
        value: L,
        children: (0, r.jsxs)(
            o.d,
            h(p({}, A), {
                paddingSize: null != V ? "lg" : "sm",
                children: [
                    null != V
                        ? (0, r.jsx)(u.V6, p({}, V))
                        : (0, r.jsx)(u.rQ, {
                              title: G.title,
                              subtitle: G.subtitle,
                              stepNumber: (null == b ? void 0 : b.includes(g)) ? b.indexOf(g) + 1 : void 0,
                              stepCount: null == b ? void 0 : b.length,
                          }),
                    "notice" in G &&
                        (0, r.jsx)(d.i, {
                            message: null == (n = G.notice) ? void 0 : n.message,
                            type: null == (f = G.notice) ? void 0 : f.type,
                        }),
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
                        leading: U,
                        actionsFullWidth: N,
                        actions: [...(N ? [k] : []), p({}, M, I.nextButtonProps)],
                    }),
                ],
            }),
        ),
    });
}
