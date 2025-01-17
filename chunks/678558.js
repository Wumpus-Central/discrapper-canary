var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(179360),
    d = r(40851),
    f = r(906732),
    _ = r(975298),
    h = r(125529),
    p = r(314884),
    m = r(78839),
    g = r(267642),
    E = r(879892),
    v = r(981631),
    I = r(474936),
    T = r(388032),
    b = r(656634);
let y = (e) => {
    let { analyticsLocation: n, analyticsSourceLocation: r, guild: i, buttonText: o, targetBoostedGuildTier: y, onClose: S = () => {}, closeLayer: A = () => {}, pauseAnimation: N = !1, applicationId: C, handleSubscribeModalClose: R, withHighlight: O = !1, ...D } = e,
        { analyticsLocations: L } = (0, f.ZP)(),
        x = (0, d.bp)() === v.IlC.POPOUT,
        [w, P] = s.useState(!1),
        { fractionalState: M } = (0, _.Z)();
    !p.Z.hasFetched && (0, c.X8)();
    let k = (0, g.vx)(p.Z.boostSlots),
        U = null != y ? Math.max((0, g.KK)(i, y), 1) : 1,
        B = (0, g.aq)({ fractionalState: M }),
        G = async () => {
            P(!0),
                await (0, E.u)({
                    analyticsLocations: L,
                    analyticsLocation: n,
                    analyticsSourceLocation: r,
                    guild: i,
                    numberOfBoostsToAdd: U,
                    onClose: S,
                    closeLayer: A,
                    inPopout: x,
                    applicationId: C,
                    handleSubscribeModalClose: R
                }),
                P(!1);
        },
        Z = m.ZP.getPremiumTypeSubscription(),
        F = (0, a.jsx)('span', { children: null != o ? o : T.intl.string(T.t.gKmQ1N) });
    return ((null == Z ? void 0 : Z.isPausedOrPausePending) &&
        (M === I.a$.NONE || 0 === k.length) &&
        ((F = (0, a.jsxs)('div', {
            className: b.pausedButton,
            children: [
                (0, a.jsx)(u.LockIcon, {
                    size: 'xs',
                    className: b.lockIcon
                }),
                ' ',
                F
            ]
        })),
        (D.disabled = !0)),
    null != B)
        ? (0, a.jsx)(h.Z, {
              text: B,
              'aria-label': !1,
              children: (e) =>
                  (0, a.jsx)(u.ShinyButton, {
                      ...e,
                      disabled: !0,
                      size: u.Button.Sizes.SMALL,
                      pauseAnimation: N,
                      ...D,
                      children: F
                  })
          })
        : (0, a.jsx)(u.ShinyButton, {
              size: u.Button.Sizes.SMALL,
              ...D,
              className: l()(D.className, { [b.buttonHighlighted]: O }),
              submitting: w,
              onClick: G,
              pauseAnimation: N,
              children: F
          });
};
n.Z = y;
