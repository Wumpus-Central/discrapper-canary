n.d(t, { Z: () => P }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(179360),
    u = n(40851),
    d = n(906732),
    f = n(975298),
    _ = n(125529),
    p = n(124570),
    h = n(594174),
    m = n(314884),
    g = n(78839),
    E = n(267642),
    b = n(879892),
    y = n(981631),
    v = n(474936),
    O = n(388032),
    I = n(412439);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: o, buttonText: S, targetBoostedGuildTier: N, onClose: R = () => {}, closeLayer: P = () => {}, pauseAnimation: w = !1, applicationId: D, handleSubscribeModalClose: L, withHighlight: x = !1, icon: M, intent: k } = e,
        j = C(e, ['analyticsLocation', 'analyticsSourceLocation', 'guild', 'buttonText', 'targetBoostedGuildTier', 'onClose', 'closeLayer', 'pauseAnimation', 'applicationId', 'handleSubscribeModalClose', 'withHighlight', 'icon', 'intent']),
        { analyticsLocations: U } = (0, d.ZP)(),
        G = (0, u.bp)() === y.IlC.POPOUT,
        [B, F] = i.useState(!1),
        V = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        { fractionalState: Z } = (0, f.Z)(),
        H = (0, p.y)('guild_boosting_subscribe_button', V, Z);
    m.Z.hasFetched || (0, c.X8)();
    let W = (0, E.vx)(m.Z.boostSlots),
        Y = null != N ? Math.max((0, E.KK)(o, N), 1) : 1,
        K = (0, E.aq)({ isBoostManagementDisabledForFractionalPremium: H }),
        z = async () => {
            F(!0),
                await (0, b.u)({
                    analyticsLocations: U,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: o,
                    numberOfBoostsToAdd: Y,
                    onClose: R,
                    closeLayer: P,
                    inPopout: G,
                    applicationId: D,
                    handleSubscribeModalClose: L,
                    intent: k
                }),
                F(!1);
        },
        q = g.ZP.getPremiumTypeSubscription(),
        Q = (0, r.jsxs)('div', {
            className: I.button,
            children: [M, null != S ? S : O.NW.string(O.t.gKmQ1N)]
        });
    return ((null == q ? void 0 : q.isPausedOrPausePending) &&
        (Z === v.a$.NONE || 0 === W.length) &&
        ((Q = (0, r.jsxs)('div', {
            className: I.button,
            children: [
                (0, r.jsx)(l.mBM, {
                    size: 'xs',
                    className: I.buttonIcon
                }),
                ' ',
                Q
            ]
        })),
        (j.disabled = !0)),
    null != K)
        ? (0, r.jsx)(_.Z, {
              text: K,
              'aria-label': !1,
              children: (e) =>
                  (0, r.jsx)(
                      l.gtL,
                      A(
                          T(
                              A(T({}, e), {
                                  disabled: !0,
                                  size: l.zxk.Sizes.SMALL,
                                  pauseAnimation: w
                              }),
                              j
                          ),
                          { children: Q }
                      )
                  )
          })
        : (0, r.jsx)(
              l.gtL,
              A(T({ size: l.zxk.Sizes.SMALL }, j), {
                  className: a()(j.className, { [I.buttonHighlighted]: x }),
                  submitting: B,
                  onClick: z,
                  pauseAnimation: w,
                  children: Q
              })
          );
};
