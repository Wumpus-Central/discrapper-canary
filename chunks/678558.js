n.d(t, { Z: () => w }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(179360),
    u = n(40851),
    d = n(906732),
    f = n(975298),
    _ = n(125529),
    p = n(124570),
    h = n(404380),
    m = n(594174),
    g = n(314884),
    E = n(78839),
    b = n(267642),
    y = n(879892),
    v = n(981631),
    O = n(474936),
    I = n(388032),
    S = n(412439);
function T(e, t, n) {
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
function A(e) {
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
                T(e, t, n[t]);
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
function C(e, t) {
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
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
let w = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: T, targetBoostedGuildTier: N, onClose: P = () => {}, closeLayer: w = () => {}, pauseAnimation: D = !1, applicationId: L, handleSubscribeModalClose: x, withHighlight: M = !1, icon: k, intent: j } = e,
        U = R(e, ['analyticsLocation', 'analyticsSourceLocation', 'guild', 'buttonText', 'targetBoostedGuildTier', 'onClose', 'closeLayer', 'pauseAnimation', 'applicationId', 'handleSubscribeModalClose', 'withHighlight', 'icon', 'intent']),
        { analyticsLocations: G } = (0, d.ZP)(),
        B = (0, u.bp)() === v.IlC.POPOUT,
        [V, F] = i.useState(!1),
        Z = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        { fractionalState: H } = (0, f.Z)(),
        Y = (0, p.y)('guild_boosting_subscribe_button', Z, H);
    g.Z.hasFetched || (0, c.X8)();
    let W = (0, b.vx)(g.Z.boostSlots),
        K = null != N ? Math.max((0, b.KK)(a, N), 1) : 1,
        z = (0, b.aq)({ isBoostManagementDisabledForFractionalPremium: Y }),
        q = async () => {
            F(!0),
                await (0, y.u)({
                    analyticsLocations: G,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: K,
                    onClose: P,
                    closeLayer: w,
                    inPopout: B,
                    applicationId: L,
                    handleSubscribeModalClose: x,
                    intent: j
                }),
                F(!1);
        },
        Q = E.ZP.getPremiumTypeSubscription(),
        X = (0, r.jsxs)('div', {
            className: S.button,
            children: [k, null != T ? T : I.intl.string(I.t.gKmQ1N)]
        }),
        J = (0, h.o)('GuildBoostingSubscribeButton', Z, H),
        $ = !1;
    return (($ = null !== Q && !(W.length > 0) && (null == Q ? void 0 : Q.isPausedOrPausePending) && (H === O.a$.NONE || J)) &&
        ((X = (0, r.jsxs)('div', {
            className: S.button,
            children: [
                (0, r.jsx)(l.mBM, {
                    size: 'xs',
                    className: S.buttonIcon
                }),
                ' ',
                X
            ]
        })),
        (U.disabled = !0)),
    null != z)
        ? (0, r.jsx)(_.Z, {
              text: z,
              'aria-label': !1,
              children: (e) =>
                  (0, r.jsx)(
                      l.gtL,
                      C(
                          A(
                              C(A({}, e), {
                                  disabled: !0,
                                  size: l.zxk.Sizes.SMALL,
                                  pauseAnimation: D
                              }),
                              U
                          ),
                          { children: X }
                      )
                  )
          })
        : (0, r.jsx)(
              l.gtL,
              C(A({ size: l.zxk.Sizes.SMALL }, U), {
                  className: o()(U.className, { [S.buttonHighlighted]: M }),
                  submitting: V,
                  onClick: q,
                  pauseAnimation: D,
                  children: X
              })
          );
};
