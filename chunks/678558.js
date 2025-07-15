(n.d(t, { Z: () => D }), n(388685));
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
    h = n(124570),
    m = n(404380),
    g = n(594174),
    E = n(314884),
    b = n(78839),
    y = n(267642),
    O = n(879892),
    v = n(981631),
    I = n(474936),
    T = n(388032),
    S = n(412439);
function A(e, t, n) {
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
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            }));
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let D = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: A, targetBoostedGuildTier: C, onClose: w = () => {}, closeLayer: D = () => {}, pauseAnimation: L = !1, applicationId: x, handleSubscribeModalClose: M, withHighlight: k = !1, icon: j, intent: U } = e,
        G = P(e, ['analyticsLocation', 'analyticsSourceLocation', 'guild', 'buttonText', 'targetBoostedGuildTier', 'onClose', 'closeLayer', 'pauseAnimation', 'applicationId', 'handleSubscribeModalClose', 'withHighlight', 'icon', 'intent']),
        { analyticsLocations: B } = (0, f.ZP)(),
        V = (0, d.bp)() === v.IlC.POPOUT,
        [F, Z] = i.useState(!1),
        H = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        { fractionalState: Y } = (0, _.Z)(),
        W = (0, h.y)('guild_boosting_subscribe_button', H, Y),
        K = (0, s.e7)([E.Z], () => E.Z.hasFetched);
    i.useEffect(() => {
        K || (0, u.X8)();
    }, [K]);
    let z = (0, y.vx)(E.Z.boostSlots),
        q = null != C ? Math.max((0, y.KK)(a, C), 1) : 1,
        X = (0, y.aq)({ isBoostManagementDisabledForFractionalPremium: W }),
        Q = async () => {
            (Z(!0),
                await (0, O.u)({
                    analyticsLocations: B,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: q,
                    onClose: w,
                    closeLayer: D,
                    inPopout: V,
                    applicationId: x,
                    handleSubscribeModalClose: M,
                    intent: U
                }),
                Z(!1));
        },
        J = b.Z.getPremiumTypeSubscription(),
        $ = (0, r.jsxs)('div', {
            className: S.button,
            children: [j, null != A ? A : T.intl.string(T.t.gKmQ1N)]
        }),
        ee = (0, m.o)('GuildBoostingSubscribeButton', H, Y),
        et = !1;
    return ((et = null !== J && !(z.length > 0) && (null == J ? void 0 : J.isPausedOrPausePending) && (Y === I.a$.NONE || ee)) &&
        (($ = (0, r.jsxs)('div', {
            className: S.button,
            children: [
                (0, r.jsx)(c.mBM, {
                    size: 'xs',
                    className: S.buttonIcon
                }),
                ' ',
                $
            ]
        })),
        (G.disabled = !0)),
    null != X)
        ? (0, r.jsx)(p.Z, {
              text: X,
              'aria-label': !1,
              children: (e) =>
                  (0, r.jsx)(
                      c.gtL,
                      R(
                          N(
                              R(N({}, e), {
                                  disabled: !0,
                                  size: l.zx.Sizes.SMALL,
                                  pauseAnimation: L
                              }),
                              G
                          ),
                          { children: $ }
                      )
                  )
          })
        : (0, r.jsx)(
              c.gtL,
              R(N({ size: l.zx.Sizes.SMALL }, G), {
                  className: o()(G.className, { [S.buttonHighlighted]: k }),
                  submitting: F,
                  onClick: Q,
                  pauseAnimation: L,
                  children: $
              })
          );
};
