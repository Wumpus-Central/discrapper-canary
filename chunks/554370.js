n.d(t, { Z: () => er }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
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
    y = n(592125),
    O = n(430824),
    v = n(131951),
    b = n(944486),
    _ = n(556296),
    E = n(808506),
    x = n(237997),
    I = n(451478),
    j = n(585483),
    C = n(358085),
    S = n(13140),
    N = n(145597),
    Z = n(830917),
    w = n(486016),
    P = n(32300),
    T = n(681603),
    k = n(915614),
    D = n(268861),
    A = n(690336),
    L = n(333031),
    R = n(371651),
    W = n(624864),
    M = n(610394),
    V = n(388627),
    z = n(319414),
    U = n(561064),
    G = n(987650),
    F = n(757744),
    B = n(981631),
    H = n(960972);
let Y = !C.isPlatformEmbedded && !1,
    Q = Y
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
            className: l()(H.overlayBackground, {
                [H.overlayActive]: !r,
                [H.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: J,
            children: r
                ? null
                : (0, i.jsx)(L.Z, {
                      className: H.closeContainer,
                      children: (0, i.jsx)(k.Z, {
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
                  children: (0, i.jsx)(k.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, N.getPID)()),
                      IconComponent: c.d$P
                  })
              })
            : null;
    });
function ee() {
    d.Z.setInputLocked(!0, (0, N.getPID)());
}
function et() {
    d.Z.setFocusedPID(N.DEV_PID);
}
function en() {
    d.Z.setFocusedPID(null);
}
function ei(e) {
    let t = M.ZP.isInputLocked((0, N.getPID)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? j.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && j.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function er(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, U.Z)(),
        {
            locked: o,
            focused: u,
            incompatibleApp: f,
            hasZeroSizeDimension: C,
            keybind: k
        } = (0, a.cj)(
            [M.ZP, x.default, I.Z, _.ZP],
            () => {
                let e = I.Z.windowSize((0, Z.ZY)(n)),
                    t = _.ZP.getOverlayKeybind(),
                    i = (0, N.getPID)();
                return {
                    locked: M.ZP.isInputLocked(i),
                    focused: i === N.DEV_PID ? x.default.isFocused(i) : M.ZP.isFocused((0, N.getPID)()),
                    incompatibleApp: x.default.incompatibleApp,
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, S.BB)(t.shortcut, !0) : '???'
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
                d.Z.overlayReady((0, N.getPID)()), n.addEventListener('keydown', ei), n.addEventListener('keyup', ei), Y && (n.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID), n.addEventListener('focus', et), n.addEventListener('blur', en));
            },
            () => {
                n.removeEventListener('keydown', ei), n.removeEventListener('keyup', ei), Y && (n.removeEventListener('focus', et), n.removeEventListener('blur', en));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, V.pL)(),
                n = b.Z.getVoiceChannelId(),
                i = y.Z.getChannel(n),
                o = null != i ? O.Z.getGuild(i.guild_id) : null,
                l = null != g.Z.getCurrentUserActiveStream(),
                a = null != n,
                s = (0, m.Z)(v.Z) && !l && null != t,
                c = a && null != o && null != n,
                { allowActivityWidget: u } = (0, P.o4)('overlay');
            r.useEffect(() => {
                var i;
                if (e.current) return;
                e.current = !0;
                let r = null != (i = E.default.getFocusedPID()) ? i : (0, N.getPID)();
                if (R.default.hasChangedRenderMode(r)) return;
                let l = W.Z.isNotificationDisabled(w.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
                    a = W.Z.isNotificationDisabled(w.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
                    p = W.Z.isNotificationDisabled(w.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
                    h = [];
                l || h.push({ type: G.nc.WELCOME }),
                    !a &&
                        (s && c
                            ? h.push({
                                  type: G.nc.GO_LIVE_VOICE,
                                  game: t,
                                  voiceChannelId: n,
                                  voiceGuild: o
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
            }, [a, s, c, t, n, o, u]);
        })(),
        r.useEffect(() => {
            if ((j.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), o)) {
                if (((0, s.Ay)(c.u1M), n.addEventListener('contextmenu', X, !1), null != K)) {
                    let e = Date.now() - K;
                    d.Z.track(B.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (K = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', X, !1);
                };
            }
            n.removeEventListener('contextmenu', X, !1), null == K && ((K = Date.now()), d.Z.track(B.rMx.OVERLAY_UNLOCKED));
        }, [o, n]),
        (0, i.jsx)(h.Gt, {
            value: L,
            children:
                C || f
                    ? null
                    : (0, i.jsx)(c.f6W, {
                          theme: B.BRd.MIDNIGHT,
                          children: (e) =>
                              (0, i.jsxs)('div', {
                                  id: 'overlay-container',
                                  className: l()(H.overlay, e),
                                  children: [
                                      !t && Q,
                                      (0, i.jsx)(q, {
                                          locked: o,
                                          keybind: k,
                                          onClick: ee
                                      }),
                                      (0, i.jsx)(A.Z, {
                                          className: l()({
                                              [H.layoutLocked]: o,
                                              [H.layoutUnlocked]: !o
                                          })
                                      }),
                                      (0, i.jsx)(z.Z, {}),
                                      !t &&
                                          Y &&
                                          (0, i.jsx)($, {
                                              locked: o,
                                              focused: u
                                          }),
                                      (0, i.jsx)(T.Z, {}),
                                      (0, i.jsx)(D.Z, { locked: o }),
                                      (0, i.jsx)(c.Ixi, {})
                                  ]
                              })
                      })
        })
    );
}
