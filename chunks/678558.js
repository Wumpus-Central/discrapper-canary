n.d(t, { Z: () => R }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(179360),
    d = n(40851),
    f = n(906732),
    _ = n(975298),
    p = n(125529),
    h = n(314884),
    m = n(78839),
    g = n(267642),
    E = n(879892),
    b = n(981631),
    y = n(474936),
    O = n(388032),
    v = n(132810);
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
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
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
            targetBoostedGuildTier: S,
            onClose: C = () => {},
            closeLayer: R = () => {},
            pauseAnimation: P = !1,
            applicationId: w,
            handleSubscribeModalClose: D,
            withHighlight: L = !1,
            icon: x,
            intent: M,
        } = e,
        k = N(e, [
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
        ]),
        { analyticsLocations: j } = (0, f.ZP)(),
        U = (0, d.bp)() === b.IlC.POPOUT,
        [G, B] = i.useState(!1),
        { fractionalState: V } = (0, _.Z)(),
        F = (0, s.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        F || (0, u.X8)();
    }, [F]);
    let Z = (0, g.vx)(h.Z.boostSlots),
        H = null != S ? Math.max((0, g.KK)(a, S), 1) : 1,
        Y = (0, g.aq)({ fractionalState: V }),
        W = async () => {
            B(!0),
                await (0, E.u)({
                    analyticsLocations: j,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: H,
                    onClose: C,
                    closeLayer: R,
                    inPopout: U,
                    applicationId: w,
                    handleSubscribeModalClose: D,
                    intent: M,
                }),
                B(!1);
        },
        K = m.Z.getPremiumTypeSubscription(),
        z = (0, r.jsxs)("div", {
            className: v.button,
            children: [x, null != I ? I : O.intl.string(O.t.gKmQ1N)],
        }),
        q = !1;
    return ((q = null !== K && !(Z.length > 0) && (null == K ? void 0 : K.isPausedOrPausePending) && V === y.a$.NONE) &&
        ((z = (0, r.jsxs)("div", {
            className: v.button,
            children: [
                (0, r.jsx)(c.mBM, {
                    size: "xs",
                    className: v.buttonIcon,
                }),
                " ",
                z,
            ],
        })),
        (k.disabled = !0)),
    null != Y)
        ? (0, r.jsx)(p.Z, {
              text: Y,
              "aria-label": !1,
              children: (e) =>
                  (0, r.jsx)(
                      c.gtL,
                      A(
                          T(
                              A(T({}, e), {
                                  disabled: !0,
                                  size: l.zx.Sizes.SMALL,
                                  pauseAnimation: P,
                              }),
                              k,
                          ),
                          { children: z },
                      ),
                  ),
          })
        : (0, r.jsx)(
              c.gtL,
              A(T({ size: l.zx.Sizes.SMALL }, k), {
                  className: o()(k.className, { [v.buttonHighlighted]: L }),
                  submitting: G,
                  onClick: W,
                  pauseAnimation: P,
                  children: z,
              }),
          );
};
