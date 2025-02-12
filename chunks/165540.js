n.d(t, { Z: () => M });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(533379),
    C = n(404295),
    x = n(540059),
    v = n(605236),
    E = n(819640),
    I = n(291407),
    b = n(685006),
    Z = n(61356),
    N = n(981631),
    T = n(314734),
    S = n(921944),
    j = n(388032),
    y = n(91101),
    A = n(795361);
let P = l.forwardRef(function (e, t) {
    let { type: n, animateRef: a } = e,
        f = (0, s.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === n),
        { Component: g, events: _, play: C } = (0, c.w)(),
        E = (0, x.Q3)('ChannelAppLauncherButton');
    l.useImperativeHandle(
        a,
        () => ({
            animate: () => {
                _.onMouseEnter();
            }
        }),
        [_]
    );
    let I = l.useCallback(() => {
        (0, u.yw)(N.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), f ? h.yT(m.ti.DISMISSED) : ((0, v.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: S.L.TAKE_ACTION }), h.__(m._b.TEXT, n)), C();
    }, [f, n, C]);
    return (0, i.jsx)('div', {
        className: r()(y.buttonContainer, T.t4),
        ref: t,
        children: (0, i.jsx)(d.zxk, {
            look: d.zxk.Looks.BLANK,
            size: d.zxk.Sizes.NONE,
            tabIndex: 0,
            className: r()(y.button, { [y.buttonActive]: f }),
            onClick: I,
            'aria-label': j.intl.string(j.t.erHFxM),
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            },
            innerClassName: y.buttonContents,
            ..._,
            children: (0, i.jsx)(g, {
                size: E ? 'refresh_sm' : void 0,
                color: 'currentColor'
            })
        })
    });
});
function R(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        l = (0, s.e7)([E.Z], () => E.Z.hasLayers()),
        {
            enabled: a,
            shouldShow: o,
            applicationDetails: c,
            showsTooltip: u
        } = (0, f.Z)({
            obstructedFromView: l,
            disabled: t
        });
    if (!a) return (0, i.jsx)(i.Fragment, { children: n });
    let h =
        o && (null == c ? void 0 : c.iconURL) != null
            ? (0, i.jsxs)('div', {
                  className: y.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, i.jsx)('img', {
                          className: r()(y.buttonContainer, y.button, y.channelAppLauncherButtonPopoutIcon),
                          alt: j.intl.string(j.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, i.jsx)('div', {
                          className: y.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, i.jsx)('img', {
                              className: r()(y.channelAppLauncherButtonPopoutIconShimmer),
                              alt: j.intl.string(j.t.X4IxWF),
                              src: A,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return u
        ? (0, i.jsx)(d.ua7, {
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
let M = l.memo(function (e) {
    let { channel: t, type: n, animateRef: a, entryPointCommandButtonRef: r } = e,
        o = l.useRef(null),
        c = (0, _.R)({
            channel: t,
            chatInputType: n,
            location: 'chat_input'
        }),
        d = (0, Z.Z)({ type: n }),
        u = (0, C.h9)(t.id),
        h = (0, s.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)),
        { visible: m } = (0, b.xL)();
    return c
        ? (0, i.jsxs)('div', {
              className: y.channelAppLauncher,
              children: [
                  (0, i.jsx)(I.Z, {
                      channel: t,
                      animationContainerClassName: y.entrypointAnimation,
                      glowClassName: y.animationGlow,
                      trinketsClassName: y.animationTrinkets,
                      children: (0, i.jsx)(R, {
                          showAppLauncherPopup: d,
                          children: (0, i.jsx)(P, {
                              type: n,
                              ref: o,
                              animateRef: a
                          })
                      })
                  }),
                  d
                      ? (0, i.jsx)(g.Z, {
                            positionTargetRef: u && !h && m ? r : o,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
