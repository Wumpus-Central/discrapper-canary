n.d(t, { Z: () => I }), n(47120);
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
    _ = n(314884),
    p = n(78839),
    h = n(267642),
    m = n(879892),
    g = n(981631),
    E = n(474936),
    v = n(388032),
    y = n(656634);
let I = (e) => {
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: I, targetBoostedGuildTier: T, onClose: b = () => {}, closeLayer: S = () => {}, pauseAnimation: A = !1, applicationId: N, handleSubscribeModalClose: C, withHighlight: R = !1, ...O } = e,
        { analyticsLocations: D } = (0, c.ZP)(),
        x = (0, u.bp)() === g.IlC.POPOUT,
        [L, P] = r.useState(!1),
        { fractionalState: w } = (0, d.Z)();
    _.Z.hasFetched || (0, l.X8)();
    let M = (0, h.vx)(_.Z.boostSlots),
        k = null != T ? Math.max((0, h.KK)(a, T), 1) : 1,
        U = (0, h.aq)({ fractionalState: w }),
        G = async () => {
            P(!0),
                await (0, m.u)({
                    analyticsLocations: D,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: k,
                    onClose: b,
                    closeLayer: S,
                    inPopout: x,
                    applicationId: N,
                    handleSubscribeModalClose: C
                }),
                P(!1);
        },
        B = p.ZP.getPremiumTypeSubscription(),
        Z = (0, i.jsx)('span', { children: null != I ? I : v.intl.string(v.t.gKmQ1N) });
    return ((null == B ? void 0 : B.isPausedOrPausePending) &&
        (w === E.a$.NONE || 0 === M.length) &&
        ((Z = (0, i.jsxs)('div', {
            className: y.pausedButton,
            children: [
                (0, i.jsx)(o.mBM, {
                    size: 'xs',
                    className: y.lockIcon
                }),
                ' ',
                Z
            ]
        })),
        (O.disabled = !0)),
    null != U)
        ? (0, i.jsx)(f.Z, {
              text: U,
              'aria-label': !1,
              children: (e) =>
                  (0, i.jsx)(o.gtL, {
                      ...e,
                      disabled: !0,
                      size: o.zxk.Sizes.SMALL,
                      pauseAnimation: A,
                      ...O,
                      children: Z
                  })
          })
        : (0, i.jsx)(o.gtL, {
              size: o.zxk.Sizes.SMALL,
              ...O,
              className: s()(O.className, { [y.buttonHighlighted]: R }),
              submitting: L,
              onClick: G,
              pauseAnimation: A,
              children: Z
          });
};
