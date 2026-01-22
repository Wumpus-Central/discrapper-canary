n.d(t, {
    A: () => w,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(502572),
    c = n(435371),
    u = n(421380),
    d = n(397927),
    f = n(923408),
    p = n(688810),
    _ = n(531260),
    h = n(267102),
    m = n(178368),
    g = n(166403),
    E = n(473145),
    b = n(987144),
    y = n(652215),
    O = n(788868),
    A = n(985018),
    v = n(737211);

function S(e, t, n) {
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

function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}

function T(e, t) {
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

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function N(e, t) {
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
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: a,
            buttonText: S,
            targetBoostedGuildTier: T,
            onClose: R = () => {},
            closeLayer: w = () => {},
            pauseAnimation: P = !1,
            applicationId: D,
            handleSubscribeModalClose: x,
            withHighlight: L = !1,
            icon: j,
            intent: M,
            useExpressiveButton: k = !1,
        } = e,
        U = N(e, [
            "analyticsLocation",
            "analyticsSourceLocation",
            "guild",
            "buttonText",
            "targetBoostedGuildTier",
            "onClose",
            "closeLayer",
            "pauseAnimation",
            "applicationId",
            "handleSubscribeModalClose",
            "withHighlight",
            "icon",
            "intent",
            "useExpressiveButton",
        ]),
        { analyticsLocations: G } = (0, p.Ay)(),
        V = (0, h.Us)() === y.BRT.POPOUT,
        [F, B] = i.useState(!1),
        { fractionalState: H } = (0, _.A)(),
        Y = (0, o.bG)([m.A], () => m.A.hasFetched);
    i.useEffect(() => {
        Y || (0, f.CD)();
    }, [Y]);
    let W = (0, E.D$)(m.A.boostSlots),
        K = null != T ? Math.max((0, E.Os)(a, T), 1) : 1,
        z = (0, E.Nc)({
            fractionalState: H,
        }),
        q = async () => {
            B(!0),
                await (0, b.g)({
                    analyticsLocations: G,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: K,
                    onClose: R,
                    closeLayer: w,
                    inPopout: V,
                    applicationId: D,
                    handleSubscribeModalClose: x,
                    intent: M,
                }),
                B(!1);
        },
        X = g.A.getPremiumTypeSubscription(),
        Z = (0, r.jsxs)("div", {
            className: v.x6,
            children: [j, null != S ? S : A.intl.string(A.t.gKmQ1G)],
        }),
        Q = !1;
    return ((Q = null !== X && !(W.length > 0) && (null == X ? void 0 : X.isPausedOrPausePending) && H === O.xc.NONE) &&
        ((Z = (0, r.jsxs)("div", {
            className: v.x6,
            children: [
                (0, r.jsx)(d.XAi, {
                    size: "xs",
                    className: v.iA,
                }),
                " ",
                Z,
            ],
        })),
        (U.disabled = !0)),
    null != z)
        ? k
            ? (0, r.jsx)(c.m_, {
                  text: z,
                  children: (0, r.jsx)(d.Button, {
                      variant: "expressive",
                      icon: d.XAi,
                      iconPosition: "start",
                      disabled: !0,
                      text: null != S ? S : A.intl.string(A.t.gKmQ1G),
                  }),
              })
            : (0, r.jsx)(l.A, {
                  text: z,
                  "aria-label": !1,
                  children: (e) =>
                      (0, r.jsx)(
                          d.wLn,
                          C(
                              I(
                                  C(
                                      I(
                                          {
                                              "data-migration-pending": !0,
                                          },
                                          e,
                                      ),
                                      {
                                          disabled: !0,
                                          size: u.$n.Sizes.SMALL,
                                          pauseAnimation: P,
                                      },
                                  ),
                                  U,
                              ),
                              {
                                  children: Z,
                              },
                          ),
                      ),
              })
        : k
          ? (0, r.jsx)(d.Button, {
                variant: "expressive",
                disabled: Q,
                loading: F,
                text: null != S ? S : A.intl.string(A.t.gKmQ1G),
                onClick: q,
            })
          : (0, r.jsx)(
                d.wLn,
                C(
                    I(
                        {
                            "data-migration-pending": !0,
                            size: u.$n.Sizes.SMALL,
                        },
                        U,
                    ),
                    {
                        className: s()(U.className, {
                            [v.yj]: L,
                        }),
                        submitting: F,
                        onClick: q,
                        pauseAnimation: P,
                        children: Z,
                    },
                ),
            );
};
