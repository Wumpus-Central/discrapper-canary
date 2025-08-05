n.d(t, { Z: () => D });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(755721),
    u = n(566620),
    d = n(989573),
    f = n(499254),
    _ = n(541099),
    p = n(827498),
    h = n(663924),
    m = n(533379),
    g = n(562129),
    E = n(266454),
    b = n(291407),
    y = n(685006),
    O = n(61356),
    v = n(314734),
    I = n(921944),
    T = n(388032),
    S = n(560163);
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
function w(e, t) {
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
let R = i.forwardRef(function (e, t) {
    let { type: n, animateRef: a } = e,
        d = (0, s.e7)([_.Z], () => _.Z.shouldShowPopup() && _.Z.activeViewType() === n),
        { Component: h, events: m, play: b } = (0, g.Z)('ChannelAppLauncherButton');
    i.useImperativeHandle(
        a,
        () => ({
            animate: () => {
                m.onMouseEnter();
            }
        }),
        [m]
    );
    let y = i.useCallback(() => {
            (d ? f.yT(p.ti.DISMISSED) : ((0, E.Q3)(l.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: I.L.TAKE_ACTION }), f.__(p._b.TEXT, n), u.ux()), b());
        }, [d, n, b]),
        O = (0, r.jsx)(h, {
            size: 'refresh_sm',
            color: 'currentColor'
        });
    return (0, r.jsx)('div', {
        className: o()(S.buttonContainer, v.t4),
        ref: t,
        children: (0, r.jsx)(
            c.zx,
            w(
                N(
                    {
                        look: c.zx.Looks.BLANK,
                        size: c.zx.Sizes.NONE,
                        tabIndex: 0,
                        className: o()(S.button, { [S.buttonActive]: d }),
                        onClick: y,
                        'aria-label': T.intl.string(T.t.erHFxM),
                        'aria-expanded': d,
                        'aria-haspopup': 'dialog',
                        focusProps: {
                            offset: {
                                top: 4,
                                bottom: 4,
                                left: -4,
                                right: -4
                            }
                        },
                        innerClassName: S.buttonContents
                    },
                    m
                ),
                { children: O }
            )
        )
    });
});
function P(e) {
    let { channel: t, type: n, animateRef: a, entryPointCommandButtonRef: o } = e,
        l = i.useRef(null),
        c = (0, m.R)({
            channel: t,
            chatInputType: n
        }),
        u = (0, O.Z)({ type: n }),
        f = (0, d.Z)(t),
        p = (0, s.e7)([_.Z], () => _.Z.appDMChannelsWithFailedLoads().has(t.id)),
        { visible: g } = (0, y.xL)();
    return c
        ? (0, r.jsxs)('div', {
              className: S.channelAppLauncher,
              children: [
                  (0, r.jsx)(b.Z, {
                      channel: t,
                      animationContainerClassName: S.entrypointAnimation,
                      glowClassName: S.animationGlow,
                      trinketsClassName: S.animationTrinkets,
                      children: (0, r.jsx)(R, {
                          type: n,
                          ref: l,
                          animateRef: a
                      })
                  }),
                  u
                      ? (0, r.jsx)(h.Z, {
                            positionTargetRef: f && !p && g ? o : l,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
}
let D = i.memo(P);
