n.d(t, { d: () => b }), n(415506), n(388685);
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
function b(e) {
    var t,
        n,
        f,
        { steps: _, currentStepKey: g, numberedSteps: b, onStepChange: y, onComplete: O } = e,
        v = h(e, ["steps", "currentStepKey", "numberedSteps", "onStepChange", "onComplete"]);
    let { i18n: S } = (0, o.ZF)(),
        I = v.onClose,
        T = _.find((e) => e.stepKey === g);
    if (null == T) throw Error("Step with key ".concat(g, " not found"));
    let C = _.findIndex((e) => e.stepKey === g),
        A = C === _.length - 1,
        N = 0 === C,
        P = null == (f = T.nextEnabled) || f,
        R = i.useCallback(
            (e) => {
                null == y || y(e, g);
            },
            [y, g],
        ),
        w = i.useCallback(async () => {
            await (null == O ? void 0 : O()), I();
        }, [O, I]),
        D = i.useCallback(async () => {
            (null == T.onNext || (await T.onNext())) && (A ? await w() : R(_[C + 1].stepKey));
        }, [R, C, _, A, w, T]),
        x = i.useCallback(() => {
            N || R(_[C - 1].stepKey);
        }, [R, C, _, N]),
        L = i.useMemo(
            () => ({
                currentStepKey: g,
                goToStep: R,
                goToNextStep: D,
                goToPreviousStep: x,
                complete: w,
            }),
            [g, R, D, x, w],
        ),
        j = {
            variant: "secondary",
            text: S.BACK,
        },
        M = {
            variant: "primary",
            text: S.NEXT,
            disabled: !P,
            onClick: () => {
                P && D();
            },
        },
        k = {
            text: S.CANCEL,
            variant: "secondary",
            onClick: I,
        },
        U = T.hideBackButton || N ? void 0 : (0, r.jsx)(a.A, m(p({}, j, T.backButtonProps), { onClick: x }));
    return (0, r.jsx)(E.Provider, {
        value: L,
        children: (0, r.jsxs)(
            s.I,
            m(p({}, v), {
                children: [
                    (0, r.jsx)(u.x, {
                        title: T.title,
                        subtitle: T.subtitle,
                        stepNumber: (null == b ? void 0 : b.includes(g)) ? b.indexOf(g) + 1 : void 0,
                        stepCount: null == b ? void 0 : b.length,
                    }),
                    (0, r.jsx)(d.Y, {
                        message: null == (t = T.notice) ? void 0 : t.message,
                        type: null == (n = T.notice) ? void 0 : n.type,
                    }),
                    _.map((e) =>
                        null != e.body || null != e.input || null != e.listProps
                            ? (0, r.jsx)(
                                  "div",
                                  {
                                      style: { display: e.stepKey === g ? void 0 : "none" },
                                      children: (0, r.jsx)(c.f, {
                                          controls: e.input,
                                          listProps: e.listProps,
                                          children: e.body,
                                      }),
                                  },
                                  e.stepKey,
                              )
                            : void 0,
                    ),
                    (0, r.jsx)(l.G, {
                        leading: U,
                        actionsFullWidth: N,
                        actions: [...(N ? [k] : []), p({}, M, T.nextButtonProps)],
                    }),
                ],
            }),
        ),
    });
}
