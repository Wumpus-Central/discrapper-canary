n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(179360),
    c = n(40851),
    u = n(906732),
    d = n(975298),
    f = n(125529),
    p = n(695349),
    _ = n(314884),
    h = n(78839),
    m = n(267642),
    g = n(879892),
    E = n(981631),
    v = n(474936),
    b = n(388032),
    y = n(212773);
function O(e, t, n) {
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
function S(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: o, buttonText: O, targetBoostedGuildTier: I, onClose: A = () => {}, closeLayer: C = () => {}, pauseAnimation: R = !1, applicationId: P, handleSubscribeModalClose: w, withHighlight: D = !1, icon: x } = e,
        L = N(e, ['analyticsLocation', 'analyticsSourceLocation', 'guild', 'buttonText', 'targetBoostedGuildTier', 'onClose', 'closeLayer', 'pauseAnimation', 'applicationId', 'handleSubscribeModalClose', 'withHighlight', 'icon']),
        { analyticsLocations: M } = (0, u.ZP)(),
        k = (0, c.bp)() === E.IlC.POPOUT,
        [j, U] = i.useState(!1),
        { fractionalState: G } = (0, d.Z)(),
        B = (0, p.W)();
    _.Z.hasFetched || (0, l.X8)();
    let Z = (0, m.vx)(_.Z.boostSlots),
        F = null != I ? Math.max((0, m.KK)(o, I), 1) : 1,
        V = (0, m.aq)({ fractionalState: G }),
        H = async () => {
            U(!0),
                await (0, g.u)({
                    analyticsLocations: M,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: o,
                    numberOfBoostsToAdd: F,
                    onClose: A,
                    closeLayer: C,
                    inPopout: k,
                    applicationId: P,
                    handleSubscribeModalClose: w
                }),
                U(!1);
        },
        W = h.ZP.getPremiumTypeSubscription(),
        Y = (0, r.jsxs)('div', {
            className: y.button,
            children: [x, null != O ? O : b.NW.string(b.t.gKmQ1N)]
        });
    return ((null == W ? void 0 : W.isPausedOrPausePending) &&
        (G === v.a$.NONE || 0 === Z.length) &&
        ((Y = (0, r.jsxs)('div', {
            className: y.button,
            children: [
                (0, r.jsx)(s.mBM, {
                    size: 'xs',
                    className: y.buttonIcon
                }),
                ' ',
                Y
            ]
        })),
        (L.disabled = !0)),
    null != V)
        ? (0, r.jsx)(f.Z, {
              text: B ? void 0 : V,
              'aria-label': !1,
              children: (e) =>
                  (0, r.jsx)(
                      s.gtL,
                      T(
                          S(
                              T(S({}, e), {
                                  disabled: !0,
                                  size: s.zxk.Sizes.SMALL,
                                  pauseAnimation: R
                              }),
                              L
                          ),
                          { children: Y }
                      )
                  )
          })
        : (0, r.jsx)(
              s.gtL,
              T(S({ size: s.zxk.Sizes.SMALL }, L), {
                  className: a()(L.className, { [y.buttonHighlighted]: D }),
                  submitting: j,
                  onClick: H,
                  pauseAnimation: R,
                  children: Y
              })
          );
};
