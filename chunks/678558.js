n.d(t, { Z: () => w }), n(388685);
var r = n(255367),
    i = n(73800),
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
    h = n(404380),
    m = n(594174),
    g = n(314884),
    E = n(78839),
    b = n(267642),
    y = n(879892),
    O = n(981631),
    v = n(474936),
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
function P(e, t) {
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
let w = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: o, buttonText: T, targetBoostedGuildTier: N, onClose: R = () => {}, closeLayer: w = () => {}, pauseAnimation: D = !1, applicationId: L, handleSubscribeModalClose: x, withHighlight: k = !1, icon: M, intent: j } = e,
        U = P(e, ['analyticsLocation', 'analyticsSourceLocation', 'guild', 'buttonText', 'targetBoostedGuildTier', 'onClose', 'closeLayer', 'pauseAnimation', 'applicationId', 'handleSubscribeModalClose', 'withHighlight', 'icon', 'intent']),
        { analyticsLocations: G } = (0, d.ZP)(),
        B = (0, u.bp)() === O.IlC.POPOUT,
        [F, V] = i.useState(!1),
        Z = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        { fractionalState: H } = (0, f.Z)(),
        Y = (0, p.y)('guild_boosting_subscribe_button', Z, H),
        W = (0, s.e7)([g.Z], () => g.Z.hasFetched);
    i.useEffect(() => {
        W || (0, c.X8)();
    }, [W]);
    let K = (0, b.vx)(g.Z.boostSlots),
        z = null != N ? Math.max((0, b.KK)(o, N), 1) : 1,
        q = (0, b.aq)({ isBoostManagementDisabledForFractionalPremium: Y }),
        Q = async () => {
            V(!0),
                await (0, y.u)({
                    analyticsLocations: G,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: o,
                    numberOfBoostsToAdd: z,
                    onClose: R,
                    closeLayer: w,
                    inPopout: B,
                    applicationId: L,
                    handleSubscribeModalClose: x,
                    intent: j
                }),
                V(!1);
        },
        X = E.ZP.getPremiumTypeSubscription(),
        J = (0, r.jsxs)('div', {
            className: S.button,
            children: [M, null != T ? T : I.intl.string(I.t.gKmQ1N)]
        }),
        $ = (0, h.o)('GuildBoostingSubscribeButton', Z, H),
        ee = !1;
    return ((ee = null !== X && !(K.length > 0) && (null == X ? void 0 : X.isPausedOrPausePending) && (H === v.a$.NONE || $)) &&
        ((J = (0, r.jsxs)('div', {
            className: S.button,
            children: [
                (0, r.jsx)(l.mBM, {
                    size: 'xs',
                    className: S.buttonIcon
                }),
                ' ',
                J
            ]
        })),
        (U.disabled = !0)),
    null != q)
        ? (0, r.jsx)(_.Z, {
              text: q,
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
                          { children: J }
                      )
                  )
          })
        : (0, r.jsx)(
              l.gtL,
              C(A({ size: l.zxk.Sizes.SMALL }, U), {
                  className: a()(U.className, { [S.buttonHighlighted]: k }),
                  submitting: F,
                  onClick: Q,
                  pauseAnimation: D,
                  children: J
              })
          );
};
