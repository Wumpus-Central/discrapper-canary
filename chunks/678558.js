n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(589358),
    c = n(681715),
    u = n(755721),
    d = n(481060),
    f = n(179360),
    p = n(906732),
    _ = n(975298),
    m = n(728285),
    h = n(314884),
    g = n(78839),
    E = n(267642),
    b = n(879892),
    y = n(981631),
    O = n(474936),
    v = n(388032),
    S = n(132810);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = (e) => {
    let {
            analyticsLocation: t,
            analyticsSourceLocation: n,
            guild: a,
            buttonText: I,
            targetBoostedGuildTier: A,
            onClose: P = () => {},
            closeLayer: R = () => {},
            pauseAnimation: w = !1,
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
        { analyticsLocations: G } = (0, p.ZP)(),
        Z = (0, m.bp)() === y.IlC.POPOUT,
        [B, F] = i.useState(!1),
        { fractionalState: V } = (0, _.Z)(),
        H = (0, s.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        H || (0, f.X8)();
    }, [H]);
    let Y = (0, E.vx)(h.Z.boostSlots),
        W = null != A ? Math.max((0, E.KK)(a, A), 1) : 1,
        K = (0, E.aq)({ fractionalState: V }),
        z = async () => {
            F(!0),
                await (0, b.u)({
                    analyticsLocations: G,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: W,
                    onClose: P,
                    closeLayer: R,
                    inPopout: Z,
                    applicationId: D,
                    handleSubscribeModalClose: x,
                    intent: M,
                }),
                F(!1);
        },
        q = g.Z.getPremiumTypeSubscription(),
        Q = (0, r.jsxs)("div", {
            className: S.button,
            children: [j, null != I ? I : v.intl.string(v.t.gKmQ1G)],
        }),
        X = !1;
    return ((X = null !== q && !(Y.length > 0) && (null == q ? void 0 : q.isPausedOrPausePending) && V === O.a$.NONE) &&
        ((Q = (0, r.jsxs)("div", {
            className: S.button,
            children: [
                (0, r.jsx)(d.mBM, {
                    size: "xs",
                    className: S.buttonIcon,
                }),
                " ",
                Q,
            ],
        })),
        (U.disabled = !0)),
    null != K)
        ? k
            ? (0, r.jsx)(c.u, {
                  text: K,
                  children: (0, r.jsx)(d.Button, {
                      variant: "expressive",
                      icon: d.mBM,
                      iconPosition: "start",
                      disabled: !0,
                      text: null != I ? I : v.intl.string(v.t.gKmQ1G),
                  }),
              })
            : (0, r.jsx)(l.Z, {
                  text: K,
                  "aria-label": !1,
                  children: (e) =>
                      (0, r.jsx)(
                          d.gtL,
                          C(
                              T(
                                  C(T({ "data-migration-pending": !0 }, e), {
                                      disabled: !0,
                                      size: u.zx.Sizes.SMALL,
                                      pauseAnimation: w,
                                  }),
                                  U,
                              ),
                              { children: Q },
                          ),
                      ),
              })
        : k
          ? (0, r.jsx)(d.Button, {
                variant: "expressive",
                disabled: X,
                loading: B,
                text: null != I ? I : v.intl.string(v.t.gKmQ1G),
                onClick: z,
            })
          : (0, r.jsx)(
                d.gtL,
                C(
                    T(
                        {
                            "data-migration-pending": !0,
                            size: u.zx.Sizes.SMALL,
                        },
                        U,
                    ),
                    {
                        className: o()(U.className, { [S.buttonHighlighted]: L }),
                        submitting: B,
                        onClick: z,
                        pauseAnimation: w,
                        children: Q,
                    },
                ),
            );
};
