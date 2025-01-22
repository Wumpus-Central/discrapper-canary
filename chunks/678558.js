var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(179360),
    d = r(40851),
    f = r(906732),
    p = r(975298),
    h = r(125529),
    _ = r(314884),
    m = r(78839),
    g = r(267642),
    E = r(879892),
    v = r(981631),
    y = r(474936),
    b = r(388032),
    I = r(656634);
let T = (e) => {
    let { analyticsLocation: n, analyticsSourceLocation: r, guild: i, buttonText: s, targetBoostedGuildTier: T, onClose: S = () => {}, closeLayer: A = () => {}, pauseAnimation: C = !1, applicationId: N, handleSubscribeModalClose: R, withHighlight: O = !1, ...D } = e,
        { analyticsLocations: x } = (0, f.ZP)(),
        L = (0, d.bp)() === v.IlC.POPOUT,
        [w, P] = o.useState(!1),
        { fractionalState: M } = (0, p.Z)();
    !_.Z.hasFetched && (0, c.X8)();
    let k = (0, g.vx)(_.Z.boostSlots),
        U = null != T ? Math.max((0, g.KK)(i, T), 1) : 1,
        B = (0, g.aq)({ fractionalState: M }),
        G = async () => {
            P(!0),
                await (0, E.u)({
                    analyticsLocations: x,
                    analyticsLocation: n,
                    analyticsSourceLocation: r,
                    guild: i,
                    numberOfBoostsToAdd: U,
                    onClose: S,
                    closeLayer: A,
                    inPopout: L,
                    applicationId: N,
                    handleSubscribeModalClose: R
                }),
                P(!1);
        },
        Z = m.ZP.getPremiumTypeSubscription(),
        F = (0, a.jsx)('span', { children: null != s ? s : b.intl.string(b.t.gKmQ1N) });
    return ((null == Z ? void 0 : Z.isPausedOrPausePending) &&
        (M === y.a$.NONE || 0 === k.length) &&
        ((F = (0, a.jsxs)('div', {
            className: I.pausedButton,
            children: [
                (0, a.jsx)(u.LockIcon, {
                    size: 'xs',
                    className: I.lockIcon
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
                      pauseAnimation: C,
                      ...D,
                      children: F
                  })
          })
        : (0, a.jsx)(u.ShinyButton, {
              size: u.Button.Sizes.SMALL,
              ...D,
              className: l()(D.className, { [I.buttonHighlighted]: O }),
              submitting: w,
              onClick: G,
              pauseAnimation: C,
              children: F
          });
};
n.Z = T;
