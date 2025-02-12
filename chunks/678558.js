n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(179360),
    u = n(40851),
    c = n(906732),
    d = n(975298),
    f = n(125529),
    _ = n(695349),
    p = n(314884),
    h = n(78839),
    m = n(267642),
    g = n(879892),
    E = n(981631),
    v = n(474936),
    y = n(388032),
    I = n(110235);
let T = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: T, targetBoostedGuildTier: b, onClose: S = () => {}, closeLayer: A = () => {}, pauseAnimation: N = !1, applicationId: C, handleSubscribeModalClose: R, withHighlight: O = !1, ...D } = e,
        { analyticsLocations: L } = (0, c.ZP)(),
        x = (0, u.bp)() === E.IlC.POPOUT,
        [P, w] = r.useState(!1),
        { fractionalState: M } = (0, d.Z)(),
        k = (0, _.W)();
    p.Z.hasFetched || (0, l.X8)();
    let U = (0, m.vx)(p.Z.boostSlots),
        G = null != b ? Math.max((0, m.KK)(a, b), 1) : 1,
        B = (0, m.aq)({ fractionalState: M }),
        Z = async () => {
            w(!0),
                await (0, g.u)({
                    analyticsLocations: L,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: G,
                    onClose: S,
                    closeLayer: A,
                    inPopout: x,
                    applicationId: C,
                    handleSubscribeModalClose: R
                }),
                w(!1);
        },
        F = h.ZP.getPremiumTypeSubscription(),
        V = (0, i.jsx)('span', { children: null != T ? T : y.intl.string(y.t.gKmQ1N) });
    return ((null == F ? void 0 : F.isPausedOrPausePending) &&
        (M === v.a$.NONE || 0 === U.length) &&
        ((V = (0, i.jsxs)('div', {
            className: I.pausedButton,
            children: [
                (0, i.jsx)(o.mBM, {
                    size: 'xs',
                    className: I.lockIcon
                }),
                ' ',
                V
            ]
        })),
        (D.disabled = !0)),
    null != B)
        ? (0, i.jsx)(f.Z, {
              text: k ? void 0 : B,
              'aria-label': !1,
              children: (e) =>
                  (0, i.jsx)(o.gtL, {
                      ...e,
                      disabled: !0,
                      size: o.zxk.Sizes.SMALL,
                      pauseAnimation: N,
                      ...D,
                      children: V
                  })
          })
        : (0, i.jsx)(o.gtL, {
              size: o.zxk.Sizes.SMALL,
              ...D,
              className: s()(D.className, { [I.buttonHighlighted]: O }),
              submitting: P,
              onClick: Z,
              pauseAnimation: N,
              children: V
          });
};
