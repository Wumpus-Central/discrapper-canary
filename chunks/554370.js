n.d(t, { Z: () => er }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    u = n(239091),
    d = n(13245),
    p = n(100527),
    h = n(906732),
    f = n(70097),
    m = n(74299),
    g = n(199902),
    O = n(592125),
    v = n(430824),
    y = n(131951),
    E = n(944486),
    b = n(556296),
    j = n(808506),
    x = n(237997),
    I = n(451478),
    S = n(585483),
    N = n(358085),
    C = n(13140),
    Z = n(145597),
    w = n(830917),
    P = n(486016),
    _ = n(32300),
    T = n(681603),
    D = n(915614),
    k = n(268861),
    A = n(690336),
    L = n(333031),
    R = n(371651),
    M = n(624864),
    W = n(610394),
    V = n(388627),
    z = n(319414),
    U = n(561064),
    G = n(987650),
    F = n(757744),
    Y = n(981631),
    H = n(734811);
let B = !N.isPlatformEmbedded && !1,
    Q = B
        ? (0, i.jsx)(f.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: H.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    K = null;
function X(e) {
    e.preventDefault();
}
function J(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) => {
            var n, r;
            return (0, i.jsx)(
                e,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, t)),
                (r = r =
                    {
                        layoutId: F.$,
                        version: F.H
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n)
            );
        };
    });
}
let q = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.P3F, {
            className: o()(H.overlayBackground, {
                [H.overlayActive]: !r,
                [H.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === Y.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: J,
            children: r
                ? null
                : (0, i.jsx)(L.Z, {
                      className: H.closeContainer,
                      children: (0, i.jsx)(D.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.Uz9
                      })
                  })
        });
    }),
    $ = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(L.Z, {
                  className: H.closeContainer,
                  children: (0, i.jsx)(D.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, Z.getPID)()),
                      IconComponent: c.d$P
                  })
              })
            : null;
    });
function ee() {
    d.Z.setInputLocked(!0, (0, Z.getPID)());
}
function et() {
    d.Z.setFocusedPID(Z.DEV_PID);
}
function en() {
    d.Z.setFocusedPID(null);
}
function ei(e) {
    let t = W.ZP.isInputLocked((0, Z.getPID)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? S.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && S.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function er(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, U.Z)(),
        {
            locked: l,
            focused: u,
            incompatibleApp: f,
            hasZeroSizeDimension: N,
            keybind: D
        } = (0, a.cj)(
            [W.ZP, x.default, I.Z, b.ZP],
            () => {
                let e = I.Z.windowSize((0, w.ZY)(n)),
                    t = b.ZP.getOverlayKeybind(),
                    i = (0, Z.getPID)();
                return {
                    locked: W.ZP.isInputLocked(i),
                    focused: i === Z.DEV_PID ? x.default.isFocused(i) : W.ZP.isFocused((0, Z.getPID)()),
                    incompatibleApp: x.default.incompatibleApp,
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, C.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: L } = (0, h.ZP)(p.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = r.useRef({
                mount: e,
                unmount: t
            });
            r.useEffect(() => {
                n.current = {
                    mount: e,
                    unmount: t
                };
            }),
                r.useEffect(
                    () => (
                        n.current.mount(),
                        () => {
                            n.current.unmount();
                        }
                    ),
                    []
                );
        })(
            () => {
                d.Z.overlayReady((0, Z.getPID)()), n.addEventListener('keydown', ei), n.addEventListener('keyup', ei), B && (n.document.hasFocus() && d.Z.setFocusedPID(Z.DEV_PID), n.addEventListener('focus', et), n.addEventListener('blur', en));
            },
            () => {
                n.removeEventListener('keydown', ei), n.removeEventListener('keyup', ei), B && (n.removeEventListener('focus', et), n.removeEventListener('blur', en));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, V.pL)(),
                n = E.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                l = null != i ? v.Z.getGuild(i.guild_id) : null,
                o = null != g.Z.getCurrentUserActiveStream(),
                a = null != n,
                s = (0, m.Z)(y.Z) && !o && null != t,
                c = a && null != l && null != n,
                { allowActivityWidget: u } = (0, _.o4)('overlay');
            r.useEffect(() => {
                var i;
                if (e.current) return;
                e.current = !0;
                let r = null !== (i = j.default.getFocusedPID()) && void 0 !== i ? i : (0, Z.getPID)();
                if (R.default.hasChangedRenderMode(r)) return;
                let o = M.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
                    a = M.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
                    p = M.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
                    h = [];
                o || h.push({ type: G.nc.WELCOME }),
                    !a &&
                        (s && c
                            ? h.push({
                                  type: G.nc.GO_LIVE_VOICE,
                                  game: t,
                                  voiceChannelId: n,
                                  voiceGuild: l
                              })
                            : s &&
                              h.push({
                                  type: G.nc.GO_LIVE_NON_VOICE,
                                  game: t
                              })),
                    u &&
                        !p &&
                        h.push({
                            type: G.nc.CONTENT_INVENTORY,
                            entries: []
                        }),
                    0 !== h.length && d.Z.overlayMounted(...h);
            }, [a, s, c, t, n, l, u]);
        })(),
        r.useEffect(() => {
            if ((S.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), l)) {
                if (((0, s.Ay)(c.u1M), n.addEventListener('contextmenu', X, !1), null != K)) {
                    let e = Date.now() - K;
                    d.Z.track(Y.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (K = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', X, !1);
                };
            }
            n.removeEventListener('contextmenu', X, !1), null == K && ((K = Date.now()), d.Z.track(Y.rMx.OVERLAY_UNLOCKED));
        }, [l, n]),
        (0, i.jsx)(h.Gt, {
            value: L,
            children:
                N || f
                    ? null
                    : (0, i.jsx)(c.f6W, {
                          theme: Y.BRd.MIDNIGHT,
                          children: (e) =>
                              (0, i.jsxs)('div', {
                                  id: 'overlay-container',
                                  className: o()(H.overlay, e),
                                  children: [
                                      !t && Q,
                                      (0, i.jsx)(q, {
                                          locked: l,
                                          keybind: D,
                                          onClick: ee
                                      }),
                                      (0, i.jsx)(A.Z, {
                                          className: o()({
                                              [H.layoutLocked]: l,
                                              [H.layoutUnlocked]: !l
                                          })
                                      }),
                                      (0, i.jsx)(z.Z, {}),
                                      !t &&
                                          B &&
                                          (0, i.jsx)($, {
                                              locked: l,
                                              focused: u
                                          }),
                                      (0, i.jsx)(T.Z, {}),
                                      (0, i.jsx)(k.Z, { locked: l }),
                                      (0, i.jsx)(c.Ixi, {})
                                  ]
                              })
                      })
        })
    );
}
