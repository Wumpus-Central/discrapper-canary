var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(704215),
    c = n(749280),
    d = n(481060),
    u = n(367907),
    h = n(499254),
    p = n(541099),
    m = n(827498),
    f = n(569211),
    g = n(663924),
    C = n(533379),
    x = n(404295),
    v = n(540059),
    _ = n(605236),
    I = n(819640),
    E = n(291407),
    b = n(685006),
    Z = n(61356),
    N = n(981631),
    S = n(314734),
    T = n(921944),
    j = n(388032),
    A = n(805660),
    y = n(795361);
let P = l.forwardRef(function (e, t) {
    let { type: n, animateRef: r } = e,
        f = (0, s.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === n),
        { Component: g, events: C, play: x } = (0, c.w)(),
        I = (0, v.R6)('ChannelAppLauncherButton');
    l.useImperativeHandle(
        r,
        () => ({
            animate: () => {
                C.onMouseEnter();
            }
        }),
        [C]
    );
    let E = l.useCallback(() => {
        (0, u.yw)(N.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), f ? h.yT(m.ti.DISMISSED) : ((0, _.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: T.L.TAKE_ACTION }), h.__(m._b.TEXT, n)), x();
    }, [f, n, x]);
    return (0, i.jsx)('div', {
        className: a()(A.buttonContainer, S.t4),
        ref: t,
        children: (0, i.jsx)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            tabIndex: 0,
            className: a()(A.button, { [A.buttonActive]: f }),
            onClick: E,
            'aria-label': j.intl.string(j.t.erHFxM),
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            },
            innerClassName: A.buttonContents,
            ...C,
            children: (0, i.jsx)(g, {
                size: I ? 'refresh_sm' : void 0,
                color: 'currentColor'
            })
        })
    });
});
function M(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        l = (0, s.e7)([I.Z], () => I.Z.hasLayers()),
        {
            enabled: r,
            shouldShow: o,
            applicationDetails: c,
            showsTooltip: u
        } = (0, f.Z)({
            obstructedFromView: l,
            disabled: t
        });
    if (!r) return (0, i.jsx)(i.Fragment, { children: n });
    let h =
        o && (null == c ? void 0 : c.iconURL) != null
            ? (0, i.jsxs)('div', {
                  className: A.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, i.jsx)('img', {
                          className: a()(A.buttonContainer, A.button, A.channelAppLauncherButtonPopoutIcon),
                          alt: j.intl.string(j.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, i.jsx)('div', {
                          className: A.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, i.jsx)('img', {
                              className: a()(A.channelAppLauncherButtonPopoutIconShimmer),
                              alt: j.intl.string(j.t.X4IxWF),
                              src: y,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return u
        ? (0, i.jsx)(d.Tooltip, {
              text: j.intl.string(j.t.JDj6Xl),
              shouldShow: o,
              forceOpen: o,
              children: () =>
                  (0, i.jsxs)(i.Fragment, {
                      children: [h, n]
                  })
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [h, n]
          });
}
t.Z = l.memo(function (e) {
    let { channel: t, type: n, animateRef: r, entryPointCommandButtonRef: a } = e,
        o = l.useRef(null),
        c = (0, C.R)({
            channel: t,
            chatInputType: n,
            location: 'chat_input'
        }),
        d = (0, Z.Z)({ type: n }),
        u = (0, x.h9)(t.id),
        h = (0, s.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)),
        { visible: m } = (0, b.xL)();
    return c
        ? (0, i.jsxs)('div', {
              className: A.channelAppLauncher,
              children: [
                  (0, i.jsx)(E.Z, {
                      channel: t,
                      animationContainerClassName: A.entrypointAnimation,
                      glowClassName: A.animationGlow,
                      trinketsClassName: A.animationTrinkets,
                      children: (0, i.jsx)(M, {
                          showAppLauncherPopup: d,
                          children: (0, i.jsx)(P, {
                              type: n,
                              ref: o,
                              animateRef: r
                          })
                      })
                  }),
                  d
                      ? (0, i.jsx)(g.Z, {
                            positionTargetRef: u && !h && m ? a : o,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
