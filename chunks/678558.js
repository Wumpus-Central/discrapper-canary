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
    let { analyticsLocation: t, analyticsSourceLocation: n, guild: a, buttonText: T, targetBoostedGuildTier: S, onClose: b = () => {}, closeLayer: A = () => {}, pauseAnimation: N = !1, applicationId: C, handleSubscribeModalClose: R, withHighlight: O = !1, icon: D, ...L } = e,
        { analyticsLocations: x } = (0, c.ZP)(),
        w = (0, u.bp)() === E.IlC.POPOUT,
        [P, M] = r.useState(!1),
        { fractionalState: k } = (0, d.Z)(),
        U = (0, _.W)();
    p.Z.hasFetched || (0, l.X8)();
    let G = (0, m.vx)(p.Z.boostSlots),
        B = null != S ? Math.max((0, m.KK)(a, S), 1) : 1,
        Z = (0, m.aq)({ fractionalState: k }),
        F = async () => {
            M(!0),
                await (0, g.u)({
                    analyticsLocations: x,
                    analyticsLocation: t,
                    analyticsSourceLocation: n,
                    guild: a,
                    numberOfBoostsToAdd: B,
                    onClose: b,
                    closeLayer: A,
                    inPopout: w,
                    applicationId: C,
                    handleSubscribeModalClose: R
                }),
                M(!1);
        },
        V = h.ZP.getPremiumTypeSubscription(),
        j = (0, i.jsxs)('div', {
            className: I.button,
            children: [D, null != T ? T : y.intl.string(y.t.gKmQ1N)]
        });
    return ((null == V ? void 0 : V.isPausedOrPausePending) &&
        (k === v.a$.NONE || 0 === G.length) &&
        ((j = (0, i.jsxs)('div', {
            className: I.button,
            children: [
                (0, i.jsx)(o.mBM, {
                    size: 'xs',
                    className: I.buttonIcon
                }),
                ' ',
                j
            ]
        })),
        (L.disabled = !0)),
    null != Z)
        ? (0, i.jsx)(f.Z, {
              text: U ? void 0 : Z,
              'aria-label': !1,
              children: (e) =>
                  (0, i.jsx)(o.gtL, {
                      ...e,
                      disabled: !0,
                      size: o.zxk.Sizes.SMALL,
                      pauseAnimation: N,
                      ...L,
                      children: j
                  })
          })
        : (0, i.jsx)(o.gtL, {
              size: o.zxk.Sizes.SMALL,
              ...L,
              className: s()(L.className, { [I.buttonHighlighted]: O }),
              submitting: P,
              onClick: F,
              pauseAnimation: N,
              children: j
          });
};
